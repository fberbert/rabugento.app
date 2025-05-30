// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const SECTIONS: { hash: `#${string}`; href: string; label: string }[] = [
  { hash: "#how-it-works",  href: "/#how-it-works",  label: "COMO FUNCIONA" },
  { hash: "#features",      href: "/#features",       label: "RECURSOS" },
  { hash: "#differentials", href: "/#differentials",  label: "DIFERENCIAIS" },
  { hash: "#pricing",       href: "/#pricing",        label: "PLANOS" },
  { hash: "#faq",           href: "/#faq",            label: "FAQ" },
];

export default function Header() {
  const pathname = usePathname();
  const isLegalPage =
    pathname === "/terms-of-use" || pathname === "/privacy-policy";

  const {
    activeSection,
    setActiveSection,
    setTimeOfLastClick,
  } = useActiveSectionContext();

  // clear highlight on legal pages
  useEffect(() => {
    if (isLegalPage) setActiveSection("" as `#${string}`);
  }, [isLegalPage, setActiveSection]);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (hash: string, href: string) => {
    setMenuOpen(false);

    if (isLegalPage) {
      // Em página legal, navega pra Home+âncora
      window.location.href = href;
      return;
    }

    // no home, scroll to top
    setActiveSection(hash as `#${string}`);
    setTimeOfLastClick(Date.now());

    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="block md:hidden fixed top-0 left-0 w-full z-50 bg-gray-950 dark:bg-gray-950/90 backdrop-blur  py-2 border-0 h-[72px]">
        <div className="flex items-center justify-between px-4 h-14">
          <Link
            href="/#home"
            scroll={false}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              handleNavClick("#home", "/#home");
            }}
            className="flex items-center gap-2"
          >
            <Image
              src="/images/rabugento-logo.svg"
              alt="Rabugento"
              width={30}
              height={30}
            />
            <span className="font-bold text-lg text-gray-900 dark:text-white">
              Rabugento.app
            </span>
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 text-gray-700 dark:text-gray-200"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <motion.nav
          initial={{ x: "100%" }}
          animate={{ x: menuOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-[72px] right-0 bottom-0 w-3/4 bg-white dark:bg-gray-900 shadow-lg z-50 p-0"
        >
          <ul className="flex flex-col gap-6 bg-gray-800 dark:bg-gray-800 backdrop-blur rounded-lg p-4 m-0">
            {SECTIONS.map(({ hash, href, label }) => (
              <li key={hash}>
                <Link
                  href={href}
                  scroll={false}
                  className={clsx(
                    "block text-lg",
                    activeSection === hash
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  )}
                  onClick={() => handleNavClick(hash, href)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      </header>

      {/* Desktop Header */}
      <header className="hidden md:block sticky top-0 z-50 w-full h-[60px] backdrop-blur bg-gray-950/75 dark:bg-gray-950/75 border-0">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between h-[60px]">
            <Link
              href="/#home"
              scroll={false}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                handleNavClick("#home", "/#home");
              }}
              className="flex items-center gap-2"
            >
              <Image
                src="/images/rabugento-logo.svg"
                alt="Rabugento"
                width={42}
                height={42}
              />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Rabugento.app
              </span>
            </Link>

            <motion.nav
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-center h-[60px]"
            >
              <ul className="flex gap-6 text-sm font-medium">
                {SECTIONS.map(({ hash, href, label }) => {
                  const isActive = !isLegalPage && activeSection === hash;
                  return (
                    <li key={hash} className="relative h-[60px] flex items-center">
                      <Link
                        href={href}
                        scroll={false}
                        className={clsx(
                          "px-3 py-2 transition",
                          isActive
                            ? "text-primary-600 dark:text-primary-400"
                            : "text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                        )}
                        onClick={() => handleNavClick(hash, href)}
                      >
                        {label}
                        {isActive && (
                          <motion.span
                            layoutId="active"
                            className="absolute inset-0 -z-10 rounded bg-gray-200 dark:bg-gray-800"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          </nav>
        </div>
      </header>
    </>
  );
}
