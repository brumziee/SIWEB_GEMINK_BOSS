'use client';
import React from 'react';

const ArrowIcon = () => (
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

export interface TeamMemberCardProps {
  title: string;
  name: string;
  imageUrl: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ title, name, imageUrl }) => (
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
