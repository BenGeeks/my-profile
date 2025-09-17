import Testimonials from "./components/testimonials/testimonials";
import Introduction from "./components/introduction/introduction";
import Personality from "./components/personality/personality";
import Contact from "./components/contact/contact";
import Skills from "./components/skills/skills";
import Hero from "./components/hero/hero";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Personality />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
}
