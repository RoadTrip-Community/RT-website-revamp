import Link from "next/link";
import React from "react";

const partners = [
  {
    name: "World Usability Day Africa",
    link: "https://wudafrica.com",
    description: `World Usability Day is a global movement that aims to bridge the
                gap between the Human-Computer Interaction (HCI) and User
                Experience (UX) community and the United Nations&apos; Sustainable
                Development Goals. It is a worldwide celebration and educational
                platform dedicated to promoting the importance of usability and
                accessibility in our daily lives. We are celebrating the day in
                Africa with a series of activities ranging from a design
                challenge to a workshop and conference.`,
    logo: "/wd.png",
  },
  {
    name: "Yappi",
    link: "https://yappi.com",
    description: `At YAPPI, we foster a dynamic learning environment that encourages exploration and growth. Join us to transform your passion for animation into a thriving career. Experience the YAPPI difference and embark on an exciting journey of creativity and excellence.`,
    logo: "/yappi1.png",
  },
  {
    name: "UDCA",
    link: "https://untitleddesigners.org",
    description: `Africa’s Largest growing network of Designers. We're all about creativity in Africa. With so much diversity and hidden talent here. Our goal is to boost design to new heights by Engaging (Conference), Teaching(Academy), and Empowering (Launchpad) Designers .`,
    logo: "/udc1.png",
  },
];

const Partners = () => {
  return (
    <div className="bg-[#FFFFFF] border-2 border-[#111413] py-10">
      <h1 className="font-clash text-2xl md:text-[48px] text-[#111413] uppercase font-semibold my-5 text-center">
        Meet our partners
      </h1>

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-6 min-w-max px-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-[343px] md:w-[589px] min-h-[501px] border border-black relative flex-shrink-0"
            >
              <div className="p-4 border-b border-black md:min-h-[117px] flex items-center">
                <img src={partner.logo} alt={partner.name} />
              </div>

              <div className="p-4 text-base md:text-[18px] min-h-[319px] font-medium text-[#393939] flex items-end border-b border-black">
                {partner.description}
              </div>

              <Link
                href={partner.link}
                className="p-4 flex items-center h-[55px] absolute bottom-0 left-0 w-full text-base md:text-[18px] font-semibold text-black"
              >
                {partner.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
