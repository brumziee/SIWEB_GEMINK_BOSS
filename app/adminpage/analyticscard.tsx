import React from 'react';

type Props = {
  title: string;
  value: string | number;
};

export default function AnalyticsCard({ title, value }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-5 w-full border text-black min-h-[100px] flex flex-col justify-center">
      <h3 className="text-sm font-semibold text-gray-600 mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
