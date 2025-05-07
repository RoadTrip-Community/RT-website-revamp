import React from "react";

const Outside = () => {
  return (
    <div className="bg-[#F6B847] py-20 md:px-0 px-4">
      <div className="max-w-[954px] mx-auto">
        <h2 className="text-[28px] md:text-5xl font-semibold text-black uppercase text-center font-clash mb-16">
          #WeOutside2024
        </h2>

        {/* First Layer */}
        <div className={`flex items-start w-full md:w-[954px] flex-col md:flex-row`}>
          <div className={`relative border border-black h-[344px] w-full md:w-[60%]`}>
            <div className="absolute bottom-10 z-10 bg-white p-2 h-[86px] w-[305px] flex flex-col justify-center border border-black">
              <div className="p-2 border-1 border-[#111413]">
                <p className="text-[12px] text-[#788982] mb-2">November 2024</p>
                <h3 className="text-base font-clash font-semibold text-black uppercase">
                  {"World’s"} Usability day
                </h3>
              </div>
            </div>
          </div>
          <div className={`relative border border-black h-[344px] w-full md:w-[40%]`}>
            <div className="absolute bottom-10 z-10 bg-white p-2 h-[86px] w-[305px] flex flex-col justify-center border border-black">
              <div className="p-2 border-1 border-[#111413]">
                <p className="text-[12px] text-[#788982] mb-2">August 2024</p>
                <h3 className="text-base font-clash font-semibold text-black uppercase">
                  UNTITLED DESIGN CONFERENCE
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Second layer */}
        <div className={`flex items-start w-full md:w-[954px] flex-col md:flex-row`}>
          <div className={`relative border border-black h-[344px] w-full md:w-[50%]`}>
            <div className="absolute bottom-10 z-10 bg-white p-2 h-[86px] w-[305px] flex flex-col justify-center border border-black">
              <div className="p-2 border-1 border-[#111413]">
                <p className="text-[12px] text-[#788982] mb-2">August 2024</p>
                <h3 className="text-base font-clash font-semibold text-black uppercase">
                  IBADAN TECHFEST
                </h3>
              </div>
            </div>
          </div>
          <div className={`relative border border-black h-[344px] w-full md:w-[50%]`}>
            <div className="absolute bottom-10 z-10 bg-white p-2 h-[86px] w-[305px] flex flex-col justify-center border border-black">
              <div className="p-2 border-1 border-[#111413]">
                <p className="text-[12px] text-[#788982] mb-2">
                  September 2024
                </p>
                <h3 className="text-base font-clash font-semibold text-black uppercase">
                  Web3 Conference
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Third layer */}
        <div className={`flex items-start w-full md:w-[954px] flex-col md:flex-row`}>
          <div className={`relative border border-black h-[344px] w-full md:w-[40%]`}>
            <div className="absolute bottom-10 z-10 bg-white p-2 h-[86px] w-[305px] flex flex-col justify-center border border-black">
              <div className="p-2 border-1 border-[#111413]">
                <p className="text-[12px] text-[#788982] mb-2">May 2023</p>
                <h3 className="text-base font-clash font-semibold text-black uppercase">
                  Untitled Design Conference
                </h3>
              </div>
            </div>
          </div>
          <div className={`relative border border-black h-[344px] w-full md:w-[60%]`}>
            <div className="absolute bottom-10 z-10 bg-white p-2 h-[86px] w-[305px] flex flex-col justify-center border border-black">
              <div className="p-2 border-1 border-[#111413]">
                <p className="text-[12px] text-[#788982] mb-2">May 2022</p>
                <h3 className="text-base font-clash font-semibold text-black uppercase">
                  Untitled Design Conference
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outside;
