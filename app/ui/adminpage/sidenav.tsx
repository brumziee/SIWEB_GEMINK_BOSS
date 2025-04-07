'use client';

import { useRouter } from 'next/navigation';
import NavLinks from '@/app/ui/adminpage/nav-links';
import Image from 'next/image';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  const router = useRouter();

  const handleLogout = () => {
    // Tambahin logika logout di sini kalau perlu
    router.push('/'); // Navigasi ke halaman awal
  };

  return (
    <div className="flex h-screen justify-between flex-col bg-[#000B8C] px-4 py-6 text-black">
      {/* Logo */}
      <div>
        <div className="mb-10">
          <button onClick={() => router.push('/adminpage')} className="flex items-center">
            <Image
              src="/gemink-boss.png"
              alt="Gemink Boss Logo"
              width={180}
              height={40}
              className="object-contain"
            />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-6">
          <NavLinks />
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex w-full items-center justify-start gap-3 rounded-md px-3 py-2 text-white transition hover:bg-blue-800"
      >
        <PowerIcon className="w-6 h-6" />
        <span className="text-base font-medium">Logout</span>
      </button>
    </div>
  );
}
