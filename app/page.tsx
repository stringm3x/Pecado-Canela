import Hero from "./components/Hero";
import Glazed from "./components/Glazed";
import Topping from "./components/Topping";
import Formandsocial from "./components/Formandsocial"
import Reviews from "./components/Reviews"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section id="home">
        <Hero />
      </section>

      <section id="menu">
        <Glazed />
      </section>

      <section id="toppings">
        <Topping />
      </section>

      <section id="form">
        <Formandsocial />
      </section>

      <section id="reviews">
        <Reviews />
      </section>
    </div>
  );
}
