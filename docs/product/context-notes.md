# Phase 0 Product Context Notes

## 확인한 원본

- Master Blueprint Ch01–17 Archive.
- Master Blueprint Ch18–27 Checkpoint.
- CH28–34 Checkpoint.
- CH28–40 Expanded Source.
- K-Legonara Design Guideline v1.
- K-Legonara Design Architecture & Workflow.

## Confirmed

- K-Legonara는 AI, Digital Twin, Knowledge, Manufacturing, Marketplace, Community와 Enterprise를 연결하는 플랫폼을 지향한다.
- Organization, Workspace와 Project는 공통 제품 문맥이다.
- AI는 근거, 권한과 사람의 승인 상태를 보여줘야 한다.
- Knowledge Graph, Enterprise Integration, DevSecOps와 Deployment는 상세 Blueprint 근거가 있다.
- Product Brief, API Spec, Data Model과 Security Architecture는 디자인 문서로 대체할 수 없다.
- Chapter 1–6은 현재 Archive에서 실제 제품·사업 본문이 확인되지 않는다.
- Chapter 18–26은 완료 인덱스만 있고 상세 본문은 현재 저장소에 없다.

## Hypotheses

- 첫 검증 사용자는 Enterprise Product Engineer 또는 Digital Twin Engineer가 적합하다.
- Asset-to-Knowledge Twin은 차별성과 초기 검증 가능성의 균형이 가장 좋다.
- 폐쇄형 Project Workflow가 공개 Marketplace보다 초기 위험이 낮다.
- 제조 실행 전 자산 Identity, Version, Metadata와 Relationship을 검증해야 한다.

## 확정된 Lean Solo 기본값

- 첫 구현 대상은 Asset-to-Knowledge Twin이다.
- 첫 자산 형식은 GLB이며 JSON Metadata와 선택적 PNG Thumbnail을 사용한다.
- 3D 기능은 GLB 읽기 전용 Preview로 제한한다.
- 초기 AI는 비민감 합성 데이터만 관리형 외부 API로 처리하고 Provider 경계는 교체 가능하게 유지한다.
- 첫 파일럿은 단일 사용자·단일 Workspace다.
- 1인 개발자가 Product Owner와 Research Owner를 겸임한다.

## 이후에 결정할 항목

- 실제 첫 고객과 Buyer.
- 실제 고객 데이터 도입 조건과 보존 정책.
- Multi-Tenant와 Private AI 전환 시점.
- 제조와 공개 Marketplace 확장 기준.
- 외부 일정, 예산과 파트너가 생겼을 때의 목표 기간.

## 다음 세션의 시작점

1. 첫 Thin Slice의 한 문장 Task를 작성한다.
2. 직접 만든 합성 GLB Fixture 하나를 준비한다.
3. 최소 Task Flow, State Matrix와 Domain Object를 정의한다.
4. Happy Path와 복구 경로 하나의 Acceptance Test를 작성한다.
5. 가장 얇은 End-to-End 흐름을 구현하고 Self Test 3회 결과를 기록한다.

## 2026-07-30 승인 기록

- 사용자가 Primary User 권장안인 Enterprise Product Engineer 또는 Digital Twin Engineer를 Phase 1 검증 대상으로 승인했다.
- 사용자가 Lighthouse Option A인 Asset-to-Knowledge Twin을 Phase 1 검증 대상으로 승인했다.
- 이 승인은 문제 가설의 실증 완료나 코드 구현 승인이 아니다.
- Product Owner, 첫 자산 형식, 파일럿 데이터 권리, AI 배포 방식, Tenant 모델과 목표 기간은 아직 결정되지 않았다.
- 사용자 검증 계획과 MVP PRD 초안을 작성했다.

## 2026-08-02 Lean Solo 운영 결정

- 사용자는 1인 개발 환경에서 Product Owner와 Research Owner를 한 사람이 겸임하고 권장안을 빠르게 결정해 진행하도록 승인했다.
- 정식 연구 조직, 5명 이상 인터뷰와 다단계 승인 절차는 첫 Thin Vertical Slice의 선행 조건으로 사용하지 않는다.
- 검증은 `구체적인 과업 1개 → 합법적인 Fixture 1개 → 실행 가능한 Acceptance Test → 짧은 기록`의 최소 루프로 운영한다.
- 외부 사용자 피드백은 가능한 시점에 1–3명 단위로 수집하지만 초기 구현을 차단하지 않는다.
- 보안, 데이터 사용 권리, 비가역적인 외부 쓰기와 비용이 큰 아키텍처 결정은 계속 명시적으로 기록한다.
- 첫 구현은 전체 플랫폼이 아니라 Asset-to-Knowledge Twin의 가장 얇은 수직 흐름으로 제한한다.
