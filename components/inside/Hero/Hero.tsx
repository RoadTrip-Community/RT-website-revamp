import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#FEF9EC] min-h-[50vh]">
      <Navbar />
      <div className="h-full max-w-[954px] relative mx-auto flex items-center justify-center flex-col pt-20 pb-20 md:px-0 px-4">
        <h1 className="text-[40px] md:text-[64px] uppercase text-center font-semibold text-black font-clash leading-20 mt-0 mb-5">
          Inside Danfo Bus
        </h1>
        <div>
          <img src="/inside.png" alt="inside text" />
          <img src="/bus.png" alt="bus photo" className="absolute w-[241px] bottom-0 right-0 md:right-[-300px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
