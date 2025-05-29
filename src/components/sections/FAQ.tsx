"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { ChevronDown, ChevronUp } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
  const controls = useAnimation();
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const hash = "#faq";

  useEffect(() => {
    controls.start(inView ? "show" : "hidden");
    // quando entrar E já passou 1s desde último clique de nav, atualiza o contexto
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(hash);
    }
  }, [controls, inView, setActiveSection, hash, timeOfLastClick]);

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      className="border-b border-gray-200 dark:border-gray-700"
      variants={fadeUp}
      initial="hidden"
      animate={controls}
    >
      <button
        className="flex justify-between items-center w-full py-4 text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-800 dark:text-blue-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-800 dark:text-blue-400" />
        )}
      </button>
      {isOpen && (
        <motion.div
          className="pb-4 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function FAQ() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    controls.start(inView ? "show" : "hidden");
  }, [controls, inView]);

  const faqItems = [
    {
      question: "Como começar a usar o Rabugento?",
      answer:
        "Basta adicionar o número do Rabugento aos seus contatos do WhatsApp e iniciar uma conversa. Você terá acesso imediato ao período de trial de 30 dias ou 50 interações, o que vier primeiro.",
    },
    {
      question: "Como o Rabugento protege meus dados?",
      answer:
        "O Rabugento segue rigorosas políticas de privacidade e segurança. Seus dados são criptografados e usados apenas para fornecer os serviços solicitados. Não compartilhamos suas informações com terceiros.",
    },
    {
      question: "Posso usar o Rabugento em grupos do WhatsApp?",
      answer:
        "Atualmente, o Rabugento funciona apenas em conversas individuais para garantir a privacidade e personalização do serviço. O suporte para grupos está em desenvolvimento.",
    },
    {
      question: "Como cancelar o serviço?",
      answer:
        "Para cancelar, basta enviar a mensagem 'cancelar assinatura' para o Rabugento. Você receberá uma confirmação e seu acesso continuará até o fim do período já pago.",
    },
    {
      question: "O que acontece após o período de trial?",
      answer:
        "Após o período de trial, você pode escolher um dos planos disponíveis para continuar usando o serviço. Se preferir não continuar, basta não fazer nada e o acesso será automaticamente encerrado.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="bg-white dark:bg-gray-900 py-16"
      initial="hidden"
      animate={controls}
      variants={container}
    >
      <div className="container-section">
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Tudo que você precisa saber sobre o Rabugento.app
          </p>
        </motion.div>

        <motion.div className="max-w-3xl mx-auto space-y-4" variants={container}>
          {faqItems.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
