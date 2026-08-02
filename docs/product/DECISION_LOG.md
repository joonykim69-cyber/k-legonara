# K-Legonara Product Decision Log

## 결정 상태

| ID | 결정 | 상태 | 근거 또는 다음 행동 |
|---|---|---|---|
| PD-001 | Blueprint와 디자인 기준을 `main`의 Baseline으로 사용 | Accepted | PR #1, merge commit `2690043` |
| PD-002 | Blueprint Chapter 번호를 구현 순서로 사용하지 않음 | Accepted | Design Workflow의 Gate 기반 절차 |
| PD-003 | 첫 코드 구현 전에 Product Brief 승인 필요 | Accepted | 디자인 기준이 PRD를 대체하지 않음 |
| PD-004 | Primary User를 Enterprise Product Engineer 또는 Digital Twin Engineer로 검증 | Accepted | 2026-07-30 사용자 승인 · 문제 가설은 Phase 1에서 검증 |
| PD-005 | 첫 Lighthouse를 Asset-to-Knowledge Twin으로 선택 | Accepted | 2026-07-30 사용자 승인 · Lean Solo 최소 게이트 적용 |
| PD-006 | 공개 Marketplace와 제조 실행을 초기 MVP에서 제외 | Accepted | 1인 개발 범위와 통합 위험 축소 |
| PD-007 | 첫 자산 형식은 GLB와 JSON Metadata | Accepted | 단일 파일, 웹 Preview와 합성 Fixture 제작 용이성 |
| PD-008 | 초기 AI는 비민감 합성 데이터만 관리형 외부 API 사용 | Accepted | 빠른 검증 · Provider 교체 가능한 경계 유지 |
| PD-009 | 첫 파일럿은 단일 사용자·단일 Workspace | Accepted | Multi-Tenant 구현은 검증 후 확장 |
| PD-010 | 1인 개발자가 Product Owner와 Research Owner 겸임 | Accepted | 2026-08-02 사용자 결정 · 별도 승인 조직 없음 |
| PD-011 | MVP 3D 기능은 GLB 읽기 전용 Preview | Accepted | 편집, Simulation과 복수 형식 제외 |
| PD-012 | 정식 사용자 연구는 초기 구현 차단 조건이 아님 | Accepted | 합성 Fixture, Self Test와 1–3명 선택적 피드백으로 검증 |

## 기록 규칙

- Accepted 결정은 변경 시 새 결정 또는 ADR을 추가한다.
- Proposed는 검증 또는 승인 전 구현 요구사항으로 사용하지 않는다.
- Decision Required는 Owner와 목표 결정일을 지정한 뒤 Accepted 또는 Rejected로 바꾼다.
- 기술적으로 장기 영향을 주는 Accepted 결정은 `docs/adr/`에 별도로 기록한다.

## 승인 기록

| 날짜 | 승인 내용 | 승인 범위 | 남은 제약 |
|---|---|---|---|
| 2026-07-30 | PD-004, PD-005 | Phase 1 사용자 검증과 MVP PRD 초안 작성 | Product Owner, 자산 형식, 데이터 권리, AI 배포, Tenant 모델은 미결정 |
| 2026-08-02 | PD-006–PD-012 | Lean Solo Thin Vertical Slice 착수 | 실제 고객 데이터, Multi-Tenant, 제조와 공개 Marketplace는 제외 |
