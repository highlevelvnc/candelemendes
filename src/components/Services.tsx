import { WHATSAPP_URL } from "@/lib/constants";

type Service = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tags: string[];
};

const services: Service[] = [
  {
    title: "Limpeza Profissional",
    desc: "Limpeza meticulosa para residências e escritórios, mantendo ambientes impecáveis e saudáveis em todas as áreas.",
    tags: ["Residencial", "Comercial"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V10l7-7 7 7v11" />
        <path d="M9 14h6v7H9z" />
      </svg>
    ),
  },
  {
    title: "Limpeza Pós-Obra",
    desc: "Remoção profissional de resíduos de construção, poeira e detritos. Imóvel pronto a habitar no mesmo dia.",
    tags: ["Detalhista", "Industrial"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 7l5 5-9 9H5v-5z" />
        <path d="M16 5l3 3" />
        <path d="M3 3l4 4" />
      </svg>
    ),
  },
  {
    title: "Remodelações",
    desc: "Transformamos espaços com projectos de renovação modernos e materiais de alta qualidade — chave-na-mão.",
    tags: ["Cozinhas", "Casas de Banho"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22h20" />
        <path d="M4 22V8l8-6 8 6v14" />
        <path d="M9 22v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Manutenção",
    desc: "Contratos de manutenção regular para empresas e condomínios. Espaços sempre impecáveis, sem preocupações.",
    tags: ["Mensal", "Semanal"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Higienização de Espaços",
    desc: "Desinfecção profunda com produtos certificados. Ideal para clínicas, restaurantes, escritórios e habitações.",
    tags: ["Certificado", "Profundo"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 7h7l-5.5 4 2 8L12 17l-6.5 4 2-8L2 9h7z" />
      </svg>
    ),
  },
  {
    title: "Empresas e Residências",
    desc: "Soluções à medida — desde apartamentos a edifícios comerciais. Orçamento personalizado para cada cliente.",
    tags: ["B2B", "B2C"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="18" rx="1" />
        <rect x="14" y="8" width="7" height="13" rx="1" />
        <path d="M6 7h1M6 11h1M6 15h1M17 12h1M17 16h1" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-grain bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20" data-reveal>
          <div className="quality-line mx-auto" />
          <p className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-3">
            O que fazemos
          </p>
          <h2 className="font-display font-extrabold text-navy text-3xl md:text-5xl leading-tight mb-4">
            Serviços especializados em{" "}
            <span className="text-gold-gradient">limpeza e obra</span>
          </h2>
          <p className="text-graphite-500 text-base md:text-lg">
            Excelência em cada detalhe, da limpeza profunda à renovação total do
            seu espaço.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              className="group card-lift relative overflow-hidden bg-white rounded-2xl border border-navy-100 p-7 md:p-8"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-300 to-gold opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-400">
                <div className="w-7 h-7">{s.icon}</div>
              </div>

              <h3 className="font-display font-bold text-navy text-xl md:text-2xl mb-3">
                {s.title}
              </h3>
              <p className="text-graphite-500 text-sm md:text-base leading-relaxed mb-5">
                {s.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-navy-50 text-navy text-[11px] font-semibold uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-navy font-semibold text-sm uppercase tracking-wider group-hover:text-gold-600 group-hover:gap-3 transition-all"
              >
                Pedir orçamento
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
