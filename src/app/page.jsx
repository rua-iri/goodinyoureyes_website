import About from "./components/About";
import Director from "./components/Director";
import Hero from "./components/Hero";
import CastCrew from "./components/CastCrew";
import Instagram from "./components/Instagram";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Director />
      <CastCrew />
      <Instagram />
      <Contact />
    </main>
  );
}
