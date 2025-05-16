'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const dummyData = [
  { day: 'Senin', revenue: 150000 },
  { day: 'Selasa', revenue: 210000 },
  { day: 'Rabu', revenue: 180000 },
  { day: 'Kamis', revenue: 230000 },
  { day: 'Jumat', revenue: 200000 },
  { day: 'Sabtu', revenue: 170000 },
  { day: 'Minggu', revenue: 250000 },
];

export function DailyChart() {
  const data = dummyData;
  const loading = false;
  const error = null;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-sm h-[400px]">
      <h2 className="text-base font-semibold mb-2">Pendapatan 7 Hari Terakhir</h2>
      <ResponsiveContainer width="100%" height="85%">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <p>Memuat data...</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-full text-red-500">
            <p>{error}</p>
          </div>
        ) : data.length > 0 ? (
          <BarChart data={data} barSize={30}>
            <XAxis 
              dataKey="day"
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(value) => `Rp ${value.toLocaleString('id-ID')}`}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              formatter={(value: number) => [`Rp ${value.toLocaleString('id-ID')}`, 'Pendapatan']}
              contentStyle={{
                borderRadius: '6px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
                fontSize: '12px',
              }}
            />
            <Bar 
              dataKey="revenue" 
              fill="#10B981" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p>Tidak ada data transaksi</p>
          </div>
        )}
      </ResponsiveContainer>
    </div>
  );
}
