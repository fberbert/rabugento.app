"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { MessageSquare, Clock, Zap, Layers } from "lucide-react";

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

export default function HowItWorks() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const hash = "#how-it-works";

  useEffect(() => {
    controls.start(inView ? "show" : "hidden");
    // Atualiza o contexto se entrou em view e já passou 1s desde o último clique
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(hash);
    }
  }, [controls, inView, setActiveSection, hash, timeOfLastClick]);

  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Adicione o Rabugento",
      description:
        "Adicione o número do Rabugento aos seus contatos do WhatsApp.",
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: "Inicie uma conversa",
      description:
        "Mande uma mensagem e comece seu período de trial de 30 dias.",
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Use comandos simples",
      description:
        "Fale naturalmente ou use comandos diretos para cada função.",
    },
    {
      icon: <Layers className="h-8 w-8 text-white" />,
      title: "Receba respostas diretas",
      description:
        "Sem enrolação, apenas resultados práticos e eficientes.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="how-it-works"
      className="bg-gray-50 dark:bg-gray-800 py-16"
      initial="hidden"
      animate={controls}
      variants={container}
    >
      <div className="container-section">
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Simples, direto e sem complicação. Exatamente como deve ser.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="bg-blue-800 rounded-full p-4 mb-4"
                variants={fadeUp}
              >
                {step.icon}
              </motion.div>
              <motion.h3 className="text-xl font-bold mb-2" variants={fadeUp}>
                {step.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-400"
                variants={fadeUp}
              >
                {step.description}
              </motion.p>
              <motion.div
                className="mt-4 flex items-center justify-center"
                variants={fadeUp}
              >
                <div className="w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
