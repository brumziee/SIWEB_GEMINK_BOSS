"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import "@/app/ui/global.css";
import { Poppins } from "next/font/google";
import Footer from "@/app/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const NavItem: React.FC<{ 
  text: string; 
  href: string;
  isLoggedIn: boolean;
  onClick?: () => void;
}> = ({ text, href, isLoggedIn, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (!isLoggedIn && href !== "/") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <Link 
      href={href}
      onClick={handleClick}
      className={`text-white text-lg hover:text-gray-300 transition-all ${
        !isLoggedIn && href !== "/" ? "cursor-pointer" : ""
      }`}
    >
      {text}
    </Link>
  );
};

const Header: React.FC<{ 
  isLoggedIn: boolean;
  showAuthWarning: () => void;
}> = ({ isLoggedIn, showAuthWarning }) => {
  const navItems = [
    { text: "Home", href: "/" },
    { text: "Shop", href: "/shop" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("role");
    router.push("/");
  };

  return (
    <header className="bg-[#261FB3] text-white py-4 px-8 flex items-center justify-between shadow-md">
      <Link href="/" className="text-xl font-bold font-excelate">
        GEMINK BOSS
      </Link>

      <nav className="flex gap-7 max-md:hidden">
        {navItems.map((item, index) => (
          <NavItem 
            key={index} 
            text={item.text} 
            href={item.href}
            isLoggedIn={isLoggedIn}
            onClick={showAuthWarning}
          />
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
  const [showHomeWarning, setShowHomeWarning] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("role");
    const loggedIn = !!role;
    setIsLoggedIn(loggedIn);

    if (!loggedIn && isProtectedPage) {
      router.push("/");
      setShowHomeWarning(true);
    }
    setCheckingAuth(false);
  }, [pathname]);

  const handleRedirectToLogin = () => {
    setShowHomeWarning(false);
    router.push("/login");
  };

  const handleGoHome = () => {
    setShowHomeWarning(false);
  };

  const showAuthWarning = () => {
    if (!isLoggedIn) {
      setShowHomeWarning(true);
    }
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
      {!isAdminPage && (
        <Header isLoggedIn={isLoggedIn} showAuthWarning={showAuthWarning} />
      )}
      <main className="flex-grow relative">
        {children}

        {showHomeWarning && pathname === "/" && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
            <div className="bg-white text-center rounded-lg shadow-lg p-6 w-full max-w-sm mx-4">
              <p className="text-[#261FB3] text-lg font-bold mb-2">Akses Dibatasi</p>
              <p className="text-gray-600 text-sm mb-6">
                Anda harus login terlebih dahulu untuk mengakses halaman ini.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleGoHome}
                  className="px-5 py-2 rounded-full text-[#261FB3] border border-[#261FB3] font-semibold text-sm hover:bg-[#f0f0f0] transition-all"
                >
                  Kembali
                </button>
                <button
                  onClick={handleRedirectToLogin}
                  className="px-5 py-2 rounded-full bg-[#261FB3] text-white font-semibold text-sm hover:bg-[#1b1491] transition-all"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      {!isAdminPage && <Footer />}
    </>
  );
}
