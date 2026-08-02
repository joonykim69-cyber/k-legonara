// K-Legonara 웹 앱의 문서 메타데이터와 공통 레이아웃을 정의합니다.
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K-Legonara Asset Twin",
  description: "산업 자산을 지식으로 연결하는 AI 기반 Digital Twin Workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
