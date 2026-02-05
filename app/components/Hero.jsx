import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col gap-10 items-center bg-cinnamon text-yellow pt-44">
      <h1 className="relative z-10 font-bree text-6xl sm:text-8xl text-center">
        Una <br /> tentación que <br /> se disfruta
      </h1>

      {/* BOTONES */}
      <div className="absolute top-[44%] sm:top-[34%] z-20 flex flex-row gap-5 sm:gap-16">
        <button className="w-36 h-14 sm:w-44 sm:h-16 rounded-full border-2 border-yellow group hover:bg-yellow2 hover:scale-125 transition-all duration-300  cursor-pointer active:scale-95">
          <a href="#menu">
            <h1 className="group-hover:text-cinnamon">Roles</h1>
          </a>
        </button>

        <button className="w-36 h-14 sm:w-44 sm:h-16 rounded-full border-2 border-yellow group hover:bg-yellow2 hover:scale-125 transition-all duration-300 cursor-pointer active:scale-95">
          <a href="#toppings">
            <h1 className="group-hover:text-cinnamon">Toppings</h1>
          </a>
        </button>
      </div>

      {/* IMAGEN */}
      <Image
        src="/hero.jpg"
        alt="cinnamon"
        width={700}
        height={500}
        className="object-cover relative z-0 pointer-events-none"
      />
    </section>
  );
};

export default Hero;
