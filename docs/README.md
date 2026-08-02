# K-Legonara 문서 인덱스

이 디렉터리는 K-Legonara의 제품 청사진, 디자인 기준, 운영 워크플로와 향후 아키텍처 결정 기록의 공식 진입점이다.

## 문서 지도

| 영역 | 위치 | 역할 |
|---|---|---|
| Product | [`product/`](product/) | Product Brief, Lighthouse, MVP 범위, 위험과 실행 로드맵 |
| Master Blueprint | [`blueprint/`](blueprint/) | 제품, 플랫폼, 서비스 및 기술 아키텍처 원본 |
| Design | [`design/`](design/) | 브랜드, UX/UI, 디자인 시스템, 제작·인계 워크플로 |
| Architecture | [`architecture/`](architecture/) | 향후 독립 기술 아키텍처 문서 |
| ADR | [`adr/`](adr/) | 향후 주요 설계·기술 결정 기록 |
| Source Manifest | [`SOURCE_MANIFEST.md`](SOURCE_MANIFEST.md) | 업로드 원본의 경로, 해시와 용도 |

## 권장 읽기 순서

1. [`product/README.md`](product/README.md)에서 현재 제품 기획 단계와 승인 게이트를 확인한다.
2. [`product/PRODUCT_BRIEF.md`](product/PRODUCT_BRIEF.md)와 [`product/LIGHTHOUSE_WORKFLOW_OPTIONS.md`](product/LIGHTHOUSE_WORKFLOW_OPTIONS.md)에서 확정 사실, 가설과 결정 필요 항목을 확인한다.
3. [`blueprint/README.md`](blueprint/README.md)에서 Master Blueprint 원본의 실제 수록 범위와 버전 관계를 확인한다.
4. [`design/K-Legonara_Design_Guideline_v1.md`](design/K-Legonara_Design_Guideline_v1.md)에서 브랜드와 UI 방향을 확인한다.
5. [`design/K-Legonara_Design_Architecture_and_Workflow.md`](design/K-Legonara_Design_Architecture_and_Workflow.md)에서 디자인 생산, 협업, Figma, AI 보조 제작과 프론트엔드 인계 기준을 확인한다.
6. 중요한 변경은 `adr/`에 독립적인 결정 기록으로 남긴다.

## 문서 상태 원칙

- **Baseline**은 현재 작업의 기본 입력으로 사용하는 기준 문서다.
- **Checkpoint**는 특정 시점의 부분 보존본이며 최신 확장본을 대체하지 않는다.
- **Source**는 원본 형식을 보존한 자료로, 내용 수정 없이 저장한다.
- **Reference**는 디자인 탐색을 위한 참고 자료이며 제품 최종안이나 재사용 가능한 제작 자산을 의미하지 않는다.

문서명만으로 전체 범위를 추정하지 않는다. 특히 Blueprint Word 파일은 파일명과 실제 본문 범위가 다른 경우가 있으므로 반드시 [`blueprint/README.md`](blueprint/README.md)의 수록 범위를 함께 확인한다.
