# K-Legonara Asset-to-Knowledge Twin MVP PRD

| 항목 | 내용 |
|---|---|
| 버전 | 0.1.0 |
| 상태 | Draft · Research Validation Required · Not Implementation Ready |
| 작성일 | 2026-07-30 |
| Primary User | Enterprise Product Engineer · Digital Twin Engineer |
| Lighthouse | Asset-to-Knowledge Twin |
| 대상 환경 | Responsive Web · Desktop First |

## 1. 문서 목적

이 PRD는 Option A의 제품 결과, 기능 요구사항, 상태, 권한과 승인 게이트를 정의한다.

사용자 검증, 자산 형식, 데이터 권리와 기술 아키텍처가 확정되기 전에는 구현 계약으로 사용하지 않는다. 확인되지 않은 항목은 `TBD` 또는 `Decision Required`로 유지한다.

## 2. 제품 결과

권한이 있는 사용자가 하나의 Workspace와 Project 안에서 자산을 등록하고, AI가 제안한 메타데이터를 검토해 승인된 Digital Twin과 Knowledge Entity로 저장한 뒤, 검색과 AI Assistant로 출처, 버전과 관계를 다시 확인할 수 있다.

## 3. 대상 사용자와 Job

### Primary User

Enterprise Product Engineer 또는 Digital Twin Engineer다.

### Job to Be Done

설계·부품 자산을 다시 찾아야 하거나 다른 팀에 전달해야 할 때, 올바른 최신 버전과 승인 근거를 빠르게 확인하고 재사용할 수 있는 형태로 등록하고 싶다.

### 검증되지 않은 문제

- 파일, 메타데이터, 버전과 관계가 여러 도구에 분산돼 있다.
- 최신 승인 자산을 찾는 데 반복적인 시간이 든다.
- AI 결과의 출처와 권한을 신뢰하기 어렵다.
- Twin과 Knowledge Entity의 연결을 수작업으로 관리한다.

이 문제는 [`RESEARCH_PLAN.md`](RESEARCH_PLAN.md)에 따라 Phase 1에서 검증한다.

## 4. 핵심 Workflow

```text
Workspace 선택
→ Project 선택
→ Asset Upload
→ 파일 검증과 Provenance 기록
→ AI Metadata Proposal
→ Human Review
→ Twin Draft 생성
→ 승인된 Twin Version 저장
→ Knowledge Entity와 Relationship 연결
→ Search
→ Grounded AI Answer
```

## 5. MVP 범위

### 포함

- Organization, Workspace와 Project 문맥.
- Owner, Editor와 Viewer 역할.
- 승인된 자산 형식 하나.
- 원본 Hash, 출처와 업로드 상태.
- 제한된 Metadata 필드에 대한 AI 제안.
- 필드별 수정, 승인과 거절.
- 안정적인 Twin ID, Version과 Lifecycle Status.
- 최소 Knowledge Entity와 Relationship.
- Project 범위 검색과 권한 필터.
- Citation을 포함한 AI 응답.
- 감사 이벤트와 핵심 Product Analytics.
- Empty, Loading, Error, Permission Denied와 Partial Success 상태.

### 제외

- 실시간 Sensor와 IoT 동기화.
- 물리 Simulation과 완전한 3D 편집.
- 복수 CAD 형식.
- MES, ERP, PLM과 WMS 쓰기 연동.
- Manufacturing Order와 Supplier 관리.
- 공개 Marketplace, 결제, 정산과 물류.
- Community와 소셜 기능.
- 자율 AI Agent의 외부 시스템 쓰기.
- Mobile Native와 Multi-Region Production.

## 6. 기능 요구사항

