"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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

export default function Pricing() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const hash = "#pricing";

  useEffect(() => {
    controls.start(inView ? "show" : "hidden");
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(hash);
    }
  }, [controls, inView, setActiveSection, hash, timeOfLastClick]);

  const features = [
    "Conversas naturais",
    "Controle financeiro",
    "Listas de compras",
    "Tarefas",
    "Lembretes",
    "Pesquisas na internet",
    "Assuntos gerais",
    "Tudo via WhatsApp",
  ];

  return (
    <motion.section
      ref={ref}
      id="pricing"
      className="bg-gray-50 dark:bg-gray-800 py-16"
      initial="hidden"
      animate={controls}
      variants={container}
    >
      <div className="container-section">
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos e Preços</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comece agora sem compromisso e teste todas as funcionalidades.
          </p>
        </motion.div>

        <motion.div className="max-w-md mx-auto" variants={container}>
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
            variants={fadeUp}
          >
            <div className="bg-blue-800 p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Teste Gratuito</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-extrabold">30</span>
                <span className="ml-1 text-xl">dias</span>
              </div>
              <p className="mt-2 opacity-90">ou 50 interações, o que vier primeiro</p>
            </div>

            <div className="p-6">
              <ul className="space-y-4 mb-8">
                {features.map((feat, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center"
                    variants={fadeUp}
                  >
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feat}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href="https://wa.me/5522992615495?text=Olá%20Rabugento!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  variants={fadeUp}
                  className="w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="rabugento" size="lg" className="w-full rounded-lg">
                    Começar agora
                  </Button>
                </motion.div>
              </a>

              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                Sem cadastro, sem cartão de crédito.
              </p>
            </div>
          </motion.div>

          <motion.div className="mt-8 text-center" variants={fadeUp}>
            <p className="text-gray-600 dark:text-gray-400">
              Após o período de trial, planos a partir de{" "}
              <span className="font-bold">R$ 19,90/mês</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
