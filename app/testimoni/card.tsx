import * as React from "react";
import { StarRating } from "./rating";

interface ReviewCardProps {
  name: string;
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  title,
  description,
  imageAlt,
  imageSrc,
}) => {
  return (
    <article className="box-border relative p-7 m-0 rounded-xl bg-white bg-opacity-50 h-[408px] w-[385px] max-sm:p-5 max-sm:h-auto max-sm:w-[90%] 
    transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-xl">
      <h3 className="box-border p-0 m-0 mb-5 text-xl font-semibold">{name}</h3>
      <StarRating rating={5} />
      <h4 className="box-border p-0 m-0 mb-2.5 text-base">{title}</h4>
      <p className="box-border p-0 m-0 text-sm font-light text-black text-opacity-70">
        {description}
      </p>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="box-border absolute bottom-8 right-[27px] w-[144px] h-[81px] object-cover rounded-md max-sm:static max-sm:mt-5"
      />
    </article>
  );
};
