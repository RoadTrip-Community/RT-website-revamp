import React from "react";

const About = () => {
  return (
    <div className="bg-white pt-20 md:p-0 p-4 border-t-1 border-black md:border-none">
      <div className="max-w-[954px] mx-auto mb-10">
        <img src="/people.png" alt="" className="w-full" />
      </div>

      <div className="border-t-2 border-black">
        <div className="max-w-[954px] mx-auto flex justify-between flex-wrap">
          <div className="md:w-[449px] min-h-[264px] flex flex-col border-r-2 border-black border-l-2 px-4 text-black pb-10">
            <h2 className="text-[24px] md:text-[32px] font-clash font-semibold uppercase mt-5 mb-2">Who we are...</h2>

            <p className="text-sm md:text-base">
              Born from the vibrant heartbeat of Lagos, Nigeria, Roadtrip
              Community has blossomed into a diverse family of talents spanning
              continents, united by a shared passion for design and technology.
              <br />
              We envision a world where African talents are celebrated and
              rewarded. Our community acts as a launchpad for dreams and a
              catalyst for transformative success.
            </p>
          </div>

          <div className="md:w-[449px] min-h-[264px] flex flex-col border-r-2 border-black border-l-2 px-4 text-black pb-10">
            <h2 className="text-[24px] md:text-[32px] font-clash font-semibold uppercase mt-5 mb-2">{"We’re"} on a mission...</h2>

            <p className="text-sm md:text-base">
              To empower African talents to reach unprecedented heights in their
              careers and financial well-being by serving as a launchpad for
              dreams and a nurturing ground for skills within the design and
              tech ecosystem
              <br />
              ... as we strive to reshape the perception of African talent,
              equipping our members with the tools and support to negotiate
              confidently, manage finances wisely, and seize opportunities
              fearlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
