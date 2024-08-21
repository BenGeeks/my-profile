import React from 'react';

import Hero from './components/hero/hero';
import Skills from './components/skills/skills';
import Testimonials from './components/testimonials/testimonials';
import Introduction from './components/introduction/introduction';
import Personality from './components/personality/personality';
import Contact from './components/contact/contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Personality />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
