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

export default TeamMember;
