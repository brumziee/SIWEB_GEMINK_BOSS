import TotalProduct from '@/app/adminpage/totalproduct';
import TotalRevenue from '@/app/adminpage/totalrevenue';
import PopularProduct from '@/app/adminpage/popularproducts';
import MonthlyChart from '@/app/adminpage/monthlychart';

export default function AnalyticsWrapper() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
      <TotalProduct />
      <TotalRevenue />
      <PopularProduct />
      <div className="col-span-1 md:col-span-3">
        <MonthlyChart />
      </div>
    </div>
  );
}
