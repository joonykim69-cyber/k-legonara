"use client";
// GLB 자산을 편집 기능 없이 회전하고 확대할 수 있는 미리보기로 표시합니다.

import { useEffect } from "react";

type ModelPreviewProps = {
  src: string;
  name: string;
};

export function ModelPreview({ src, name }: ModelPreviewProps) {
  useEffect(() => {
    void import("@google/model-viewer");
  }, []);

  return (
    <model-viewer
      src={src}
      alt={`${name} 3D 미리보기`}
      camera-controls
      auto-rotate
      cameraOrbit="35deg 68deg 3.3m"
      exposure="1.05"
      shadowIntensity="0.8"
      loading="eager"
    />
  );
}
