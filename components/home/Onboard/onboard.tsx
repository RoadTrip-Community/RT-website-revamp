"use client";

import React from "react";

const Onboard = () => {
  return (
    <div className="bg-[#CC4D34] py-20 md:px-0 px-4">
      <div className="max-w-[954px] mx-auto">
        {/* <div className="border-2 border-black p-10 mb-20">
          <h2 className="text-[24px] md:text-[40px] font-semibold text-white uppercase text-center font-clash mb-4">
            RT PEN PALS
          </h2>
          <p className="text-white text-center mb-8 md:text-base text-sm">
            Read stories from our pen pals. Be inspired by stories of struggles,
            growth and achievement!
          </p>

          <div className="flex flex-col items-center gap-4 w-full">
            <iframe 
              src="https://roadtripcommunity.substack.com/embed" 
              width="100%" 
              height="320" 
              style={{border: '1px solid #EEE', background: 'white'}} 
              frameBorder="0" 
              scrolling="no"
              title="Subscribe to RT Pen Pals"
            />
          </div>
        </div> */}

        {/* Come Onboard Section */}
        <div className="border-2 border-black p-10">
          <h2 className="text-[24px] md:text-[40px] font-semibold text-white uppercase text-center font-clash mb-4">
            COME ONBOARD
          </h2>
          <p className="text-white text-center mb-8 max-w-[800px] mx-auto md:text-base text-sm">
            Join Roadtrip Community today, and {"let's"} drive towards a future
            where African talent leads the global creative and tech industries.
            Your success story begins here!
          </p>

          <div className="flex justify-center">
            <div className="w-[200px] h-[56px] relative">
              <div className="bg-white h-full w-full absolute right-[-5px] bottom-[-5px] z-[1]"></div>
              <div className="relative z-[2] w-full h-full">
                <button
                  className="w-full h-full font-clash text-base bg-black text-white px-6 py-4 font-semibold flex items-center justify-center cursor-pointer transition-colors"
                  onClick={() => {
                    window.open("https://t.me/+aybU1Ow37IEyODNk", "_blank");
                  }}
                >
                  JOIN COMMUNITY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboard;
