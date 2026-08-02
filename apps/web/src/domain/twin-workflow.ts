// 자산 등록부터 Twin Draft 생성까지의 상태 전이를 관리합니다.
export type ProposalDecision = "pending" | "accepted" | "rejected";

export type AssetRecord = {
  name: string;
  size: number;
  previewUrl: string;
};

export type MetadataProposal = {
  id: string;
  label: string;
  field: string;
  value: string;
  confidence: number;
  rationale: string;
  decision: ProposalDecision;
};

export type TwinDraft = {
  id: string;
  assetName: string;
  metadata: Record<string, string>;
};

export type TwinState = {
  asset: AssetRecord | null;
  proposals: MetadataProposal[];
  draft: TwinDraft | null;
  error: string | null;
};

export type TwinAction =
  | { type: "assetSelected"; asset: AssetRecord }
  | { type: "assetRejected"; message: string }
  | { type: "proposalsCreated"; proposals: MetadataProposal[] }
  | {
      type: "proposalDecided";
      proposalId: string;
      decision: Exclude<ProposalDecision, "pending">;
    }
  | { type: "draftCreated" }
  | { type: "reset" };

export const initialTwinState: TwinState = {
  asset: null,
  proposals: [],
  draft: null,
  error: null,
};

export function canCreateDraft(state: TwinState) {
  return (
    state.asset !== null &&
    state.proposals.length > 0 &&
    state.proposals.every((proposal) => proposal.decision !== "pending") &&
    state.proposals.some((proposal) => proposal.decision === "accepted")
  );
}

export function twinWorkflowReducer(
  state: TwinState,
  action: TwinAction,
): TwinState {
  switch (action.type) {
    case "assetSelected":
      return {
        asset: action.asset,
        proposals: [],
        draft: null,
        error: null,
      };
    case "assetRejected":
      return { ...state, error: action.message };
    case "proposalsCreated":
      if (!state.asset) return state;
      return { ...state, proposals: action.proposals, draft: null, error: null };
    case "proposalDecided":
      return {
        ...state,
        proposals: state.proposals.map((proposal) =>
          proposal.id === action.proposalId
            ? { ...proposal, decision: action.decision }
            : proposal,
        ),
      };
    case "draftCreated": {
      if (!state.asset || !canCreateDraft(state)) return state;

      const metadata = Object.fromEntries(
        state.proposals
          .filter((proposal) => proposal.decision === "accepted")
          .map((proposal) => [proposal.field, proposal.value]),
      );

      return {
        ...state,
        draft: {
          id: "TWIN-DRAFT-001",
          assetName: state.asset.name,
          metadata,
        },
      };
    }
    case "reset":
      return initialTwinState;
  }
}
