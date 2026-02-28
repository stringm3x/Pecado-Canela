import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaShoppingCart,
  FaArrowLeft,
  FaHeart,
  FaShare,
} from "react-icons/fa";
import { SiUbereats, SiRapid } from "react-icons/si";

const kind = [
  {
    id: 1,
    title: "Clásico",
    price: "$69.00",
    image: "/glazed/clasico.jpg",
    description:
      "Nuestro Rol clásico hecho con masa de la casa artesanal esponjosa, rellena de canela y mascabado. Cubierto con un glaseado cremoso de queso Philadelphia, mantequilla y azúcar glass.",
    badge: "MÁS VENDIDO",
    badgeColor: "bg-berry",
    ingredients: [
      "Canela",
      "Mascabado",
      "Queso Philadelphia",
      "Mantequilla",
      "Azúcar glass",
    ],
    nutritional: {
      calorias: "350",
      carbohidratos: "45g",
      proteinas: "6g",
      grasas: "18g",
    },
  },
  {
    id: 2,
    title: "Chocolate",
    price: "$69.00",
    image: "/glazed/chocolate.jpg",
    description:
      "Una irresistible versión de nuestro rol clásico con relleno de canela, mascabado. Esta cubierto con un betún cremoso de chocolate de leche y sutilmente espolvoreado con cacao.",
    badge: "NUEVO",
    badgeColor: "bg-matcha",
    ingredients: [
      "Canela",
      "Mascabado",
      "Chocolate de leche",
      "Cacao",
      "Mantequilla",
    ],
    nutritional: {
      calorias: "380",
      carbohidratos: "48g",
      proteinas: "7g",
      grasas: "20g",
    },
  },
  {
    id: 3,
    title: "Tres Leches",
    price: "$74.00",
    image: "/glazed/leches.jpg",
    description:
      "Rol base clásica esponjoso, relleno de canela y azúcar, bañado en mezcla de tres leches y terminado con un glaseado natural decorado.",
    badge: "ESPECIAL",
    badgeColor: "bg-lavender",
    ingredients: [
      "Canela",
      "Azúcar",
      "Leche evaporada",
      "Leche condensada",
      "Crema de leche",
    ],
    nutritional: {
      calorias: "420",
      carbohidratos: "52g",
      proteinas: "8g",
      grasas: "22g",
    },
  },
];

export default async function RolDetail({ params }) {
  const resolvedParams = await params;
  const rol = kind.find((item) => item.id === Number(resolvedParams.id));

  if (!rol) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cream to-glaze/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-bree text-4xl text-cinnamon mb-4">
            Rol no encontrado
          </h1>
          <p className="text-stone mb-8">
            Lo sentimos, el producto que buscas no existe.
          </p>
          <Link href="/#menu">
            <button className="bg-cinnamon text-glaze px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300">
              Volver al menú
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-cream to-glaze/30 py-24 md:py-32 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-caramel/10 blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-cinnamon/5 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Botón de regreso */}
        <div className="mb-8">
          <Link href="/#menu">
            <button className="flex items-center gap-2 text-cinnamon hover:text-caramel transition-colors group">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span>Volver al menú</span>
            </button>
          </Link>
        </div>

        {/* Contenido principal */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Columna izquierda - Imagen */}
            <div className="relative">
              {/* Badge flotante */}
              <div
                className={`absolute -top-3 -left-3 ${rol.badgeColor} text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl z-20`}
              >
                {rol.badge}
              </div>

              {/* Contenedor de imagen con efectos */}
              <div className="relative group">
                {/* Marco decorativo */}
                <div className="absolute -inset-4 bg-gradient-to-r from-caramel via-glaze to-caramel rounded-[3rem] opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500" />

                {/* Marco exterior */}
                <div className="absolute -inset-2 bg-gradient-to-r from-caramel to-glaze rounded-[2.5rem] opacity-50" />

                {/* Imagen principal */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square">
                  <Image
                    src={rol.image}
                    alt={rol.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Overlay degradado */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cinnamon/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Miniaturas relacionadas */}
              <div className="flex gap-3 mt-6 justify-center">
                {kind
                  .filter((item) => item.id !== rol.id)
                  .map((item) => (
                    <Link key={item.id} href={`/glazed/${item.id}`}>
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-md hover:scale-110 transition-transform duration-300">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Columna derecha - Información */}
            <div className="flex flex-col gap-8">
              {/* Header del producto */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-caramel" />
                    ))}
                  </div>
                  <span className="text-stone text-sm">(128 reseñas)</span>
                </div>

                <h1 className="font-bree text-5xl md:text-6xl text-cinnamon mb-4">
                  {rol.title}
                </h1>

                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-cinnamon">
                    {rol.price}
                  </span>
                  <span className="text-stone line-through text-lg">
                    ${parseInt(rol.price.slice(1)) + 20}.00
                  </span>
                  <span className="bg-berry text-white px-3 py-1 rounded-full text-sm font-bold">
                    -20%
                  </span>
                </div>
              </div>

              {/* Descripción */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="font-bree text-xl text-cinnamon mb-3">
                  Descripción
                </h3>
                <p className="text-cinnamon/80 leading-relaxed">
                  {rol.description}
                </p>
              </div>

              {/* Ingredientes */}
              <div>
                <h3 className="font-bree text-xl text-cinnamon mb-3">
                  Ingredientes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {rol.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="bg-cinnamon/5 text-cinnamon px-4 py-2 rounded-full text-sm border border-cinnamon/10"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* Información nutricional */}
              <div className="bg-cinnamon/5 rounded-2xl p-6">
                <h3 className="font-bree text-xl text-cinnamon mb-4">
                  Información Nutricional
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(rol.nutritional).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-cinnamon">
                        {value}
                      </div>
                      <div className="text-stone text-sm capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
