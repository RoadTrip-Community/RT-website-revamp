import { Marquee } from "@/components/home";
import React from "react";

const Featured = () => {
  return (
    <div className="bg-[#FEF9EC] py-20 md:px-0 px-4">
      <h1 className="text-black text-2xl md:text-4xl font-clash font-semibold text-center">
        Featured Portfolios
      </h1>
      <p className="text-center text-black text-sm md:text-base font-clash font-normal">
        Explore impressive portfolios crafted by our talented members,
        showcasing <br className="md:block hidden" /> their diverse skills and
        creativity. Get ready to be inspired!
      </p>

      <div className="mt-10">
        <Marquee text="Highlight of our members doings" />
      </div>

      <div className="flex flex-col md:flex-row">
        {/* First */}
        <div className="border-2 border-black min-h-[373px]">
          <img src="/img.png" alt="first featured" />
          <div className="flex items-end justify-end flex-col py-5 px-5">
            <h2 className="text-black text-clash font-bold text-[40px]">
              Ayomidotun
            </h2>
            <div className="flex items-center gap-2">
              <p className="text-black text-clash font-normal text-base">
                behance.net/ayomidxtun
              </p>
              <img src="/aru.png" alt="aru" />
            </div>
          </div>
        </div>

        <div className="border-2 border-black min-h-[373px]">
          <img src="/alex.png" alt="secnd featured" />
          <div className="flex items-end justify-end flex-col py-5 px-5 bg-black">
            <h2 className="text-white text-clash font-bold text-[40px]">
              Alex
            </h2>
            <div className="flex items-center gap-2">
              <p className="text-white text-clash font-normal text-base">
                alexoyebade.xyz
              </p>
              <img src="/aru.png" alt="aru" />
            </div>
          </div>
        </div>

        <div className="border-2 border-black min-h-[373px]">
          <img src="/world.png" alt="third featured" />
          <div className="flex items-end justify-end flex-col py-5 px-5">
            {/* <h2 className="text-black text-clash font-bold text-[40px]">
              Ayomidotun
            </h2>
            <div className="flex items-center gap-2">
              <p className="text-black text-clash font-normal text-base">
                behance.net/ayomidxtun
              </p>
              <img src="/aru.png" alt="aru" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
