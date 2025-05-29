"use client";

import React from 'react';
import { DollarSign, CheckSquare, Clock, Search } from 'lucide-react';
import useSectionInView from "@/lib/useSectionInView";

export default function Features() {
  const { ref } = useSectionInView("#features", 0.5);

  const features = [
    {
      icon: <DollarSign className="h-10 w-10 text-blue-800 dark:text-blue-400" />,
      title: "Controle Financeiro",
      description: "Registre despesas e receitas, consulte transações do mês, veja totais por categoria e acompanhe seu saldo financeiro.",
      example: "gastei 10 pilas na padaria"
    },
    {
      icon: <CheckSquare className="h-10 w-10 text-blue-800 dark:text-blue-400" />,
      title: "Listas de Compras",
      description: "Crie, atualize, marque itens como comprados ou remova produtos da lista com comandos simples.",
      example: "adiciona pão de queijo"
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-800 dark:text-blue-400" />,
      title: "Tarefas e Lembretes",
      description: "Cadastre tarefas, atualize status e programe lembretes para qualquer data ou horário com notificações no WhatsApp.",
      example: "me lembre da reunião amanhã às 14h"
    },
    {
      icon: <Search className="h-10 w-10 text-blue-800 dark:text-blue-400" />,
      title: "Pesquisas na Internet",
      description: "Faça pesquisas rápidas usando comandos diretos, sem precisar sair do WhatsApp.",
      example: "pesquisa previsão do tempo em São Paulo"
    }
  ];

  return (
    <section id="features" className="py-16 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Funcionalidades sem frescura</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            O Rabugento resolve o que você precisa de forma direta e eficiente, direto no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card flex flex-col items-center text-center">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
              <div className="mt-auto bg-gray-100 dark:bg-gray-800 p-3 rounded-lg w-full">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                  <span className="text-blue-800 dark:text-blue-400">»</span> &quot;{feature.example}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
