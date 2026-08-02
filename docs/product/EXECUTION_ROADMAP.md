# K-Legonara Execution Roadmap

이 로드맵은 날짜 약속이 아니라 승인 게이트 순서다. 팀 규모와 예산이 확정되기 전에는 달력 일정을 고정하지 않는다.

## Lean Solo 실행 방식

1인 개발에서는 Phase를 큰 선행 프로젝트로 운영하지 않는다. `가설 하나 → 가장 얇은 구현 → Self Test → 기록 → 다음 반복`을 기본 단위로 사용한다. 외부 인터뷰와 정식 Prototype 연구는 가능한 시점에 추가하지만 첫 Thin Vertical Slice를 막지 않는다.

다만 고객 데이터, 보안 경계, 비가역적인 외부 쓰기와 비용이 큰 아키텍처 결정은 구현 전에 별도로 확인한다.

## Phase 0. Product Definition

### 작업

- 기준 문서 병합.
- Product Brief 작성.
- 사용자와 Buyer 가설 정의.
- Lighthouse 후보 비교.
- MVP 범위, 비범위와 성공 지표 초안.
- Risk와 Decision Log 생성.

### Exit Gate

- Primary User, 문제와 Lighthouse Workflow 승인.
- 사용자 검증 계획과 합법적인 데이터 확보 계획 승인.
- Product Owner와 초기 실행 책임자 지정.

## Phase 1. Context and Validation

### 작업

- 사용자 인터뷰와 현재 업무 관찰.
- 기존 도구와 대안 분석.
- 실제 자산과 Metadata Sample 수집.
- Baseline 시간, 오류와 재작업 측정.
- 데이터 권리, 개인정보와 지식재산 검토.

### Exit Gate

- 문제 가설의 유지, 수정 또는 폐기 결정.
- 성공 지표의 Baseline과 목표 승인.
- MVP Scope v1 승인.

## Phase 2. IA, Flow and Prototype

### 작업

- Sitemap과 Object Model.
- 핵심 Task Flow.
- State Matrix와 Permission Matrix.
- 저충실도 Wireframe.
- 실제 콘텐츠 기반 Clickable Prototype.
- 접근성, AI 신뢰와 3D 이해도 테스트.

### Exit Gate

- 사용자가 도움 없이 핵심 과업을 완료.
- 주요 위험에 대한 설계 결정 기록.
- Engineering이 구현 불확실성을 검토.

## Phase 3. Technical Foundation

### 작업

- Domain Model과 Data Classification.
- API와 Event Contract.
- Identity, Tenant와 Authorization 모델.
- AI Evaluation과 Model Governance.
- Asset Storage, Hash와 Version 정책.
- Observability, Security와 Performance Budget.
- ADR 작성.

### Exit Gate

- Architecture Review 승인.
- Threat Model과 데이터 흐름 검토.
- 테스트 전략과 개발 환경 준비.

## Phase 4. Thin Vertical Slice

### 작업

- Workspace와 Project.
- 단일 Asset Intake.
- AI Metadata Proposal과 Human Review.
- Twin Identity.
- 최소 Knowledge Entity와 Relationship.
- Project Search와 Grounded AI Answer.

### Exit Gate

- 반복 가능한 End-to-End Demo.
- 자동 테스트와 핵심 관측성.
- 파일럿 사용자 과업 성공.

## Phase 5. Pilot

### 작업

- 제한된 사용자와 데이터로 폐쇄형 운영.
- 품질, 신뢰, 시간 절감과 재사용 측정.
- 지원, 장애와 데이터 정정 절차 운영.
- 제조 확장과 제품 방향 재평가.

### Exit Gate

- 성공 지표 달성 또는 학습에 따른 Pivot 결정.
- Production 투자 여부 승인.

## Phase 6. Domain Expansion

권장 기본 순서는 다음과 같다.

1. AI Studio.
2. Digital Twin Viewer와 Version 비교.
3. Knowledge Graph Explorer.
4. Manufacturing Eligibility와 Approval.
5. 제한된 Enterprise Integration.
6. Marketplace와 Community.

각 도메인은 별도 Brief와 Exit Gate를 가져야 한다.

## Phase 7. Scale and Governance

- 다중 Tenant와 Region 확장.
- Design Token과 Component Release 자동화.
- Contract와 Schema Registry.
- AI, Asset와 Prompt Provenance.
- SLO, Cost와 Capacity 관리.
- Marketplace, Partner와 Compliance 운영.

## 즉시 다음 작업

1. GLB 합성 Fixture 하나를 준비한다.
2. Asset Upload부터 Twin Draft 생성까지의 최소 Task Flow를 작성한다.
3. 최소 Domain Object와 State Matrix를 정의한다.
4. Happy Path와 복구 경로 하나의 Acceptance Test를 작성한다.
5. 첫 Thin Vertical Slice를 구현한다.
