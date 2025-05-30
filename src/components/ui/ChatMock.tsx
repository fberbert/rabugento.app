// src/components/ui/ChatMock.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.6, // intervalo entre bolhas
      when: "beforeChildren",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const swipeFromLeft = {
  hidden: { opacity: 0, x: -100 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const swipeFromRight = {
  hidden: { opacity: 0, x: 100 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function ChatMock() {
  const bubbles = [
    { user: true,  text: "Como tá minha lista de compras?" },
    {
      user: false,
      text: "Sua lista de compras até agora:",
      list: [
        "🥔 Batata inglesa",
        "🧴 Molho inglês",
        "🥛 Leite condensado",
        "🥤 Coca-Cola Zero",
      ],
    },
    { user: true,  text: "Me lembra do dentista amanhã às 10h" },
    { user: false, text: "Claro! Vou te lembrar do dentista amanhã às 10h." },
    { user: true,  text: "Gastei R$ 180,00 de combustível" },
    {
      user: false,
      text: "Registrado! Seus gastos totais neste mês são de R$ 1.254,81.",
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}   // dispara só uma vez
      className="flex-1 relative overflow-x-hidden"
    >
      {/* Cabeçalho */}
      <motion.div
        variants={fadeUp}
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-4 border border-gray-200 dark:border-gray-700 mb-6"
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

        {/* Bolhas */}
        <motion.ul variants={container} className="space-y-4 pt-2 pb-8">
          {bubbles.map((b, i) => (
            <motion.li
              key={i}
              variants={b.user ? swipeFromRight : swipeFromLeft}
              className={
                b.user ? "chat-bubble chat-bubble-user" : "chat-bubble chat-bubble-bot"
              }
            >
              <p>{b.text}</p>
              {b.list && (
                <ul className="mt-2 list-disc list-inside space-y-1">
                  {b.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </motion.ul>

      </motion.div>


    </motion.div>
  );
}
