"use client";

import KnowledgeArchitecture, { System3DProps } from "./KnowledgeArchitecture";

export default function Hero3D({ mode = "hero" }: System3DProps) {
  return (
    <div className="w-full h-full relative flex items-center justify-center pointer-events-none">
      <KnowledgeArchitecture mode={mode} />
    </div>
  );
}
