'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";


const SECTIONS: { id: string; label: string }[] = [
  { id: '#how-it-works', label: 'COMO FUNCIONA' },
  { id: '#features', label: 'RECURSOS' },
  { id: '#differentials', label: 'DIFERENCIAIS' },
  { id: '#pricing', label: 'PLANOS' },
  { id: '#faq', label: 'FAQ' },
];

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="sticky top-0 z-50 w-full h-[60px] backdrop-blur bgoff-[#09285b] bg-white/90 dark:bg-gray-950/75 border-0 border-gray-200 m-0">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between py-0">
          <Link href="#hero" className="flex items-center gap-2">
            <Image src="/images/rabugento-logo.svg" alt="Rabugento" width={42} height={42} />
            <span className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight">Rabugento.app</span>
          </Link>

          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-6 h-[60px] flex items-center rounded-md m-0"
          >
            <ul className="flex gap-4 text-sm font-medium">
            {SECTIONS.map(({ id, label }) => (
              <li key={id} className="relative h-[60px] flex items-center">
                <Link
                  href={id}
                  className={clsx(
                    "px-3 py-2 transition",
                    activeSection === id
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-gray-200"
                  )}
                  onClick={() => {
                    setActiveSection(id as `#${string}`);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {label}
                  {activeSection === id && (
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
