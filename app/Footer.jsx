"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaRegCopyright,
  FaHeart,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
} from "react-icons/fa";
import { SiUbereats, SiRapid } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const socialRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada - SIN once:true para que se vea siempre
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse", // Cambiado: play al entrar, reverse al salir
        },
      });

      // Animación de iconos sociales - SIN once:true
      gsap.from(socialRefs.current, {
        scale: 0,
        rotation: 360,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse", // Cambiado
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="relative bg-cinnamon text-cream overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-caramel/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-glaze/5 rounded-full blur-3xl" />

      {/* Patrón de canela */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 30L30 55L5 30L30 5Z' fill='%23FFECB8' fill-opacity='0.2' /%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-20"
      >
        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Columna 1: Logo e información */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/#home" className="inline-block">
              <div className="relative w-48 h-24">
                <Image
                  src="/logo2.png"
                  alt="Pecado de Canela"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                />
              </div>
            </Link>

            <p className="text-cream/80 text-sm leading-relaxed max-w-md">
              Roles de canela artesanales horneados diariamente con amor y los
              mejores ingredientes. Una tentación que se disfruta.
            </p>

            {/* Información de contacto */}
            <div className="space-y-3 mt-2">
              <div className="flex items-center gap-3 text-cream/70">
                <FaMapMarkerAlt className="text-caramel" />
                <span className="text-sm">Ciudad de México, México</span>
              </div>
              <div className="flex items-center gap-3 text-cream/70">
                <FaClock className="text-caramel" />
                <span className="text-sm">Vier - Dom: 6:00 - 23:00</span>
              </div>
              <div className="flex items-center gap-3 text-cream/70">
                <FaPhone className="text-caramel" />
                <span className="text-sm">+52 56 1180 9801</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Enlaces principales */}
          <div className="lg:col-span-2">
            <h3 className="font-bree text-xl text-caramel mb-6">Principal</h3>
            <ul className="space-y-4">
              {[
                { href: "/#menu", label: "Menú" },
                { href: "/#form", label: "Opiniones" },
                { href: "/#reviews", label: "Reseñas" },
                { href: "/#ordenar", label: "Ordenar" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-caramel hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Categorías */}
          <div className="lg:col-span-2">
            <h3 className="font-bree text-xl text-caramel mb-6">Categorías</h3>
            <ul className="space-y-4">
              {[
                { href: "/#menu", label: "Roles" },
                { href: "/#toppings", label: "Toppings" },
                { href: "/#combos", label: "Combos" },
                { href: "/#promociones", label: "Promociones" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-caramel hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Apps de delivery y redes */}
          <div className="lg:col-span-4">
            <h3 className="font-bree text-xl text-caramel mb-6">
              ¡Ordénalo ya!
            </h3>

            {/* Apps de delivery */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button className="flex items-center gap-2 bg-cream/10 hover:bg-cream/20 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105">
                <SiUbereats className="text-cream text-xl" />
                <span className="text-sm font-medium">Uber Eats</span>
              </button>
            </div>

            {/* Redes sociales */}
            <h4 className="text-cream/80 text-sm mb-4">Síguenos</h4>
            <div className="flex gap-4">
              {[
                {
                  Icon: FaInstagram,
                  href: "https://instagram.com/pecadodecanelamx",
                  color: "hover:bg-[#E4405F]",
                },
                {
                  Icon: FaTiktok,
                  href: "https://tiktok.com",
                  color: "hover:bg-[#000000]",
                },
                {
                  Icon: FaWhatsapp,
                  href: "https://wa.me/521234567890",
                  color: "hover:bg-[#25D366]",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => (socialRefs.current[index] = el)}
                  className={`w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color} hover:bg-opacity-100 group`}
                >
                  <social.Icon className="text-cream text-xl group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-cream/10 my-8" />

        {/* Bottom bar con crédito STRING */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/60">
          <div className="flex items-center gap-2">
            <span>{currentYear}</span>
            <FaRegCopyright className="text-xs" />
            <span>Pecado de Canela. Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Hecho con</span>
            <FaHeart className="text-berry animate-pulse" />
            <span>en México</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacidad"
              className="hover:text-caramel transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="hover:text-caramel transition-colors"
            >
              Términos
            </Link>
            <Link
              href="/proverbios-16-3"
              className="hover:text-caramel transition-colors"
            >
              Proverbios 16:3
            </Link>

            {/* Crédito STRING con tipografía Anton */}
            <div className="flex items-center space-x-2 border-l border-cream/10 pl-4 ml-2">
              <span className="text-cream/40 text-xs">Diseñado por</span>
              <a
                href="https://www.stringwebs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-1"
              >
                <span
                  className="font-anton text-sm md:text-base tracking-wider text-caramel group-hover:text-cream transition-colors duration-300"
                  style={{ fontFamily: "Anton, sans-serif" }}
                >
                  STRING
                </span>
                <span className="text-xs text-cream/40 group-hover:text-caramel transition-colors">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
