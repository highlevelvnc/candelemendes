const items = [
  { icon: "calendar", label: "Desde 2010", sub: "14+ anos no mercado" },
  { icon: "shield", label: "Qualidade garantida", sub: "Acabamento premium" },
  { icon: "team", label: "Equipa experiente", sub: "Profissionais formados" },
  { icon: "bolt", label: "Resposta rápida", sub: "Orçamento em 24h" },
  { icon: "tools", label: "Soluções completas", sub: "Limpeza e obra" },
];

export default function Authority() {
  return (
    <section className="relative bg-white py-14 md:py-20 border-b border-navy-50">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
          data-reveal
        >
          {items.map((it, i) => (
            <div
              key={it.label}
              className="group flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-50 to-white border border-navy-100 flex items-center justify-center text-navy group-hover:scale-110 group-hover:border-gold transition-all duration-300">
                  <Icon name={it.icon} />
                </div>
              </div>
              <p className="font-display font-bold text-navy text-sm md:text-base">
                {it.label}
              </p>
              <p className="text-xs text-graphite-400 mt-1">{it.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Icon({ name }: { name: string }) {
  const common = "w-7 h-7";
  switch (name) {
    case "calendar":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );
    case "shield":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "team":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case "bolt":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    default:
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      );
  }
}
