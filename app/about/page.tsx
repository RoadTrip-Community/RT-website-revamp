import { Hero, About, Excos, Facilitators } from "@/components/about";
import Footer from "@/components/footer/Footer";
import { Onboard } from "@/components/home";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Excos />
      <Facilitators />
      <Onboard />
      <Footer />
    </div>
  );
};

export default AboutPage;
