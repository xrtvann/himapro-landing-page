import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Programs from "../components/sections/Programs";
import News from "../components/sections/News";
import CTA from "../components/sections/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <News />
      <CTA />
    </main>
  );
}
