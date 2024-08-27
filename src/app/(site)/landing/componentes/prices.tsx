'use client'
import React from 'react';

export function Prices() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Nossos Planos e Preços
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Plano Basic */}
          <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Básico
            </h3>
            <p className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              $19<span className="text-lg">/mês</span>
            </p>
            <ul className="mb-6 text-gray-700 dark:text-gray-300">
              <li className="mb-2">1 Projeto</li>
              <li className="mb-2">10 GB de Armazenamento</li>
              <li className="mb-2">Suporte Básico</li>
            </ul>
            <a
              href="/sign-up"
              className="inline-block bg-blue-500 dark:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300"
            >
              Escolher Plano
            </a>
          </div>

          {/* Plano Master */}
          <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Master
            </h3>
            <p className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              $49<span className="text-lg">/mês</span>
            </p>
            <ul className="mb-6 text-gray-700 dark:text-gray-300">
              <li className="mb-2">5 Projetos</li>
              <li className="mb-2">50 GB de Armazenamento</li>
              <li className="mb-2">Suporte Prioritário</li>
            </ul>
            <a
              href="/sign-up"
              className="inline-block bg-blue-500 dark:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300"
            >
              Escolher Plano
            </a>
          </div>

          {/* Plano Premium */}
          <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Premium
            </h3>
            <p className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              $99<span className="text-lg">/mês</span>
            </p>
            <ul className="mb-6 text-gray-700 dark:text-gray-300">
              <li className="mb-2">Projetos Ilimitados</li>
              <li className="mb-2">100 GB de Armazenamento</li>
              <li className="mb-2">Suporte 24/7</li>
            </ul>
            <a
              href="/sign-up"
              className="inline-block bg-blue-500 dark:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300"
            >
              Escolher Plano
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
