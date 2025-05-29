// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import ActiveSectionContextProvider from "@/context/active-section-context";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

/* ----- METADATA global da aplicação ----- */
export const metadata: Metadata = {
  title: "Rabugento.app | Seu assistente pessoal no WhatsApp",
  description:
    "Assistente pessoal inteligente no WhatsApp para controle de finanças, tarefas, lembretes e listas de compras. Direto e sem enrolação.",
  icons: {
    icon: "/favicon.ico",   // equivale ao <link rel="icon" …>
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

          {/* Conteúdo da página */}
          {children}

          {/* Botão scroll-to-top */}
          <ScrollToTop />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

