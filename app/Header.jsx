"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const headerBgRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(logoRef.current, {
        scale: 0,
        rotation: -180,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        delay: 0.3,
      });

      gsap.from(menuItemsRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.5,
      });

      // Efecto al hacer scroll
      ScrollTrigger.create({
        trigger: document.body,
        start: "top -50px",
        onUpdate: (self) => {
          const scrollY = self.scroll;
          if (scrollY > 50 && !isScrolled) {
            setIsScrolled(true);
            gsap.to(headerBgRef.current, {
              backgroundColor: "#FFECB8",
              boxShadow: "0 20px 30px -10px rgba(83,30,13,0.25)",
              duration: 0.3,
              ease: "power2.inOut",
            });
          } else if (scrollY <= 50 && isScrolled) {
            setIsScrolled(false);
            gsap.to(headerBgRef.current, {
              backgroundColor: "#FFECB8",
              boxShadow: "0 10px 30px -5px rgba(83,30,13,0.15)",
              duration: 0.3,
              ease: "power2.inOut",
            });
          }
        },
      });
    });

    return () => ctx.revert();
  }, [isScrolled]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          x: "0%",
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(".hamburger-line-1", {
          rotate: 45,
          y: 8,
          backgroundColor: "#531E0D",
          duration: 0.3,
        });
        gsap.to(".hamburger-line-2", {
          opacity: 0,
          duration: 0.2,
        });
        gsap.to(".hamburger-line-3", {
          rotate: -45,
          y: -8,
          backgroundColor: "#531E0D",
          duration: 0.3,
        });

        // Animar fondo del overlay
        gsap.to(".menu-overlay", {
          opacity: 1,
          duration: 0.3,
          display: "block",
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          duration: 0.5,
          ease: "power3.in",
        });

        gsap.to(".hamburger-line-1", {
          rotate: 0,
          y: 0,
          backgroundColor: "#531E0D",
          duration: 0.3,
        });
        gsap.to(".hamburger-line-2", {
          opacity: 1,
          backgroundColor: "#531E0D",
          duration: 0.2,
          delay: 0.1,
        });
        gsap.to(".hamburger-line-3", {
          rotate: 0,
          y: 0,
          backgroundColor: "#531E0D",
          duration: 0.3,
        });

        gsap.to(".menu-overlay", {
          opacity: 0,
          duration: 0.3,
          delay: 0.1,
          display: "none",
        });
      }
    });

    return () => ctx.revert();
  }, [isMenuOpen]);

  const handleMouseEnter = (index) => {
    gsap.to(menuItemsRef.current[index], {
      y: -3,
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
      color: "#531E0D",
      borderBottom: "2px solid #531E0D",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(menuItemsRef.current[index], {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.in",
      color: "#531E0D",
      borderBottom: "2px solid transparent",
    });
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: "/#menu", label: "Menú" },
    { href: "/#nosotros", label: "Nosotros" },
    { href: "/#contacto", label: "Contacto" },
    { href: "/#ubicaciones", label: "Ubicaciones" },
  ];

  return (
    <>
      {/* Header flotante */}
      <header
        ref={headerRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
      >
        {/* Fondo amarillo - siempre visible */}
        <div
          ref={headerBgRef}
          className="absolute inset-0 rounded-2xl"
          style={{
            backgroundColor: "#FFECB8", // yellow
            boxShadow: "0 10px 30px -5px rgba(83,30,13,0.15)",
          }}
        />

        {/* Borde decorativo */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{ border: "1px solid rgba(83,30,13,0.1)" }}
        />

        {/* Contenido */}
        <div className="relative px-4 sm:px-8 py-3">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/#home" className="relative z-50 group" ref={logoRef}>
              <div className="relative w-14 h-14 lg:w-16 lg:h-16">
                {/* Fondo circular del logo */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "#F9F5CD" }} // glaze
                />

                {/* Borde del logo */}
                <div
                  className="absolute inset-0 rounded-full border-2 transition-colors duration-300"
                  style={{
                    borderColor: "rgba(83,30,13,0.2)",
                    ...(isScrolled && { borderColor: "rgba(83,30,13,0.3)" }),
                  }}
                />

                {/* Imagen */}
                <div className="absolute inset-2">
                  <Image
                    src="/canela.png"
                    alt="Roles de Canela"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 56px, 64px"
                  />
                </div>
              </div>
            </Link>

            {/* Menú Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => (menuItemsRef.current[index] = el)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className="relative font-medium text-lg tracking-wide px-2 py-1"
                  style={{ color: "#531E0D" }} // cinnamon
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Botón de acción */}
            <div className="hidden lg:block">
              <Link href="/#ordenar">
                <button
                  className="px-6 py-2.5 rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 active:scale-95"
                  style={{
                    backgroundColor: "#531E0D", // cinnamon
                    color: "#F9F5CD", // glaze
                  }}
                >
                  Ordenar ahora
                </button>
              </Link>
            </div>

            {/* Botón Hamburguesa */}
            <button
              ref={hamburgerRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-50 w-12 h-12 rounded-xl transition-colors"
              style={{ backgroundColor: "rgba(83,30,13,0.05)" }}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between">
                <span
                  className="hamburger-line-1 w-full h-0.5 rounded-full transform origin-left transition-all"
                  style={{ backgroundColor: "#531E0D" }}
                />
                <span
                  className="hamburger-line-2 w-full h-0.5 rounded-full transition-all"
                  style={{ backgroundColor: "#531E0D" }}
                />
                <span
                  className="hamburger-line-3 w-full h-0.5 rounded-full transform origin-left transition-all"
                  style={{ backgroundColor: "#531E0D" }}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Menú Móvil - AHORA CON TUS COLORES, SIN BLANCO */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-y-0 right-0 w-full sm:w-96 z-40 lg:hidden"
        style={{
          transform: "translateX(100%)",
          backgroundColor: "#FFECB8", // yellow (mismo que el header)
          boxShadow: "-5px 0 30px rgba(83,30,13,0.25)",
        }}
      >
        <div className="flex flex-col h-full pt-32 px-8">
          {/* Logo en móvil */}
          <div className="mb-8">
            <div className="relative w-24 h-24 mx-auto">
              {/* Fondo circular */}
              <div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: "#F9F5CD" }} // glaze
              />
              <Image
                src="/canela.png"
                alt="Roles de Canela"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* Links del menú */}
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="py-4 text-2xl font-medium border-b transition-all duration-300 hover:translate-x-2"
              style={{
                color: "#531E0D", // cinnamon
                borderColor: "rgba(83,30,13,0.1)",
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Botón de acción en móvil */}
          <div className="mt-8">
            <Link href="/#ordenar" onClick={handleLinkClick}>
              <button
                className="w-full py-4 rounded-xl font-medium text-lg hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundColor: "#531E0D", // cinnamon
                  color: "#F9F5CD", // glaze
                }}
              >
                Ordenar ahora
              </button>
            </Link>
          </div>

          {/* Información */}
          <div className="mt-auto pb-8">
            <p className="text-center text-sm" style={{ color: "#531E0D" }}>
              🍽️ Lunes a Domingo • 8:00 - 22:00
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              {/* Redes sociales con tus colores */}
              {["📱", "📘", "📸"].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  style={{
                    backgroundColor: "rgba(83,30,13,0.1)",
                    color: "#531E0D",
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay del menú móvil - AHORA EN TONO CINNAMON */}
      {isMenuOpen && (
        <div
          className="menu-overlay fixed inset-0 z-30 lg:hidden"
          style={{
            backgroundColor: "rgba(83,30,13,0.5)", // cinnamon con opacidad
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
