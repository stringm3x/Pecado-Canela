import Image from "next/image";

const kind = [
  {
    id: 1,
    title: "Clásico",
    price: "$65.00",
    image: "/glazed/clasico.jpg",
    description:
      "Nuestro Rol clásico hecho con masa de la casa artesanal esponjosa, rellena de canela y mascabado. Cubierto con un glaseado cremoso de queso Philadelphia, mantequilla y azúcar glass.",
  },
  {
    id: 2,
    title: "Chocolate",
    price: "$65.00",
    image: "/glazed/chocolate.jpg",
    description:
      "Una irresistible versión de nuestro rol clásico con relleno de canela, mascabado. Esta cubierto con un betún cremoso de chocolate de leche y sutilmente espolvoreado con cacao.",
  },
  {
    id: 3,
    title: "Tres Leches",
    price: "$65.00",
    image: "/glazed/leches.jpg",
    description:
      "Rol base clásica esponjoso, relleno de canela y azúcar, bañado en mezcla de tres leches y terminado con un glaseado natural decorado.",
  },
];

export default async function RolDetail({ params }) {
  const resolvedParams = await params;

  const rol = kind.find((item) => item.id === Number(resolvedParams.id));

  if (!rol) {
    return (
      <p className="min-h-screen flex items-center justify-center text-3xl">
        Rol no encontrado
      </p>
    );
  }

  return (
    <section className="min-h-screen flex flex-col sm:flex-row items-center justify-center gap-8 px-6">
      <div className="p-5">
        <Image
          src={rol.image}
          alt={rol.title}
          width={400}
          height={400}
          className="bg-cinnamon rounded-2xl"
        />
      </div>

      <div className="flex flex-col gap-10 text-cinnamon">
        <div className="flex flex-col">
          <h1 className="font-bree text-4xl font-semibold">{rol.title}</h1>
          <div className="w-full h-[1px] bg-gray" />
          <span className="text-2xl">{rol.price}</span>
        </div>

        <p className="max-w-md">{rol.description}</p>
      </div>
    </section>
  );
}
