import React from "react";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
