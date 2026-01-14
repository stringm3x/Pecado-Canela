import Image from "next/image";
import React from "react";

const kind = [
  {
    id: "1",
    title: "Oreo",
    image: "/toppings/oreo.jpg",
  },
  {
    id: "2",
    title: "Kinder Bueno",
    image: "/toppings/kinder.jpg",
  },
  {
    id: "3",
    title: "Fresas",
    image: "/toppings/fresas.jpg",
  },
  {
    id: "4",
    title: "Ferrero",
    image: "/toppings/ferrero.jpg",
  },
  {
    id: "5",
    title: "Nuez",
    image: "/toppings/nuez.jpg",
  },
  {
    id: "6",
    title: "Nutella",
    image: "/toppings/nutella.jpg",
  },
];

const Topping = () => {
  return (
    <section className="flex flex-col gap-20 items-center pt-36 xl:pt-56">
      <div className="flex flex-col gap-5 text-cinnamon text-center">
        <h1 className="font-bree text-5xl sm:text-6xl ">
          Elige tu topping incluido
        </h1>
        <h1 className="text-xl sm:text-2xl">“Hazlo aún más irresistible.”</h1>
      </div>

      <div className="grid sm:grid-cols-3 gap-5 lg:gap-10">
        {kind.map((kind) => (
          <div key={kind.id} className="flex flex-col items-center gap-5">
            <div className="w-56 h-56 lg:w-60 lg:h-60   rounded-3xl hover:scale-110">
              <Image
                src={kind.image}
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

      <h1 className="text-xl sm:text-2xl">Agrega otro topping + $10.00</h1>
    </section>
  );
};

export default Topping;
