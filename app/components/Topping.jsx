import Image from "next/image";
import React from "react";

const kind = [
  {
    id: "1",
    title: "Oreo",
  },
  {
    id: "2",
    title: "Kinder Bueno",
  },
  {
    id: "3",
    title: "Fresas",
  },
  {
    id: "4",
    title: "Ferrero",
  },
  {
    id: "5",
    title: "Nuez",
  },
  {
    id: "6",
    title: "Nutella",
  },
];

const Topping = () => {
  return (
    <section className="flex flex-col gap-20 items-center pt-36 xl:pt-56">
      <div className="flex flex-col gap-5 text-cinnamon text-center">
        <h1 className="font-bree text-5xl sm:text-6xl ">Agregale un topping</h1>
        <h1 className="text-xl sm:text-2xl">“Hazlo aún más irresistible.”</h1>
        <h1 className="text-xl sm:text-2xl">$10.00</h1>
      </div>

      <div className="grid sm:grid-cols-3 gap-5 lg:gap-10">
        {kind.map((kind) => (
          <div key={kind.id} className="flex flex-col items-center gap-5">
            <div className="w-56 h-56 lgw-60 lg:h-60 xl:w-64 xl:h-64 bg-cinnamon rounded-3xl hover:scale-110">
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

export default Topping;
