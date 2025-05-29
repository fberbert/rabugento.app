import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rabugento.app</h3>
            <p className="text-gray-400">
              Seu assistente pessoal no WhatsApp. Direto, prático e sem enrolação.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-gray-400 hover:text-white transition-colors">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-400">
              Precisa de ajuda? Entre em contato conosco.
            </p>
            <p className="text-gray-400 mt-2">
              <a href="mailto:suporte@rabugento.app" className="hover:text-white transition-colors">
                suporte@rabugento.app
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Rabugento.app. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
