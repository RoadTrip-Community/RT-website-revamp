import {
  Hero,
  About,
  Excos,
  Facilitators,
  AboutExco,
} from "@/components/about";
import Footer from "@/components/footer/Footer";
import { Onboard } from "@/components/home";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Hero />
      <About />
      {/* <Excos /> */}
      <AboutExco />
      <Facilitators />
      <Onboard />
      <Footer />
    </div>
  );
};

export default AboutPage;
