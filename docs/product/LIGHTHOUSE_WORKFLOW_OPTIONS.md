# K-Legonara Lighthouse Workflow Options

| 항목 | 내용 |
|---|---|
| 버전 | 0.1.0 |
| 상태 | Decision Required |
| 목적 | 첫 번째 검증 가능한 End-to-End 제품 흐름 선택 |

## 1. 선택 원칙

첫 Lighthouse는 플랫폼의 전체 비전을 축소 복제하지 않는다. 한 사용자가 한 Project에서 명확한 결과를 얻는 흐름이어야 한다.

평가 기준은 다음과 같다.

- K-Legonara만의 차별성을 보여주는가.
- 현재 Blueprint 근거를 재사용할 수 있는가.
- 8–12주 수준의 작은 파일럿으로 검증 가능한가.
- 실제 사용자와 데이터로 과업 테스트가 가능한가.
- 보안, AI와 3D 위험을 통제할 수 있는가.
- 이후 제조와 Marketplace로 자연스럽게 확장 가능한가.

점수는 `1`이 불리함, `5`가 유리함을 의미하는 초기 계획 추정치다.

## 2. Option A. Asset-to-Knowledge Twin

### Recommendation

Enterprise Product Engineer 또는 Digital Twin Engineer가 부품·설계 자산을 Project에 등록하고, AI가 메타데이터를 제안하며, 사용자가 검토한 뒤 Digital Twin Identity와 Knowledge Graph 관계를 생성하는 흐름이다.

```text
Workspace
→ Project
→ Asset Upload
→ AI Metadata Extraction
→ Human Review
→ Digital Twin Identity and Version
→ Knowledge Entity and Relationships
→ Semantic Search and AI Assistant
```

### 포함 가치

- AI, Digital Twin과 Knowledge Graph를 하나의 수직 흐름으로 연결한다.
- 출처, 권한, 버전과 사람의 승인을 제품 신뢰의 중심으로 검증한다.
- 제조 시스템과 공개 Marketplace 없이도 폐쇄형 파일럿이 가능하다.
- 향후 Simulation, Manufacturing와 Publication의 기반 Entity가 된다.

### 주요 위험

- 지원할 첫 자산 형식을 선택해야 한다.
- Twin의 최소 데이터 모델을 별도로 확정해야 한다.
- AI 추출 정확도와 검토 UX를 검증해야 한다.
- 실제 고객 자산이 없으면 합성 데이터의 대표성이 제한될 수 있다.

## 3. Option B. Permission-Aware AI Knowledge Workspace

Knowledge Manager가 문서와 데이터를 수집하고 Entity와 관계를 검토한 뒤, 사용자가 권한이 적용된 Semantic Search와 AI Assistant를 사용하는 흐름이다.

```text
Workspace
→ Source Ingestion
→ Entity and Relationship Extraction
→ Human Validation
→ Permission-Aware Index
→ Search and Grounded AI Answer
```

### 장점

- Chapter 34의 상세 Knowledge Graph 근거를 가장 직접적으로 활용한다.
- 3D 처리 없이 빠르게 Prototype을 검증할 수 있다.
- AI의 근거, 권한과 설명 가능성을 집중 검증할 수 있다.

### 한계

- 일반적인 Enterprise RAG 제품과 차별화가 약할 수 있다.
- Digital Twin과 Manufacturing 비전이 첫 인상에서 드러나지 않는다.

## 4. Option C. Design-to-Manufacturing Approval

Product Engineer가 설계 자산과 Twin을 검토하고 승인된 버전을 제조 요청으로 전환하며 상태를 추적하는 흐름이다.

```text
Project
→ Design Asset
→ Digital Twin Validation
→ Approval
→ Manufacturing Eligibility
→ Work Order
→ Production Status
```

### 장점

- K-Legonara의 전체 비전을 가장 강하게 보여준다.
- Enterprise Integration과 Manufacturing 시나리오를 직접 활용한다.
- 시간, 비용과 품질 가치 측정이 비교적 명확하다.

### 한계

- PLM, MES, ERP와 자재 데이터 의존성이 높다.
- 실제 파트너와 테스트 환경 없이는 데모에 머물 가능성이 크다.
- 첫 MVP로는 범위와 통합 위험이 크다.

## 5. 비교

| 기준 | Option A | Option B | Option C |
|---|---:|---:|---:|
| K-Legonara 차별성 | 5 | 3 | 5 |
| 현재 문서 근거 | 4 | 5 | 4 |
| 작은 파일럿 가능성 | 4 | 5 | 2 |
| 외부 시스템 독립성 | 4 | 5 | 1 |
| 실제 가치 측정 용이성 | 4 | 3 | 4 |
| 제조 확장성 | 4 | 2 | 5 |
| 초기 기술 위험 | 3 | 4 | 1 |
| 합계 | 28 | 27 | 22 |

## 6. 권장안

**Option A. Asset-to-Knowledge Twin**을 첫 Lighthouse로 권장한다.

Option B와 비슷한 초기 검증 가능성을 유지하면서 Digital Twin이라는 K-Legonara의 차별성을 포함한다. Option C의 제조 실행은 Option A에서 검증한 Identity, Version, Metadata와 Relationship 기반 위에 다음 단계로 추가한다.

## 7. 결정 게이트

다음 항목을 승인해야 Option A를 MVP 범위로 확정할 수 있다.

- Primary User.
- 첫 자산 형식.
- 첫 Project 시나리오.
- AI가 제안할 최소 메타데이터.
- 사람이 검토해야 할 필수 필드.
- Twin과 Knowledge Entity의 최소 관계.
- 파일럿 데이터의 출처와 사용 권리.
- 목표 과업 시간과 품질 Baseline.
