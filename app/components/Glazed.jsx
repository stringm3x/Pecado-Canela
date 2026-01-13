import Image from "next/image";
import Link from "next/link";
import React from "react";

const kind = [
  {
    id: "1",
    title: "Clásico",
    price: "$65.00",
    image: "/glazed/rol_vainilla.png",
    description: "Rol de canela clásico glaseado artesanal.",
  },
  {
    id: "2",
    title: "Chocolate",
    price: "$65.00",
    image: "/glazed/rol_chocolate.png",
    description: "Rol de canela relleno de chocolate.",
  },
  {
    id: "3",
    title: "Tres Leches",
    price: "$65.00",
    image: "/glazed/3leches.jpg",
    description: "Rol bañado en tres leches.",
  },
];

const Glazed = () => {
  return (
    <section className="min-h-screen flex flex-col gap-20 items-center justify-center pt-36 xl:pt-48">
      <h1 className="font-bree text-5xl sm:text-6xl text-cinnamon text-center">
        Elige tu pecado favorito
      </h1>

      <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 xl:gap-20">
        {kind.map((item) => (
          <Link
            key={item.id}
            href={`/glazed/${item.id}`}
            className="flex flex-col items-center gap-5 group cursor-pointer"
          >
            <div className="w-56 h-56 lg:w-60 lg:h-60 xl:w-64 xl:h-64 bg-cinnamon rounded-full flex items-center justify-center group-hover:scale-110 transition">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="object-cover group-hover:scale-110 transition"
              />
            </div>

            <h1 className="text-cinnamon font-bree text-xl">{item.title}</h1>
            <h1 className="text-cinnamon text-xl">{item.price}</h1>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Glazed;
