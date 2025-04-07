import * as React from "react";
import SideNav from '@/app/ui/adminpage/sidenav';
import { poppins } from "@/app/ui/fonts";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`flex h-screen overflow-hidden bg-orange-50 ${poppins.className}`}>
      {/* SideNav tidak ikut scroll */}
      <div className="w-[250px] shrink-0 overflow-y-auto sticky top-0 h-screen max-md:hidden">
        <SideNav />
      </div>

      {/* Konten yang bisa discroll */}
      <section className="flex-1 overflow-y-auto px-12 py-10 max-md:p-5 max-sm:p-4 h-screen">
        {children}
      </section>
    </main>
  );
}
