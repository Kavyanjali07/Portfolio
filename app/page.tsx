import Hero from "./components/Hero";
import JourneySections from "./components/JourneySections";
import GradualBlur from "./components/GradualBlur";

export default function Home() {
  return (
    <main className="w-full bg-transparent">
      <Hero />
      <section className="relative overflow-visible px-4 md:px-8">
        <JourneySections />
        <GradualBlur
          target="parent"
          position="bottom"
          height="7rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential
          opacity={1}
        />
      </section>
    </main>
  );
}