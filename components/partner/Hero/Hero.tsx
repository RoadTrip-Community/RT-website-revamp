import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#F6F7F7] md:min-h-[100vh] pb-20 flex flex-col">
      <Navbar />
      <div className="w-full md:max-w-[954px] mx-auto px-4 md:px-0">
        <div className="mt-[100px] w-full">
          <img src="/partn.png" alt="partner" />
          <h1 className="font-clash text-[36px] md:text-[64px] text-[#111413] uppercase font-semibold my-5">
            Partner with us
          </h1>

          <div className="flex justify-between w-full">
            <div></div>
            <div className="w-[487px] flex flex-col">
              <p className="text-black">
                We&apos;re building a global ecosystem that empowers African
                talent to thrive in design, technology, and beyond. We believe
                in the power of collaboration to unlock opportunities and create
                transformative success stories.
              </p>
              <button className="cursor-pointer mt-8 w-[231px] h-[56px] bg-[#198046] text-white px-4 py-2 text-base font-clash font-semibold uppercase">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
