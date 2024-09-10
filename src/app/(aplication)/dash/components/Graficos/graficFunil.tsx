'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

export function GraficoFunil() {
  const data = [
    { stage: 'Visitantes', value: 4000 },
    { stage: 'Leads', value: 3000 },
    { stage: 'Interesse', value: 2500 },
    { stage: 'Consideração', value: 2000 },
    { stage: 'Compra', value: 1500 }
  ];

  return (
    <div className="h-full min-h-[400px] w-full p-6 mt-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
      <h1 className="text-3xl font-bold text-white dark:text-gray-100 mb-6 text-center">
        Gráfico de Funil
      </h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <XAxis type="number" tick={{ fill: '#fff' }} />
          <YAxis type="category" dataKey="stage" tick={{ fill: '#fff' }} width={120} />
          <Tooltip cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }} />
          <Bar dataKey="value" fill="#8884d8" radius={[10, 10, 0, 0]}>
            <LabelList dataKey="value" position="right" fill="#fff" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
