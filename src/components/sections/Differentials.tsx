"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { MessageCircle, Check, Users, ThumbsUp, Mic, Volume2 } from "lucide-react";

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

export default function Differentials() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const hash = "#differentials";

  useEffect(() => {
    controls.start(inView ? "show" : "hidden");
    // Atualiza o contexto se entrou em view e já passou 1s desde o último clique
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(hash);
    }
  }, [controls, inView, setActiveSection, hash, timeOfLastClick]);

  const differentials = [
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
      title: "Personalidade Única",
      description: "Direto e objetivo como todo bom rabugento. Sem enrolação, apenas resultados.",
    },
    {
      icon: <Check className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
      title: "Simplicidade",
      description: "Tudo no WhatsApp, sem apps adicionais para instalar ou contas para criar.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
      title: "Contexto",
      description: "Mantém histórico e entende fluxos de conversa, lembrando de suas preferências.",
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
      title: "Versatilidade",
      description: "Converse naturalmente, sem a necessidade de comandos complexos. O Rabugento entende você.",
    },
    {
      icon: <Mic className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
      title: "Interação por Voz",
      description: "Você pode enviar mensagens tanto de voz quanto de texto, tornando a experiência mais fluida.",
    },
    {
      icon: <Volume2 className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
      title: "Respostas por Áudio",
      description: "O Rabugento pode responder suas perguntas com mensagens de áudio, basta você pedir.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="differentials"
      className="bg-gradient-to-b to-blue-950 from-gray-900 pt-10 pb-2"
      initial="hidden"
      animate={controls}
      variants={container}
    >
      <div className="container-section">
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que o Rabugento é diferente
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Um assistente com personalidade que resolve problemas reais, diretamente no WhatsApp. 
            Sem a necessidade de usar outros aplicativos ou criar contas.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container}>
          {differentials.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex items-start"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
);
}
