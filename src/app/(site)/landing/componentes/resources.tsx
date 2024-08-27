'use client'
import React from 'react';

export function Resources() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Recursos e Benefícios
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Recurso 1 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m4 0h-1m-6 8h4m4-4h4m-6 4v-4m4 0v4m-4-8V9m0 4h-4v-2h4v2z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Recurso 1</h2>
            <p>
              Descrição do recurso 1. Oferece uma solução prática e eficiente para melhorar a sua experiência.
            </p>
          </div>
          {/* Recurso 2 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h1m16 0h1M6 16h12M9 4h6m-3 8h3m-3 0h-3m2-4v8"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Recurso 2</h2>
            <p>
              Descrição do recurso 2. Aumenta a eficiência e oferece uma abordagem inovadora para os desafios.
            </p>
          </div>
          {/* Recurso 3 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h-1V6h1v1m2 0h-1v1h1V7m0 4v-1h-1v1m-6 0v-1H8v1m6-5V5H9v1m0 5v-1H8v1m5 3v-1h-1v1m-2-2h1v-1h-1v1m6 2h1v-1h-1v1M7 13H6v-1h1v1z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Recurso 3</h2>
            <p>
              Descrição do recurso 3. Proporciona um suporte avançado para um desempenho ideal e confiável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
