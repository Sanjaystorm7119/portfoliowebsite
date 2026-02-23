"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let trailX = 0, trailY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }

      const animate = () => {
        trailX += (e.clientX - trailX) * 0.12;
        trailY += (e.clientY - trailY) * 0.12;
        if (trailRef.current) {
          trailRef.current.style.left = trailX + "px";
          trailRef.current.style.top = trailY + "px";
        }
        animId = requestAnimationFrame(animate);
      };
      cancelAnimationFrame(animId);
      animate();
    };

    const onEnter = () => trailRef.current?.classList.add("hovered");
    const onLeave = () => trailRef.current?.classList.remove("hovered");

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [role=button]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
}
