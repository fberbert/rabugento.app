"use client";

import React from 'react';
import { MessageSquare, Clock, Zap, Layers } from 'lucide-react';
import useSectionInView from "@/lib/useSectionInView";

export default function HowItWorks() {
  const { ref } = useSectionInView("#how-it-works", 0.5);
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Adicione o Rabugento",
      description: "Adicione o número do Rabugento aos seus contatos do WhatsApp."
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: "Inicie uma conversa",
      description: "Mande uma mensagem e comece seu período de trial de 30 dias."
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Use comandos simples",
      description: "Fale naturalmente ou use comandos diretos para cada função."
    },
    {
      icon: <Layers className="h-8 w-8 text-white" />,
      title: "Receba respostas diretas",
      description: "Sem enrolação, apenas resultados práticos e eficientes."
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16" id="how-it-works" ref={ref}>
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Simples, direto e sem complicação. Exatamente como deve ser.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-800 rounded-full p-4 mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              <div className="mt-4 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block h-0.5 w-full bg-blue-800"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
