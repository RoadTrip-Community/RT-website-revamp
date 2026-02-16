import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#FEF9EC] md:min-h-[90vh]">
      <Navbar />
      <div className="flex flex-col items-center justify-center md:px-0 px-4">
        <h1 className="text-4xl font-bold mt-20 font-clash uppercase text-black">
          About Us
        </h1>
        <img src="/about.png" alt="about" className="mt-10" />
      </div>
    </div>
  );
};

export default Hero;
