# K-Legonara Product Planning

이 디렉터리는 K-Legonara의 제품 의사결정과 실행 범위를 관리하는 공식 진입점이다.

## 현재 상태

| 항목 | 상태 |
|---|---|
| 단계 | Phase 0. Product Definition |
| 기준일 | 2026-07-30 |
| Product Brief | Draft |
| Primary User | 결정 필요 |
| Lighthouse Workflow | 결정 필요 |
| MVP Scope | 권장안 기준 Draft |
| 코드 구현 | 승인 전 시작 금지 |

## 문서 지도

| 문서 | 역할 |
|---|---|
| [`PRODUCT_BRIEF.md`](PRODUCT_BRIEF.md) | 제품 목적, 사용자 가설, 문제, 가치, 성공 기준 |
| [`LIGHTHOUSE_WORKFLOW_OPTIONS.md`](LIGHTHOUSE_WORKFLOW_OPTIONS.md) | 첫 수직 흐름 후보 비교와 권장안 |
| [`MVP_SCOPE_DRAFT.md`](MVP_SCOPE_DRAFT.md) | 권장 Lighthouse 기준 MVP 범위와 완료 조건 |
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

## Phase 0 완료 게이트

다음 조건을 모두 만족하기 전에는 제품 코드 구현을 시작하지 않는다.

- Primary User가 한 문장으로 확정됐다.
- 해결할 핵심 문제가 관찰 또는 인터뷰 근거와 연결됐다.
- Lighthouse Workflow 하나가 선택됐다.
- MVP 범위와 비범위가 승인됐다.
- 성공 지표와 측정 방법이 정의됐다.
- 데이터, 보안, AI, 3D 성능의 주요 제약이 확인됐다.
- 실행 책임자와 초기 일정 범위가 지정됐다.
