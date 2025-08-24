import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  bgColor: string;
  href?: string;
  textWidth?: string;
}

const Card: React.FC<CardProps> = ({ title, bgColor, textWidth }) => {
  return (
    <Link href={"#"} className="w-[49%]">
      <div
        className={`${bgColor} p-4 md:p-8 border-2 border-black relative group cursor-pointer min-h-[200px] flex items-center w-full`}
      >
        <h2 className={`text-lg md:text-2xl font-clash font-semibold text-white pr-12 ${textWidth}`}>
          {title}
        </h2>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 border-2 border-white flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

const PenPals = () => {
  return (
    <div className="bg-[#C6CCFF] md:px-0 px-4">
      <div className="h-full w-full md:max-w-[954px] mx-auto flex items-center justify-center flex-col pt-20 pb-20">
        <h1 className="text-[24px] md:text-[64px] uppercase text-center font-semibold text-black font-clash leading-20 mt-0 mb-0">
          RT PEN PALS
        </h1>
        <p className="text-center text-[#111413] text-sm md:text-base font-medium mb-12">
          Discover inspiring stories, showcasing the journeys and successes of
          our community members.
        </p>
        <div className="w-full">
          {/* {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))} */}
          {/* First Layer */}
          <div className="flex justify-between w-full md:w-[954px] flex-col md:flex-row gap-4 md:gap-0">
            <div className="w-full md:w-[469px]">
              <Card
                title="What is it like in Roadtrip Community?"
                bgColor="bg-[#2E7D32]"
              />
            </div>
            <div className="w-full md:w-[469px]">
              <Card
                title="Dreams and memories"
                bgColor="bg-[#265EEA]"
              />
            </div>
          </div>
          {/* Second Layer */}
          <div className="flex justify-between w-full md:w-[954px] flex-col md:flex-row gap-4 md:gap-0 mt-5">
            <div className="w-full md:w-[954px]">
              <Card
                title="Dealing with imposter syndrome: From an actual imposter"
                bgColor="bg-[#D84315]"
                textWidth="w-[480px]"
              />
            </div>
          </div>
          {/* Third Layer */}
          <div className="flex justify-between w-full md:w-[954px] flex-col md:flex-row gap-4 md:gap-0 mt-5">
            <div className="w-full md:w-[550px]">
              <Card
                title="Dealing with imposter syndrome: From an actual imposter"
                bgColor="bg-[#4D34CC]"
              />
            </div>
            <div className="w-full md:w-[388px]">
              <Card
                title="Faith... in yourself"
                bgColor="bg-[#7A1980]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenPals;
