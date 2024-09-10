'use client'
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList } from 'recharts';

export function GraficoDispersao() {
  const data = [
    { name: 'A', x: 10, y: 20 },
    { name: 'B', x: 20, y: 40 },
    { name: 'C', x: 30, y: 60 },
    { name: 'D', x: 40, y: 80 },
    { name: 'E', x: 50, y: 100 }
  ];

  return (
    <div className="h-full min-h-[400px] max-h-[100%] w-full min-w-0 p-6 mt-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
      <h1 className="text-3xl font-bold text-white dark:text-gray-100 mb-6 text-center">
        Gráfico de Dispersão
      </h1>
      <div className="w-full h-[300px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="x" name="X" unit=" unidades" tick={{ fill: '#fff' }} />
            <YAxis type="number" dataKey="y" name="Y" unit=" unidades" tick={{ fill: '#fff' }} />
            <Tooltip cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }} />
            <Scatter name="Dados de Dispersão" data={data} fill="#8884d8">
              <LabelList dataKey="name" position="top" fill="#fff" />
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
