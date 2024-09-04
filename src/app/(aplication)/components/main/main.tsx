'use client'

import { GraficoBarras } from "../Graficos/graficBar";
import { GraficoPie } from "../Graficos/graficPie";
import { GraficoFunil } from "../Graficos/graficFunil";
import { useEffect, useState } from 'react';
import { GraficoDispersao } from "../Graficos/graficDipersão";
import { GraficoRadar } from "../Graficos/graficRadar";
import { GraficoLinhas } from "../Graficos/graficLine";

export function Main() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // ou você pode retornar um loader aqui
  }

  return (
    <main className="h-full flex-1 p-3 sm:p-10 lg:p-28 bg-white dark:bg-gray-900 overflow-y-auto">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 mx-auto">
        <GraficoPie />
        <GraficoBarras />
        <GraficoFunil />
        <GraficoDispersao />
        <GraficoRadar />
        <GraficoLinhas/>
      </div>
    </main>
  );
}
