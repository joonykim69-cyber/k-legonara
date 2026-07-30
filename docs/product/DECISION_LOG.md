# K-Legonara Product Decision Log

## 결정 상태

| ID | 결정 | 상태 | 근거 또는 다음 행동 |
|---|---|---|---|
| PD-001 | Blueprint와 디자인 기준을 `main`의 Baseline으로 사용 | Accepted | PR #1, merge commit `2690043` |
| PD-002 | Blueprint Chapter 번호를 구현 순서로 사용하지 않음 | Accepted | Design Workflow의 Gate 기반 절차 |
| PD-003 | 첫 코드 구현 전에 Product Brief 승인 필요 | Accepted | 디자인 기준이 PRD를 대체하지 않음 |
| PD-004 | Primary User를 Enterprise Product Engineer 또는 Digital Twin Engineer로 검증 | Proposed | 인터뷰 대상으로 승인 필요 |
| PD-005 | 첫 Lighthouse를 Asset-to-Knowledge Twin으로 선택 | Proposed | Option 비교 후 제품 책임자 승인 필요 |
| PD-006 | 공개 Marketplace와 제조 실행을 초기 MVP에서 제외 | Proposed | 통합·규제·파트너 위험 축소 |
| PD-007 | 첫 자산 형식 | Decision Required | glTF, OBJ, STEP, PDF·Image 비교 필요 |
| PD-008 | AI 처리 배포 모델 | Decision Required | 외부 API, Private, Hybrid의 데이터 제약 확인 |
| PD-009 | 파일럿 Tenant 모델 | Decision Required | Single Tenant 파일럿 또는 Multi-Tenant 검증 |
| PD-010 | Product Owner와 목표 기간 | Decision Required | Sponsor 지정 필요 |

## 기록 규칙

- Accepted 결정은 변경 시 새 결정 또는 ADR을 추가한다.
- Proposed는 검증 또는 승인 전 구현 요구사항으로 사용하지 않는다.
- Decision Required는 Owner와 목표 결정일을 지정한 뒤 Accepted 또는 Rejected로 바꾼다.
- 기술적으로 장기 영향을 주는 Accepted 결정은 `docs/adr/`에 별도로 기록한다.
