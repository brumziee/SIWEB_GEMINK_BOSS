import React from "react";
import ArrowIcon from "./arrow";

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
    <article className="flex gap-8 mb-8 max-sm:flex-col max-sm:items-center">
      <div className="flex flex-col gap-6 w-[200px] max-sm:items-center max-sm:text-center">
        <h3 className="text-lg italic font-semibold text-neutral-900">
          {nickname}
        </h3>
        <h2 className="text-3xl leading-10 text-neutral-900">{name}</h2>
        <div>
          <ArrowIcon />
        </div>
      </div>
      <img
        src={imageUrl}
        className="object-cover h-[248px] w-[315px] max-sm:w-full max-sm:h-auto"
        alt={imageAlt}
      />
    </article>
  );
};

export default TeamMember;
