import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import Skills from "../components/SkillsExpirience";

import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills/>
      <AboutSection />
      <Contact />
    </>
  );
}
