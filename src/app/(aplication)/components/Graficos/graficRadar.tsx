'use client'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer } from 'recharts';

export function GraficoRadar() {
  const data = [
    { subject: 'Math', A: 120, B: 110 },
    { subject: 'Science', A: 98, B: 130 },
    { subject: 'English', A: 86, B: 100 },
    { subject: 'History', A: 99, B: 85 },
    { subject: 'Art', A: 85, B: 95 }
  ];

  return (
    <div className="h-full min-h-[400px] max-h-[100%] w-full min-w-[600px] max-w-[100%] p-6 mt-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
      <h1 className="text-3xl font-bold text-white dark:text-gray-100 mb-6 text-center">
        Gráfico de Radar
      </h1>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart outerRadius={90} width={730} height={250} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" stroke="#fff" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#fff" />
          <Radar name="Categoria A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Categoria B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
