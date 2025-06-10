"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1B1891] text-white px-6 md:px-10 py-10 mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

        {/* Info Perusahaan */}
        <div>
          <h3 className="text-2xl font-bold mb-3">GEMINK BOSS</h3>
          <p className="text-sm leading-relaxed">
            Gear Up. Game On. Only at GEMINK BOSS.
          </p>
        </div>

        {/* Hubungi Kami */}
        <div className="space-y-3 text-sm">
          <h4 className="text-lg font-semibold">Hubungi Kami</h4>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1" />
            <span>Jl. Pro Player No.77, Yogyakarta</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt /> +62 817-1717-1717
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope /> geminkboss17@gmail.com
          </div>
        </div>

        {/* Sosial Media */}
        <div className="space-y-3 text-sm">
          <h4 className="text-lg font-semibold">Sosial Media</h4>
          <div className="flex items-center gap-3">
            <FaInstagram />
            <a
              href="https://instagram.com/geminkboss"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @geminkboss
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaFacebook />
            <a
              href="https://facebook.com/geminkboss"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GEMINK BOSS Official
            </a>
          </div>
        </div>

        {/* Navigasi */}
        <div className="space-y-3 text-sm">
          <h4 className="text-lg font-semibold">Navigasi</h4>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="hover:underline hover:text-gray-300">Home</Link>
            <Link href="/shop" className="hover:underline hover:text-gray-300">Shop</Link>
            <Link href="/about" className="hover:underline hover:text-gray-300">About</Link>
            <Link href="/contact" className="hover:underline hover:text-gray-300">Contact</Link>
          </nav>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white mt-10 pt-4 text-center text-sm">
        &copy; 2025 GEMINK BOSS. All rights reserved.
      </div>
    </footer>
  );
}
