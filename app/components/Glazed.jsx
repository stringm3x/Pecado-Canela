import Image from "next/image";
import React from "react";

const kind = [
  {
    id: "1",
    title: "Clásico",
    price: "$65.00",
  },
  {
    id: "2",
    title: "Chocolate",
    price: "$65.00",
  },
  {
    id: "3",
    title: "Tres Leches",
    price: "$65.00",
  },
];

const Glazed = () => {
  return (
    <section className="min-h-screen flex flex-col gap-20 items-center justify-center pt-36 xl:pt-48">
      <h1 className="font-bree text-5xl sm:text-6xl text-cinnamon text-center">
        Elige tu pecado favorito
      </h1>

      <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 xl:gap-20">
        {kind.map((kind) => (
          <div key={kind.id} className="flex flex-col items-center gap-5">
            <div className="w-56 h-56 lgw-60 lg:h-60 xl:w-64 xl:h-64 bg-cinnamon rounded-full hover:scale-110">
              <Image
                src="/"
                alt="cinnamon"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>

          <h1 className="text-cinnamon font-bree text-xl">{kind.title}</h1>
          <h1 className="text-cinnamon text-xl">{kind.price}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Glazed;
