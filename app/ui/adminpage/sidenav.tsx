import Link from 'next/link';
import NavLinks from '@/app/ui/adminpage/nav-links';
import Image from 'next/image';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-screen justify-between flex-col bg-[#000B8C] px-4 py-6 text-black">
      {/* Logo */}
      <div>
        {/* Logo */}
        <div className="mb-10">
          <Link href="/adminpage" className="flex items-center">
            <Image
              src="/gemink-boss.png"
              alt="Gemink Boss Logo"
              width={180}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-6">
          <NavLinks />
        </div>
      </div>

      {/* Logout Button */}
      <form>
        <button className="flex w-full items-center justify-start gap-3 rounded-md px-3 py-2 text-white transition hover:bg-blue-800">
          <PowerIcon className="w-6 h-6" />
          <span className="text-base font-medium">Logout</span>
        </button>
      </form>
    </div>
  );
}
