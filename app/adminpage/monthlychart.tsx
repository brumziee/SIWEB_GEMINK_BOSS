'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface RevenueData {
  month: string;
  total: number;
}

export default function MonthlyChart() {
  const [data, setData] = useState<RevenueData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/admin/revenuechart');
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  const chartData = {
    labels: data.map((d) => d.month),
    datasets: [
      {
        label: 'Pendapatan Bulanan',
        data: data.map((d) => d.total),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value: number | string) =>
            'Rp ' +
            Number(value).toLocaleString('id-ID', {
              minimumFractionDigits: 0,
            }),
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <h2 className="text-lg font-semibold mb-4">Pendapatan Bulanan</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
}
