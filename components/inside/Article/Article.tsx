import React from "react";

const Article = () => {
  return (
    <div className="bg-[#F6B847] py-20 md:px-0 px-4">
      <h1 className="text-black text-clash font-bold text-[24px] md:text-[40px] text-center uppercase font-clash">
        Article of the day
      </h1>
      <p className="text-black text-clash font-normal text-sm md:text-base text-center mt-4">
        Gain insights, tips, and entertaining perceptions from our{" "}
        <br className="md:block hidden" /> articles of the day written by
        Passengers
      </p>

      <div className="relative w-full md:w-[954px] h-[496px] mx-auto mt-10">
        <div className="absolute top-2 left-2 w-full h-full bg-[#198046] -z-10" />
        <div className="relative bg-[#F9D78E] md:p-10 p-4">
          <img src="/art.png" alt="article png" />
          <h3 className="font-clash text-[20px] md:text-[24px] text-[#111413] font-medium mt-3">
            Article title goes in here in a tru
            <span className="md:inline-block hidden">ncated line</span>
            <span className="md:hidden inline-block">...</span>
          </h3>
          <p className="text-[#111413] font-normal md:text-base text-sm">
            Author&apos;s name goes in here
          </p>
          <p className="text-[#111413] font-normal md:text-base text-sm">
            Date article was published
          </p>
          <p className="text-[#111413] font-normal md:text-base text-sm">
            Source of article
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
