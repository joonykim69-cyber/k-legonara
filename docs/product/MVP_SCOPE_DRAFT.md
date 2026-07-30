# K-Legonara MVP Scope Draft

| 항목 | 내용 |
|---|---|
| 버전 | 0.2.0 |
| 상태 | Draft · Option A 검증 승인 · 구현 승인 전 |
| Lighthouse | Asset-to-Knowledge Twin |
| 대상 환경 | Responsive Web · Desktop First |

## 1. MVP Outcome

권한이 있는 사용자가 하나의 Workspace와 Project 안에서 자산을 등록하고, AI가 제안한 메타데이터를 검토해 승인된 Digital Twin과 Knowledge Entity로 저장한 뒤, 검색과 AI Assistant로 출처와 관계를 다시 확인할 수 있다.

## 2. In Scope

### Platform Foundation

- 사용자 로그인과 기본 Session.
- Organization, Workspace와 Project 문맥.
- 최소 역할 체계인 Owner, Editor와 Viewer.
- Project 단위 권한 확인.
- 감사 가능한 생성, 수정과 승인 이벤트.

### Asset Intake

- 승인된 첫 파일 형식 하나.
- 파일 크기와 필수 메타데이터 검증.
- 업로드 진행, 취소, 실패와 재시도.
- 원본 파일 해시와 출처 기록.

### AI Metadata Proposal

- 제한된 필드 집합의 메타데이터 추출.
- 사용 모델과 Prompt 버전 기록.
- 필드별 제안값과 신뢰 정보 표시.
- 사용자의 수정, 승인과 거절.
- AI 실패 시 수동 입력 경로.

### Digital Twin Record

- 안정적인 Twin ID.
- Asset ID, Version과 Lifecycle Status.
- 최소 Geometry 또는 Preview Reference.
- 물리·디지털 속성의 확장 가능한 Metadata.
- 승인된 버전과 Draft 버전 구분.

### Knowledge Graph

- Twin, Asset, Project, Organization, Component와 Document의 최소 Entity.
- `belongs_to`, `version_of`, `derived_from`, `related_to`의 최소 Relationship.
- Entity와 Relationship의 출처·버전·권한.
- 사람이 승인한 관계와 AI 제안 관계 구분.

### Search and AI Assistant

- Project 범위 검색.
- Entity, Metadata와 Relationship Filter.
- 근거 링크가 포함된 AI 응답.
- 권한이 없는 Source를 검색과 응답에서 제외.
- 결과 없음과 불충분한 근거 상태.

### Product Quality

- Empty, Loading, Error, Permission Denied와 Partial Success 상태.
- 키보드 탐색과 핵심 WCAG AA 점검.
- 데스크톱과 태블릿 핵심 흐름.
- 감사 로그, 구조화 로그와 핵심 Metric.
- 합성 Fixture를 이용한 반복 가능한 Demo.

## 3. Out of Scope

- 실시간 Sensor와 IoT 동기화.
- 물리 Simulation과 충돌 검증.
- 다중 사용자 실시간 공동 편집.
- MES, ERP, PLM, WMS 쓰기 연동.
- Manufacturing Order와 Supplier 관리.
- 공개 Marketplace, 결제, 과금과 정산.
- Community.
- 자율 AI Agent 실행.
- 복수 CAD 형식과 완전한 3D 편집.
- Mobile Native.
- Multi-Region Production.

## 4. Epic Draft

| Epic | 사용자 결과 | 완료 조건 |
|---|---|---|
| E1. Workspace and Project | 올바른 조직과 Project에서 작업 | 역할별 접근 테스트 통과 |
| E2. Asset Intake | 원본과 출처가 보존된 자산 등록 | 성공·실패·취소 흐름 검증 |
| E3. AI Review | AI 제안을 이해하고 수정·승인 | 필드별 결정과 모델 버전 기록 |
| E4. Twin Identity | 승인된 자산을 안정적인 Twin으로 관리 | ID, Version, Status와 감사 이벤트 존재 |
| E5. Knowledge Link | Twin과 관련 근거를 탐색 | 최소 Entity와 Relation 검증 |
| E6. Search and Assistant | 출처가 있는 답을 찾음 | 권한 필터와 Citation 테스트 통과 |
| E7. Quality Baseline | 핵심 흐름을 안정적으로 반복 | 접근성·관측성·복구 테스트 통과 |

## 5. Acceptance Gate

- [ ] Primary User 5명 이상의 문제 인터뷰 또는 동등한 관찰 근거가 있다.
- [ ] 첫 자산 형식과 합법적인 Fixture가 확정됐다.
- [ ] 핵심 Task Flow와 State Matrix가 승인됐다.
- [ ] Twin과 Knowledge의 최소 Domain Model이 승인됐다.
- [ ] AI Evaluation Dataset과 Review Rubric이 정의됐다.
- [ ] 권한과 Tenant 격리 테스트가 정의됐다.
- [ ] Task Completion, Time on Task와 Trust Baseline이 측정됐다.
- [ ] Blocker 수준의 접근성 또는 보안 문제가 없다.
- [ ] 제조 확장 여부를 판단할 학습 결과가 기록됐다.

## 6. Open Questions

- 첫 파일 형식은 단순 이미지·PDF, glTF, OBJ, STEP 중 무엇인가.
- 3D Preview는 MVP 필수인가, Metadata와 Thumbnail로 대체 가능한가.
- AI 추출 대상 필드는 어떤 Domain Schema를 따르는가.
- 고객이 이미 사용하는 PLM 또는 DAM의 ID를 보존해야 하는가.
- Entity Merge와 Version Conflict를 MVP에서 어디까지 처리하는가.
- 파일럿은 Single Tenant인가, Multi-Tenant 격리를 실제 검증하는가.
- AI 모델은 외부 API, 사설 배포 또는 Hybrid 중 무엇인가.
