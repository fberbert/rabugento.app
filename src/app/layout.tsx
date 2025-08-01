// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

/* ----- METADATA global da aplicação ----- */
export const metadata: Metadata = {
  // Base URL for resolving relative Open Graph and Twitter image URLs
  metadataBase: new URL('https://rabugento.app'),
  title: "Rabugento.app | Seu assistente pessoal no WhatsApp",
  description:
    "Assistente pessoal inteligente no WhatsApp para controle de finanças, tarefas, lembretes e listas de compras. Direto e sem enrolação.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Rabugento.app | Seu assistente pessoal no WhatsApp",
    description: "Assistente pessoal inteligente no WhatsApp para controle de finanças, tarefas, lembretes e listas de compras. Direto e sem enrolação.",
    url: "https://rabugento.app",
    siteName: "Rabugento.app",
    images: [
      {
        url: "https://rabugento.app/site-rabugento.png",
        width: 1200,
        height: 630,
        alt: "Rabugento.app logo"
      }
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabugento.app | Seu assistente pessoal no WhatsApp",
    description: "Assistente pessoal inteligente no WhatsApp para controle de finanças, tarefas, lembretes e listas de compras. Direto e sem enrolação.",
    images: ["https://rabugento.app/site-rabugento.png"],
    site: "@rabugentoapp",
    creator: "@rabugentoapp"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ActiveSectionContextProvider>
          <Header />

          {/* Conteúdo da página */}
          {children}

          {/* Botão scroll-to-top */}
          <Footer />

          {/* Componente de rolagem para o topo */}
          <ScrollToTop />
          {/* Consentimento de cookies */}
          <CookieConsent />

          {/* Rodapé */}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
