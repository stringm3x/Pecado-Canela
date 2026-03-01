"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const kind = [
  {
    id: "1",
    title: "Clásico",
    price: "$69.00",
    image: "/glazed/clasico.jpg",
    description: "Rol de canela clásico glaseado artesanal.",
    badge: "MÁS VENDIDO",
    badgeColor: "bg-berry",
  },
  {
    id: "2",
    title: "Chocolate",
    price: "$69.00",
    image: "/glazed/chocolate.jpg",
    description: "Rol de canela relleno de chocolate.",
    badge: "NUEVO",
    badgeColor: "bg-matcha",
  },
  {
    id: "3",
    title: "Tres Leches",
    price: "$74.00",
    image: "/glazed/leches.jpg",
    description: "Rol bañado en tres leches.",
    badge: "ESPECIAL",
    badgeColor: "bg-lavender",
  },
];

const Glazed = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Configuración base para las tarjetas (inician invisibles)
      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 50,
      });

      // Animación del título
      gsap.fromTo(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none", // SOLO REPRODUCIR UNA VEZ
            once: true, // FORZAR UNA SOLA VEZ
          },
        }
      );

      // Animación de las tarjetas
      gsap.fromTo(
        cardsRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert(); // Limpiar al desmontar
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-cream to-glaze/30 py-24 md:py-32 overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-caramel/10 blur-3xl" />
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-cinnamon/5 blur-3xl" />

      {/* Patrón de puntos decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#531E0D 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Encabezado de sección */}
        <div className="text-center mb-16 md:mb-20">
          {/* Badge de categoría */}
          <div className="inline-flex items-center gap-2 bg-cinnamon/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-cinnamon rounded-full animate-pulse" />
            <span className="text-cinnamon text-sm font-medium tracking-wide">
              ROLES GLASEADOS
            </span>
          </div>

          {/* Título principal */}
          <h1
            ref={titleRef}
            className="font-bree text-5xl md:text-6xl lg:text-7xl text-cinnamon mb-4"
          >
            Elige tu{" "}
            <span className="text-caramel relative">
              pecado favorito
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 10C50 3 150 3 298 10"
                  stroke="#FFECB8"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                />
              </svg>
            </span>
          </h1>

          {/* Descripción */}
          <p className="text-stone max-w-2xl mx-auto text-lg">
            Descubre nuestra selección de roles artesanales, horneados
            diariamente con ingredientes de la más alta calidad
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8 max-w-6xl mx-auto">
          {kind.map((item, index) => (
            <Link
              key={item.id}
              href={`/glazed/${item.id}`}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Badge flotante */}
              <div
                className={`absolute -top-3 -right-3 ${item.badgeColor} text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-20`}
              >
                {item.badge}
              </div>

              {/* Contenedor de imagen con efecto de marco */}
              <div className="relative mb-6">
                {/* Círculo decorativo de fondo */}
                <div className="absolute inset-0 bg-gradient-to-br from-caramel to-glaze rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110" />

                {/* Imagen */}
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden bg-cinnamon/5 group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 192px, 192px"
                  />

                  {/* Overlay de hover */}
                  <div className="absolute inset-0 bg-cinnamon/0 group-hover:bg-cinnamon/10 transition-colors duration-300" />
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="text-center">
                <h3 className="text-cinnamon font-bree text-2xl mb-2 group-hover:text-caramel transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-stone text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Precio y acción */}
                <div className="flex items-center justify-between bg-cream/80 rounded-full p-1">
                  <span className="text-cinnamon font-bold text-xl px-4">
                    {item.price}
                  </span>

                  <div className="bg-cinnamon text-glaze w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-caramel group-hover:text-cinnamon transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Efecto de borde en hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-caramel/30 transition-colors duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glazed;
