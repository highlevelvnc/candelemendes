const items = [
  {
    text: "Serviço de limpeza pós-obra impecável. A casa foi entregue pronta a habitar, sem um grão de pó. Recomendo vivamente!",
    name: "Maria Silva",
    role: "Cliente residencial",
    city: "Lisboa",
    initials: "MS",
  },
  {
    text: "Remodelaram a minha cozinha em tempo recorde e com acabamento de primeira. Equipa extremamente educada e organizada.",
    name: "João Santos",
    role: "Proprietário",
    city: "Cascais",
    initials: "JS",
  },
  {
    text: "Profissionais de confiança. Faço manutenção regular no meu escritório há anos e nunca falharam no padrão de qualidade.",
    name: "Ana Ferreira",
    role: "Gerente comercial",
    city: "Porto",
    initials: "AF",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-navy-50/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20" data-reveal>
          <div className="quality-line mx-auto" />
          <p className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-3">
            Depoimentos
          </p>
          <h2 className="font-display font-extrabold text-navy text-3xl md:text-5xl leading-tight">
            O que dizem os{" "}
            <span className="text-gold-gradient">nossos clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {items.map((t, i) => (
            <article
              key={t.name}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="card-lift relative bg-white rounded-2xl border border-navy-100 p-7 md:p-8 flex flex-col"
            >
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-gold/30"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>

              <div className="flex text-gold mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} />
                ))}
              </div>

              <p className="text-graphite-600 italic leading-relaxed mb-6 flex-1">
                “{t.text}”
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-navy-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-navy to-navy-700 text-white font-bold flex items-center justify-center text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-display font-bold text-navy text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-graphite-400">
                    {t.role} · {t.city}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
