  import React from "react";
  import Link from "next/link";
  import "@/app/ui/global.css";
  import { Poppins, Stalinist_One } from "next/font/google";

  const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
  const stalinistOne = Stalinist_One({ subsets: ["latin"], weight: "400" });

  const NavItem: React.FC<{ text: string; href: string }> = ({ text, href }) => (
    <Link href={href} className="text-base text-white hover:text-gray-300">
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
      <header className="from-[#1B1464] via-[#162D74] to-[#0F4C81]
  ">
        <Link href="/" className={`text-1xl text-orange-100 max-sm:text-lg ${stalinistOne.className}`}>
          GEMINK BOSS
        </Link>
        <div className="flex gap-7 max-md:gap-5 max-sm:hidden">
          {navItems.map((item, index) => (
            <NavItem key={index} text={item.text} href={item.href} />
          ))}
        </div>
        <Link href="/login">
          <button className="px-8 py-4 text-base text-blue-600 bg-white rounded-full font-semibold">
            Login
          </button>
        </Link>
      </header>
    );
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className={`${poppins.className} bg-black text-white`}>
          <Header />
          {children}
        </body>
      </html>
    );
  }
