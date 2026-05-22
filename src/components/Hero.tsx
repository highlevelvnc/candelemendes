"use client";

import { useEffect, useRef } from "react";
import { WHATSAPP_URL, COMPANY } from "@/lib/constants";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current || window.innerWidth < 768) return;
      const y = window.scrollY;
      imgRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(1.08)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center overflow-hidden isolate"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          ref={imgRef}
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage: "url('/portfolio/kitchen.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/80 to-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/30" />
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 -z-[5] pointer-events-none">
        <Sparkle className="top-[18%] left-[12%] w-4 h-4" delay="0s" />
        <Sparkle className="top-[28%] right-[18%] w-3 h-3" delay="1.2s" />
        <Sparkle className="bottom-[28%] left-[42%] w-5 h-5" delay="0.6s" />
        <Sparkle className="bottom-[18%] right-[28%] w-3 h-3" delay="2s" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8 pt-32 pb-20 md:pt-36 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 text-white">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] mb-6"
            data-reveal
            style={{ transitionDelay: "0ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Desde {COMPANY.since} · Portugal
          </div>
          <h1
            className="font-display font-extrabold text-[2.25rem] leading-[1.05] sm:text-5xl lg:text-[4rem] tracking-tight mb-6"
            data-reveal
            style={{ transitionDelay: "120ms" }}
          >
            Limpeza e Remodelações com{" "}
            <span className="text-gold-gradient">Qualidade</span>, Agilidade e{" "}
            <span className="text-gold-gradient">Confiança</span>.
          </h1>
          <p
            className="text-base sm:text-lg text-white/85 max-w-xl mb-9 leading-relaxed"
            data-reveal
            style={{ transitionDelay: "240ms" }}
          >
            Desde {COMPANY.since}, a {COMPANY.name} entrega soluções
            profissionais para cuidar, renovar e valorizar espaços residenciais
            e comerciais em Portugal.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            data-reveal
            style={{ transitionDelay: "360ms" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Pedir Orçamento pelo WhatsApp
            </a>
            <a href="#servicos" className="btn-outline text-base">
              Conhecer Serviços
            </a>
          </div>

          <div
            className="mt-12 grid grid-cols-3 max-w-md gap-6"
            data-reveal
            style={{ transitionDelay: "480ms" }}
          >
            <Stat value="14+" label="Anos de experiência" />
            <Stat value="500+" label="Projectos concluídos" />
            <Stat value="100%" label="Compromisso" />
          </div>
        </div>

        {/* Right floating card — foto real da equipa */}
        <div className="lg:col-span-5 hidden lg:block" data-reveal="right">
          <div className="relative">
            <div className="absolute -inset-6 bg-gold/25 blur-3xl rounded-full" />

            {/* Foto da equipa */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/5]">
              <img
                src="/portfolio/team.jpg"
                alt="Equipa Candele & Mendes em acção"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />

              {/* Glass overlay com checklist */}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold mb-2">
                    Resposta em 24h
                  </p>
                  <p className="font-display text-lg text-white font-bold leading-snug mb-4">
                    Equipa profissional, atenta ao detalhe.
                  </p>
                  <ul className="space-y-2 text-white/95 text-xs">
                    {[
                      "Visita técnica sem compromisso",
                      "Equipa experiente e segurada",
                      "Acabamento premium garantido",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckIcon className="mt-0.5 w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Badge "desde 2010" */}
            <div className="absolute -top-4 -left-4 bg-gold text-navy rounded-2xl shadow-gold p-4 max-w-[160px] rotate-[-4deg]">
              <p className="font-display font-extrabold text-3xl leading-none">
                14+
              </p>
              <p className="text-[10px] uppercase tracking-wider mt-1 font-bold">
                Anos de experiência
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicos"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors hidden md:flex flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="block h-8 w-px bg-white/40 animate-pulse" />
      </a>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display font-extrabold text-2xl sm:text-3xl text-gold">
        {value}
      </p>
      <p className="text-[11px] uppercase tracking-wider text-white/70 mt-1 leading-tight">
        {label}
      </p>
    </div>
  );
}

function Sparkle({ className, delay }: { className: string; delay: string }) {
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.825 9.825 0 016.992 2.898 9.825 9.825 0 012.894 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
