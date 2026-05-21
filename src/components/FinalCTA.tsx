import { COMPANY, WHATSAPP_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative bg-navy-radial text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Background ornaments */}
      <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] bg-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[36rem] h-[36rem] bg-navy-400/30 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 md:px-8 text-center" data-reveal>
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          Resposta em menos de 24h
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6">
          Precisa de limpeza, remodelação{" "}
          <span className="text-gold-gradient">ou manutenção</span>?
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10">
          Fale com a {COMPANY.name} e peça o seu orçamento. Atendimento direto,
          sem intermediários — pelo WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base md:text-lg !px-8 !py-4"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Contactar pelo WhatsApp
          </a>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="btn-outline text-base md:text-lg"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            {COMPANY.phone}
          </a>
        </div>

        <p className="text-white/50 text-xs uppercase tracking-[0.3em] mt-10">
          {COMPANY.phone} · {COMPANY.instagram}
        </p>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.825 9.825 0 016.992 2.898 9.825 9.825 0 012.894 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
