import { COMPANY, WHATSAPP_URL } from "@/lib/constants";

export default function About() {
  return (
    <section id="sobre" className="relative bg-navy-50/40 py-20 md:py-28 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6" data-reveal="left">
            <div className="quality-line" />
            <p className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-3">
              Sobre nós
            </p>
            <h2 className="font-display font-extrabold text-navy text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Mais de uma década de excelência no{" "}
              <span className="text-gold-gradient">mercado português</span>
            </h2>
            <p className="text-graphite-500 text-base md:text-lg leading-relaxed mb-5">
              A {COMPANY.name} nasceu com o compromisso de entregar serviços de
              limpeza e remodelações com profissionalismo, cuidado e confiança.
              Desde {COMPANY.since}, trabalhamos para transformar espaços,
              oferecendo soluções ágeis, organizadas e adaptadas a cada cliente.
            </p>
            <p className="text-graphite-500 text-base md:text-lg leading-relaxed mb-8">
              A nossa equipa é formada por especialistas dedicados que entendem
              que cada projecto é único. Seja uma limpeza profunda ou uma
              remodelação completa, tratamos o seu espaço como se fosse o nosso.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <Big number="14+" label="Anos de mercado" />
              <Big number="500+" label="Projectos concluídos" />
              <Big number="100%" label="Satisfação" />
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Falar com a equipa
            </a>
          </div>

          <div className="lg:col-span-6 relative" data-reveal="right">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gold/30 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-navy aspect-[4/5] sm:aspect-[5/4]">
                <img
                  src="/portfolio/team.jpg"
                  alt="Equipa Candele & Mendes em acção"
                  className="w-full h-full object-cover object-[center_30%]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl shadow-xl border border-navy-100 p-5 max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-navy to-navy-700 border-2 border-white text-white text-xs flex items-center justify-center font-semibold"
                      >
                        {["MS", "JS", "AF"][i - 1]}
                      </div>
                    ))}
                  </div>
                  <div className="flex text-gold">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-graphite-500 leading-snug">
                  +500 clientes satisfeitos em residências e empresas em todo o
                  país.
                </p>
              </div>

              {/* Top right badge */}
              <div className="absolute -top-4 -right-2 md:-right-6 bg-navy text-white rounded-2xl shadow-navy p-4 max-w-[200px]">
                <p className="font-display font-extrabold text-3xl text-gold leading-none">
                  {new Date().getFullYear() - COMPANY.since}+
                </p>
                <p className="text-xs uppercase tracking-wider opacity-80 mt-1">
                  Anos a transformar espaços
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Big({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-xl border border-navy-100 bg-white p-4">
      <p className="font-display font-extrabold text-navy text-2xl md:text-3xl">
        {number}
      </p>
      <p className="text-[11px] uppercase tracking-wider text-graphite-400 mt-1 leading-tight">
        {label}
      </p>
    </div>
  );
}

function Star() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
