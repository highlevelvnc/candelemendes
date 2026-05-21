"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP_URL, COMPANY } from "@/lib/constants";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(13,56,76,0.18)] border-b border-navy-100/60"
          : "bg-gradient-to-b from-navy-900/30 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 py-3 md:py-4">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="flex-shrink-0">
            <Logo size={44} variant="dark" />
          </div>
          <div className="hidden sm:block">
            <p
              className={`font-display font-bold text-base leading-tight ${
                scrolled ? "text-navy" : "text-white"
              }`}
            >
              {COMPANY.name}
            </p>
            <p
              className={`text-[11px] uppercase tracking-[0.18em] ${
                scrolled ? "text-graphite-400" : "text-white/70"
              }`}
            >
              Desde {COMPANY.since}
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled
                  ? "text-graphite-700 hover:text-navy"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden md:inline-flex !py-2.5 !px-5 text-sm"
          >
            Pedir Orçamento
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[68px] bg-white shadow-xl border-t border-navy-100 transition-all duration-400 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-navy font-medium rounded-lg hover:bg-navy-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-gold mt-3 w-full"
          >
            Pedir Orçamento pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
