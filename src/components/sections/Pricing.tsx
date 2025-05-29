"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import useSectionInView from '@/lib/useSectionInView';

export default function Pricing() {
  const { ref } = useSectionInView('#pricing', 0.5);
  const features = [
    "Controle financeiro completo",
    "Listas de compras",
    "Tarefas e lembretes",
    "Pesquisas na internet",
    "Conversas naturais",
    "Suporte via WhatsApp"
  ];

  return (
    <section id="pricing" className="bg-gray-50 dark:bg-gray-800 py-16" ref={ref}>
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos e Preços</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comece agora sem compromisso e teste todas as funcionalidades.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-blue-800 p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Trial Gratuito</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-extrabold">30</span>
                <span className="ml-1 text-xl">dias</span>
              </div>
              <p className="mt-2 opacity-90">ou 50 interações, o que vier primeiro</p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="rabugento" size="lg" className="w-full rounded-lg">
                Começar agora
              </Button>
              
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                Sem cartão de crédito. Cancele quando quiser.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Após o período de trial, planos a partir de <span className="font-bold">R$ 19,90/mês</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
