// model-viewer 웹 컴포넌트를 React JSX에서 사용할 수 있도록 선언합니다.
import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        poster?: string;
        exposure?: string;
        shadowIntensity?: string;
        cameraOrbit?: string;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        loading?: "auto" | "lazy" | "eager";
      };
    }
  }
}

export {};
