"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "@/app/ui/global.css";
import { Poppins } from "next/font/google";
import Footer from "@/app/footer"; // Footer tetap diimpor

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

      <Link href="/login">
        <button className="px-6 py-2 text-lg text-blue-600 bg-white rounded-full font-semibold shadow-md hover:bg-gray-200 transition-all">
          Login
        </button>
      </Link>
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

// 👇 Komponen klien terpisah untuk akses usePathname
function LayoutWithHeaderFooter({ children }: { children: React.ReactNode }) {
  "use client";
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Header />}
      <main className="flex-grow">{children}</main>
      {!isAdminPage && <Footer />}
    </>
  );
}
