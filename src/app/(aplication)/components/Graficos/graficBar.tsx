'use client'
import React from 'react';

export function GraficoBarras() {
  return (
    <div className="w-3/5  p-4 mt-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Gráfico de Barras
      </h1>
      <div className="bg-gray-100 dark:bg-gray-800 h-64 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700">
        {/* Aqui você pode integrar seu componente de gráfico */}
        <p className="text-gray-500 dark:text-gray-400">Gráfico será exibido aqui</p>
      </div>
    </div>
  );
}
