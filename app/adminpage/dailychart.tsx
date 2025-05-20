'use client';

import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export function DailyChart() {
  const [data, setData] = useState<{ day: string; revenue: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDailyRevenue = async () => {
      try {
        // Tambah delay biar efek skeleton terlihat
        await new Promise((r) => setTimeout(r, 2000));

        const res = await fetch('/api/admin/dailyrevenue');
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const result = await res.json();
        setData(result);
      } catch (err: any) {
        setError('Gagal memuat data harian');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDailyRevenue();
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-sm h-[400px]">
      {/* Judul Skeleton */}
      {loading ? (
        <div className="h-5 w-48 bg-slate-200 rounded mb-4 animate-pulse" />
      ) : (
        <h2 className="text-base font-semibold mb-2">
          Pendapatan 7 Hari Terakhir
        </h2>
      )}

      <div className="h-[85%]">
        {loading ? (
          <div className="flex items-end gap-2 h-full animate-pulse">
            {[...Array(7)].map((_, idx) => (
              <div
                key={idx}
                className="bg-slate-200 rounded-md flex-1 min-w-[24px]"
                style={{
                  height: `${Math.random() * 60 + 100}px`, // tinggi acak biar menarik
                }}
              />
            ))}
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-full text-red-500">
            <p>{error}</p>
          </div>
        ) : data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
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
                formatter={(value: number) => [
                  `Rp ${value.toLocaleString('id-ID')}`,
                  'Pendapatan',
                ]}
                contentStyle={{
                  borderRadius: '6px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="revenue" fill="#10B981" radius={[4, 4, 0, 0]} />
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
