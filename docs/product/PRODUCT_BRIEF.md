# K-Legonara Product Brief

| 항목 | 내용 |
|---|---|
| 버전 | 0.3.0 |
| 상태 | Lean Solo Baseline · Thin Slice Approved |
| 작성일 | 2026-07-30 |
| 단계 | Phase 0. Product Definition |
| 기준 문서 | Master Blueprint 원본, Design Guideline v1, Design Architecture & Workflow |

## 1. 제품 정의

### Confirmed

K-Legonara는 단일 기능형 SaaS나 쇼핑몰이 아니라 AI, Digital Twin, Knowledge Graph, Manufacturing, Marketplace, Community와 Enterprise 기능을 연결하는 플랫폼을 지향한다.

핵심 브랜드 명제는 다음과 같다.

> Design. Create. Build. Manufacture. Collaborate. Powered by AI.

플랫폼의 공통 작업 문맥은 Organization, Workspace와 Project이며, AI의 행동은 근거와 승인 상태를 보여주고 사람이 최종 책임을 유지해야 한다.

### Product Thesis · Hypothesis

K-Legonara는 분리된 설계 자산, 부품 정보와 조직 지식을 신뢰 가능한 Digital Twin과 Knowledge Graph로 연결해 팀이 더 빠르게 찾고, 검증하고, 재사용하고, 실행하도록 돕는다.

이 문장은 제품 가설이며 Primary User와 Lighthouse Workflow가 승인된 뒤 개정한다.

## 2. 확인된 제품 자산

- Project, Identity와 권한 서비스의 Blueprint 구조.
- AI, API, Security, Cloud, DevOps와 DevSecOps 아키텍처 기준.
- Knowledge Graph와 Semantic Platform 상세 아키텍처.
- Enterprise Integration 시나리오와 계약 원칙.
- 다양한 배포 환경을 위한 Reference Architecture.
- Neo Aqua 기반 디자인 언어와 장기 UI/UX 생산 워크플로.

## 3. 아직 확인되지 않은 핵심 사항

현재 원본에서 다음 항목은 확정할 수 없다.

- 첫 유료 고객 또는 첫 도입 조직.
- Primary User와 Economic Buyer.
- 가장 빈번하고 비용이 큰 사용자 문제.
- 기존 대안과 전환 이유.
- 초기 시장과 지역.
- 가격과 과금 단위.
- 실제 데이터 원천과 사용 권리.
- 팀 규모, 예산과 목표 출시 시점.

## 4. 사용자 가설

| 후보 | 수행하려는 일 | 예상 문제 | 상태 |
|---|---|---|---|
| Enterprise Product Engineer | 부품과 제품 자산을 구조화하고 재사용 | CAD, 사양, 버전과 지식이 분산됨 | Hypothesis |
| Knowledge or Platform Manager | 조직 지식을 AI와 검색에 안전하게 연결 | 출처, 권한과 최신성을 신뢰하기 어려움 | Hypothesis |
| Digital Twin Engineer | 물리 자산과 디지털 모델의 상태·관계를 관리 | 식별자, 메타데이터와 시스템 연계가 분절됨 | Hypothesis |
| Manufacturing Program Manager | 설계 승인부터 생산까지 추적 | 설계, 자재, 주문과 품질 상태가 여러 시스템에 흩어짐 | Hypothesis |
| Creator or Small Brand Team | 아이디어를 재사용 가능한 제품 자산으로 전환 | 전문 도구와 제조 연결 비용이 높음 | Hypothesis |

### Recommended Primary User Hypothesis

첫 검증 대상은 **Enterprise Product Engineer 또는 Digital Twin Engineer**로 좁히는 것을 권장한다.

근거는 다음과 같다.

- Workspace, Project, Identity와 Enterprise Integration 구조를 재사용할 수 있다.
- Digital Twin과 Knowledge Graph를 함께 검증해 K-Legonara의 차별성을 보여줄 수 있다.
- 결제, 물류와 공개 Marketplace 없이도 폐쇄형 파일럿이 가능하다.
- 제조 실행까지 확장하기 전 자산과 지식의 신뢰 기반을 먼저 만들 수 있다.

2026-07-30 사용자의 명시적 승인으로 Phase 1의 우선 검증 대상으로 채택했다. 문제 가설 자체는 아직 사용자 근거로 검증되지 않았다.

## 5. 문제 가설

### Hypothesis

엔터프라이즈 제품·디지털 트윈 팀은 부품과 설계 자산의 파일, 메타데이터, 버전, 관계와 결정 근거가 여러 도구에 분산돼 있어 다음 비용을 겪는다.

- 올바른 최신 자산을 찾는 시간이 길다.
- 같은 부품이나 지식을 중복 작성한다.
- AI 검색 결과의 출처와 사용 권한을 신뢰하기 어렵다.
- 물리 자산, Digital Twin과 Knowledge Entity의 연결이 수작업이다.
- 변경 영향과 승인 상태를 추적하기 어렵다.
- 제조 또는 외부 시스템으로 넘길 때 데이터가 다시 매핑된다.

