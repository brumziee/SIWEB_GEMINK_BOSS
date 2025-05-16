'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

export function DailyChart() {
  const [data, setData] = useState<{day: string, revenue: number}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/admin/dailyrevenue');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching daily revenue:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Pendapatan 7 Hari Terakhir</h2>
      <div className="h-[300px]">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <p>Memuat data...</p>
          </div>
        ) : data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="day" 
                tick={{ fill: '#6b7280' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tickFormatter={(value) => `Rp ${value.toLocaleString('id-ID')}`}
                tick={{ fill: '#6b7280' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                formatter={(value: number) => [`Rp ${value.toLocaleString('id-ID')}`, 'Pendapatan']}
                contentStyle={{
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Bar 
                dataKey="revenue" 
                fill="#10B981" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p>Tidak ada data transaksi</p>
          </div>
        )}
      </div>
    </div>
  );
}