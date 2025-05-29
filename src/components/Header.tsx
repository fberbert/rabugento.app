'use client';

import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { usePathname } from 'next/navigation';


const SECTIONS: { hash: `#${string}`, href: string, label: string }[] = [
  { hash: "#how-it-works",  href: "/#how-it-works",  label: "COMO FUNCIONA" },
  { hash: "#features",      href: "/#features",       label: "RECURSOS" },
  { hash: "#differentials", href: "/#differentials",  label: "DIFERENCIAIS" },
  { hash: "#pricing",       href: "/#pricing",        label: "PLANOS" },
  { hash: "#faq",           href: "/#faq",            label: "FAQ" },
];

export default function Header() {
  const pathname = usePathname();
  const isLegalPage =
    pathname === '/terms-of-use' ||
    pathname === '/privacy-policy';
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // ao entrar em /terms-of-use ou /privacy-policy, limpa o highlight
  useEffect(() => {
    if (isLegalPage) {
      // cast necessário só para "escape" do tipo `#${string}`
      setActiveSection("" as any);
    }
  }, [isLegalPage, setActiveSection]);

  // visivel somente em tela grande
  return (
    <header className="hidden md:block sticky top-0 z-50 w-full h-[60px] backdrop-blur bgoff-[#09285b] bg-white/90 dark:bg-gray-950/75 border-0 border-gray-200 m-0">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between py-0">
          <Link 
            href="/#home" 
            scroll={false}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('#home');
              setTimeOfLastClick(Date.now());
            }}
            className="flex items-center gap-2"
          >
            <Image src="/images/rabugento-logo.svg" alt="Rabugento" width={42} height={42} />
            <span className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight">Rabugento.app</span>
          </Link>

          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-6 h-[60px] flex items-center rounded-md m-0"
          >
            <ul className="flex gap-4 text-sm font-medium">
            {SECTIONS.map(({ hash, href, label }) => (
              <li key={hash} className="relative h-[60px] flex items-center">
                <Link
                  href={href}
                  scroll={true}
                  className={clsx(
                    "px-3 py-2 transition",
                    activeSection === hash
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-gray-200"
                  )}
                  onClick={() => {
                    setActiveSection(hash);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {label}
                  {activeSection === hash && (
                    <motion.span
                      layoutId="active"
                      className="absolute inset-0 -z-10 bg-gray-200 dark:bg-gray-800"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
            </ul>
          </motion.nav>
        </nav>
      </div>
    </header>
  );
}
