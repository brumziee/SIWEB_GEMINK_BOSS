"use client";

import * as React from "react";
import TeamMember from "./teamcard";
import HomeIcon from "./home";

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf5e6] to-[#1e1eff] flex flex-col items-center py-16">
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,600&family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <h1 className="mb-12 text-6xl font-bold text-black tracking-wide text-center max-md:text-5xl max-sm:text-4xl font-sakana">
        OUR TEAM
      </h1>

      <section className="grid gap-12 px-8 py-10 bg-white bg-opacity-90 border-2 border-solid border-black border-opacity-10 max-w-6xl shadow-md rounded-xl md:grid-cols-2">
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

      <button
        className="fixed right-10 bottom-10 flex items-center justify-center px-6 py-4 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all"
        aria-label="Go to home"
      >
        <HomeIcon />
      </button>
    </div>
  );
};

export default TeamPage;
