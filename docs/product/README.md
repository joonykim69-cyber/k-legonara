# K-Legonara Product Planning

이 디렉터리는 K-Legonara의 제품 의사결정과 실행 범위를 관리하는 공식 진입점이다.

## 현재 상태

| 항목 | 상태 |
|---|---|
| 단계 | Lean Solo Thin Vertical Slice 준비 |
| 기준일 | 2026-08-02 |
| Product Brief | Lean Solo Baseline |
| Primary User | 승인 · 검증 필요 |
| Lighthouse Workflow | Option A 승인 |
| Owner | 1인 개발자가 Product와 Research 겸임 |
| MVP Scope | Option A Lean Solo Baseline |
| 코드 구현 | 첫 Thin Vertical Slice 착수 가능 |

## 문서 지도

| 문서 | 역할 |
|---|---|
| [`PRODUCT_BRIEF.md`](PRODUCT_BRIEF.md) | 제품 목적, 사용자 가설, 문제, 가치, 성공 기준 |
| [`LIGHTHOUSE_WORKFLOW_OPTIONS.md`](LIGHTHOUSE_WORKFLOW_OPTIONS.md) | 첫 수직 흐름 후보 비교와 권장안 |
| [`MVP_SCOPE_DRAFT.md`](MVP_SCOPE_DRAFT.md) | 권장 Lighthouse 기준 MVP 범위와 완료 조건 |
| [`RESEARCH_PLAN.md`](RESEARCH_PLAN.md) | 사용자 인터뷰, 업무 관찰과 문제 가설 검증 계획 |
| [`MVP_PRD.md`](MVP_PRD.md) | Option A의 제품 요구사항과 구현 전 승인 게이트 |
| [`EXECUTION_ROADMAP.md`](EXECUTION_ROADMAP.md) | 승인 게이트 중심의 실행 순서 |
| [`RISK_REGISTER.md`](RISK_REGISTER.md) | 주요 제품·기술·운영 위험 |
| [`DECISION_LOG.md`](DECISION_LOG.md) | 확정 결정과 결정 대기 항목 |
| [`checklist.md`](checklist.md) | Phase 0 작업 체크리스트 |
| [`context-notes.md`](context-notes.md) | 근거, 가설, 문맥과 후속 세션 인계 |

## 표기 규칙

- **Confirmed**는 현재 저장소의 승인된 문서 또는 원본에서 확인한 사실이다.
- **Hypothesis**는 검증이 필요한 제품 가설이다.
- **Recommended**는 현재 근거와 위험을 비교한 권장안이다.
- **Decision Required**는 제품 책임자의 명시적인 선택 없이는 확정할 수 없는 항목이다.

가설을 Confirmed로 승격할 때는 근거와 승인자를 [`DECISION_LOG.md`](DECISION_LOG.md)에 기록한다.

## Lean Solo 운영 원칙

- 정식 연구 조직과 5명 이상 인터뷰는 초기 구현의 선행 조건이 아니다.
- 한 번에 구체적인 과업 하나와 가장 얇은 End-to-End 흐름만 구현한다.
- 직접 만든 합성 Fixture와 자동 Acceptance Test로 먼저 검증한다.
- 외부 피드백은 가능한 시점에 1–3명 단위로 수집하고 다음 반복에 반영한다.
- 데이터 권리, 보안, 외부 쓰기와 비용이 큰 결정은 간소화 대상에서 제외한다.

## Thin Vertical Slice 착수 게이트

다음 최소 조건만 만족하면 첫 구현을 시작할 수 있다.

- Primary User와 Lighthouse Workflow가 정해졌다.
- 첫 과업과 성공·실패 상태가 한 문장으로 정의됐다.
- 합법적인 합성 GLB Fixture가 준비됐다.
- 최소 Task Flow, Domain Object와 Acceptance Test가 정의됐다.
- 고객 데이터와 비가역적인 외부 쓰기를 사용하지 않는다.
