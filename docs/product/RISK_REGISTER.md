# K-Legonara Risk Register

| ID | 위험 | 가능성 | 영향 | 초기 대응 | Owner | Gate |
|---|---|---|---|---|---|---|
| R-001 | Primary User와 Buyer가 확정되지 않음 | 높음 | 매우 높음 | 인터뷰 대상과 의사결정자 지정 | Product | Phase 0 |
| R-002 | 첫 문제의 빈도와 비용 근거가 없음 | 높음 | 매우 높음 | 현재 업무 관찰과 Baseline 측정 | Product Research | Phase 1 |
| R-003 | Blueprint 범위가 구현 요구사항으로 오인됨 | 높음 | 높음 | PRD와 Blueprint를 분리하고 Traceability 유지 | Product, Architecture | Phase 0 |
| R-004 | AI, Twin, Knowledge, Manufacturing 동시 구현 | 높음 | 매우 높음 | Lighthouse 하나와 Out of Scope 승인 | Product Owner | Phase 0 |
| R-005 | 고객 자산의 IP와 기밀 데이터 노출 | 중간 | 매우 높음 | Data Classification, 승인 모델과 사설 처리 옵션 검토 | Security | Phase 1 |
| R-006 | AI Metadata 제안이 부정확하거나 설명 불가 | 높음 | 높음 | 필드별 평가, Human Review와 Model Version 기록 | AI Lead | Phase 3 |
| R-007 | 권한 필터 누락으로 검색·AI에 데이터 유출 | 중간 | 매우 높음 | Permission-aware retrieval와 Tenant 테스트 | Security, Backend | Phase 3 |
| R-008 | 3D 자산 크기와 렌더링 성능 문제 | 중간 | 높음 | 첫 형식 제한, Performance Budget와 대체 Preview | Twin Lead | Phase 2 |
| R-009 | PLM, MES, ERP 연동이 MVP를 지연 | 높음 | 높음 | 초기 MVP에서 외부 쓰기 연동 제외 | Architecture | Phase 0 |
| R-010 | 실제 검증 데이터와 파트너가 없음 | 높음 | 높음 | 합법적인 Fixture와 Design Partner 확보 | Product | Phase 1 |
| R-011 | 팀, 예산과 일정 미확정 | 높음 | 매우 높음 | 책임자와 Capacity 확인 전 일정 약속 금지 | Sponsor | Phase 0 |
| R-012 | 참고 이미지의 라이선스 불명확 | 중간 | 중간 | 레이아웃 참고만 허용하고 제품 자산 재사용 금지 | Design | 상시 |
| R-013 | 상세 본문이 없는 Blueprint 장을 사실로 생성 | 중간 | 높음 | Source, Hypothesis와 Generated 문서 표기 | Documentation Owner | 상시 |
| R-014 | 공개 Marketplace의 결제·정산·규제 복잡성 | 중간 | 매우 높음 | 파일럿 이후 별도 사업·법무 Brief 진행 | Business, Legal | Phase 6 |

## 운영 규칙

- 가능성 또는 영향이 높음 이상인 위험은 각 Phase Exit Gate에서 검토한다.
- 대응 후 잔여 위험과 근거를 기록한다.
- 실제 Owner가 지정되기 전 역할명은 임시 책임 영역을 뜻한다.
- 새로운 위험이 발견되면 관련 Issue와 Decision 또는 ADR을 연결한다.
