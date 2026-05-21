"use client";

export function initScrollReveal() {
  if (typeof window === "undefined") return;

  const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
  els.forEach((el) => el.setAttribute("data-revealed", "false"));

  const reveal = (el: Element) => {
    el.setAttribute("data-revealed", "true");
  };

  if (typeof IntersectionObserver === "undefined") {
    els.forEach(reveal);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          reveal(entry.target);
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
  );

  els.forEach((el) => io.observe(el));

  // Fallback: forçar revelação após 3.5s (headless, tabs em background, etc.)
  window.setTimeout(() => {
    document
      .querySelectorAll<HTMLElement>('[data-reveal][data-revealed="false"]')
      .forEach(reveal);
  }, 3500);
}
