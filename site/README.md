# Candele & Mendes — Landing Page

Site oficial em Next.js 15 + TypeScript + Tailwind 3.

## Stack

- Next.js 15 App Router
- React 19 RC
- TypeScript
- Tailwind 3
- IntersectionObserver para scroll-reveal (com fallback 3.5s)
- Animação parallax no hero
- Fonte: Montserrat (display) + Inter (body)

## Comandos

```bash
npm install
npm run dev
npm run build
```

## Configuração

Editar `src/lib/constants.ts` para alterar:

- `WHATSAPP_URL` — link do WhatsApp
- `COMPANY` — nome, telefone, instagram, etc.
- `NAV_LINKS` — menu

## Identidade visual

- **Azul petróleo:** `#0D384C` (navy)
- **Dourado:** `#F2B705` (gold)
- **Grafite:** `#2B2B2B` (graphite)

Definidas em `tailwind.config.ts` com escalas completas (50–900).

## Estrutura

```
src/
├── app/
│   ├── layout.tsx        # metadata, fontes, html lang=pt-PT
│   ├── page.tsx          # composição da página
│   └── globals.css       # reveal CSS, btn-gold, btn-outline
├── components/           # secções
└── lib/
    ├── constants.ts      # WhatsApp, empresa, nav
    └── scrollReveal.ts   # IO + fallback 3500ms
```
