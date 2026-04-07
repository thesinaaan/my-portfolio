"use client";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

/* ===================== SHADERS ===================== */

const VERTEX_SHADER_300 = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER_300 = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uColor;
uniform float uOpacity;
out vec4 fragColor;

float hash(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 19.19);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0; float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p); p *= 2.1; a *= 0.45;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  vec2 p = uv - 0.5;
  p.x *= iResolution.x / iResolution.y;
  float t = iTime * 0.18;
  float field = fbm(p * 1.6 + t) * 0.6 + fbm(p * 3.2 - t * 1.2) * 0.3;
  float r = length(p);
  float vignette = exp(-r * 3.5);
  float energy = smoothstep(0.25, 0.75, field) * vignette;
  vec3 color = uColor * energy + vec3(1.0, 0.96, 0.92) * pow(vignette, 2.5) * 0.45;
  color = color / (color + vec3(1.1));
  color = pow(color, vec3(0.82));
  fragColor = vec4(color, clamp(energy * uOpacity, 0.0, 1.0));
}
`;

const VERTEX_SHADER_100 = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER_100 = `
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uColor;
uniform float uOpacity;

float hash(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 19.19);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0; float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p); p *= 2.1; a *= 0.45;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  vec2 p = uv - 0.5;
  p.x *= iResolution.x / iResolution.y;
  float t = iTime * 0.18;
  float field = fbm(p * 1.6 + t) * 0.6 + fbm(p * 3.2 - t * 1.2) * 0.3;
  float r = length(p);
  float vignette = exp(-r * 3.5);
  float energy = smoothstep(0.25, 0.75, field) * vignette;
  vec3 color = uColor * energy + vec3(1.0, 0.96, 0.92) * pow(vignette, 2.5) * 0.45;
  color = color / (color + vec3(1.1));
  color = pow(color, vec3(0.82));
  gl_FragColor = vec4(color, clamp(energy * uOpacity, 0.0, 1.0));
}
`;

/* ===================== UTILS ===================== */

const hexToRgb = (hex: string): [number, number, number] => {
  const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!res) return [1, 1, 1];
  return [
    parseInt(res[1], 16) / 255,
    parseInt(res[2], 16) / 255,
    parseInt(res[3], 16) / 255,
  ];
};

/* ===================== COMPONENT ===================== */

interface PlasmaProps {
  color?: string;
  speed?: number;
  opacity?: number;
}

export default function Plasma({
  color = "#06b6d4",
  speed = 0.45,
  opacity = 0.4,
}: PlasmaProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: Renderer | null = null;
    let isWebGL2 = true;

    try {
      // 1. Try WebGL 2 first
      renderer = new Renderer({
        webgl: 2,
        alpha: true,
        dpr: Math.min(window.devicePixelRatio, 2),
      });
    } catch (e1) {
      try {
        // 2. Fallback to WebGL 1
        isWebGL2 = false;
        renderer = new Renderer({
          webgl: 1,
          alpha: true,
          dpr: Math.min(window.devicePixelRatio, 2),
        });
      } catch (e2) {
        // 3. Complete failure - device/browser unable to create any context
        console.warn("Plasma: All WebGL creation attempts failed.", e2);
        return;
      }
    }

    const gl = renderer.gl;
    const canvas = gl.canvas as HTMLCanvasElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    const program = new Program(gl, {
      vertex: isWebGL2 ? VERTEX_SHADER_300 : VERTEX_SHADER_100,
      fragment: isWebGL2 ? FRAGMENT_SHADER_300 : FRAGMENT_SHADER_100,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uColor: { value: new Float32Array(hexToRgb(color)) },
        uOpacity: { value: opacity },
      },
    });

    const mesh = new Mesh(gl, {
      geometry: new Triangle(gl),
      program,
    });

    const resize = () => {
      const rect = container.getBoundingClientRect();
      if (renderer) {
        renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height));
        program.uniforms.iResolution.value[0] = gl.drawingBufferWidth;
        program.uniforms.iResolution.value[1] = gl.drawingBufferHeight;
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    let raf = 0;
    const start = performance.now();

    const loop = (t: number) => {
      if (renderer) {
        program.uniforms.iTime.value = (t - start) * 0.001 * speed;
        renderer.render({ scene: mesh });
        raf = requestAnimationFrame(loop);
      }
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      try {
        if (canvas && canvas.parentNode === container) {
          container.removeChild(canvas);
        }
      } catch (e) {
        console.error("Cleanup error:", e);
      }
    };
  }, [color, speed, opacity]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]"
    />
  );
}
