'use client';
import React from 'react';

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

interface TeamMemberCardProps {
  title: string;
  name: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ title, name, imageUrl }) => {
  return (
    <article className="flex gap-8 items-start max-sm:flex-col">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          <h2 className="text-3xl text-neutral-900">{name}</h2>
        </div>
        <ArrowIcon />
      </div>
      <img
        src={imageUrl}
        alt={`${name} - ${title}`}
        className="w-[315px] h-[248px] object-cover"
      />
    </article>
  );
};

export default function OurTeamPage() {
  return (
    <main className="flex flex-col items-center gap-10 p-10 min-h-screen w-full bg-zinc-300">
      <section className="w-full px-8 pt-16 mx-auto max-w-[1440px]">
        <h1 className="mb-10 text-6xl text-black tracking-[3px] max-sm:text-4xl text-center">
          OUR TEAM
        </h1>
        <div className="p-8 border-black shadow-sm bg-white bg-opacity-90 rounded-xl max-sm:p-4">
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            <TeamMemberCard
              title="BADUT ATMA"
              name="MIKAEL BRAMANTYO F.W"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d0c3dc6b9a2c5d2b1e65aec72aad25e519add754"
            />
            <TeamMemberCard
              title="MAS MAS PENYANYI"
              name="DIONISIUS DEVONAPTA H"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3dd20539ba602948e4b87c073b2ff98e27ed2a6e"
            />
            <TeamMemberCard
              title="CAPTAIN TIMNAS"
              name="JONATHAN DAMAR S"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/68fa5bef2ba3c3aaebd035189de0a711ddc85bf8"
            />
            <TeamMemberCard
              title="CINA BAIK HATI"
              name="FELIX CHRISTIAN"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/423413232b7b1f9b33ede663873db681ba29cb7b"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
