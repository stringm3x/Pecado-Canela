"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const buttonsRef = useRef([]);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline de entrada
      const tl = gsap.timeline();

      // Título
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // Botones (EFECTO DE DESPLIEGUE LATERAL)
      tl.from(
        buttonsRef.current,
        {
          x: -50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
        },
        "-=0.6"
      );

      // Contenedor de imagen con efecto de revelado
      tl.from(
        imageContainerRef.current,
        {
          scale: 0.9,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // Badge flotante
      tl.from(
        badgeRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.2)",
        },
        "-=0.2"
      );

      // Elementos flotantes decorativos
      gsap.to(floatingElementsRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });

      // Parallax suave en la imagen
      gsap.to(imageRef.current, {
        scale: 1.1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Desvanecimiento del título al hacer scroll
      gsap.to(titleRef.current, {
        opacity: 0.3,
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "center center",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-cinnamon overflow-hidden pt-10"
    >
      {/* Elementos decorativos flotantes */}
      <div
        ref={(el) => (floatingElementsRef.current[0] = el)}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-caramel/20 blur-3xl"
      />
      <div
        ref={(el) => (floatingElementsRef.current[1] = el)}
        className="absolute bottom-40 right-10 w-48 h-48 rounded-full bg-glaze/20 blur-3xl"
      />
      <div
        ref={(el) => (floatingElementsRef.current[2] = el)}
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-cinnamon/30 blur-3xl"
      />

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 pt-32 lg:pt-0">
        {/* Columna izquierda - Texto y botones */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Título principal */}
          <h1
            ref={titleRef}
            className="font-bree text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-glaze mb-6"
          >
            Una <span className="text-caramel">tentación</span>
            <br />
            que se{" "}
            <span className="relative">
              disfruta
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
                  strokeDasharray="8 8"
                />
              </svg>
            </span>
          </h1>

          {/* Descripción breve */}
          <p className="text-glaze/80 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
            Roles de canela artesanales con los mejores ingredientes y toppings
            para consentirte
          </p>

          {/* BOTONES - AHORA VISIBLES */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <Link
              href="/#menu"
              ref={(el) => (buttonsRef.current[0] = el)}
              className="group relative"
            >
              <button className="relative w-48 h-14 bg-caramel text-cinnamon rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  🥐 Ver Roles
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-caramel to-glaze opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>

            <Link
              href="/#toppings"
              ref={(el) => (buttonsRef.current[1] = el)}
              className="group relative"
            >
              <button className="relative w-48 h-14 bg-transparent border-2 border-glaze text-glaze rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 hover:bg-glaze hover:text-cinnamon">
                <span className="flex items-center justify-center gap-2">
                  🍯 Toppings
                </span>
              </button>
            </Link>
          </div>

          {/* Stats o características */}
          <div className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start">
            {[
              { icon: "🥖", label: "Hornero artesanal" },
              { icon: "🌿", label: "Ingredientes naturales" },
              { icon: "⭐", label: "4.9 (2k+ reseñas)" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-glaze/80 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha - IMAGEN REDISEÑADA */}
        <div className="w-full lg:w-1/2 relative" ref={imageContainerRef}>
          {/* Contenedor de imagen con efecto de marco */}
          <div className="relative">
            {/* Marco decorativo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-caramel via-glaze to-caramel rounded-[2.5rem] opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500" />

            {/* Marco exterior */}
            <div className="absolute -inset-2 bg-gradient-to-r from-caramel to-glaze rounded-[2rem] opacity-50" />

            {/* Imagen principal */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                ref={imageRef}
                src="/hero.jpg"
                alt="Roles de canela recién horneados con glaze"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay degradado sutil */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cinnamon/20 via-transparent to-transparent" />

              {/* Elementos flotantes sobre la imagen */}
              <div className="absolute top-4 left-4 bg-glaze/95 backdrop-blur-sm text-cinnamon px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
                <span className="text-amber-500">⭐</span>
                <span className="font-bold">4.9</span>
                <span className="text-cinnamon/70">(2k+)</span>
              </div>

              <div className="absolute bottom-4 right-4 bg-cinnamon/95 backdrop-blur-sm text-glaze px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
                <span className="text-xl">🔥</span>
                <span className="font-medium">Recién horneados</span>
              </div>

              {/* Badge flotante de oferta */}
              <div className="absolute -top-3 -right-3 bg-berry text-glaze w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg shadow-xl animate-pulse">
                2x1
              </div>
            </div>
          </div>

          {/* Mini imágenes decorativas (opcional) */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl overflow-hidden shadow-xl rotate-6 hidden lg:block">
            <Image
              src="/hero.jpg"
              alt="Miniatura"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl overflow-hidden shadow-xl -rotate-6 hidden lg:block">
            <Image
              src="/hero.jpg"
              alt="Miniatura"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-glaze/50 text-xs tracking-widest">DESCUBRE</span>
        <div className="w-5 h-8 border-2 border-glaze/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-glaze/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      {/* Forma decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cinnamon to-transparent z-10" />
    </section>
  );
};

export default Hero;
