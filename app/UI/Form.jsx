"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(""); // Estado para mensaje
  const [statusType, setStatusType] = useState(""); // 'success' o 'error'

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mensaje.trim().length < 10) {
      setStatusMsg("Por favor escribe al menos 10 caracteres.");
      setStatusType("error");
      return;
    }

    setLoading(true);
    setStatusMsg(""); // Limpiar mensaje previo
    setStatusType("");

    emailjs
      .send(
        "service_5zewsub",
        "template_p3hmutd",
        { mensaje },
        {
          publicKey: "i5H4govH2PIJvgaFK",
        }
      )
      .then(() => {
        setStatusMsg("¡Gracias por compartir tu experiencia!");
        setStatusType("success");
        setMensaje("");
      })
      .catch((error) => {
        console.error("ERROR REAL:", error);
        setStatusMsg("Hubo un error al enviar. Intenta de nuevo.");
        setStatusType("error");
      })
      .finally(() => {
        setLoading(false);
      });
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
        disabled={loading}
        className="text-white rounded-2xl px-4 py-2 border-2 border-black transition-colors hover:bg-cinnamon disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {/* Mensaje dentro del formulario */}
      {statusMsg && (
        <p
          className={`mt-2 text-center ${
            statusType === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {statusMsg}
        </p>
      )}
    </form>
  );
};

export default Form;
