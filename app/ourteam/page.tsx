"use client";
import * as React from "react";
import TeamMember from "./teamcard";
import HomeIcon from "./home";

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf5e6] to-[#1e1eff]">
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,600&family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      />


      <main className="relative px-10 py-16">
        <h1 className="mb-12 text-6xl text-black tracking-[3px] max-md:text-5xl max-md:text-center max-sm:text-4xl">
          OUR TEAM
        </h1>

        <section className="grid gap-8 px-24 py-8 mx-auto my-0 border-2 border-solid bg-zinc-300 bg-opacity-10 border-black border-opacity-10 grid-cols-[repeat(2,1fr)] max-w-[1372px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-10 max-md:py-8 max-md:grid-cols-[1fr]">
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

      <button
        className="flex fixed right-10 bottom-10 justify-center items-center px-8 py-5 bg-white rounded-[50px]"
        aria-label="Go to home"
      >
        <HomeIcon />
      </button>
    </div>
  );
};

export default TeamPage;
