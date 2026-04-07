"use client";

import { useState, useEffect } from "react";

export function useWebGLSupport() {
  const [support, setSupport] = useState<{ v1: boolean; v2: boolean } | null>(null);

  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        const v2 = !!(window.WebGL2RenderingContext && canvas.getContext("webgl2"));
        const v1 = !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
        setSupport({ v1, v2 });
      } catch (e) {
        setSupport({ v1: false, v2: false });
      }
    };

    checkWebGL();
  }, []);

  return support;
}
