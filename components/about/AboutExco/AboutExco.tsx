import React from "react";

const AboutExco = () => {
  return (
    <div className="bg-[#EEF0FF] py-10 text-center">
      <div className="max-w-[954px] mx-auto">
        <div className="w-full md:w-[954px] mx-auto p-10 flex flex-col gap-10">
          <div>
            <h3 className="text-[24px] md:text-[48px] font-semibold font-clash uppercase text-black">
              Our Exco Groups
            </h3>
            <p className="text-[14px] md:text-[16px] font-medium text-black">
              Comprising of passionate leaders driving our community&apos;s
              mission
            </p>
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="w-full md:w-[220px] h-[120px] bg-[#C6CCFF] text-black flex items-center justify-center font-medium font-clash">
              Governance
            </div>
            <div className="w-full md:w-[220px] h-[120px] bg-[#C6CCFF] text-black flex items-center justify-center font-medium font-clash">
              Operations
            </div>
            <div className="w-full md:w-[220px] h-[120px] bg-[#C6CCFF] text-black flex items-center justify-center font-medium font-clash">
              Development
            </div>
            <div className="w-full md:w-[220px] h-[120px] bg-[#C6CCFF] text-black flex items-center justify-center font-medium font-clash">
              Creative
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutExco;
