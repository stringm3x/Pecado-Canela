"use client";
import React from "react";
import Form from "../UI/Form";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const Formandsocial = () => {
  return (
    <section className="min-h-screen flex flex-col gap-20 items-center pt-40 lg:pt-56">
      <h1 className="font-bree text-4xl lg:text-6xl text-center text-cinnamon">
        Nos encanta saber tu <br /> opinion
      </h1>

      <div>
        <Form />
      </div>

      <div className="flex flex-col items-center gap-10">
        <h1 className="font-bree text-4xl xl:text-6xl text-center text-cinnamon">
          ¡Ordena en línea!
        </h1>
        <div className="flex flex-row items-center gap-10">
          <a href="https://www.ubereats.com/store/pecado-de-canela-mexico-city/xYFKmJ92TpelCJTKMkbwaA?ps=1&utm_source=menu-maker">
            <button className="w-36 h-20 content-center rounded-2xl bg-black group hover:bg-cinnamon hover:scale-110">
              <h1 className="text-center font-semibold text-xl text-yellow">
                Uber Eats
              </h1>
            </button>
          </a>

          {/* 
          <button className="w-16 h-16 flex items-center justify-center rounded-full  bg-green group hover:bg-cinnamon hover:scale-110 p-2">
            <FaWhatsapp className="text-yellow w-10 h-10" />
          </button>
          */}

          <a href="https://www.instagram.com/pecadodecanelamx/?hl=en">
            <button className="w-16 h-16 flex items-center justify-center rounded-full  bg-purple group hover:bg-cinnamon hover:scale-110">
              <FaTelegramPlane className="text-yellow w-8 h-8" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Formandsocial;
