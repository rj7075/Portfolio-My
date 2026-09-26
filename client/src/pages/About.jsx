import React from "react";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";

export default function About() {
  return (
    <div className="py-6">
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
    </div>
  );
}
