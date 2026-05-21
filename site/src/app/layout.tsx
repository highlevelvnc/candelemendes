import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://candelemendes.pt"),
  title: "Candele & Mendes | Limpeza Profissional e Remodelações em Portugal",
  description:
    "Desde 2010, a Candele & Mendes oferece soluções de limpeza profissional, remodelações e manutenção com qualidade, agilidade e confiança em Portugal. Peça orçamento pelo WhatsApp.",
  keywords: [
    "limpeza profissional",
    "limpeza pós-obra",
    "remodelações Portugal",
    "manutenção",
    "Candele Mendes",
    "serviços de limpeza",
  ],
  authors: [{ name: "Candele & Mendes" }],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://candelemendes.pt",
    siteName: "Candele & Mendes",
    title: "Candele & Mendes | Limpeza e Remodelações em Portugal",
    description:
      "Desde 2010 — limpeza profissional, pós-obra, remodelações e manutenção. Qualidade, agilidade e confiança.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Candele & Mendes | Limpeza e Remodelações",
    description:
      "Soluções profissionais de limpeza e remodelações em Portugal desde 2010.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0D384C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
