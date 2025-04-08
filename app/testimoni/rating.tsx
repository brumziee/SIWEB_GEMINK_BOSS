import * as React from "react";

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex gap-1.5 mb-5">
      {[...Array(rating)].map((_, index) => (
        <span key={index} className="text-yellow-500 text-xl">⭐</span>
      ))}
    </div>
  );
};
