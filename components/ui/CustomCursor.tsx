"use client";

import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor-pointer";
    document.body.appendChild(cursor);

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const onMouseEnter = () => {
      cursor.classList.add("is-hovering");
    };

    const onMouseLeave = () => {
      cursor.classList.remove("is-hovering");
    };

    document.addEventListener("mousemove", onMouseMove);

    const interactables = document.querySelectorAll("a, button, [role='button']");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
      cursor.remove();
    };
  }, []);

  return (
    <style jsx global>{`
      .custom-cursor-pointer {
        position: fixed;
        width: 24px;
        height: 24px;
        background-image: url("/cursor-black.svg");
        background-size: contain;
        background-repeat: no-repeat;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s var(--ease), opacity 0.2s var(--ease);
        transform: translate(-2px, -2px); /* Slight offset for center alignment */
      }
      .custom-cursor-pointer.is-hovering {
        transform: translate(-2px, -2px) scale(1.4);
        opacity: 0.7;
      }
    `}</style>
  );
}
