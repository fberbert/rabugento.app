// src/app/privacy-policy/page.tsx
import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade – Rabugento.app",
  description:
    "Nossa Política de Privacidade garante a segurança dos seus dados.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container-section py-16">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
      <section className="max-w-none">
        <p className="mb-4">
          <strong>Última atualização:</strong> 29 de Maio de 2025
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Coleta de Dados</h2>
        <p className="mb-4">
          Quando você interage com o Rabugento.app, coletamos as seguintes
          informações:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Número de telefone vinculado ao WhatsApp;</li>
          <li>Conteúdo das mensagens trocadas;</li>
          <li>Dados de comandos: tarefas, lembretes, listas de compras e
            lançamentos de entradas e saídas financeiras.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Uso dos Dados</h2>
        <p className="mb-4">
          Utilizamos seus dados para:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Processar e responder seus comandos;</li>
          <li>Registrar e organizar suas tarefas e lembretes;</li>
          <li>Gerenciar suas listas de compras;</li>
          <li>Calcular e apresentar seu controle financeiro;</li>
          <li>Aprimorar a qualidade e precisão do serviço.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Armazenamento e Segurança</h2>
        <p className="mb-4">
          Seus dados ficam armazenados em nossos servidores, em ambiente seguro,
          com comunicação criptografada via HTTPS/TLS. Adotamos práticas de
          segurança da informação para proteger contra acesso não autorizado,
          perda, alteração ou divulgação.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Compartilhamento de Dados</h2>
        <p className="mb-4">
          Não compartilhamos seus dados pessoais com terceiros, exceto quando:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Houver obrigação legal ou judicial;</li>
          <li>For necessário para cumprir requisição de autoridades;</li>
          <li>Você tenha consentido previamente.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Retenção de Dados</h2>
        <p className="mb-4">
          Mantemos seus dados enquanto sua conta estiver ativa ou pelo período
          necessário para cumprir obrigações legais. Após o cancelamento, dados
          financeiros e históricos podem ser mantidos por até 12 meses para fins
          contábeis.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Cookies e Tecnologias Semelhantes</h2>
        <p className="mb-4">
          Nosso site pode usar cookies e tecnologias semelhantes para melhorar a
          experiência do usuário. Você pode controlar o uso de cookies pelas
          configurações do seu navegador.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Direitos do Usuário</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Solicitar acesso, correção ou exclusão dos seus dados;</li>
          <li>Retirar consentimento a qualquer momento;</li>
          <li>Solicitar portabilidade dos seus dados;</li>
          <li>Apresentar dúvidas ou reclamações sobre o tratamento de dados.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">8. Alterações nesta Política</h2>
        <p className="mb-4">
          Podemos atualizar esta Política de Privacidade periodicamente. Avisaremos
          sobre mudanças significativas via WhatsApp ou publicação no site. O uso
          continuado do serviço após alterações implica aceitação dos termos
          revisados.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">9. Contato</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            WhatsApp:&nbsp;
            <Link
              href="https://wa.me/5522992615495"
              className="text-blue-600 hover:underline"
            >
              +55 22 99261-5495
            </Link>
          </li>
          <li>
            E-mail:&nbsp;
            <Link
              href="mailto:suporte@rabugento.app"
              className="text-blue-600 hover:underline"
            >
              suporte@rabugento.app
            </Link>
          </li>
        </ul>

        <p className="mt-8 italic">
          Sua privacidade é importante para nós. Obrigado por confiar no
          Rabugento.app!
        </p>
      </section>
    </main>
  );
}
