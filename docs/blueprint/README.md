# Master Blueprint 원본 안내

`source/`에는 사용자가 제공한 Word 원본을 수정 없이 보존한다. 다음 표의 수록 범위는 파일명 추정이 아니라 실제 본문과 표를 확인한 결과다.

## 원본과 실제 수록 범위

| 파일 | 실제 수록 범위 | 상태 | 사용 지침 |
|---|---|---|---|
| [`K-Legonara_Master_Blueprint_v1.0_Ch01-17.docx`](source/K-Legonara_Master_Blueprint_v1.0_Ch01-17.docx) | Chapter 1–11의 완료 구조, Chapter 12–17의 본문 | Source Archive | 1–11장은 구조 보존본으로 해석한다. |
| [`K-Legonara_Master_Blueprint_v1.0_Ch18-27_Checkpoint.docx`](source/K-Legonara_Master_Blueprint_v1.0_Ch18-27_Checkpoint.docx) | Chapter 18–27 완료 인덱스, Chapter 27 본문 | Checkpoint | 18–26장의 전체 본문이 포함됐다고 간주하지 않는다. |
| [`CH28-34.docx`](source/CH28-34.docx) | Chapter 34 본문 | Superseded Checkpoint | 아래 확장 보존본의 Chapter 34와 동일한 체크포인트다. |
| [`CH28-40.docx`](source/CH28-40.docx) | Chapter 34, 35, 38 본문 | Expanded Source | 파일명과 달리 Chapter 28–40 전체 연속본은 아니다. |

## 버전 관계

```text
Ch01-17 Archive
    ↓
Ch18-27 Checkpoint
    ↓
CH28-34 Checkpoint
    ↓
CH28-40 Expanded Source
```

`CH28-34.docx`의 추출 본문 492줄은 `CH28-40.docx`의 앞부분과 완전히 동일하다. 따라서 일반적인 검토에서는 `CH28-40.docx`를 우선하고, `CH28-34.docx`는 이력 확인용으로 사용한다.

## 확인된 공백

- Chapter 1–11의 상세 본문 원본은 이 보존본에서 확인되지 않는다.
- Chapter 18–26의 상세 본문 원본은 이 체크포인트에서 확인되지 않는다.
- Chapter 28–33, 36–37, 39–40의 본문은 현재 제공된 후반부 파일에서 확인되지 않는다.

누락 장을 새로 작성하거나 다른 자료와 병합할 때는 원본과 생성 내용을 구분하고 별도 버전 또는 ADR로 기록한다.
