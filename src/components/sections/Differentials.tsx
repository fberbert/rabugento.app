"use client";

import React from 'react';
import { MessageCircle, Shield, Users, XCircle } from 'lucide-react';
import useSectionInView from "@/lib/useSectionInView";

export default function Differentials() {
  const { ref } = useSectionInView("#differentials", 0.5);

  const differentials = [
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
      title: "Personalidade Única",
      description: "Direto e sarcástico como Dr. House. Sem enrolação, apenas resultados."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
      title: "Simplicidade",
      description: "Tudo no WhatsApp, sem apps adicionais para instalar ou contas para criar."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
      title: "Contexto",
      description: "Mantém histórico e entende fluxos de conversa, lembrando de suas preferências."
    },
    {
      icon: <XCircle className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
      title: "Versatilidade",
      description: "Use comandos diretos ou converse naturalmente, como preferir."
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16" ref={ref} id="differentials">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que o Rabugento é diferente</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Um assistente com personalidade que resolve problemas reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentials.map((item, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
