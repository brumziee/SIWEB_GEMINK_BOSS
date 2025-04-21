"use client";

import React from "react";

// ArrowIcon component
const ArrowIcon: React.FC = () => {
  return (
    <svg
      width="65"
      height="64"
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-icon"
      style={{ width: "64px", height: "64px" }}
    >
      <rect
        width="64"
        height="64"
        transform="translate(0.744873)"
        fill="#D9D9D9"
      />
      <path
        d="M24.7441 12.8008V17.9208H41.6145L11.9441 47.5912L15.5537 51.2008L45.2241 21.5304V38.4008H50.3441V12.8008H24.7441Z"
        fill="#141313"
      />
    </svg>
  );
};

// HomeIcon component
const HomeIcon: React.FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="home-icon"
    >
      <g clipPath="url(#clip0_23_1486)">
        <path
          d="M22.9748 8.69539L15.8888 1.6094C13.7393 -0.534515 10.2602 -0.534515 8.11077 1.6094L1.02478 8.69539C0.366284 9.35037 -0.00280884 10.2416 -0.000230725 11.1704V21.5483C0.0019724 22.903 1.10016 24.0002 2.4548 24.0014H21.5447C22.8994 24.0003 23.9975 22.903 23.9997 21.5483V11.1704C24.0023 10.2416 23.6333 9.35037 22.9748 8.69539ZM20.9997 21.0014H15.9998V17.8194C15.9998 15.7107 14.2904 14.0013 12.1818 14.0013H11.8178C9.70916 14.0013 7.99977 15.7107 7.99977 17.8194V21.0014H2.99976V11.1704C3.00009 11.0378 3.0525 10.9107 3.14578 10.8164L10.2318 3.7304C11.2079 2.75395 12.7909 2.75376 13.7673 3.72993C13.7674 3.73007 13.7676 3.73026 13.7678 3.7304L20.8538 10.8164C20.947 10.9107 20.9994 11.0378 20.9998 11.1704V21.0014H20.9997Z"
          fill="#261FB3"
        />
      </g>
      <defs>
        <clipPath id="clip0_23_1486">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

// TeamMember component
interface TeamMemberProps {
  nickname: string;
  name: string;
  imageUrl: string;
  imageAlt: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  nickname,
  name,
  imageUrl,
  imageAlt,
}) => {
  return (
    <article className="flex gap-6 items-center max-sm:flex-col max-sm:text-center max-sm:gap-4">
      <div className="flex flex-col gap-3 w-[200px] max-sm:w-full max-sm:items-center">
        <h3 className="text-lg italic font-semibold text-neutral-900">
          {nickname}
        </h3>
        <h2 className="text-3xl leading-10 text-neutral-900 font-sakana">
          {name}
        </h2>
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

// About (TeamPage) component
const About: React.FC = () => {
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

export default About;
