"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

type Project = {
  src: string;
  title: string;
  tag: string;
  span?: "tall" | "wide" | "square";
};

const projects: Project[] = [
  {
    src: "/portfolio/kitchen.jpg",
    title: "Cozinha moderna · acabamento mate",
    tag: "Remodelação",
    span: "tall",
  },
  {
    src: "/portfolio/shower-marble.jpg",
    title: "Casa de banho em mármore",
    tag: "Pós-obra",
    span: "square",
  },
  {
    src: "/portfolio/bathroom.jpg",
    title: "WC suite premium",
    tag: "Remodelação",
    span: "square",
  },
  {
    src: "/portfolio/living.jpg",
    title: "Sala com soalho restaurado",
    tag: "Limpeza pós-obra",
    span: "wide",
  },
  {
    src: "/portfolio/closet.jpg",
    title: "Walk-in closet",
    tag: "Carpintaria & limpeza",
    span: "square",
  },
  {
    src: "/portfolio/stairs.jpg",
    title: "Escadas com guarda em vidro",
    tag: "Obra concluída",
    span: "square",
  },
  {
    src: "/portfolio/room.jpg",
    title: "Quarto entregue chave-na-mão",
    tag: "Pintura & limpeza",
    span: "square",
  },
  {
    src: "/portfolio/floor.jpg",
    title: "Soalho colocado e limpo",
    tag: "Pós-obra",
    span: "square",
  },
  {
    src: "/portfolio/sink.jpg",
    title: "Lavatório suspenso minimal",
    tag: "Detalhe",
    span: "square",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="antes-depois" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
          data-reveal
        >
          <div className="max-w-2xl">
            <div className="quality-line" />
            <p className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-3">
              Portfólio
            </p>
            <h2 className="font-display font-extrabold text-navy text-3xl md:text-5xl leading-tight mb-4">
              Espaços que <span className="text-gold-gradient">renovamos</span> e
              entregamos impecáveis
            </h2>
            <p className="text-graphite-500 text-base md:text-lg">
              Cozinhas, casas de banho, soalhos, remodelações completas. Cada
              projecto entregue limpo, organizado e pronto a habitar.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !py-3 self-start md:self-auto whitespace-nowrap"
          >
            Pedir orçamento
          </a>
        </div>

        {/* Masonry-ish grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {projects.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setActive(p)}
              data-reveal={i % 2 === 0 ? "left" : "right"}
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
              className={`group relative overflow-hidden rounded-2xl border border-navy-100 card-lift focus:outline-none focus:ring-2 focus:ring-gold ${
                p.span === "tall"
                  ? "row-span-2"
                  : p.span === "wide"
                    ? "col-span-2"
                    : ""
              }`}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/20 to-transparent opacity-70 group-hover:opacity-95 transition-opacity" />
              <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-end text-left">
                <span className="inline-flex w-fit items-center gap-1 px-2.5 py-1 rounded-full bg-gold text-navy text-[10px] font-bold uppercase tracking-wider mb-2">
                  {p.tag}
                </span>
                <p className="text-white font-display font-bold text-sm md:text-base leading-snug drop-shadow">
                  {p.title}
                </p>
              </div>
              <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 text-navy items-center justify-center hidden group-hover:flex transition-all">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] bg-navy-900/90 backdrop-blur-sm flex items-center justify-center p-4 animate-[fadeUp_0.3s_ease-out]"
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-navy-800"
          >
            <img
              src={active.src}
              alt={active.title}
              className="w-full h-full max-h-[80vh] object-contain bg-navy-900"
            />
            <figcaption className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-navy-900 to-transparent flex flex-wrap justify-between items-end gap-3">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-full bg-gold text-navy text-[10px] font-bold uppercase tracking-wider mb-2">
                  {active.tag}
                </span>
                <p className="text-white font-display font-bold text-base md:text-lg">
                  {active.title}
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold !py-2.5 !px-5 text-sm"
              >
                Pedir orçamento
              </a>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
