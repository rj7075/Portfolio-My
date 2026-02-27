import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";

import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection className="mt-10" />
      <Contact />
    </>
  );
}
