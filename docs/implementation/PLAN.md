# Thin Slice 01 구현 계획

## 한 문장 과업

사용자는 단일 Workspace에서 합성 GLB 자산을 등록하고, 읽기 전용 3D Preview와 AI Metadata 제안을 검토·승인한 뒤 Twin Draft를 생성한다.

## 구현 목적

- K-Legonara의 첫 End-to-End 제품 흐름을 실제 화면으로 검증한다.
- 전체 플랫폼보다 Asset-to-Knowledge Twin의 가장 얇은 Happy Path에 집중한다.
- 합성 데이터와 로컬 상태만 사용해 데이터 권리와 운영 위험을 제한한다.

## 기술 기본값

- 위치는 `apps/web`이다.
- Next.js App Router와 TypeScript를 사용한다.
- Neo Aqua Design Token을 CSS 변수로 적용한다.
- GLB는 읽기 전용 3D Viewer에서 회전, 확대·축소와 Reset만 제공한다.
- AI 제안은 Provider 경계를 가진 결정론적 Mock으로 시작한다.
- 단일 Demo User와 단일 Workspace만 사용한다.

## 포함 범위

1. 합성 GLB Fixture 선택 또는 파일 업로드.
2. GLB 읽기 전용 Preview.
3. 제한된 Metadata와 Mock AI 제안.
4. 필드별 승인 또는 거절.
5. Twin Draft 생성과 상태 표시.
6. 잘못된 파일의 오류와 재시도 경로.

## 제외 범위

- 실제 인증, 서버 데이터베이스와 고객 데이터.
- Multi-Tenant, Private AI와 외부 시스템 연동.
- 3D 편집, Simulation, 제조와 Marketplace.

## 검증 기준

- Domain 상태 전이 단위 테스트가 통과한다.
- Happy Path와 잘못된 파일 복구 Acceptance Test가 통과한다.
- Production Build가 통과한다.
- Self Test 3회 결과를 `context-notes.md`에 기록한다.
