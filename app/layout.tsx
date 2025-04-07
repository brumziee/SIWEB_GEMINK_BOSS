import React from "react";
import Link from "next/link";
import "@/app/ui/global.css";
import { Poppins, Stalinist_One } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const stalinistOne = Stalinist_One({ subsets: ["latin"], weight: "400" });

const NavItem: React.FC<{ text: string; href: string }> = ({ text, href }) => (
  <Link href={href} className="text-white text-lg hover:text-gray-300 transition-all">
    {text}
  </Link>
);

const Header: React.FC = () => {
  const navItems = [
    { text: "Home", href: "/" },
    { text: "Our Team", href: "/our-team" },
    { text: "About Us", href: "/aboutus" },
    { text: "Testimoni", href: "/testimoni" },
    { text: "Katalog", href: "/katalog" },
  ];

  return (
    <header className="bg-[#261FB3] text-white py-4 px-8 flex items-center justify-between shadow-md">
      {/* Logo */}
      <Link href="/" className={`text-2xl font-bold ${stalinistOne.className}`}>
        GEMINK BOSS
      </Link>

      {/* Navigasi */}
      <nav className="flex gap-7 max-md:hidden">
        {navItems.map((item, index) => (
          <NavItem key={index} text={item.text} href={item.href} />
        ))}
      </nav>

      {/* Tombol Login */}
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
      <body className={`${poppins.className} bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
