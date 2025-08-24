"use client";

import React from "react";
import Navbar from "../../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="pt-2 bg-[#F6B847] min-h-[50vh]">
      <Navbar />
      <div className="h-full max-w-[954px] mx-auto flex items-center justify-center flex-col pt-20 pb-20">
        <div className="min-w-[163px] text-xs md:text-base h-[35px] bg-[#198046] text-white flex items-center justify-center font-semibold px-6 py-6">
          Roadtrip Community
        </div>
        <h1 className="text-[36px] md:text-[64px] uppercase text-center font-semibold text-black font-clash leading-10 md:leading-20 mt-3">
          Empowering the African Talent on The road to Success
        </h1>
        <div className="w-[200px] h-[56px] relative mt-8">
          <div className="bg-white h-full w-full absolute right-[-5px] bottom-[-5px] z-[1]"></div>
          <div className="relative z-[2] w-full h-full">
            <button
              className="w-full h-full font-clash text-base bg-black text-white px-6 py-4 font-semibold flex items-center justify-center cursor-pointer"
              onClick={() => {
                window.open("https://t.me/+aybU1Ow37IEyODNk", "_blank");
              }}
            >
              COME ONBOARD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
