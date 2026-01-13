"use client"
import React, { useState } from "react";

const Form = () => {
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mensaje.trim().length < 10) {
      alert("Por favor escribe al menos 10 caracteres.");
      return;
    }

    // Aquí iría la lógica para enviar el mensaje
    console.log("Mensaje enviado:", mensaje);
    alert("¡Gracias por compartir tu experiencia!");

    setMensaje(""); // Limpiar el campo
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-auto w-64 sm:w-72 flex flex-col gap-4 items-center bg-yellow2 rounded-2xl p-5"
    >
      <h1 className="text-cinnamon text-2xl text-center">
        Cuéntanos <br /> tu experiencia
      </h1>

      <textarea
        className="w-full h-32 bg-yellow rounded-2xl px-3 py-2 resize-none"
        placeholder="Escribe tu experiencia aquí..."
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />

      <button
        type="submit"
        className="text-white rounded-2xl px-4 py-2 hover:bg-cinnamon border-2 border-black transition-colors"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
