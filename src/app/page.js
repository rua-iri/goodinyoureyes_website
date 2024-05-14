import About from "./components/About";
import Hero from "./components/Hero";
import CastCrew from "./components/CastCrew";
import Instagram from "./components/Instagram";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CastCrew />
      <Instagram />
      <Contact />
    </main>
  );
}
