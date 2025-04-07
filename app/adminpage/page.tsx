// app/dashboard/page.tsx
'use client';
import { StatsCard } from './statscard';
import { DailyChart } from './dailychart';
import { MonthlyChart } from './monthlychart';
import { PopularProducts } from './popularproducts';

export default function DashboardPage() {
  return (
    <>
      <h1 className="mb-10 text-4xl font-bold max-sm:mb-5 max-sm:text-2xl">
        Dashboard
      </h1>
      <div className="flex gap-7 mb-9 max-md:flex-col max-md:gap-5">
        <StatsCard icon="ti-plus" title="Income" value="Rp 35.000.000" />
        <StatsCard icon="ti-shopping-cart" title="Total Transaksi" value="27" />
      </div>
      <div className="flex gap-7 mb-9 max-md:flex-col max-md:gap-5">
        <DailyChart />
        <MonthlyChart />
      </div>
      <PopularProducts />
    </>
  );
}
