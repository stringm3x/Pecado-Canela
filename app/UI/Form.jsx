import React from "react";

const Form = () => {
  return (
    <form className="h-72 w-64 sm:h-64 sm:w-72 flex flex-col gap-4 items-center bg-yellow2 rounded-2xl p-5">
      <h1 className="text-cinnamon text-2xl text-center">
        Cuéntanos <br /> tu experiencia
      </h1>

      <input type="text" className="w-full h-full bg-yellow rounded-2xl" />

      <button>Enviar</button>
    </form>
  );
};

export default Form;
