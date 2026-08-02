"use client";
// 사용자가 자산을 등록하고 AI 제안을 검토해 Twin Draft를 만드는 흐름을 제공합니다.

import { useReducer, useRef, useState } from "react";

import {
  canCreateDraft,
  initialTwinState,
  twinWorkflowReducer,
  type ProposalDecision,
} from "@/domain/twin-workflow";
import { createMockMetadata } from "@/providers/mock-ai-provider";
import { ModelPreview } from "./model-viewer";
import styles from "./workspace.module.css";

const SAMPLE_ASSET = {
  name: "neo-assembly.glb",
  size: 2048,
  previewUrl: "/fixtures/neo-assembly.glb",
};

const navigation = [
  { label: "Workspace", short: "WS", active: true },
  { label: "AI Studio", short: "AI" },
  { label: "Digital Twin", short: "DT" },
  { label: "Knowledge", short: "KG" },
  { label: "Marketplace", short: "MP" },
];

function formatBytes(size: number) {
  if (size < 1024) return `${size} B`;
  return `${(size / 1024).toFixed(1)} KB`;
}

function decisionLabel(decision: ProposalDecision) {
  if (decision === "accepted") return "승인됨";
  if (decision === "rejected") return "제외됨";
  return "검토 필요";
}

export function TwinWorkspace() {
  const [state, dispatch] = useReducer(twinWorkflowReducer, initialTwinState);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectSample = () => {
    dispatch({ type: "assetSelected", asset: SAMPLE_ASSET });
  };

  const selectFile = (file?: File) => {
    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".glb")) {
      dispatch({
        type: "assetRejected",
        message: "GLB 파일만 등록할 수 있습니다. 파일 형식을 확인해 주세요.",
      });
      return;
    }

    dispatch({
      type: "assetSelected",
      asset: {
        name: file.name,
        size: file.size,
        previewUrl: URL.createObjectURL(file),
      },
    });
  };

  const analyzeAsset = async () => {
    if (!state.asset) return;
    setIsAnalyzing(true);
    await new Promise((resolve) => window.setTimeout(resolve, 520));
    dispatch({
      type: "proposalsCreated",
      proposals: createMockMetadata(state.asset.name),
    });
    setIsAnalyzing(false);
  };

  const decide = (
    proposalId: string,
    decision: Exclude<ProposalDecision, "pending">,
  ) => {
    dispatch({ type: "proposalDecided", proposalId, decision });
  };

  const currentStep = state.draft ? 3 : state.proposals.length ? 2 : state.asset ? 1 : 0;
  const reviewedCount = state.proposals.filter(
    (proposal) => proposal.decision !== "pending",
  ).length;

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <a className={styles.brand} href="#workspace" aria-label="K-Legonara 홈">
          <span className={styles.brandMark} aria-hidden="true">
            K
          </span>
          <span>
            <strong>K-Legonara</strong>
            <small>Build knowledge from reality</small>
          </span>
        </a>

        <div className={styles.projectContext}>
          <span className={styles.statusDot} />
          <span>Lean Solo Workspace</span>
          <strong>Asset Twin 01</strong>
        </div>

        <div className={styles.headerActions}>
          <button className={styles.iconButton} type="button" aria-label="알림">
            <span aria-hidden="true">●</span>
          </button>
          <div className={styles.avatar} aria-label="Product Owner">
            JK
          </div>
        </div>
      </header>

      <aside className={styles.leftRail} aria-label="주요 메뉴">
        <nav>
          <p className={styles.navLabel}>Platform</p>
          {navigation.map((item) => (
            <a
              className={item.active ? styles.navItemActive : styles.navItem}
              href={item.active ? "#workspace" : `#${item.label.toLowerCase()}`}
              key={item.label}
            >
              <span>{item.short}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.soloCard}>
          <span>SOLO MODE</span>
          <strong>한 흐름에 집중 중</strong>
          <p>자산에서 지식 Twin까지 먼저 완성합니다.</p>
        </div>
      </aside>

      <main className={styles.main} id="workspace">
        <section className={styles.hero}>
          <div>
            <span className={styles.eyebrow}>ASSET-TO-KNOWLEDGE TWIN</span>
            <h1>
              3D 자산을 올리고,
              <br />
              <em>AI와 함께 지식으로 전환하세요.</em>
            </h1>
            <p>
              하나의 검증 가능한 흐름으로 자산, 메타데이터, Digital Twin 초안을
              연결합니다.
            </p>
          </div>
          <div className={styles.heroMetric}>
            <span>THIN SLICE 01</span>
            <strong>{Math.round((currentStep / 3) * 100)}%</strong>
            <div>
              <i style={{ width: `${Math.max(8, (currentStep / 3) * 100)}%` }} />
            </div>
            <small>{currentStep}/3 단계 진행</small>
          </div>
        </section>

        <ol className={styles.stepper} aria-label="Twin 생성 단계">
          {["자산 등록", "AI 제안 검토", "Twin Draft"].map((step, index) => {
            const stepNumber = index + 1;
            const isComplete = currentStep >= stepNumber;
            const isCurrent = currentStep + 1 === stepNumber;
            return (
              <li
                className={isComplete ? styles.stepComplete : isCurrent ? styles.stepCurrent : ""}
                key={step}
              >
                <span>{isComplete ? "✓" : stepNumber}</span>
                <div>
                  <small>STEP {stepNumber}</small>
                  <strong>{step}</strong>
                </div>
              </li>
            );
          })}
        </ol>

        <section className={styles.workGrid}>
          <article className={styles.previewCard}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.cardKicker}>01 · ASSET</span>
                <h2>3D 자산 미리보기</h2>
              </div>
              <span className={state.asset ? styles.readyBadge : styles.waitBadge}>
                {state.asset ? "READY" : "WAITING"}
              </span>
            </div>

            {state.asset ? (
              <>
                <div className={styles.viewer}>
                  <ModelPreview src={state.asset.previewUrl} name={state.asset.name} />
                  <span className={styles.viewerHint}>드래그하여 회전 · 스크롤하여 확대</span>
                </div>
                <div className={styles.fileRow}>
                  <span className={styles.fileIcon}>3D</span>
                  <div>
                    <strong>{state.asset.name}</strong>
                    <small>GLB · {formatBytes(state.asset.size)} · 브라우저에서만 처리</small>
                  </div>
                  <button type="button" onClick={() => inputRef.current?.click()}>
                    교체
                  </button>
                </div>
              </>
            ) : (
              <div className={styles.uploadArea}>
                <span className={styles.uploadIcon} aria-hidden="true">
                  3D
                </span>
                <h3>첫 자산을 등록하세요.</h3>
                <p>GLB 파일을 선택하거나 검증용 합성 자산으로 바로 시작할 수 있습니다.</p>
                <div className={styles.uploadActions}>
                  <button className={styles.primaryButton} type="button" onClick={selectSample}>
                    샘플 자산 불러오기
                  </button>
                  <button
                    className={styles.secondaryButton}
                    type="button"
                    onClick={() => inputRef.current?.click()}
                  >
                    내 GLB 선택
                  </button>
                </div>
              </div>
            )}

            <input
              ref={inputRef}
              className={styles.fileInput}
              type="file"
              accept=".glb,model/gltf-binary"
              onChange={(event) => selectFile(event.currentTarget.files?.[0])}
            />
            {state.error ? (
              <p className={styles.errorMessage} role="alert">
                {state.error}
              </p>
            ) : null}
          </article>

          <article className={styles.metadataCard}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.cardKicker}>02 · AI METADATA</span>
                <h2>제안 검토</h2>
              </div>
              {state.proposals.length ? (
                <span className={styles.reviewCount}>
                  {reviewedCount}/{state.proposals.length}
                </span>
              ) : null}
            </div>

            {!state.asset ? (
              <div className={styles.emptyState}>
                <span>AI</span>
                <p>왼쪽에서 자산을 등록하면 AI 제안을 만들 수 있습니다.</p>
              </div>
            ) : !state.proposals.length ? (
              <div className={styles.analysisIntro}>
                <span className={styles.aiOrb}>AI</span>
                <h3>자산의 첫 지식 구조를 제안합니다.</h3>
                <p>데모에서는 고정된 결과를 사용해 검토와 승인 흐름을 안전하게 검증합니다.</p>
                <button
                  className={styles.primaryButton}
                  type="button"
                  disabled={isAnalyzing}
                  onClick={analyzeAsset}
                >
                  {isAnalyzing ? "분석 중…" : "AI 메타데이터 생성"}
                </button>
              </div>
            ) : (
              <div className={styles.proposalList}>
                {state.proposals.map((proposal) => (
                  <div className={styles.proposal} key={proposal.id}>
                    <div className={styles.proposalTopline}>
                      <span>{proposal.label}</span>
                      <strong>{proposal.confidence}% confidence</strong>
                    </div>
                    <p>{proposal.value}</p>
                    <small>{proposal.rationale}</small>
                    <div className={styles.decisionRow}>
                      <span data-decision={proposal.decision}>
                        {decisionLabel(proposal.decision)}
                      </span>
                      <button
                        className={proposal.decision === "rejected" ? styles.rejectActive : ""}
                        type="button"
                        onClick={() => decide(proposal.id, "rejected")}
                      >
                        제외
                      </button>
                      <button
                        className={proposal.decision === "accepted" ? styles.acceptActive : ""}
                        type="button"
                        onClick={() => decide(proposal.id, "accepted")}
                      >
                        승인
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </article>
        </section>

        <footer className={styles.footer}>
          <span>K-Legonara · Lean Solo Product Build</span>
          <span>Privacy by design · Local preview only</span>
        </footer>
      </main>

      <aside className={styles.rightRail} aria-label="Twin 생성 상태">
        <div className={styles.sideHeading}>
          <span>LIVE WORKFLOW</span>
          <h2>Twin Draft</h2>
        </div>

        <div className={styles.workflowMap}>
          <div className={state.asset ? styles.mapDone : styles.mapCurrent}>
            <span>01</span>
            <p>Asset registered</p>
          </div>
          <i />
          <div className={state.proposals.length ? styles.mapDone : state.asset ? styles.mapCurrent : ""}>
            <span>02</span>
            <p>Metadata reviewed</p>
          </div>
          <i />
          <div className={state.draft ? styles.mapDone : canCreateDraft(state) ? styles.mapCurrent : ""}>
            <span>03</span>
            <p>Twin draft created</p>
          </div>
        </div>

        <div className={styles.summaryBox}>
          <p>
            <span>Asset</span>
            <strong>{state.asset ? "1" : "0"}</strong>
          </p>
          <p>
            <span>Accepted fields</span>
            <strong>
              {state.proposals.filter((proposal) => proposal.decision === "accepted").length}
            </strong>
          </p>
          <p>
            <span>Human review</span>
            <strong>{state.proposals.length ? `${reviewedCount}/${state.proposals.length}` : "—"}</strong>
          </p>
        </div>

        {state.draft ? (
          <div className={styles.draftSuccess} role="status">
            <span>✓</span>
            <div>
              <strong>{state.draft.id}</strong>
              <p>검토된 메타데이터로 Twin Draft가 생성되었습니다.</p>
            </div>
          </div>
        ) : (
          <button
            className={styles.createButton}
            type="button"
            disabled={!canCreateDraft(state)}
            onClick={() => dispatch({ type: "draftCreated" })}
          >
            Twin Draft 생성
          </button>
        )}

        <p className={styles.sideNote}>
          AI 제안은 사람이 승인한 항목만 Draft에 포함됩니다. 아직 외부 서버에는 저장되지 않습니다.
        </p>
      </aside>
    </div>
  );
}
