"use client";

import React, { useEffect, useState, ComponentType } from "react";

interface FramerRendererProps {
  url: string;
  className?: string;
  [key: string]: any;
}

/**
 * FramerRenderer
 * A bridge component to load and render external Framer ESM modules in a Next.js environment.
 */
export function FramerRenderer({ url, className, ...props }: FramerRendererProps) {
  const [Component, setComponent] = useState<ComponentType<any> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadComponent = async () => {
      if (typeof window === "undefined") return;
      
      try {
        // We use a dynamic import with a hint to the bundler to ignore this external URL
        const module = await import(/* @vite-ignore */ /* webpackIgnore: true */ url);
        
        if (mounted) {
          const ExportedComponent = module.default || Object.values(module).find(exp => typeof exp === 'function');
          
          if (ExportedComponent) {
            setComponent(() => ExportedComponent);
          } else {
            setError("No valid component found in module");
          }
        }
      } catch (err) {
        if (mounted) {
          console.error("FramerRenderer failed to load component:", url, err);
          setError(err instanceof Error ? err.message : String(err));
        }
      }
    };

    loadComponent();

    return () => {
      mounted = false;
    };
  }, [url]);

  if (error) {
    if (process.env.NODE_ENV === 'development') {
        return <div className="text-[10px] text-red-500 p-2 border border-dashed rounded bg-red-500/10">Failed to load: {url}</div>;
    }
    return null;
  }

  if (!Component) {
    return null;
  }

  return (
    <div className={className}>
      <Component {...props} />
    </div>
  );
}