이 문제는 사용자 인터뷰, 실제 자산 샘플과 현재 업무 흐름 관찰로 검증해야 한다.

## 6. 가치 제안 가설

K-Legonara는 하나의 Project 안에서 자산을 등록하고, AI로 메타데이터를 추출하며, 사람이 검토한 뒤 Digital Twin Identity와 Knowledge Graph 관계를 생성한다. 사용자는 출처와 권한이 보존된 Semantic Search와 AI Assistant로 이를 다시 찾고 활용한다.

### 기대 결과

- 자산 탐색 시간 감소.
- 메타데이터 입력과 관계 설정의 반복 작업 감소.
- 버전과 변경 근거의 추적 가능성 향상.
- AI 응답의 출처와 권한 신뢰도 향상.
- 향후 시뮬레이션, 제조와 Marketplace 확장을 위한 표준 자산 기반 형성.

## 7. 성공 지표 체계

실제 목표치는 사용자 인터뷰와 Baseline 측정 후 확정한다.

| 영역 | 지표 | 초기 측정 방법 | 목표 |
|---|---|---|---|
| Activation | 첫 자산을 검토 완료된 Twin으로 전환한 비율 | 파일럿 세션 로그 | TBD |
| Efficiency | 기존 방식 대비 자산 등록 완료 시간 | Before and after task test | TBD |
| Findability | 목표 자산과 근거를 찾는 과업 성공률 | Usability test | TBD |
| Trust | AI 응답에서 출처와 권한을 이해한 사용자 비율 | Task interview | TBD |
| Quality | AI 추출 필드 중 승인 없이 채택된 비율 | Review event log | TBD |
| Reuse | 기존 Entity, Component 또는 Relation 재사용률 | Product analytics | TBD |
| Reliability | 핵심 흐름 성공률과 복구 가능 오류율 | Observability | TBD |

매출, 전환과 유지율은 Buyer와 과금 모델이 정해진 뒤 추가한다.

## 8. 제품 원칙

- AI가 제안하고 사람이 승인한다.
- 모든 핵심 정보는 출처, 버전, 권한과 연결한다.
- Digital Twin과 Knowledge Entity는 같은 자산 정체성을 공유한다.
- 처음부터 전체 제조 생태계를 구현하지 않는다.
- 공개 Marketplace보다 폐쇄형 Project Workflow를 먼저 검증한다.
- 정상 상태뿐 아니라 오류, 권한 없음, 지연, 취소와 부분 성공을 설계한다.
- 실제 고객 데이터가 없으면 현실적인 합성 Fixture를 사용하고 가짜 고객 사실을 만들지 않는다.

## 9. 초기 비범위

- 실시간 물리 시뮬레이션 엔진.
- 완전한 MES, ERP, PLM 또는 WMS 대체.
- 공개 Marketplace 거래, 결제, 정산과 물류.
- Community와 소셜 기능.
- 다지역 Active-Active 운영.
- 모든 CAD 형식 지원.
- 자율 AI Agent의 외부 시스템 쓰기 권한.
- 모바일 네이티브 애플리케이션.

## 10. 제약과 전제

- 상세 본문이 없는 Blueprint Chapter는 승인된 요구사항으로 간주하지 않는다.
- 고객 원본, 개인정보, 지식재산과 제조 데이터는 승인되지 않은 외부 모델에 보내지 않는다.
- AI 출력은 근거, 모델 버전과 사람의 검토 상태를 기록한다.
- 3D 자산의 파일 크기, 렌더링 성능과 저사양 대체 경험을 별도로 검증한다.
- Enterprise Identity, Tenant 격리와 권한 필터링은 초기부터 고려한다.
- 기존 참고 이미지는 레이아웃 참고용이며 제품 자산으로 재사용하지 않는다.

## 11. 승인에 필요한 결정

1. 첫 인터뷰 대상은 누구인가.
2. 첫 파일럿은 Enterprise 내부 팀인가, Creator 팀인가.
3. Lighthouse Workflow는 어떤 후보를 선택하는가.
4. 실제 검증에 사용할 자산과 데이터는 무엇인가.
5. 성공을 판단할 시간, 품질 또는 비용 지표는 무엇인가.
6. 파일럿에서 반드시 연동해야 하는 외부 시스템이 있는가.
7. 초기 팀, 예산과 목표 기간은 어느 정도인가.

## 12. Brief 승인 게이트

- [x] 1인 개발자가 Product Owner와 Research Owner를 겸임한다.
- [x] Primary User가 한 문장으로 확정됐다.
- [x] 최소 검증 루프가 정의됐다.
- [x] 핵심 문제가 구현으로 검증 가능한 가설로 작성됐다.
- [x] Lighthouse Workflow가 선택됐다.
- [x] Lean Solo MVP 범위와 비범위가 승인됐다.
- [x] 첫 성공 기준은 End-to-End 과업 완료와 자동 Acceptance Test다.
- [x] 직접 만든 합성 Fixture만 사용하며 고객 데이터는 제외한다.
