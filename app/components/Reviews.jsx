"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    id: 1,
    text: "Se nota cuando algo está hecho con amor y cuidado. El rollo estaba suave, calientito y delicioso. Sin duda volvería a pedirlos una y otra vez.",
    author: "María G.",
    rating: 5,
    date: "Hace 2 días",
    image: "/img1.jpeg",
    position: "review",
  },
  {
    id: 2,
    text: "No esperaba que estuvieran tan buenos. La textura, el aroma y el sabor lo dicen todo. Probé uno… y quise otro.",
    author: "Carlos R.",
    rating: 5,
    date: "Hace 1 semana",
    image: "/img2.jpeg",
    position: "image",
  },
  {
    id: 3,
    text: "Están deliciosos. Se sienten suaves, recién hechos y con mucho sabor. El topping le da un toque increíble. Perfectos para quitarte el antojo",
    author: "Ana L.",
    rating: 5,
    date: "Hace 3 días",
    image: "/img4.jpeg",
    position: "review",
  },
];

const Reviews = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Estado inicial
      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.95,
      });

      // Animación de entrada
      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? "text-caramel" : "text-stone/30"}
            size={16}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-cream to-glaze/30 py-24 md:py-32 overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-caramel/10 blur-3xl" />
      <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-cinnamon/5 blur-3xl" />

      {/* Patrón de comillas decorativas */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cinnamon/20 text-8xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
            }}
          >
            "
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cinnamon/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-caramel rounded-full animate-pulse" />
            <span className="text-cinnamon text-sm font-medium tracking-wide">
              TESTIMONIOS
            </span>
          </div>

          {/* Título */}
          <h1 className="font-bree text-4xl md:text-5xl lg:text-6xl text-cinnamon mb-4">
            Lo que dicen nuestros{" "}
            <span className="text-caramel relative">
              clientes
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

          {/* Subtítulo */}
          <p className="text-stone text-lg max-w-2xl mx-auto">
            Más de 2,000 clientes satisfacdos nos avalan. Descubre por qué
            nuestros roles de canela son los favoritos.
          </p>
        </div>

        {/* Grid de testimonios - Diseño tipo Pinterest */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto max-w-7xl mx-auto"
        >
          {/* Review 1 - Tarjeta de testimonio */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-cinnamon/10 flex items-center justify-center">
                <FaQuoteLeft className="text-cinnamon text-xl" />
              </div>
              <div>
                <StarRating rating={5} />
                <span className="text-stone text-sm">{reviews[0].date}</span>
              </div>
            </div>

            <p className="text-cinnamon/80 text-lg leading-relaxed mb-6 flex-1">
              "{reviews[0].text}"
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-cinnamon/10">
              <span className="font-bold text-cinnamon">
                {reviews[0].author}
              </span>
              <FaQuoteRight className="text-caramel/30 text-xl" />
            </div>
          </div>

          {/* Image 1 - Imagen a pantalla completa */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="relative rounded-3xl overflow-hidden shadow-lg group aspect-[3/4]"
          >
            <Image
              src={reviews[0].image}
              alt="Cliente disfrutando rol de canela"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cinnamon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-sm">@cliente_feliz</p>
            </div>
          </div>

          {/* Review 2 - Tarjeta de testimonio */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col lg:col-start-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-cinnamon/10 flex items-center justify-center">
                <FaQuoteLeft className="text-cinnamon text-xl" />
              </div>
              <div>
                <StarRating rating={5} />
                <span className="text-stone text-sm">{reviews[1].date}</span>
              </div>
            </div>

            <p className="text-cinnamon/80 text-lg leading-relaxed mb-6 flex-1">
              "{reviews[1].text}"
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-cinnamon/10">
              <span className="font-bold text-cinnamon">
                {reviews[1].author}
              </span>
              <FaQuoteRight className="text-caramel/30 text-xl" />
            </div>
          </div>

          {/* Image 2 */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="relative rounded-3xl overflow-hidden shadow-lg group aspect-square"
          >
            <Image
              src={reviews[1].image}
              alt="Cliente con rol de canela"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cinnamon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-sm">@foodlover_mx</p>
            </div>
          </div>

          {/* Image 3 */}
          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className="relative rounded-3xl overflow-hidden shadow-lg group aspect-[4/3]"
          >
            <Image
              src={reviews[2].image}
              alt="Rol de canela artesanal"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cinnamon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-sm">#PecadoDeCanela</p>
            </div>
          </div>

          {/* Review 3 - Tarjeta de testimonio */}
          <div
            ref={(el) => (cardsRef.current[5] = el)}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col lg:col-start-3 lg:row-start-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-cinnamon/10 flex items-center justify-center">
                <FaQuoteLeft className="text-cinnamon text-xl" />
              </div>
              <div>
                <StarRating rating={5} />
                <span className="text-stone text-sm">{reviews[2].date}</span>
              </div>
            </div>

            <p className="text-cinnamon/80 text-lg leading-relaxed mb-6 flex-1">
              "{reviews[2].text}"
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-cinnamon/10">
              <span className="font-bold text-cinnamon">
                {reviews[2].author}
              </span>
              <FaQuoteRight className="text-caramel/30 text-xl" />
            </div>
          </div>
        </div>

        {/* Stats de reseñas */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cinnamon">2k+</div>
            <div className="text-stone">Clientes felices</div>
          </div>
          <div className="w-px h-12 bg-cinnamon/20 self-center" />
          <div className="text-center">
            <div className="text-4xl font-bold text-cinnamon">4.9</div>
            <div className="text-stone">Calificación promedio</div>
          </div>
          <div className="w-px h-12 bg-cinnamon/20 self-center" />
          <div className="text-center">
            <div className="text-4xl font-bold text-cinnamon">100%</div>
            <div className="text-stone">Recomiendan</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
