import TotalProduct from '@/app/adminpage/totalproduct';
import TotalRevenue from '@/app/adminpage/totalrevenue';
import PopularProduct from '@/app/adminpage/popularproducts';
import MonthlyChart from '@/app/adminpage/monthlychart';
import { DailyChart } from '@/app/adminpage/dailychart';

export default function AnalyticsWrapper() {
  return (
    <div className="grid grid-cols-1 gap-6 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TotalProduct />
        <TotalRevenue />
        <PopularProduct />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonthlyChart />
        <DailyChart />
      </div>
    </div>
  );
}