"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const kind = [
  {
    id: "1",
    title: "Oreo",
    image: "/toppings/oreo.jpg",
    description: "Galleta crujiente triturada",
    icon: "🍪",
  },
  {
    id: "2",
    title: "Kinder Bueno",
    image: "/toppings/kinder.jpg",
    description: "Avellana y chocolate",
    icon: "🍫",
  },
  {
    id: "3",
    title: "Fresas",
    image: "/toppings/fresas.jpg",
    description: "Fresas frescas naturales",
    icon: "🍓",
  },
  {
    id: "4",
    title: "Ferrero",
    image: "/toppings/ferrero.jpg",
    description: "Bombones italianos",
    icon: "🌰",
  },
  {
    id: "5",
    title: "Nuez",
    image: "/toppings/nuez.jpg",
    description: "Nuez caramelizada",
    icon: "🥜",
  },
  {
    id: "6",
    title: "Nutella",
    image: "/toppings/nutella.jpg",
    description: "Crema de avellana",
    icon: "🍯",
  },
];

const Topping = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const extraRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Estado inicial
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          cardsRef.current,
          extraRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      // Timeline de animación
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          subtitleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          cardsRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.2)",
          },
          "-=0.2"
        )
        .to(
          extraRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-cream to-glaze/30 py-24 md:py-32 overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-caramel/10 blur-3xl" />
      <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-cinnamon/5 blur-3xl" />

      {/* Patrón decorativo de sprinkles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-4 rounded-full"
            style={{
              backgroundColor:
                i % 3 === 0 ? "#FF3131" : i % 3 === 1 ? "#075E54" : "#833AB4",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16 md:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cinnamon/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-berry rounded-full animate-pulse" />
            <span className="text-cinnamon text-sm font-medium tracking-wide">
              🍯 TOPPINGS ILIMITADOS
            </span>
          </div>

          {/* Título */}
          <h1
            ref={titleRef}
            className="font-bree text-5xl md:text-6xl lg:text-7xl text-cinnamon mb-4"
          >
            Elige tu topping{" "}
            <span className="text-berry relative">
              incluido
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 10C50 3 150 3 298 10"
                  stroke="#FF3131"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                />
              </svg>
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            ref={subtitleRef}
            className="text-stone text-xl md:text-2xl italic"
          >
            “Hazlo aún más irresistible.”
          </p>
        </div>

        {/* Grid de toppings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {kind.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Badge flotante con icono */}
              <div className="absolute -top-3 -left-3 bg-cinnamon text-glaze w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-xl z-20 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Imagen */}
              <div className="relative mb-4">
                <div className="relative w-40 h-40 mx-auto rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 160px, 160px"
                  />

                  {/* Overlay de hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cinnamon/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Contenido */}
              <div className="text-center">
                <h3 className="text-cinnamon font-bree text-xl mb-1 group-hover:text-berry transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-stone text-sm">{item.description}</p>
              </div>

              {/* Efecto de borde */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-berry/30 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Mensaje adicional */}
        <div ref={extraRef} className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-cinnamon/5 backdrop-blur-sm px-8 py-4 rounded-full">
            <span className="text-3xl">✨</span>
            <span className="text-cinnamon text-xl md:text-2xl font-medium">
              Agrega otro topping{" "}
              <span className="text-berry font-bold">+ $10.00</span>
            </span>
            <span className="text-3xl">✨</span>
          </div>

          {/* Botón para personalizar */}
          <div className="mt-8">
            <button className="group relative px-8 py-4 bg-berry text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Personalizar mi rol
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topping;
