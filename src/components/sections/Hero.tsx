import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900">
      <div className="container-section flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 rounded-full">
            <p className="text-sm font-medium text-blue-800 dark:text-blue-300 flex items-center">
              <span className="mr-2">🤖</span> Assistente pessoal no WhatsApp
            </p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Rabugento.app: <span className="text-blue-800 dark:text-blue-400">O assistente que resolve sua vida</span> sem enrolação
          </h1>
          
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Seu assistente pessoal direto e prático no WhatsApp. Controle finanças, tarefas, lembretes e compras sem precisar instalar mais nada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://wa.me/5522992615495?text=Olá Rabugento!" target="_blank" rel="noopener noreferrer">
              <Button variant="rabugento" size="xl" className="rounded-full">
                <MessageSquare className="mr-2 h-5 w-5" />
                Comece seu Trial de 30 dias
              </Button>
            </a>
            <Button variant="rabugentoOutline" size="xl" className="rounded-full">
              Como funciona
            </Button>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 inline-flex items-center shadow-md">
            <span className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-full">
              <span className="text-green-700 dark:text-green-400 text-lg">✓</span>
            </span>
            <span className="ml-2 text-sm font-medium">100% no WhatsApp - Sem apps para instalar</span>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-4 border border-gray-200 dark:border-gray-700">
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
              
              <div className="py-4 space-y-4">
                <div className="chat-bubble chat-bubble-bot">
                  <p>Aqui é <strong>Rabugento, o assistente</strong> 😎. Você está iniciando seu período de testes (<strong>TRIAL</strong>) de 30 dias ⏳ ou 50 interações, o que vier primeiro.</p>
                </div>
                
                <div className="chat-bubble chat-bubble-user">
                  <p>Preciso controlar meus gastos. Como você pode me ajudar?</p>
                </div>
                
                <div className="chat-bubble chat-bubble-bot">
                  <p>Simples. Se você gastou R$ 10 na padaria, diga "gastei 10 pilas na padaria" e eu registro. Pergunte "quanto gastei este mês?" e eu mostro por categoria. Sem frescura, direto ao ponto. 💰</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
