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

export default function MonthlyChart() {
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [{
      label: 'Pendapatan Bulanan',
      data: [] as number[],
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1,
      borderRadius: 8
    }]
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Delay 2 detik sebelum fetch
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const response = await fetch('/api/admin/revenuechart');
        const dbData = await response.json();

        setChartData({
          labels: dbData.map((item: any) => item.month),
          datasets: [{
            ...chartData.datasets[0],
            data: dbData.map((item: any) => item.total)
          }]
        });
      } catch (error) {
        console.error('Error fetching monthly data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `Rp ${context.raw.toLocaleString('id-ID')}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => `Rp ${value.toLocaleString('id-ID')}`,
          stepSize: 1000000
        },
        grid: { color: 'rgba(0, 0, 0, 0.05)' }
      },
      x: { 
        grid: { display: false },
        ticks: {
          callback: (value: any) => {
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
            return monthNames[value];
          }
        }
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {loading ? (
        <div className="h-6 w-40 bg-slate-200 rounded mb-4 animate-pulse"></div>
      ) : (
        <h2 className="text-lg font-semibold mb-4">Pendapatan Bulanan</h2>
      )}

      <div className="h-[300px]">
        {loading ? (
          <div className="flex items-end gap-2 h-full animate-pulse">
             {[...Array(7)].map((_, idx) => (
              <div
                key={idx}
                className="bg-slate-200 rounded-md flex-1 min-w-[30px]"
                style={{
                  height: `${Math.random() * 60 + 100}px` // tinggi random antara 100–160px
                }}
              />
            ))}
          </div>
        ) : chartData.labels.length > 0 ? (
          <Bar data={chartData} options={options} />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p>Tidak ada data bulanan</p>
          </div>
        )}
      </div>
    </div>
  );
}
