'use client'
import React from 'react';

export function Contatos() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12">
        {/* Formulário de Contato */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Entre em Contato
          </h1>
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              {/* Campo Nome */}
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  required
                />
              </div>

              {/* Campo E-mail */}
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  required
                />
              </div>

              {/* Campo Mensagem */}
              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Sua mensagem aqui"
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  required
                ></textarea>
              </div>

              {/* Botão de Envio */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 dark:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Seção de WhatsApp */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4">
            Atendimento Imediato
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Precisa de ajuda rápida? Clique no botão abaixo para falar diretamente com nossa equipe através do WhatsApp. Estamos aqui para ajudar!
          </p>
          <a
            href="https://wa.me/5511999999999" // Substitua pelo número de WhatsApp real
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 dark:bg-green-700 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-600 dark:hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
