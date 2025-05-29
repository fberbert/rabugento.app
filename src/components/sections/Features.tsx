"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import {
  DollarSign,
  CheckSquare,
  Clock,
  Search,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const hash = "#features";

  useEffect(() => {
    controls.start(inView ? "show" : "hidden");
    // Atualiza o contexto se entrou em view e já passou 1s desde o último clique
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(hash);
    }
  }, [controls, inView, setActiveSection, hash, timeOfLastClick]);

  const features = [
    {
      icon: (
        <DollarSign className="h-10 w-10 text-blue-800 dark:text-blue-400" />
      ),
      title: "Controle Financeiro",
      description:
        "Registre despesas e receitas, consulte transações do mês, veja totais por categoria e acompanhe seu saldo financeiro.",
      example: "gastei 10 pilas na padaria",
    },
    {
      icon: (
        <CheckSquare className="h-10 w-10 text-blue-800 dark:text-blue-400" />
      ),
      title: "Listas de Compras",
      description:
        "Crie, atualize, marque itens como comprados ou remova produtos da lista com comandos simples.",
      example: "adiciona pão de queijo",
    },
    {
      icon: (
        <Clock className="h-10 w-10 text-blue-800 dark:text-blue-400" />
      ),
      title: "Tarefas e Lembretes",
      description:
        "Cadastre tarefas, atualize status e programe lembretes para qualquer data ou horário com notificações no WhatsApp.",
      example: "me lembre da reunião amanhã às 14h",
    },
    {
      icon: (
        <Search className="h-10 w-10 text-blue-800 dark:text-blue-400" />
      ),
      title: "Pesquisas na Internet",
      description:
        "Faça pesquisas rápidas usando comandos diretos, sem precisar sair do WhatsApp.",
      example: "pesquisa previsão do tempo em São Paulo",
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="features"
      className="py-16 bg-white dark:bg-gray-900"
      initial="hidden"
      animate={controls}
      variants={container}
    >
      <div className="container-section">
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funcionalidades sem frescura
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            O Rabugento resolve o que você precisa de forma direta e eficiente,
            direto no WhatsApp.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="feature-card flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div className="mb-4" variants={fadeUp}>
                {f.icon}
              </motion.div>
              <motion.h3 className="text-xl font-bold mb-2" variants={fadeUp}>
                {f.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-400 mb-4"
                variants={fadeUp}
              >
                {f.description}
              </motion.p>
              <motion.div
                className="mt-auto bg-gray-100 dark:bg-gray-800 p-3 rounded-lg w-full"
                variants={fadeUp}
              >
                <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                  <span className="text-blue-800 dark:text-blue-400">»</span>{" "}
                  “{f.example}”
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
