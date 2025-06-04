 # Rabugento.app — Landing Page

 **Rabugento.app** é um assistente pessoal inteligente operando via WhatsApp que ajuda você a:

 - Controlar suas finanças pessoais (despesas e receitas);
 - Criar e gerenciar listas de compras;
 - Agendar tarefas e lembretes;
 - Realizar pesquisas e obter respostas diretas;
 - Tudo sem instalar nada — basta enviar mensagens no WhatsApp.

 ## Visão Geral

 Este repositório contém a landing page oficial de divulgação do Rabugento.app, desenvolvida com:

 - Next.js 15 (App Router) e TypeScript  
 - React 19 com Framer Motion para animações suaves  
 - Tailwind CSS e class-variance-authority para estilização  
 - Context API e react-intersection-observer para navegação por seções  
 - Jest e React Testing Library para testes básicos  

 ## Como Desenvolver

 1. Clone este repositório  
    ```bash
    git clone https://github.com/SEU_USUARIO/rabugento-landing.git
    ```
 2. Entre na pasta  
    ```bash
    cd rabugento-landing
    ```
 3. Instale dependências  
    ```bash
    npm install
    # ou
    yarn install
    ```
 4. Inicie em modo de desenvolvimento  
    ```bash
    npm run dev
    ```
    Acesse `http://localhost:3011` no navegador.

 ## Scripts Disponíveis

 - `npm run dev` — inicia o servidor de desenvolvimento (porta 3011)  
 - `npm run build` — gera o build de produção  
 - `npm run start` — inicia o servidor em modo produção (porta 3011)  
 - `npm run lint` — executa o ESLint  
 - `npm test` — executa a suíte de testes (Jest)  
 - `npm run test:watch` — executa testes em modo watch  

 ## Rodando Testes

 ```bash
 npm test
 ```

 ## Estrutura do Projeto

 - `src/app` — páginas e layout global (Home, Termos de Uso, Política de Privacidade)  
 - `src/components` — componentes de UI e seções da landing page  
 - `src/context` — gerenciamento de estado de navegação por seção  
 - `src/lib` — utilitários e hooks customizados  

 ## Contribuição

 Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e PRs.

 ## License

 Este projeto está em domínio público conforme indicado no arquivo [LICENSE](LICENSE).

 ## Contato

 - Site oficial: https://rabugento.app  
 - WhatsApp: +55 22 99978-0978  
 - E-mail: suporte@rabugento.app  