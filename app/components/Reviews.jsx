import React from "react";
import Image from "next/image";

const Reviews = () => {
  return (
    <section className="min-h-screen p-8 lg:p-14 flex flex-col sm:grid sm:grid-cols-3 grid-rows-3 mt-20 sm:mt-56 gap-4 text-cinnamon text-md lg:text-lg">
      <div className="bg-yellow2 row-span-1 col-span-1 content-center p-5">
        <h1 className="">
          "Se nota cuando algo está hecho con amor y cuidado. El rollo estaba
          suave, calientito y delicioso. Sin duda volvería a pedirlos una y otra
          vez.""
        </h1>
      </div>
      <div className="relative bg-yellow2 h-60 sm:h-auto sm:row-span-2 sm:col-span-1 overflow-hidden rounded-xl">
        <Image
          src="/img1.jpeg"
          alt="image 1"
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
      </div>

      <div className="bg-yellow2 row-span-1 col-span-1 content-center p-5">
        <h1 className="">
          "No esperaba que estuvieran tan buenos. La textura, el aroma y el
          sabor lo dicen todo. Probé uno… y quise otro."
        </h1>
      </div>
      <div className="relative bg-yellow2 h-60 sm:h-auto sm:row-span-2 sm:col-span-1 overflow-hidden rounded-xl">
        <Image
          src="/img2.jpeg"
          alt="image 2"
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
      </div>

      <div className="relative bg-yellow2 h-60 sm:h-auto sm:row-span-2 sm:col-span-1 overflow-hidden rounded-xl">
        <Image
          src="/img3.jpeg"
          alt="image 3"
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
      </div>
      <div className="bg-yellow2 row-span-1 col-span-1 content-center p-5">
        <h1 className="">
          "Están deliciosos. Se sienten suaves, recién hechos y con mucho sabor.
          El topping le da un toque increíble. Perfectos para quitarte el
          antojo"
        </h1>
      </div>
    </section>
  );
};

export default Reviews;
