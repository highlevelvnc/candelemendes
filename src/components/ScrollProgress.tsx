"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled =
        (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100;
      setPct(Math.min(100, Math.max(0, scrolled)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 inset-x-0 z-[60] h-[2px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-gold via-gold-300 to-gold transition-[width] duration-100 ease-out shadow-[0_0_10px_rgba(242,183,5,0.6)]"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
