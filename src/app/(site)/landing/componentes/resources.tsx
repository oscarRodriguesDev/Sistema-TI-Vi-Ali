'use client'
import React from 'react';
import Image from 'next/image';
import resource1 from '../../../../../public/resources/resources.jpg'
import resource2 from '../../../../../public/resources/resources2.jpeg'
import resource3 from '../../../../../public/resources/resources3.webp'

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
              <Image src={resource1} alt="Recurso 1" className="w-12 h-12" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Recurso 1</h2>
            <p>
              Descrição do recurso 1. Oferece uma solução prática e eficiente para melhorar a sua experiência.
            </p>
          </div>
          {/* Recurso 2 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
            <Image src={resource2} alt="Recurso 1" className="w-12 h-12" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Recurso 2</h2>
            <p>
              Descrição do recurso 2. Aumenta a eficiência e oferece uma abordagem inovadora para os desafios.
            </p>
          </div>
          {/* Recurso 3 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
            <Image src={resource3} alt="Recurso 1" className="w-12 h-12" />
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
