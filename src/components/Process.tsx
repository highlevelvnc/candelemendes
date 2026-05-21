const steps = [
  {
    n: "01",
    title: "Contacto inicial",
    desc: "Fale connosco pelo WhatsApp e descreva a sua necessidade.",
  },
  {
    n: "02",
    title: "Avaliação do serviço",
    desc: "Visita técnica e orçamento detalhado sem compromisso.",
  },
  {
    n: "03",
    title: "Execução profissional",
    desc: "A nossa equipa entra em acção com máximo profissionalismo.",
  },
  {
    n: "04",
    title: "Entrega com qualidade",
    desc: "Espaço pronto e vistoriado para a sua total aprovação.",
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      className="relative bg-navy-radial text-white py-20 md:py-28 overflow-hidden"
    >
      {/* decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gold/15 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20" data-reveal>
          <div className="quality-line mx-auto" />
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-3">
            Como trabalhamos
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight mb-4">
            Um processo simples, claro e{" "}
            <span className="text-gold-gradient">transparente</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            Do primeiro contacto à entrega final, acompanhamos cada etapa com
            organização e rigor.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          {steps.map((s, i) => (
            <div
              key={s.n}
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-7 h-full hover:border-gold/40 hover:bg-white/[0.07] transition-all duration-400">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gold text-navy font-display font-extrabold text-lg shadow-gold group-hover:scale-110 transition-transform">
                    {s.n}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">
                  {s.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
