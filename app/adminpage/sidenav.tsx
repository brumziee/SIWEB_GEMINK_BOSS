
export function SideNav() {
    const menuItems = [
      { icon: "ti-home", label: "Dashboard" },
      { icon: "ti-users", label: "Pelanggan" },
      { icon: "ti-package", label: "Katalog" },
      { icon: "ti-shopping-cart", label: "Transaksi" },
      { icon: "ti-file-report", label: "Laporan" },
    ];
  
    return (
      <nav className="flex flex-col px-0 py-5 bg-violet-950 text-[white] w-[242px] max-sm:px-0 max-sm:py-2.5 max-sm:w-[60px]">
        <header className={`px-0 py-5 mb-10 text-2xl font-bold text-center text-[white]`}>
          GEMINK BOSS
        </header>
        <div className="flex-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center w-full px-8 py-4 text-base font-semibold cursor-pointer text-[white] transition-[0.3s] max-sm:justify-center max-sm:p-4 hover:bg-violet-900"
            >
              <i className={`${item.icon} mr-4 text-xl max-sm:m-0`} />
              <span className="max-sm:hidden">{item.label}</span>
            </button>
          ))}
        </div>
        <button className="flex items-center px-8 py-4 mt-auto mb-5 text-base font-semibold cursor-pointer text-[white] max-sm:justify-center max-sm:p-4 hover:bg-violet-900">
          <i className="ti ti-logout mr-4 text-xl max-sm:m-0" />
          <span className="max-sm:hidden">Logout</span>
        </button>
      </nav>
    );
  }
  