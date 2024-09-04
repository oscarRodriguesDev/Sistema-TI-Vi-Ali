
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

export function GraficoPie() {
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 }
  ];
  
  const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 }
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF4560'];

  return (
    <div className="h-full min-h-[400px] max-h-[100%] w-full min-w-[600px] max-w-[100%] p-6 mt-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">      <h1 className="text-3xl font-bold text-white dark:text-gray-100 mb-6 text-center">
        Gráfico de Pizza
      </h1>
      <div className="flex justify-center items-center">
        <PieChart width={500} height={400}>
          <Pie 
            data={data01} 
            dataKey="value" 
            nameKey="name" 
            cx="50%" 
            cy="50%" 
            outerRadius={80} 
            fill="#8884d8" 
          >
            {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Pie 
            data={data02} 
            dataKey="value" 
            nameKey="name" 
            cx="50%" 
            cy="50%" 
            innerRadius={90} 
            outerRadius={120} 
            fill="#82ca9d" 
            label 
          >
            {data02.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[(index + 1) % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

