// Twin Draft 생성의 정상 흐름과 오류 복구 상태 전이를 검증합니다.
import assert from "node:assert/strict";
import test from "node:test";

import {
  canCreateDraft,
  initialTwinState,
  twinWorkflowReducer,
  type MetadataProposal,
} from "./twin-workflow.ts";

const proposals: MetadataProposal[] = [
  {
    id: "category",
    label: "분류",
    field: "category",
    value: "Industrial Component",
    confidence: 92,
    rationale: "테스트 제안",
    decision: "pending",
  },
  {
    id: "material",
    label: "재질",
    field: "material",
    value: "Composite",
    confidence: 84,
    rationale: "테스트 제안",
    decision: "pending",
  },
];

test("승인된 제안만 포함해 Twin Draft를 생성한다", () => {
  let state = twinWorkflowReducer(initialTwinState, {
    type: "assetSelected",
    asset: { name: "neo.glb", size: 648, previewUrl: "/neo.glb" },
  });
  state = twinWorkflowReducer(state, { type: "proposalsCreated", proposals });
  state = twinWorkflowReducer(state, {
    type: "proposalDecided",
    proposalId: "category",
    decision: "accepted",
  });
  state = twinWorkflowReducer(state, {
    type: "proposalDecided",
    proposalId: "material",
    decision: "rejected",
  });

  assert.equal(canCreateDraft(state), true);
  state = twinWorkflowReducer(state, { type: "draftCreated" });
  assert.deepEqual(state.draft, {
    id: "TWIN-DRAFT-001",
    assetName: "neo.glb",
    metadata: { category: "Industrial Component" },
  });
});

test("잘못된 파일 오류 뒤 정상 자산을 선택하면 복구한다", () => {
  let state = twinWorkflowReducer(initialTwinState, {
    type: "assetRejected",
    message: "GLB 파일만 등록할 수 있습니다.",
  });
  assert.equal(state.error, "GLB 파일만 등록할 수 있습니다.");

  state = twinWorkflowReducer(state, {
    type: "assetSelected",
    asset: { name: "recovered.glb", size: 1200, previewUrl: "/recovered.glb" },
  });
  assert.equal(state.error, null);
  assert.equal(state.asset?.name, "recovered.glb");
});

test("검토가 끝나기 전에는 Draft를 만들지 않는다", () => {
  let state = twinWorkflowReducer(initialTwinState, {
    type: "assetSelected",
    asset: { name: "neo.glb", size: 648, previewUrl: "/neo.glb" },
  });
  state = twinWorkflowReducer(state, { type: "proposalsCreated", proposals });
  const unchanged = twinWorkflowReducer(state, { type: "draftCreated" });

  assert.equal(canCreateDraft(state), false);
  assert.equal(unchanged.draft, null);
});