| ID | 요구사항 | 우선순위 | 수용 기준 |
|---|---|---|---|
| FR-001 | 사용자는 권한이 있는 Workspace와 Project만 열 수 있어야 한다 | Must | 역할별 허용·거부 테스트가 통과한다 |
| FR-002 | Editor 이상은 허용된 형식의 자산 하나를 등록할 수 있어야 한다 | Must | 성공, 형식 오류, 크기 오류, 취소와 재시도를 확인한다 |
| FR-003 | 시스템은 원본 Hash, Source, Uploader와 등록 시간을 기록해야 한다 | Must | Asset Detail과 Audit Event에서 확인할 수 있다 |
| FR-004 | 시스템은 제한된 Metadata 필드의 AI 제안과 근거 정보를 제공해야 한다 | Must | 필드별 제안값, 모델·Prompt 버전과 처리 상태가 표시된다 |
| FR-005 | 사용자는 AI 제안을 필드별로 수정, 승인 또는 거절할 수 있어야 한다 | Must | 최종값과 결정 이력이 분리돼 저장된다 |
| FR-006 | 시스템은 승인된 자산에 안정적인 Twin ID와 Version을 부여해야 한다 | Must | Draft와 Approved Version이 구분되고 이전 Version을 추적한다 |
| FR-007 | 시스템은 최소 Knowledge Entity와 Relationship을 생성·표시해야 한다 | Must | Entity, Relation, Source, Version과 승인 상태를 확인한다 |
| FR-008 | 사용자는 Project 범위에서 Metadata와 Relationship으로 검색할 수 있어야 한다 | Must | 권한 밖 Source가 결과에 노출되지 않는다 |
| FR-009 | AI Assistant는 Citation과 불충분한 근거 상태를 표시해야 한다 | Must | 답, Source Link, 권한 필터와 근거 부족 상태를 테스트한다 |
| FR-010 | Owner는 핵심 생성, 변경, 승인과 실패 이벤트를 추적할 수 있어야 한다 | Must | Actor, Time, Object, Action과 Result가 기록된다 |
| FR-011 | 시스템은 핵심 비정상 상태에서 복구 경로를 제공해야 한다 | Must | 실패, 지연, 취소, 권한 없음과 부분 성공 상태를 검증한다 |
| FR-012 | 사용자는 최소 Preview 또는 Thumbnail로 자산을 식별할 수 있어야 한다 | Should | 3D Preview 결정 전 대체 경험을 테스트한다 |

## 7. Metadata 요구사항

첫 자산 형식과 Domain Schema가 결정될 때까지 필드 목록은 Proposed다.

| 필드 | 입력 주체 | 검토 | 비고 |
|---|---|---|---|
| Asset Name | AI 또는 사용자 | 필수 | 사람이 수정 가능 |
| Asset Type | AI 또는 사용자 | 필수 | 허용값 목록 필요 |
| Description | AI 또는 사용자 | 필수 | Source와 구분 |
| Source | 시스템 또는 사용자 | 필수 | 원본 위치 또는 생성 출처 |
| Version | 사용자 또는 연동 | 필수 | 기존 ID 보존 여부 결정 |
| Lifecycle Status | 사용자 | 필수 | Draft, Reviewed, Approved, Archived |
| Component Identifier | AI 또는 사용자 | 조건부 | Domain Schema에 따라 결정 |
| Material | AI 또는 사용자 | 조건부 | 첫 자산 형식에 따라 결정 |
| Dimensions | AI 또는 사용자 | 조건부 | 단위와 허용 오차 필요 |
| Tags | AI 또는 사용자 | 선택 | 통제 어휘 여부 결정 |

AI 제안값과 사람이 승인한 최종값은 별도 필드 또는 이력으로 보존한다.

## 8. 최소 Domain Object

| Object | 최소 속성 |
|---|---|
| Organization | ID, Name |
| Workspace | ID, Organization ID, Name |
| Project | ID, Workspace ID, Name, Status |
| Asset | ID, Project ID, Source, Hash, Format, Upload Status |
| Asset Version | ID, Asset ID, Version, Lifecycle Status |
| AI Proposal | ID, Asset Version ID, Model Version, Prompt Version, Status |
| Metadata Decision | Field, Proposed Value, Final Value, Decision, Actor, Time |
| Digital Twin | Twin ID, Asset Version ID, Status |
| Knowledge Entity | Entity ID, Type, Label, Source, Approval Status |
| Relationship | Source Entity, Type, Target Entity, Source, Approval Status |
| Audit Event | Actor, Object, Action, Result, Time |

