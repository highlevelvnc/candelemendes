"use client";

import { useEffect, useState } from "react";

/**
 * Loader temático limpeza & remodelações:
 * - Fundo navy (cor primária)
 * - Logo C&M com sweep dourado (efeito "polish")
 * - Escova SVG que varre da esquerda para a direita deixando rasto de sparkles
 * - Barra de progresso dourada
 * - Dura no máximo 1.4s — depois fade out
 * - Respeita prefers-reduced-motion (mostra brevemente e some)
 */
export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Esconde logo que DOM esteja pronto, com mínimo de 900ms para o efeito ser visível
    const start = performance.now();
    const minDuration = 900;

    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minDuration - elapsed);
      window.setTimeout(() => setHidden(true), wait);
    };

    if (document.readyState === "complete") finish();
    else {
      window.addEventListener("load", finish, { once: true });
      // Fallback de segurança: nunca ficar mais que 2.5s
      window.setTimeout(finish, 2500);
    }
  }, []);

  useEffect(() => {
    if (!hidden) return;
    // Bloqueia scroll enquanto loader visível
    document.body.style.overflow = "";
    const t = window.setTimeout(() => setGone(true), 700);
    return () => window.clearTimeout(t);
  }, [hidden]);

  // Bloqueia scroll inicial
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-navy-900 transition-opacity duration-700 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        <Spark className="top-[18%] left-[20%] w-3 h-3" delay="0s" />
        <Spark className="top-[28%] right-[22%] w-2.5 h-2.5" delay="0.4s" />
        <Spark className="bottom-[24%] left-[28%] w-4 h-4" delay="0.8s" />
        <Spark className="bottom-[20%] right-[26%] w-3 h-3" delay="0.2s" />
        <Spark className="top-[42%] left-[12%] w-2 h-2" delay="0.6s" />
        <Spark className="top-[60%] right-[14%] w-2.5 h-2.5" delay="1s" />
      </div>

      {/* Halo dourado */}
      <div className="absolute h-72 w-72 rounded-full bg-gold/15 blur-3xl loader-halo" />

      <div className="relative flex flex-col items-center gap-8 px-6">
        {/* Logo com sweep dourado */}
        <div className="relative overflow-hidden rounded-2xl">
          <LoaderLogo />
          <div className="loader-sweep absolute inset-0" />
        </div>

        {/* Wordmark */}
        <div className="text-center">
          <p className="font-display font-extrabold text-white text-xl md:text-2xl tracking-tight">
            Candele &amp; Mendes
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-gold">
            Limpeza · Remodelações · Desde 2010
          </p>
        </div>

        {/* Escova a varrer + progress */}
        <div className="relative h-8 w-56">
          <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-white/10 overflow-hidden">
            <div className="loader-bar absolute left-0 top-0 h-full w-full bg-gold-shine bg-[length:200%_100%]" />
          </div>
          <div className="loader-broom absolute top-0 -mt-0.5">
            <BroomIcon />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes loader-sweep {
          0% { transform: translateX(-110%) skewX(-12deg); }
          60% { transform: translateX(110%) skewX(-12deg); }
          100% { transform: translateX(110%) skewX(-12deg); }
        }
        .loader-sweep {
          background: linear-gradient(
            100deg,
            rgba(242, 183, 5, 0) 20%,
            rgba(255, 216, 107, 0.55) 50%,
            rgba(242, 183, 5, 0) 80%
          );
          animation: loader-sweep 1.4s cubic-bezier(0.55, 0, 0.45, 1) infinite;
          mix-blend-mode: screen;
        }

        @keyframes loader-bar {
          0% { transform: scaleX(0); transform-origin: left; }
          100% { transform: scaleX(1); transform-origin: left; }
        }
        .loader-bar { animation: loader-bar 1.2s ease-out forwards; }

        @keyframes loader-broom {
          0% { left: -8%; transform: rotate(-8deg); }
          50% { transform: rotate(6deg); }
          100% { left: 100%; transform: rotate(-4deg); }
        }
        .loader-broom { animation: loader-broom 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

        @keyframes loader-halo {
          0%, 100% { transform: scale(1); opacity: 0.45; }
          50% { transform: scale(1.15); opacity: 0.75; }
        }
        .loader-halo { animation: loader-halo 2s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .loader-sweep, .loader-broom, .loader-halo, .loader-bar {
            animation-duration: 0.001s !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}

function LoaderLogo() {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="48"
        cy="48"
        r="44"
        fill="#F2B705"
        stroke="#FFD86B"
        strokeWidth="2"
      />
      <path d="M22 32 Q48 8 74 32 L74 35 L22 35 Z" fill="#0D384C" />
      <rect x="20" y="35" width="56" height="4" rx="2" fill="#0D384C" />
      <text
        x="48"
        y="68"
        textAnchor="middle"
        fontFamily="Montserrat, system-ui, sans-serif"
        fontWeight="800"
        fontSize="26"
        fill="#0D384C"
        letterSpacing="-1"
      >
        C&amp;M
      </text>
      <rect x="30" y="78" width="36" height="5" rx="1.5" fill="#0D384C" />
      <rect x="32" y="83" width="32" height="4" fill="#0D384C" opacity="0.55" />
    </svg>
  );
}

function Spark({ className, delay }: { className: string; delay: string }) {
  return (
    <svg
      className={`absolute text-gold animate-sparkle ${className}`}
      style={{ animationDelay: delay }}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

function BroomIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F2B705"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 4l-7 7" />
      <path d="M14 17l-3 3-6-6 3-3" />
      <path d="M5 14l5 5" />
      <path d="M14 17l4-1 3 3" />
      <path d="M11 20l1-3" />
    </svg>
  );
}
