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
            gsap.to(logoRef.current, {
              scale: 0.95,
              duration: 0.3,
            });
          } else if (scrollY <= 50 && isScrolled) {
            setIsScrolled(false);
            gsap.to(headerBgRef.current, {
              backgroundColor: "#FFECB8",
              boxShadow: "0 10px 30px -5px rgba(83,30,13,0.15)",
              duration: 0.3,
              ease: "power2.inOut",
            });
            gsap.to(logoRef.current, {
              scale: 1,
              duration: 0.3,
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
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <>
      {/* Header flotante - MÁS COMPACTO */}
      <header
        ref={headerRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto min-w-[320px] max-w-[500px] px-2"
      >
        {/* Fondo amarillo */}
        <div
          ref={headerBgRef}
          className="absolute inset-0 rounded-full" // Cambiado a rounded-full para forma de píldora
          style={{
            backgroundColor: "#FFECB8",
            boxShadow: "0 10px 30px -5px rgba(83,30,13,0.15)",
          }}
        />

        {/* Borde decorativo */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ border: "1px solid rgba(83,30,13,0.1)" }}
        />

        {/* Contenido */}
        <div className="relative px-3 py-1.5">
          <nav className="flex items-center justify-between gap-4">
            {/* Logo con animación */}
            <Link href="/#home" className="relative z-50 group" ref={logoRef}>
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                {/* Fondo circular */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "#F9F5CD" }}
                />

                {/* Borde animado */}
                <div
                  className="absolute inset-0 rounded-full border-2 transition-all duration-300 group-hover:border-cinnamon/40"
                  style={{
                    borderColor: "rgba(83,30,13,0.2)",
                  }}
                />

                {/* Imagen */}
                <div className="absolute inset-1.5">
                  <Image
                    src="/canela.png"
                    alt="Roles de Canela"
                    fill
                    className="object-contain"
                    priority
                    sizes="40px"
                  />
                </div>
              </div>
            </Link>

            {/* Menú Desktop - MÁS COMPACTO */}
            <div className="flex items-center gap-1">
              {menuItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => (menuItemsRef.current[index] = el)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className="relative font-medium text-sm md:text-base px-3 py-1.5 rounded-full hover:bg-cinnamon/5 transition-colors"
                  style={{ color: "#531E0D" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Botón Hamburguesa - MÁS COMPACTO */}
            <button
              ref={hamburgerRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden relative z-50 w-8 h-8 rounded-full transition-colors"
              style={{ backgroundColor: "rgba(83,30,13,0.05)" }}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <div className="w-4 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between">
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

      {/* Menú Móvil - MÁS COMPACTO */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-y-0 right-0 w-64 z-40 sm:hidden"
        style={{
          transform: "translateX(100%)",
          backgroundColor: "#FFECB8",
          boxShadow: "-5px 0 30px rgba(83,30,13,0.25)",
        }}
      >
        <div className="flex flex-col h-full pt-20 px-4">
          {/* Logo pequeño */}
          <div className="mb-6">
            <div className="relative w-16 h-16 mx-auto">
              <div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: "#F9F5CD" }}
              />
              <Image
                src="/canela.png"
                alt="Roles de Canela"
                fill
                className="object-contain p-3"
              />
            </div>
          </div>

          {/* Links */}
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="py-3 text-lg font-medium border-b text-center"
              style={{
                color: "#531E0D",
                borderColor: "rgba(83,30,13,0.1)",
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Botón ordenar móvil */}
          <div className="mt-4">
            <Link href="/#ordenar" onClick={handleLinkClick}>
              <button
                className="w-full py-3 rounded-xl font-medium text-base"
                style={{
                  backgroundColor: "#531E0D",
                  color: "#F9F5CD",
                }}
              >
                Ordenar ahora
              </button>
            </Link>
          </div>

          {/* Info compacta */}
          <div className="mt-auto pb-4">
            <p className="text-center text-xs" style={{ color: "#531E0D" }}>
              🍽️ 8:00 - 22:00
            </p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="menu-overlay fixed inset-0 z-30 sm:hidden"
          style={{
            backgroundColor: "rgba(83,30,13,0.5)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