최소 관계는 `belongs_to`, `version_of`, `derived_from`, `related_to`다.

## 9. 상태 모델

### Asset Upload

```text
Not Started
→ Uploading
→ Validating
→ Ready

Uploading → Cancelled
Uploading → Failed → Retry
Validating → Rejected
```

### AI Proposal

```text
Queued
→ Processing
→ Review Required
→ Partially Approved
→ Approved

Queued or Processing → Failed → Manual Entry or Retry
Review Required → Rejected
```

### Twin Version

```text
Draft
→ In Review
→ Approved
→ Superseded
→ Archived
```

승인된 Version은 직접 덮어쓰지 않고 새 Draft Version을 만든다.

## 10. 권한 기준

| 행동 | Owner | Editor | Viewer |
|---|---:|---:|---:|
| Project 조회 | 허용 | 허용 | 허용 |
| Asset 등록 | 허용 | 허용 | 불가 |
| AI Proposal 실행 | 허용 | 허용 | 불가 |
| Metadata 수정 | 허용 | 허용 | 불가 |
| Twin 승인 | 허용 | 조건부 | 불가 |
| 검색과 AI 질문 | 허용 | 허용 | 허용 |
| Audit 조회 | 허용 | 조건부 | 불가 |
| 역할 변경 | 허용 | 불가 | 불가 |

Editor의 Twin 승인과 Audit 조회 권한은 Permission Matrix 설계에서 확정한다.

## 11. UX 상태 요구사항

모든 핵심 화면은 다음 상태를 정의해야 한다.

- 최초 사용 Empty State.
- 처리 중 Loading과 진행 상태.
- 사용자가 취소할 수 있는 상태.
- 복구 가능한 Error와 재시도.
- 복구 불가능한 Error와 지원 경로.
- Permission Denied.
- AI 처리 지연.
- 일부 필드만 성공한 Partial Success.
- 근거 없음과 검색 결과 없음.
- 승인 대기와 승인 완료.
- 오래된 Version 경고.

AI 제안과 사람이 승인한 정보는 색상만으로 구분하지 않는다.

## 12. 비기능 요구사항

### Security and Privacy

- 모든 Object 조회에 Organization, Workspace와 Project 권한을 적용한다.
- 원본 파일과 파생 데이터의 접근 권한을 일관되게 유지한다.
- 승인되지 않은 고객 데이터를 외부 AI 모델로 전송하지 않는다.
- 업로드 파일 형식, 크기와 악성 콘텐츠 검사를 정의한다.
- 민감 작업은 감사 이벤트를 남긴다.

### AI Governance

- Model, Prompt, Input Source와 Output Version을 기록한다.
- AI 제안은 승인 전까지 확정 데이터로 사용하지 않는다.
- 근거가 없거나 품질 기준을 충족하지 못하면 수동 입력 경로를 제공한다.
- 권한이 없는 Source를 Retrieval과 Citation에서 제외한다.

### Accessibility

- 핵심 Workflow를 키보드만으로 완료할 수 있어야 한다.
- Focus Indicator와 의미 있는 Label을 제공한다.
- 상태와 오류를 색상 외 텍스트와 아이콘으로 전달한다.
- 핵심 화면은 WCAG 2.2 AA 기준으로 점검한다.

### Performance and Reliability

- 업로드 크기, AI 처리 시간, 검색 응답과 3D Preview 예산은 첫 자산 형식 결정 후 수치화한다.
- 장시간 작업은 비동기 상태와 재진입 경로를 제공한다.
- 동일 파일 재등록과 중복 요청의 처리 정책을 정의한다.
- 핵심 Workflow에는 구조화 로그와 Trace ID를 적용한다.

