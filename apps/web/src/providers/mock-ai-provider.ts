// 실제 AI 연결 전 동일한 결과를 제공하는 메타데이터 제안기를 구현합니다.
import type { MetadataProposal } from "@/domain/twin-workflow";

export function createMockMetadata(assetName: string): MetadataProposal[] {
  const normalizedName = assetName.replace(/\.glb$/i, "");

  return [
    {
      id: "asset-name",
      label: "자산 이름",
      field: "assetName",
      value: normalizedName || "Neo Assembly Module",
      confidence: 98,
      rationale: "파일명과 장면 루트 노드를 기준으로 정규화했습니다.",
      decision: "pending",
    },
    {
      id: "category",
      label: "분류",
      field: "category",
      value: "Industrial Component",
      confidence: 92,
      rationale: "형상 비율과 조립 구조가 산업용 부품 패턴과 일치합니다.",
      decision: "pending",
    },
    {
      id: "material",
      label: "주요 재질",
      field: "material",
      value: "Neo Aqua Composite",
      confidence: 84,
      rationale: "표면 반사와 색상 속성을 바탕으로 추정했습니다.",
      decision: "pending",
    },
    {
      id: "summary",
      label: "지식 요약",
      field: "summary",
      value: "합성 GLB로 등록된 경량 산업 조립 모듈",
      confidence: 89,
      rationale: "자산 이름, 분류, 기본 형상 정보를 하나의 설명으로 결합했습니다.",
      decision: "pending",
    },
  ];
}
