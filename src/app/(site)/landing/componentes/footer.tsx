'use client'
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Seção de Assinatura de Newsletter */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Assine Nossa Newsletter</h3>
            <p className="mb-4 text-gray-300">Receba as últimas atualizações e ofertas diretamente em sua caixa de entrada.</p>
            <form action="#" method="post" className="flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full md:w-64 px-4 py-2 mb-2 md:mb-0 rounded-md text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-500 dark:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300"
              >
                Inscreva-se
              </button>
            </form>
          </div>

          {/* Links Úteis */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/termos-de-uso" className="hover:text-blue-500 dark:hover:text-blue-400">Termos de Uso</a></li>
              <li><a href="/privacidade" className="hover:text-blue-500 dark:hover:text-blue-400">Política de Privacidade</a></li>
              <li><a href="/contato" className="hover:text-blue-500 dark:hover:text-blue-400">Contato</a></li>
              <li><a href="/faq" className="hover:text-blue-500 dark:hover:text-blue-400">FAQ</a></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
            <div className="flex justify-center space-x-4 text-gray-300">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400">
                <FaLinkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Meu Sistema. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
