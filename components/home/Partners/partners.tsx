import Link from "next/link";
import React from "react";

const Partners = () => {
  return (
    <div className="bg-[#E1E6E3] py-20">
      <h3 className="text-[#CC4D34] text-5xl font-semibold uppercase font-clash text-center hidden md:block">
        Featured Partnerships
      </h3>

      <div className="max-w-[954px] mx-auto flex items-center justify-around mt-0 mb-20 md:my-20 flex-col md:flex-row gap-20 md:gap-0">
        <img src="/wud.png" alt="" />
        <img src="/udc.png" alt="" />
        <img src="/yappi.png" alt="" />
      </div>

      <div className="w-[259px] bg-[#111413] h-[56px] mx-auto text-white">
        <Link
          href={"/partner"}
          className="w-full h-full flex items-center justify-center font-semibold font-clash uppercase"
        >
          See all our partners
        </Link>
      </div>
    </div>
  );
};

export default Partners;