## 13. Product Analytics

| Event | 목적 |
|---|---|
| `project_opened` | 활성 Project 사용 확인 |
| `asset_upload_started` | Intake 시작 측정 |
| `asset_upload_completed` | 업로드 성공률과 시간 측정 |
| `asset_upload_failed` | 실패 유형과 복구 측정 |
| `ai_proposal_completed` | AI 처리 성공률과 시간 측정 |
| `metadata_field_decided` | 승인, 수정과 거절 비율 측정 |
| `twin_version_approved` | Activation 측정 |
| `search_completed` | 검색 성공과 결과 없음 측정 |
| `assistant_answer_viewed` | AI 답 사용 측정 |
| `citation_opened` | 근거 확인 행동 측정 |
| `permission_denied` | 권한 문제 측정 |

이벤트에는 직접 개인식별정보나 원본 자산 내용을 넣지 않는다.

## 14. 성공 지표

목표치는 [`RESEARCH_PLAN.md`](RESEARCH_PLAN.md)의 Baseline 측정 후 승인한다.

| 영역 | 지표 | 목표 |
|---|---|---|
| Activation | 첫 Asset를 승인된 Twin으로 전환한 사용자 비율 | TBD |
| Efficiency | 자산 등록과 검토 완료 시간 | TBD |
| Findability | 최신 자산과 근거 찾기 성공률 | TBD |
| Trust | Citation과 권한 상태 이해율 | TBD |
| Quality | 수정 없이 승인된 AI 필드 비율 | TBD |
| Recovery | 실패 후 핵심 Workflow 복귀율 | TBD |
| Accessibility | 핵심 Task의 키보드 완료율 | TBD |

## 15. 의존 결정

| ID | 결정 | 영향 |
|---|---|---|
| D-001 | Product Owner와 실행 책임자 | 승인과 일정 |
| D-002 | 첫 자산 형식 | 업로드, Preview, Metadata와 성능 |
| D-003 | 합법적인 Fixture 또는 파일럿 데이터 | 연구와 테스트 |
| D-004 | 3D Preview의 MVP 포함 여부 | UX와 기술 위험 |
| D-005 | AI 배포 모델 | 데이터 경계, 비용과 지연 |
| D-006 | Single 또는 Multi-Tenant 파일럿 | 권한과 격리 테스트 |
| D-007 | Twin 승인 권한 | Permission Matrix |
| D-008 | 목표 Baseline과 기간 | Release Gate |

## 16. 구현 준비 게이트

- [ ] Phase 1 사용자 연구의 유효 세션이 5개 이상 완료됐다.
- [ ] 핵심 문제 가설이 실제 사례와 비용으로 검증됐다.
- [ ] 첫 자산 형식과 합법적인 Fixture가 승인됐다.
- [ ] MVP Scope v1과 성공 지표가 승인됐다.
- [ ] Task Flow, State Matrix와 Permission Matrix가 승인됐다.
- [ ] 최소 Domain Model과 데이터 분류가 승인됐다.
- [ ] AI Evaluation Dataset과 Review Rubric이 준비됐다.
- [ ] Threat Model과 Tenant 격리 전략이 검토됐다.
- [ ] 접근성, 성능과 관측성 예산이 수치화됐다.
- [ ] Product Owner, Engineering Owner와 목표 기간이 지정됐다.

## 17. 추적성

| 근거 | 연결 요구사항 |
|---|---|
| Product Brief의 AI 제안과 사람 승인 원칙 | FR-004, FR-005 |
| Digital Twin과 Knowledge Entity의 공통 정체성 | FR-006, FR-007 |
| 권한과 출처를 보존한 Semantic Search | FR-008, FR-009 |
| MVP Scope Draft의 비정상 상태 요구 | FR-011 |
| Enterprise Identity와 Tenant 제약 | FR-001, Security and Privacy |
| Phase 1 Research Plan | 문제 검증, 성공 지표와 구현 준비 게이트 |
