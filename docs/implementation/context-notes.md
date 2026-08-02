# Thin Slice 01 구현 컨텍스트 노트

## 2026-08-02 시작 상태

- PR #2가 `main`에 병합됐으며 병합 커밋은 `3636cbd`다.
- 새 구현 브랜치는 `agent/thin-slice-asset-twin`이다.
- 저장소에는 애플리케이션 코드가 없어 `apps/web`에서 첫 앱을 시작한다.
- 1인 개발 속도를 위해 별도 백엔드와 실제 인증은 이번 Slice에서 만들지 않는다.

## 확정 결정

- 첫 자산 형식은 GLB다.
- 첫 데이터는 프로젝트가 직접 생성한 합성 Fixture다.
- 3D Preview는 읽기 전용이다.
- AI 제안은 결정론적 Mock Provider로 시작하며 실제 Provider와 교체 가능한 경계를 둔다.
- 상태는 브라우저 세션 안에서만 유지한다.
- 정상 경로와 잘못된 파일 복구 경로만 Acceptance Test로 고정한다.

## 보안과 데이터 경계

- 고객 파일, 개인정보와 비밀정보를 사용하지 않는다.
- 외부 AI API를 호출하지 않는다.
- 업로드 파일은 서버에 전송하지 않고 브라우저 Object URL로 처리한다.

## 다음 시작점

1. `apps/web` 기반을 구성한다.
2. 합성 GLB 생성 스크립트와 Fixture를 추가한다.
3. Domain 상태 전이를 테스트 우선으로 작성한다.
4. 화면을 연결하고 Acceptance Test를 실행한다.

## 2026-08-02 구현 결과

- Next.js 16, React 19, TypeScript 기반의 `apps/web` 앱을 생성했다.
- Neo Aqua 색상 토큰과 Dashboard 구조를 첫 Workspace 화면에 적용했다.
- 합성 GLB 큐브 Fixture를 저장소 안에서 재생성할 수 있는 스크립트를 추가했다.
- GLB 등록, 읽기 전용 3D Preview, Mock AI 제안, 항목별 승인·거절, Twin Draft 생성 흐름을 연결했다.
- 승인된 항목만 `TWIN-DRAFT-001` 메타데이터에 포함되도록 Domain 상태 전이를 고정했다.
- Windows의 깊은 작업 경로와 외부 pnpm 가상 저장소가 Turbopack 경계와 충돌해 Production Build는 Next.js가 지원하는 Webpack 모드로 고정했다.

## Self Test 3

1. Domain Test에서 정상 Draft 생성, 잘못된 파일 복구, 미검토 Draft 차단을 검증했다.
2. TypeScript 검사와 Next.js Production Build를 통과했다.
3. Production Server를 브라우저에서 열어 샘플 GLB 등록부터 AI 제안 4개 승인과 `TWIN-DRAFT-001` 생성까지 클릭 검증했으며 오류 로그가 없음을 확인했다.

## 다음 작업 경계

- 이 단계에서는 실제 파일 업로드 API와 영속 저장소를 추가하지 않는다.
- 다음 Slice는 현재 흐름을 유지한 채 Draft 저장 계약과 최소 API 경계를 설계하는 작업이다.
