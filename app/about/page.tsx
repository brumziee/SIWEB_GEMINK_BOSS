"use client";

import Link from "next/link";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

// Arrow Icon Component
const ArrowIcon = () => {
  return (
    <svg
      width="65"
      height="64"
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[64px] h-[64px]"
    >
      <rect width="64" height="64" transform="translate(0.744873)" fill="#D9D9D9" />
      <path
        d="M24.7441 12.8008V17.9208H41.6145L11.9441 47.5912L15.5537 51.2008L45.2241 21.5304V38.4008H50.3441V12.8008H24.7441Z"
        fill="#141313"
      />
    </svg>
  );
};

// Team Member Card Component
const TeamMember = ({
  nickname,
  name,
  imageUrl,
  imageAlt,
}: {
  nickname: string;
  name: string;
  imageUrl: string;
  imageAlt: string;
}) => {
  return (
    <article className="flex gap-6 items-center max-sm:flex-col max-sm:text-center max-sm:gap-4">
      <div className="flex flex-col gap-3 w-[200px] max-sm:w-full max-sm:items-center">
        <h3 className="text-lg italic font-semibold text-neutral-900">{nickname}</h3>
        <h2 className="text-3xl leading-10 text-neutral-900 font-sakana">{name}</h2>
        <div className="max-sm:hidden">
          <ArrowIcon />
        </div>
      </div>

      <img
        src={imageUrl}
        className="object-cover h-[248px] w-[315px] rounded-lg max-sm:w-full max-sm:h-auto"
        alt={imageAlt}
      />
    </article>
  );
};

// Final Page Component
export default function AboutUsPage() {
  return (
    <main className="flex flex-col items-center gap-10 p-10 min-h-screen w-full bg-gradient-to-b from-[#fdf5e6] to-[#1e1eff]">
      {/* Tentang Toko */}
      <article className="flex flex-col flex-1 items-center p-10 rounded-xl bg-white bg-opacity-90 w-full max-w-5xl">
        <h2 className="text-3xl font-excelate font-bold text-black mb-6">GEMINK BOSS</h2>
        <p className="text-xl leading-normal text-center text-black max-sm:text-base font-sakana">
          GeminkBoss adalah toko terbaik untuk para gamer dan pecinta teknologi yang mencari
          peralatan gaming berkualitas tinggi! Kami menyediakan berbagai mouse gaming, keyboard
          mekanikal, laptop gaming, headset, monitor, dan aksesoris lainnya untuk mendukung
          performa terbaik Anda. Dengan produk berkualitas, harga bersaing, dan pelayanan terbaik,
          GeminkBoss siap menjadi pilihan utama bagi Anda yang ingin meningkatkan pengalaman bermain
          game dan produktivitas.
        </p>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/325ae75874fee815a28077009737477851878fcc"
          className="w-full h-auto rounded-xl mt-6"
          alt="Store Interior"
        />
      </article>

      {/* Tim */}
      <section className="grid gap-12 px-8 py-10 bg-white bg-opacity-90 border-2 border-solid border-black border-opacity-10 max-w-6xl shadow-md rounded-xl md:grid-cols-2">
        <h2 className="text-4xl font-bold text-center text-black col-span-full mb-4 font-sakana">
          Our Team
        </h2>
        <TeamMember
          nickname="BADUT ATMA"
          name="MIKAEL BRAMANTYO F.W"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d0c3dc6b9a2c5d2b1e65aec72aad25e519add754"
          imageAlt="Mikael"
        />
        <TeamMember
          nickname="MAS MAS PENYANYI"
          name="DIONISIUS DEVONAPTA H"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3dd20539ba602948e4b87c073b2ff98e27ed2a6e"
          imageAlt="Dionisius"
        />
        <TeamMember
          nickname="CAPTAIN TIMNAS"
          name="JONATHAN DAMAR S"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/68fa5bef2ba3c3aaebd035189de0a711ddc85bf8"
          imageAlt="Jonathan"
        />
        <TeamMember
          nickname="CINA BAIK HATI"
          name="FELIX CHRISTIAN"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/423413232b7b1f9b33ede663873db681ba29cb7b"
          imageAlt="Felix"
        />
      </section>
    </main>
  );
}
