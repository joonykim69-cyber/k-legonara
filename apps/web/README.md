# K-Legonara Web

K-Legonara의 첫 번째 실행 가능한 제품 흐름인 `Asset-to-Knowledge Twin` 웹 앱이다.

현재 Thin Slice는 합성 GLB 자산 등록, 읽기 전용 3D Preview, Mock AI 메타데이터 제안 검토, Twin Draft 생성을 하나의 Workspace에서 검증한다.

## 실행 방법

Node.js와 pnpm을 준비한 뒤 아래 명령을 실행한다.

```bash
pnpm install
pnpm run fixture
pnpm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 연다.

## 주요 명령

| 명령 | 목적 |
|---|---|
| `pnpm run fixture` | 합성 GLB Fixture를 다시 생성한다. |
| `pnpm run test:unit` | Domain 상태 전이 테스트를 실행한다. |
| `pnpm run typecheck` | TypeScript 오류를 검사한다. |
| `pnpm run build` | Webpack 기반 Production Build를 생성한다. |
| `pnpm run verify` | Fixture, Test, Typecheck, Build를 순서대로 검증한다. |

## 현재 제품 경계

- 자산 파일은 서버로 전송하지 않고 브라우저 Object URL로만 미리 본다.
- AI 제안은 실제 외부 모델을 호출하지 않는 결정론적 Mock Provider다.
- 사람이 승인한 항목만 `TWIN-DRAFT-001`에 포함된다.
- 실제 인증, 영속 저장, Multi-Tenant, 3D 편집, Simulation은 다음 단계 이후의 범위다.

구현 결정과 검증 기록은 `../../docs/implementation/`에서 확인할 수 있다.
