import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="fixed flex flex-col items-center inset-x-0 top-10 z-50 bg-transparent">
      <div className="relative h-20 w-[353px] sm:w-[500px] lg:h-28 lg:w-[780px] bg-cinnamon rounded-full flex items-center justify-between px-10 sm:px-20 py-4 text-md sm:text-xl text-yellow2">
        {/* Menú */}
        <span className="transition-transform hover:scale-125 cursor-pointer active:scale-95">
          <a href="/#menu">Menú</a>
        </span>

        {/* Ubicaciones */}
        <span className="transition-transform hover:scale-125 cursor-pointer active:scale-95">
          <a href="/#form">Contacto</a>
        </span>

        {/* Logo centrado */}
        <div className="absolute left-1/2 -translate-x-1/2 ">
          <div className="w-20 h-20 lg:w-24 lg:h-24 p-3 bg-yellow2 rounded-full flex items-center justify-center hover:scale-110 cursor-pointer active:scale-95">
            <a href="/#home">
              <Image
                src="/canela.png"
                alt="cinnamon"
                width={200}
                height={200}
                className="object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
