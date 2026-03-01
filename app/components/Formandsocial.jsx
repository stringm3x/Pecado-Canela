"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "../UI/Form";
import {
  FaWhatsapp,
  FaInstagram,
  FaUber,
  FaTelegramPlane,
} from "react-icons/fa";
import { SiUbereats } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Formandsocial = () => {
  const sectionRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const formRef = useRef(null);
  const buttonsRef = useRef([]);
  const socialRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Estado inicial
      gsap.set(
        [
          title1Ref.current,
          title2Ref.current,
          formRef.current,
          ...buttonsRef.current,
          ...socialRefs.current,
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

      tl.to(title1Ref.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          formRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
          },
          "-=0.4"
        )
        .to(
          title2Ref.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .to(
          buttonsRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)",
          },
          "-=0.4"
        )
        .to(
          socialRefs.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)",
          },
          "-=0.2"
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
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-caramel/10 blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-cinnamon/5 blur-3xl" />

      {/* Patrón decorativo de corazones */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cinnamon"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Primer título */}
          <div ref={title1Ref} className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cinnamon/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 bg-berry rounded-full animate-pulse" />
              <span className="text-cinnamon text-sm font-medium tracking-wide">
                CONTÁCTANOS
              </span>
            </div>

            <h1 className="font-bree text-4xl md:text-5xl lg:text-6xl text-cinnamon">
              Nos encanta saber tu{" "}
              <span className="text-berry relative">
                opinión
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
          </div>

          {/* Formulario */}
          <div ref={formRef} className="mb-20">
            <div className="p-6 md:p-8">
              <Form />
            </div>
          </div>

          {/* Segunda sección */}
          <div className="text-center">
            {/* Segundo título */}
            <div ref={title2Ref} className="mb-10">
              <div className="inline-flex items-center gap-2 bg-cinnamon/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <span className="w-2 h-2 bg-matcha rounded-full animate-pulse" />
                <span className="text-cinnamon text-sm font-medium tracking-wide">
                  DELIVERY
                </span>
              </div>

              <h2 className="font-bree text-3xl md:text-4xl lg:text-5xl text-cinnamon">
                ¡Ordena en{" "}
                <span className="text-matcha relative">
                  línea!
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M2 10C50 3 150 3 298 10"
                      stroke="#075E54"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="6 6"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Botones de delivery */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
              {/* Uber Eats */}
              <a
                href="https://www.ubereats.com/store/pecado-de-canela-mexico-city/xYFKmJ92TpelCJTKMkbwaA?ps=1&utm_source=menu-maker"
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (buttonsRef.current[0] = el)}
              >
                <button className="group relative w-48 h-20 bg-black hover:bg-cinnamon rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 overflow-hidden">
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <SiUbereats className="text-yellow text-2xl" />
                    <span className="text-yellow font-bold text-lg">
                      Uber Eats
                    </span>
                  </div>
                </button>
              </a>
            </div>

            {/* Redes sociales */}
            <div className="flex flex-col items-center gap-6">
              <p className="text-stone text-lg">
                ¡Síguenos y comparte tu experiencia!
              </p>

              <div className="flex justify-center gap-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/+525611809801"
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => (socialRefs.current[0] = el)}
                >
                  <button className="w-16 h-16 rounded-full bg-green hover:bg-cinnamon transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 flex items-center justify-center group">
                    <FaWhatsapp className="text-yellow text-3xl group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/pecadodecanelamx/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => (socialRefs.current[1] = el)}
                >
                  <button className="w-16 h-16 rounded-full bg-gradient-to-br from-purple via-berry to-caramel hover:bg-cinnamon transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 flex items-center justify-center group">
                    <FaInstagram className="text-yellow text-3xl group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formandsocial;
