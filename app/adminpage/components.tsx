// app/dashboard/components.tsx

export function SideNav() {
    const menuItems = [
      { icon: "ti-home", label: "Dashboard" },
      { icon: "ti-users", label: "Pelanggan" },
      { icon: "ti-package", label: "Katalog" },
      { icon: "ti-shopping-cart", label: "Transaksi" },
      { icon: "ti-file-report", label: "Laporan" },
    ];
  
    return (
      <nav className="flex flex-col px-0 py-5 bg-violet-950 text-white w-[242px] max-sm:w-[60px]">
        <header className="py-5 mb-10 text-2xl font-bold text-center">
          GEMINK BOSS
        </header>
        <div className="flex-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center w-full px-8 py-4 text-base font-semibold hover:bg-violet-900 transition max-sm:justify-center"
            >
              <i className={`${item.icon} mr-4 text-xl max-sm:m-0`} />
              <span className="max-sm:hidden">{item.label}</span>
            </button>
          ))}
        </div>
        <button className="flex items-center px-8 py-4 mt-auto mb-5 text-base font-semibold hover:bg-violet-900 max-sm:justify-center">
          <i className="ti ti-logout mr-4 text-xl max-sm:m-0" />
          <span className="max-sm:hidden">Logout</span>
        </button>
      </nav>
    );
  }
  
  export function DailyChart() {
    return (
      <article className="p-8 rounded-2xl border-[3px] border-black/20 h-[424px] w-[536px] bg-white max-md:w-full">
        <h2 className="mb-8 text-2xl font-semibold">Pendapatan Harian</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: `<!-- SVG HARUSNYA DITEMPATKAN DI SINI -->`,
          }}
        />
      </article>
    );
  }
  
  export function MonthlyChart() {
    return (
      <article className="p-8 rounded-2xl border-[3px] border-black/20 h-[424px] w-[536px] bg-white max-md:w-full">
        <h2 className="mb-8 text-2xl font-semibold">Pendapatan Bulanan</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: `<!-- SVG HARUSNYA DITEMPATKAN DI SINI -->`,
          }}
        />
      </article>
    );
  }
  