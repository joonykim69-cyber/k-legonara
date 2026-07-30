# Source Manifest

이 문서는 2026-07-30에 저장소로 반입한 사용자 제공 원본의 위치와 원본 SHA-256을 기록한다. Word와 PNG는 원본 바이트를 그대로 보존하고, Markdown은 렌더링 의미를 유지하면서 줄바꿈과 공백을 정규화할 수 있다.

| 저장소 경로 | 원본 파일명 | 역할 | SHA-256 |
|---|---|---|---|
| `docs/blueprint/source/K-Legonara_Master_Blueprint_v1.0_Ch01-17.docx` | `K-Legonara_Master_Blueprint_v1.0_Ch01-17.docx` | Blueprint 원본 | `C8F4497A73BA66B45DCDA5F910C6FF202941C75B1F980E3810700879AB1320BC` |
| `docs/blueprint/source/K-Legonara_Master_Blueprint_v1.0_Ch18-27_Checkpoint.docx` | `K-Legonara_Master_Blueprint_v1.0_Ch18-27_Checkpoint.docx` | Blueprint 체크포인트 | `D928576CC0F623BD2F5C80EB5C58A4A797E45F1916F45F2D4BAE52353C7F6FF2` |
| `docs/blueprint/source/CH28-34.docx` | `CH28-34.docx` | Chapter 34 체크포인트 | `86084D31F4B193DBD0ED36616A00BB42910AC8BEEB6A85ABE1AE09FD9E9CFF35` |
| `docs/blueprint/source/CH28-40.docx` | `CH28-40.docx` | Chapter 34·35·38 확장 보존본 | `0ECC1AF51B552F92F23A2AEDC3F11034ED704EFD900CE65200C2DE351E3FFEAF` |
| `docs/design/K-Legonara_Design_Guideline_v1.md` | `K-Legonara_Design_Guideline_v1.md` | 승인된 디자인 방향 | `9918441F0A5BBABA8D45A3F65579587C2BA94FFB7789EDE947BD57B208D5C3CD` |
| `docs/design/K-Legonara_Design_Architecture_and_Workflow.md` | `K-Legonara_Design_Architecture_and_Workflow.md` | 디자인 운영·인계 기준 | `54084573B9ED85F2017E3A4BAE571D7F412946BEB96823F02B49129A8D46764F` |
| `assets/design/references/kidultverse-dashboard-layout-reference-2026-07-29.png` | `ChatGPT Image 2026년 7월 29일 오후 02_45_50.png` | 레이아웃 참고 이미지 | `AC25FDE0647AD9CD480B005B873D93341C93ED2FD222BA0A90DDAD0764E625B2` |

## 보존 규칙

- 원본 Word 문서는 수정하거나 재저장하지 않는다.
- Markdown은 사용자 제공본의 내용을 기준으로 저장하되 문서 린트에 맞게 줄바꿈과 공백을 정규화할 수 있다.
- 파일명을 정규화한 참고 이미지는 원본 파일명과 해시를 이 문서에 남긴다.
- 원본 교체 시 이전 해시와 변경 이유를 커밋 또는 ADR에 기록한다.

`K-Legonara_Design_Guideline_v1.md`는 Markdown hard break와 목록 공백만 정규화했으며 저장본 SHA-256은 `EF87C4B173F465D177D8DB6EE79BF21E4CEA50DE99448880A25722244BF3BFEC`이다.
