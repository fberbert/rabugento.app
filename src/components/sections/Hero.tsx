"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const hash = "#home";

  useEffect(() => {
    controls.start(inView ? "show" : "hidden");
    // Atualiza o contexto se entrou em view e já passou 1s desde o último clique
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(hash);
    }
  }, [controls, inView, setActiveSection, hash, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      id="home"
      className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 py-16"
      initial="hidden"
      animate={controls}
      variants={container}
    >
      <div className="container-section flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Coluna de texto */}
        <motion.div className="flex-1 space-y-6" variants={container}>
          <motion.div
            className="inline-block bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 rounded-full"
            variants={fadeUp}
          >
            <p className="text-sm font-medium text-blue-800 dark:text-blue-300 flex items-center">
              <span className="mr-2">🤖</span> Assistente pessoal no WhatsApp
            </p>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            variants={fadeUp}
          >
            Rabugento.app:{" "}
            <span className="text-blue-800 dark:text-blue-400">
              O assistente que resolve sua vida
            </span>{" "}
            sem enrolação
          </motion.h1>

          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300"
            variants={fadeUp}
          >
            Seu assistente pessoal direto e prático no WhatsApp. Controle
            finanças, tarefas, lembretes e compras sem precisar instalar mais
            nada.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-0"
            variants={fadeUp}
          >
            <a
              href="https://wa.me/5522992615495?text=Olá%20Rabugento!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center"
            >
              <motion.div
                className="bg-blue-800 hover:bg-blue-700 text-white dark:hover:bg-blue-600 transition-colors duration-200 dark:bg-blue-800 rounded-lg inline-flex items-center shadow-md w-full justify-center h-[80px] p-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                Teste grátis no WhatsApp
              </motion.div>
            </a>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg p-3 flex items-center shadow-md w-full justify-center h-[80px]"
            variants={fadeUp}
          >
            <span className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-full">
              <span className="text-green-700 dark:text-green-400 text-lg">
                ✓
              </span>
            </span>
            <span className="ml-2 text-sm font-medium">
              100% no WhatsApp - Sem apps para instalar
            </span>
          </motion.div>
        </motion.div>

        {/* Coluna do mock de chat */}
        <motion.div className="flex-1 relative" variants={fadeUp}>
          <div className="relative w-full max-w-md mx-auto">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-4 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-3">
                <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/rabugento-blue-no-text.svg"
                    alt="Rabugento Avatar"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Rabugento</p>
                  <p className="text-xs text-gray-500">Assistente Pessoal</p>
                </div>
              </div>

              <div className="py-4 space-y-4">
                <motion.div
                  className="chat-bubble chat-bubble-user"
                  variants={fadeUp}
                >
                  <p>Como tá minha lista de compras?</p>
                </motion.div>
                <motion.div
                  className="chat-bubble chat-bubble-bot"
                  variants={fadeUp}
                >
                  <p>Sua lista de compras até agora:</p>
                  <ul>
                    <li>🥔 Batata inglesa</li>
                    <li>🧴 Molho inglês</li>
                    <li>🥛 Leite condensado</li>
                    <li>🥤 Coca-Cola Zero</li>
                  </ul>
                </motion.div>
                <motion.div
                  className="chat-bubble chat-bubble-user"
                  variants={fadeUp}
                >
                  <p>Me lembra do dentista amanhã às 10h</p>
                </motion.div>
                <motion.div
                  className="chat-bubble chat-bubble-bot"
                  variants={fadeUp}
                >
                  <p>Claro! Vou te lembrar do dentista amanhã às 10h.</p>
                </motion.div>
                <motion.div
                  className="chat-bubble chat-bubble-user"
                  variants={fadeUp}
                >
                  <p>Gastei R$ 180,00 de combustível</p>
                </motion.div>
                <motion.div
                  className="chat-bubble chat-bubble-bot"
                  variants={fadeUp}
                >
                  <p>
                    Registrado! Seus gastos totais neste mês são de R$ 1.254,81.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
