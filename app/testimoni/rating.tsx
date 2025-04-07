import * as React from "react";

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="box-border flex gap-1.5 p-0 m-0 mb-5">
      {[...Array(rating)].map((_, index) => (
        <div
          key={index}
          className="box-border p-0 m-0 w-5 h-5 bg-yellow-500"
          role="img"
          aria-label="star"
        />
      ))}
    </div>
  );
};
