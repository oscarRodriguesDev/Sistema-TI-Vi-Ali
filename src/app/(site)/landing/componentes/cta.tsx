'use client'
import React from 'react';

export function Cta() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Quer Saber Mais?
        </h2>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Descubra todos os detalhes e benefícios que oferecemos. Clique no botão abaixo para saber mais sobre nossos serviços e como podemos ajudar você.
        </p>
        <a
          href="/saiba-mais" // Substitua pelo link real para a página "Saiba Mais"
          className="inline-block bg-blue-500 dark:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300"
        >
          Saiba Mais
        </a>
      </div>
    </section>
  );
}
