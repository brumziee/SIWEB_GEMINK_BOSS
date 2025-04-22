import * as React from "react";
import { ReviewCard } from "./card";
import { UnderlineDecoration } from "./underline";

export const ReviewSection = () => {
  const reviews = [
    {
      name: "Karii",
      title: "Keyboard terbaik diharganya",
      description:
        "Keyboardnya sangat bagus, thocky slebew gemink. Sangat rekomen untuk pemula",
      imageAlt: "Keyboard review",
      imageSrc: "/home/review1.png",
    },
    {
      name: "Esep",
      title: "Kualitas Premium",
      description: "Sesuai ekspektasi solid, ringan, kencang.",
      imageAlt: "Mouse review",
      imageSrc: "/home/review2.png",
    },
    {
      name: "John",
      title: "Wajib beli!!",
      description: "Sangat rekomen. Bisa jalan di 200 fps ++.",
      imageAlt: "Product review",
      imageSrc: "/home/review3.png",
    },
  ];

  return (
    <section className="box-border flex flex-col items-center px-0 py-10 m-0">
      <div className="box-border flex flex-col items-center p-0 m-0">
        <p className="box-border p-0 m-0 mb-2.5 text-2xl italic font-semibold text-indigo-800 max-sm:text-xl">
          Review Product
        </p>
        <UnderlineDecoration />
        <div className="box-border flex gap-16 px-20 py-0 m-0 max-md:flex-col max-md:gap-8 max-md:items-center">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              title={review.title}
              description={review.description}
              imageAlt={review.imageAlt}
              imageSrc={review.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
