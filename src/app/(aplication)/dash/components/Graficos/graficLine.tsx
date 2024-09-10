'use client'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function GraficoLinhas() {
  const data = [
    { name: 'Jan', pv: 4000, uv: 2400 },
    { name: 'Feb', pv: 3000, uv: 1398 },
    { name: 'Mar', pv: 2000, uv: 9800 },
    { name: 'Apr', pv: 2780, uv: 3908 },
    { name: 'May', pv: 1890, uv: 4800 },
    { name: 'Jun', pv: 2390, uv: 3800 },
    { name: 'Jul', pv: 3490, uv: 4300 }
  ];

  return (
    <div className="h-full min-h-[400px] max-h-[100%] w-full min-w-[600px] max-w-[100%] p-6 mt-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
      <h1 className="text-3xl font-bold text-white dark:text-gray-100 mb-6 text-center">
        Gráfico de Linhas
      </h1>
      <div className="w-full h-[300px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
