"use client";

import React, { useState } from "react";

interface Exco {
  name: string;
  image: string;
  role: string;
  bio: string;
  twitter: string;
  linkedin: string;
}

const excos: Exco[] = [
  {
    name: "MsVick",
    image: "/msv.png",
    role: "Founder/Chairman",
    bio: "Leading with strategic vision and oversight, MsVick sets the course for the Roadtrip Community, ensuring financial sustainability and fostering a vibrant online space where members thrive through collaboration and events.",
    twitter: "@msvick",
    linkedin: "linkedin.com/msvick",
  },
  {
    name: "AlexOyebade",
    image: "/ale.png",
    role: "Vice Chair/Counselor",
    bio: "Leading with strategic vision and oversight, MsVick sets the course for the Roadtrip Community, ensuring financial sustainability and fostering a vibrant online space where members thrive through collaboration and events.",
    twitter: "@msvick",
    linkedin: "linkedin.com/msvick",
  },
  {
    name: "Caveman",
    image: "/cave.png",
    role: "Advisor/Executive Assistant",
    bio: "Leading with strategic vision and oversight, MsVick sets the course for the Roadtrip Community, ensuring financial sustainability and fostering a vibrant online space where members thrive through collaboration and events.",
    twitter: "@msvick",
    linkedin: "linkedin.com/msvick",
  },
  {
    name: "Zainab",
    image: "/zai.png",
    role: "Secretary/Welfare Assistant",
    bio: "Leading with strategic vision and oversight, MsVick sets the course for the Roadtrip Community, ensuring financial sustainability and fostering a vibrant online space where members thrive through collaboration and events.",
    twitter: "@msvick",
    linkedin: "linkedin.com/msvick",
  },
  {
    name: "Maryblessing",
    image: "/mb.png",
    role: "Partnerships Manager",
    bio: "Leading with strategic vision and oversight, MsVick sets the course for the Roadtrip Community, ensuring financial sustainability and fostering a vibrant online space where members thrive through collaboration and events.",
    twitter: "@msvick",
    linkedin: "linkedin.com/msvick",
  },
  {
    name: "Pelumibot",
    image: "/pelumi.png",
    role: "Lead, Open Source",
    bio: "Leading with strategic vision and oversight, MsVick sets the course for the Roadtrip Community, ensuring financial sustainability and fostering a vibrant online space where members thrive through collaboration and events.",
    twitter: "@msvick",
    linkedin: "linkedin.com/msvick",
  },
  {
    name: "GideonOgunkola",
    image: "/gid.png",
    role: "Assistant, Open Source",
    bio: "Leading with strategic vision and oversight, MsVick sets the course for the Roadtrip Community, ensuring financial sustainability and fostering a vibrant online space where members thrive through collaboration and events.",
    twitter: "@msvick",
    linkedin: "linkedin.com/msvick",
  },
];

const Excos = () => {
  // Initialize with the first exco and don't reset to null on mouse leave
  const [activeExco, setActiveExco] = useState<Exco>(excos[0]);

  return (
    <div className="bg-[#DFE4FF] py-20 md:px-0 px-4">
      <h1 className="text-[24px] md:text-[32px] font-bold font-clash uppercase text-[#111413] text-center">
        Meet the Excos
      </h1>
      <p className="text-[14px] md:text-[16px] font-medium text-[#111413] text-center">
        Passionate leaders driving our community&apos;s mission
      </p>

      {/* excos container */}
      <div className="max-w-[954px] mx-auto">
        {/* Scrollable container */}
        <div className="overflow-x-auto py-4 mt-[50px]">
          <div className="flex gap-4 md:gap-0 px-0">
            {excos.map((exco, indx) => (
              <div
                key={exco.name + indx}
                className={`relative group cursor-pointer`}
                onMouseEnter={() => setActiveExco(exco)}
              >
                {/* Exco Image and Basic Info */}
                <div className="w-[136px] md:w-[200px] transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="overflow-hidden w-[136px] h-[136px]">
                    <img
                      src={exco.image}
                      alt={exco.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-base font-semibold font-clash text-[#111413] text-left mt-2">
                    {exco.name}
                  </h5>
                  <p className="text-[10px] font-medium text-[#111413] text-left leading-2">
                    {exco.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exco Details - Always visible */}
        <div className="mt-[50px] min-h-[304px] md:h-[304px] transition-all duration-300 border border-black">
          <div className="flex flex-col md:flex-row h-full">
            <div className="w-full md:w-[200px] h-[full] bg-white">
              <img
                src={activeExco?.image}
                alt={activeExco?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-[356px] bg-white p-10">
              <div className="border-b border-[#111413] pb-2 pt-2">
                <h4 className="text-[24px] font-semibold font-clash text-[#111413]">
                  {activeExco?.name}
                </h4>
                <p className="text-base text-[#111413]">{activeExco?.role}</p>
              </div>
              <div className="text-[12px] text-[#111413] mt-2">
                {activeExco?.bio}
              </div>
              <div className="flex gap-2 mt-4">
                <a
                  href={activeExco?.twitter}
                  className="text-[#111413] w-[40px]"
                >
                  <img src="/linkedin.png" alt="linkedin" />
                </a>
                <a
                  href={activeExco?.linkedin}
                  className="text-[#111413] w-[40px]"
                >
                  <img src="/twitt.png" alt="twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excos;
