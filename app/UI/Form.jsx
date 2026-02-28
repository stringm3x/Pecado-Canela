"use client";
import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaStar,
  FaRegStar,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import gsap from "gsap";

const Form = () => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [calificacion, setCalificacion] = useState(0);
  const [hoverCalificacion, setHoverCalificacion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusType, setStatusType] = useState("");
  const [caracteresRestantes, setCaracteresRestantes] = useState(200);

  const formRef = useRef(null);
  const successRef = useRef(null);
  const errorRef = useRef(null);

  const MAX_CARACTERES = 200;

  useEffect(() => {
    if (statusType === "success") {
      gsap.fromTo(
        successRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, [statusType]);

  const handleMensajeChange = (e) => {
    const texto = e.target.value;
    if (texto.length <= MAX_CARACTERES) {
      setMensaje(texto);
      setCaracteresRestantes(MAX_CARACTERES - texto.length);
    }
  };

  const validarFormulario = () => {
    if (!nombre.trim()) {
      setStatusMsg("Por favor ingresa tu nombre");
      setStatusType("error");
      return false;
    }

    if (calificacion === 0) {
      setStatusMsg("Por favor califica tu experiencia");
      setStatusType("error");
      return false;
    }

    if (mensaje.trim().length < 10) {
      setStatusMsg("Por favor escribe al menos 10 caracteres");
      setStatusType("error");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarFormulario()) return;

    setLoading(true);
    setStatusMsg("");
    setStatusType("");

    emailjs
      .send(
        "service_5zewsub",
        "template_p3hmutd",
        {
          mensaje,
          nombre,
          email,
          calificacion,
          fecha: new Date().toLocaleDateString("es-MX"),
        },
        {
          publicKey: "i5H4govH2PIJvgaFK",
        }
      )
      .then(() => {
        setStatusMsg("¡Gracias por compartir tu experiencia!");
        setStatusType("success");
        setMensaje("");
        setNombre("");
        setEmail("");
        setCalificacion(0);
        setCaracteresRestantes(MAX_CARACTERES);
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

  const Estrellas = ({ total = 5, valor, hover, setValor, setHover }) => {
    return (
      <div className="flex gap-2 justify-center">
        {[...Array(total)].map((_, index) => {
          const rating = index + 1;
          return (
            <button
              key={index}
              type="button"
              onClick={() => setValor(rating)}
              onMouseEnter={() => setHover(rating)}
              onMouseLeave={() => setHover(0)}
              className="focus:outline-none transition-transform hover:scale-110"
            >
              {rating <= (hover || valor) ? (
                <FaStar className="w-8 h-8 text-caramel" />
              ) : (
                <FaRegStar className="w-8 h-8 text-caramel/40" />
              )}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="relative w-full max-w-md mx-auto bg-gradient-to-br from-glaze to-cream rounded-3xl shadow-2xl p-6 md:p-8 overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-caramel/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-cinnamon/5 rounded-full blur-xl" />

      {/* Header del formulario */}
      <div className="relative z-10 text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-cinnamon/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
          <span className="w-2 h-2 bg-cinnamon rounded-full animate-pulse" />
          <span className="text-cinnamon text-sm font-medium tracking-wide">
            💬 COMPARTE
          </span>
        </div>

        <h2 className="text-cinnamon font-bree text-2xl md:text-3xl mb-2">
          Cuéntanos tu experiencia
        </h2>
        <p className="text-stone text-sm">Tu opinión nos ayuda a mejorar</p>
      </div>

      {/* Campos del formulario */}
      <div className="relative z-10 space-y-5">
        {/* Campo Nombre */}
        <div>
          <label className="block text-cinnamon text-sm font-medium mb-2">
            Nombre *
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full bg-white/80 border border-cinnamon/20 rounded-xl px-4 py-3 text-cinnamon placeholder-stone/50 focus:outline-none focus:border-caramel focus:ring-2 focus:ring-caramel/20 transition-all"
            placeholder="Ej: María González"
          />
        </div>

        {/* Campo Email (opcional) */}
        <div>
          <label className="block text-cinnamon text-sm font-medium mb-2">
            Email <span className="text-stone/50">(opcional)</span>
          </label>
          <div className="relative">
            <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-stone/50" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/80 border border-cinnamon/20 rounded-xl pl-10 pr-4 py-3 text-cinnamon placeholder-stone/50 focus:outline-none focus:border-caramel focus:ring-2 focus:ring-caramel/20 transition-all"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>
        </div>

        {/* Calificación con estrellas */}
        <div>
          <label className="block text-cinnamon text-sm font-medium mb-3 text-center">
            ¿Cómo calificas tu experiencia? *
          </label>
          <Estrellas
            valor={calificacion}
            hover={hoverCalificacion}
            setValor={setCalificacion}
            setHover={setHoverCalificacion}
          />
          {calificacion > 0 && (
            <p className="text-center text-sm text-cinnamon mt-2">
              {calificacion === 5 && "¡Excelente! 🎉"}
              {calificacion === 4 && "¡Muy bien! 👍"}
              {calificacion === 3 && "Bien, podemos mejorar"}
              {calificacion === 2 && "Regular"}
              {calificacion === 1 && "Malo"}
            </p>
          )}
        </div>

        {/* Campo Mensaje */}
        <div>
          <label className="block text-cinnamon text-sm font-medium mb-2">
            Tu experiencia *
          </label>
          <textarea
            className="w-full h-32 bg-white/80 border border-cinnamon/20 rounded-xl px-4 py-3 text-cinnamon placeholder-stone/50 resize-none focus:outline-none focus:border-caramel focus:ring-2 focus:ring-caramel/20 transition-all"
            placeholder="Cuéntanos qué te pareció nuestro rol de canela..."
            value={mensaje}
            onChange={handleMensajeChange}
            maxLength={MAX_CARACTERES}
          />
          <div className="flex justify-end mt-1">
            <span
              className={`text-xs ${
                caracteresRestantes < 20 ? "text-berry" : "text-stone"
              }`}
            >
              {caracteresRestantes} caracteres restantes
            </span>
          </div>
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cinnamon text-glaze rounded-xl px-6 py-4 font-bold text-lg hover:bg-cinnamon/90 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-glaze border-t-transparent rounded-full animate-spin" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <span>Enviar opinión</span>
              <span className="text-xl">✨</span>
            </>
          )}
        </button>

        {/* Mensaje de éxito/error */}
        {statusMsg && (
          <div
            ref={statusType === "success" ? successRef : null}
            className={`mt-4 p-4 rounded-xl flex items-center gap-3 ${
              statusType === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {statusType === "success" ? (
              <FaCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            ) : (
              <FaExclamationCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            )}
            <p className="text-sm">{statusMsg}</p>
          </div>
        )}
      </div>

      {/* Texto de política */}
      <p className="text-center text-stone/60 text-xs mt-6">
        Tus datos están seguros con nosotros. No compartimos tu información.
      </p>
    </form>
  );
};

export default Form;
