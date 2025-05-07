import Footer from "@/components/footer/Footer";
import { Onboard } from "@/components/home";
import { Hero, Partners, WhyPartner, Ways } from "@/components/partner";
import React from "react";

const PartnerPage = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <WhyPartner />
      <Ways />
      <Onboard />
      <Footer />
    </div>
  );
};

export default PartnerPage;
