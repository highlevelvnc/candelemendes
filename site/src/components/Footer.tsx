import { COMPANY, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 border-t border-navy-700">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <Logo size={48} />
            <div>
              <p className="font-display font-bold text-base">{COMPANY.name}</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                Desde {COMPANY.since}
              </p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-5">
            {COMPANY.tagline}. Limpeza profissional, remodelações e manutenção
            em todo o {COMPANY.region}.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !py-2.5 !px-5 text-sm"
          >
            Pedir Orçamento
          </a>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-5">
            Serviços
          </h4>
          <ul className="space-y-3 text-sm text-white/75">
            {[
              "Limpeza Profissional",
              "Limpeza Pós-Obra",
              "Remodelações",
              "Manutenção",
              "Higienização",
            ].map((s) => (
              <li key={s}>
                <a href="#servicos" className="hover:text-gold transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-5">
            Navegação
          </h4>
          <ul className="space-y-3 text-sm text-white/75">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-gold transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-5">
            Contacto
          </h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="hover:text-gold transition-colors flex items-center gap-2"
              >
                <PhoneIcon /> {COMPANY.phone}
              </a>
            </li>
            <li>
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors flex items-center gap-2"
              >
                <IgIcon /> {COMPANY.instagram}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors flex items-center gap-2"
              >
                <WaIcon /> WhatsApp
              </a>
            </li>
            <li className="text-white/60 pt-2">{COMPANY.region}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-white/50">
        <p>
          © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos
          reservados.
        </p>
        <p>Soluções de Limpeza e Remodelações · Portugal</p>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function IgIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function WaIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.52 3.48A12 12 0 003.48 20.52L2 22l1.48-1.48A12 12 0 0020.52 3.48zM12 21.5a9.5 9.5 0 01-4.85-1.32l-.34-.2-3.6.95.96-3.5-.22-.36A9.5 9.5 0 1112 21.5z" />
    </svg>
  );
}
