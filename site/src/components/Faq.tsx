"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Em quanto tempo recebo um orçamento?",
    a: "Respondemos em menos de 24h úteis após contacto pelo WhatsApp. Para serviços maiores combinamos uma visita técnica sem compromisso.",
  },
  {
    q: "Trabalham em todo o Portugal?",
    a: "Cobrimos a área de Lisboa, Cascais, Sintra, Oeiras e arredores. Para outras zonas avaliamos a deslocação caso a caso.",
  },
  {
    q: "Fazem limpeza pós-obra para entrega de imóvel?",
    a: "Sim. É uma das nossas especialidades — removemos cimento, tinta, pó fino e detritos para que o imóvel seja entregue pronto a habitar.",
  },
  {
    q: "A equipa é segurada?",
    a: "Sim. Toda a equipa Candele & Mendes está formada e segurada. Trabalhamos com fatura e contratos de manutenção para empresas.",
  },
  {
    q: "Posso contratar limpeza regular para o meu escritório?",
    a: "Sim. Temos contratos mensais e semanais à medida para escritórios, clínicas, restaurantes e condomínios.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="text-center mb-12 md:mb-14" data-reveal>
          <div className="quality-line mx-auto" />
          <p className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-3">
            Perguntas frequentes
          </p>
          <h2 className="font-display font-extrabold text-navy text-3xl md:text-4xl leading-tight">
            Tudo o que precisa de saber{" "}
            <span className="text-gold-gradient">antes de pedir orçamento</span>
          </h2>
        </div>

        <div className="space-y-3" data-reveal>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? "border-gold-400 bg-gold-50/50"
                    : "border-navy-100 bg-white hover:border-navy-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-navy text-base md:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={`flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-gold text-navy rotate-180"
                        : "bg-navy-50 text-navy"
                    }`}
                  >
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
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-400 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-6 text-graphite-500 text-sm md:text-base leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
