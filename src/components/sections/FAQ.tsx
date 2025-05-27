"use client";

import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
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
        <div className="pb-4 text-gray-600 dark:text-gray-400">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export function FAQ() {
  const faqItems = [
    {
      question: "Como começar a usar o Rabugento?",
      answer: "Basta adicionar o número do Rabugento aos seus contatos do WhatsApp e iniciar uma conversa. Você terá acesso imediato ao período de trial de 30 dias ou 50 interações, o que vier primeiro."
    },
    {
      question: "Como o Rabugento protege meus dados?",
      answer: "O Rabugento segue rigorosas políticas de privacidade e segurança. Seus dados são criptografados e usados apenas para fornecer os serviços solicitados. Não compartilhamos suas informações com terceiros."
    },
    {
      question: "Posso usar o Rabugento em grupos do WhatsApp?",
      answer: "Atualmente, o Rabugento funciona apenas em conversas individuais para garantir a privacidade e personalização do serviço. O suporte para grupos está em desenvolvimento."
    },
    {
      question: "Como cancelar o serviço?",
      answer: "Para cancelar, basta enviar a mensagem 'cancelar assinatura' para o Rabugento. Você receberá uma confirmação e seu acesso continuará até o fim do período já pago."
    },
    {
      question: "O que acontece após o período de trial?",
      answer: "Após o período de trial, você pode escolher um dos planos disponíveis para continuar usando o serviço. Se preferir não continuar, basta não fazer nada e o acesso será automaticamente encerrado."
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Tudo que você precisa saber sobre o Rabugento.app
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
