import React from "react";
import { FaInstagram, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="sm:h-64 bg-cinnamon flex flex-col gap-10 xl:gap-20 pt-20 px-5 sm:px-20 text-yellow ">
      <section className="justify-end flex flex-col sm:flex-row gap-32 md:gap-40 lg:gap-56 w-full">
        <div>
          <h1>pecado</h1>
        </div>

        <div className="flex flex-row gap-10 sm:gap-14 lg:gap-24 xl:gap-32 text-sm">
          <div className="flex flex-col gap-8">
            <h1> Principall</h1>

            <div className="flex flex-col text-md sm:text-lg">
              <a href="#menu" className="hover:scale-105">
                Menu
              </a>
              <a href="#form" className="hover:scale-105">
                Opiniones
              </a>
              <a href="#reviews" className="hover:scale-105">
                Reseñas
              </a>
              <a href="#form" className="hover:scale-105">
                Ordenar
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h1>Categorias</h1>

            <div className="flex flex-col text-lg">
              <a href="#menu" className="hover:scale-105">
                Roles
              </a>
              <a href="#toppings" className="hover:scale-105">
                Toppings
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h1>Siguenos</h1>

            <FaInstagram className="w-8 h-8 hover:scale-110" />
          </div>
        </div>
      </section>

      <div className="flex flex-row justify-center items-center gap-2">
        <h1>2026</h1>
        <FaRegCopyright />
      </div>
    </footer>
  );
};

export default Footer;
