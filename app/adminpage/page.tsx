// app/admin/page.tsx
import AnalyticsWrapper from './analyticswrapper';
import { DailyChart } from './dailychart';

export default function AdminDashboardPage() {
  return (
    <div className="p-6 text-black">
      <h1 className="mb-10 text-4xl font-bold max-sm:mb-5 max-sm:text-2xl">
        Dashboard
      </h1>

      {/* Bagian Analitik dengan Error Boundary */}
      <section className="mb-10">
        <AnalyticsWrapper />
      </section>
    </div>
  );
}