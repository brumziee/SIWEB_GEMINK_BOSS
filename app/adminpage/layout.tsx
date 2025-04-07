// app/dashboard/layout.tsx
import * as React from "react";
import SideNav from '@/app/ui/adminpage/sidenav';
import { poppins } from "@/app/ui/fonts";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`flex min-h-screen bg-orange-50 ${poppins.className}`}>
      <SideNav />
      <section className="flex-1 px-12 py-10 max-md:p-5 max-sm:p-4">
        {children}
      </section>
    </main>
  );
}
