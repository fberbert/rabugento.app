// src/app/terms-of-use/page.tsx
import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso – Rabugento.app",
  description: "Leia os Termos de Uso do Rabugento.app",
};

export default function TermsOfUsePage() {
  return (
    <main className="container-section py-16">
      <h1 className="text-3xl font-bold my-6">Termos de Uso</h1>
      <section className="max-w-none">
        <p className="mb-4">
          <strong>Última atualização:</strong> 29 de Maio de 2025
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Aceitação dos Termos</h2>
        <p className="mb-4">
          Ao acessar ou usar o serviço Rabugento.app (&quot;Serviço&quot;), você concorda em cumprir estes Termos de Uso (&quot;Termos&quot;) e nossa Política de Privacidade. Se não concordar com qualquer parte destes Termos, não utilize o Serviço.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Descrição do Serviço</h2>
        <p className="mb-4">
          O Rabugento.app é um assistente pessoal baseado em WhatsApp que permite ao usuário:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Registrar e consultar despesas e receitas.</li>
          <li>Criar e gerenciar listas de compras.</li>
          <li>Agendar tarefas e lembretes.</li>
          <li>Realizar pesquisas na internet.</li>
          <li>Obter respostas diretas e contextualizadas.</li>
        </ul>
        <p className="mb-4">
          O Serviço não requer instalação de aplicativos adicionais; funciona exclusivamente via WhatsApp.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Cadastro e Acesso</h2>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li>
            <strong>Cadastro:</strong> Para utilizar o trial gratuito de 30 dias (ou 50 interações, o que ocorrer primeiro), basta enviar uma mensagem ao número oficial do Rabugento no WhatsApp.
          </li>
          <li>
            <strong>Acesso:</strong> É de responsabilidade do usuário manter seu número de WhatsApp e conexão de internet ativos.
          </li>
          <li>
            <strong>Segurança:</strong> Você é responsável por manter em sigilo qualquer código de verificação e por toda atividade realizada na sua conta.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Uso Permitido</h2>
        <p className="mb-4">
          Você concorda em usar o Serviço apenas para fins lícitos e de maneira que não viole direitos de terceiros ou restrinja o uso de terceiros do Serviço.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Obrigações do Usuário</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Fornecer informações verdadeiras, atuais e completas quando solicitado.</li>
          <li>Não compartilhar seu acesso com terceiros.</li>
          <li>Cumprir a legislação aplicável em suas interações com o Serviço.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Conduta Proibida</h2>
        <p className="mb-4">Você não deve, em nenhuma hipótese:</p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Praticar qualquer forma de assédio, discurso de ódio, ou conduta ilegal.</li>
          <li>Interferir ou tentar comprometer a segurança do Serviço.</li>
          <li>Automatizar interações (bots, scripts) sem autorização expressa.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Conteúdo do Usuário</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li><strong>Propriedade:</strong> Você mantém a propriedade de seus dados e mensagens enviadas.</li>
          <li><strong>Licença:</strong> Ao enviar conteúdo, você concede ao Rabugento.app uma licença limitada para armazenar, processar e exibir essas informações conforme necessário para o funcionamento do Serviço.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">8. Propriedade Intelectual</h2>
        <p className="mb-4">
          Todos os direitos autorais, marcas e demais direitos de propriedade intelectual relacionados ao Serviço, software, design, logotipos e demais materiais são de propriedade do Rabugento.app ou de seus licenciadores. É proibida reprodução total ou parcial sem autorização.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">9. Trial e Planos Pagos</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li><strong>Trial Grat&amp;iacute;to:</strong> Disponível por 30 dias ou até 50 interações.</li>
          <li><strong>Assinatura:</strong> Após o trial, você poderá escolher planos pagos a partir de R$ 19,90/mês.</li>
          <li><strong>Cancelamento:</strong> Para cancelar, basta enviar &quot;cancelar assinatura&quot; via WhatsApp.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">10. Isenção de Garantias</h2>
        <p className="mb-4">
          O Serviço é fornecido &ldquo;no estado em que se encontra&rdquo; e &ldquo;conforme disponibilidade&rdquo;. O Rabugento.app não garante que o Serviço será ininterrupto, livre de erros ou 100% preciso.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">11. Limitação de Responsabilidade</h2>
        <p className="mb-4">
          Em nenhuma hipótese o Rabugento.app ou seus colaboradores serão responsáveis por danos indiretos, incidentais, especiais, consequenciais ou exemplares decorrentes do uso ou incapacidade de usar o Serviço, mesmo que avisados da possibilidade.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">12. Indenização</h2>
        <p className="mb-4">
          Você concorda em defender, indenizar e isentar o Rabugento.app, seus diretores, funcionários e parceiros de quaisquer reivindicações, perdas ou danos decorrentes de seu uso indevido do Serviço ou violação destes Termos.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">13. Política de Privacidade</h2>
        <p className="mb-4">
          O tratamento de seus dados pessoais está regido pela nossa Política de Privacidade, disponível em <Link href="/privacy-policy" className="text-blue-600 hover:underline">/privacy-policy</Link>. Ao usar o Serviço, você consente com a coleta e uso de dados conforme descrito na política.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">14. Alterações nos Termos</h2>
        <p className="mb-4">
          O Rabugento.app reserva-se o direito de modificar estes Termos a qualquer momento. Notificaremos você sobre alterações significativas via mensagem no WhatsApp ou publicação no site. O uso continuado do Serviço após mudanças implica aceitação dos novos Termos.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">15. Legislação Aplicável e Foro</h2>
        <p className="mb-4">
          Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da comarca de Nova Friburgo, RJ, para dirimir quaisquer controvérsias.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">16. Disposições Gerais</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Se qualquer disposição destes Termos for considerada nula ou inexequível, as demais continuarão em vigor.</li>
          <li>Estes Termos constituem o acordo completo entre você e o Rabugento.app.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">17. Contato</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            WhatsApp: <Link href="https://wa.me/5522999780978?text=É%20do%20Rabugento?" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">+55 22 99978-0978</Link>
          </li>
          <li>
            E-mail: <Link href="mailto:suporte@rabugento.app" className="text-blue-600 hover:underline">suporte@rabugento.app</Link>
          </li>
        </ul>

        <p className="mt-8 italic">Obrigado por escolher o Rabugento.app!</p>
      </section>
    </main>
  );
}
