"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import "@/app/ui/global.css";
import { Poppins } from "next/font/google";
import Footer from "@/app/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const NavItem: React.FC<{ text: string; href: string }> = ({ text, href }) => (
  <Link href={href} className="text-white text-lg hover:text-gray-300 transition-all">
    {text}
  </Link>
);

const Header: React.FC = () => {
  const navItems = [
    { text: "Home", href: "/" },
    { text: "Shop", href: "/shop" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

  const router = useRouter();
  const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("role");
    router.push("/login");
  };

  return (
    <header className="bg-[#261FB3] text-white py-4 px-8 flex items-center justify-between shadow-md">
      <Link href="/" className="text-xl font-bold font-excelate">
        GEMINK BOSS
      </Link>

      <nav className="flex gap-7 max-md:hidden">
        {navItems.map((item, index) => (
          <NavItem key={index} text={item.text} href={item.href} />
        ))}
      </nav>

      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="px-6 py-2 text-lg text-white bg-red-600 rounded-full font-semibold shadow-md hover:bg-red-500 transition-all"
          >
            Logout
          </button>
        ) : (
          <Link href="/login">
            <button className="px-6 py-2 text-lg text-blue-600 bg-white rounded-full font-semibold shadow-md hover:bg-gray-200 transition-all">
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#FFF5E8] text-black flex flex-col min-h-screen`}>
        <LayoutWithHeaderFooter>{children}</LayoutWithHeaderFooter>
      </body>
    </html>
  );
}

function LayoutWithHeaderFooter({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const isAdminPage = pathname.startsWith("/admin");
  const isProtectedPage = ["/shop", "/about", "/contact"].some((path) =>
    pathname.startsWith(path)
  );

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (!role && isProtectedPage) {
      setShowNotice(true); // tampilkan modal UI
    }

    setCheckingAuth(false); // selesai pengecekan
  }, [pathname]);

  const handleRedirectToLogin = () => {
    setShowNotice(false);
    router.push("/login");
  };

  const handleGoHome = () => {
    setShowNotice(false); // Menghapus notifikasi ketika tombol Kembali ke Home diklik
    router.push("/"); // Mengarahkan ke halaman utama
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <>
      {!isAdminPage && <Header />}
      <main className="flex-grow">{children}</main>
      {!isAdminPage && <Footer />}

      {showNotice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white px-6 py-6 rounded shadow-md text-center max-w-sm w-full">
            <h2 className="text-xl font-bold text-[#261FB3] mb-2">
              Akses Dibatasi
            </h2>
            <p className="text-gray-700 mb-4">
              Anda harus login terlebih dahulu untuk mengakses halaman ini.
            </p>
            <div className="flex justify-between">
              {/* Tombol Kembali ke Home */}
              <button
                onClick={handleGoHome}
                className="bg-white text-[#261FB3] px-6 py-2 text-lg rounded-full font-semibold border-2 border-[#261FB3] hover:bg-[#261FB3] hover:text-white transition-all"
              >
                Kembali
              </button>
              {/* Tombol Lanjut ke Login */}
              <button
                onClick={handleRedirectToLogin}
                className="bg-[#261FB3] text-white px-6 py-2 text-lg rounded-full font-semibold hover:bg-[#1b1491] transition-all"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
