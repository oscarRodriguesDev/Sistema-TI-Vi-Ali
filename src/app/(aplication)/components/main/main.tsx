'use client'
import { GraficoBarras } from "../Graficos/graficBar";

export function Main() {
  return (
    <main className="h-full flex-1 items-center justify-between p-28 bg-white dark:bg-gray-900 overflow-y-auto">
      <div className="container mx-auto">
        <GraficoBarras />
        {/* Adicione outros componentes de gráficos aqui */}

        <GraficoBarras />
        <GraficoBarras />
        <GraficoBarras />
        <GraficoBarras />
        <GraficoBarras />
        <GraficoBarras />
        <GraficoBarras />

      </div>
    </main>
  );
}
