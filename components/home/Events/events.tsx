import React from "react";

const events = [
  {
    title: "Masterclasses",
    description:
      "Professional sessions that cover a wide range of topics and frequently asked questions in tech, design, work culture, career growth, branding, business, and management.",
    frequency: "Bi-monthly",
    bgColor: "bg-[#F9D78E]",
    tagColor: "bg-[#CC4D34]",
  },
  {
    title: "Workshops",
    description:
      "Dive into rotating roundtables on tech innovation, career pivots, freelance finance, and leadership—all while building connections that fuel long-term growth.",
    frequency: "Quarterly",
    bgColor: "bg-[#BDF5D5]",
    tagColor: "bg-[#CC4D34]",
  },
  {
    title: "Mental health",
    description:
      "Prioritizing well-being, our community, in partnership with Omoi Clan, offers unique support through quarterly mental health sessions designed to foster resilience and promote holistic wellness.",
    frequency: "Quarterly",
    bgColor: "bg-[#C6CCFF]",
    tagColor: "bg-[#CC4D34]",
  },
  {
    title: "Spotlights",
    description:
      "Designed to empower members by showcasing their achievements—whether in tech, business, creative ventures, or trades. Blow your trumpet, unlock opportunities, and grow together!",
    frequency: "Monthly",
    bgColor: "bg-[#FAD5CE]",
    tagColor: "bg-[#CC4D34]",
  },
  {
    title: "Open-source",
    description:
      "A dynamic initiative where individuals from diverse backgrounds in the design and tech industry come together to contribute, learn, and create",
    frequency: "Bi-annual",
    bgColor: "bg-[#BFD9FE]",
    tagColor: "bg-[#CC4D34]",
  },
  {
    title: "Sprout & sparkle",
    description:
      "Empowering women at every stage of their professional journey to build connections, access training, and thrive in a supportive community.",
    frequency: "Bi-annual",
    bgColor: "bg-[#F6CFFF]",
    tagColor: "bg-[#CC4D34]",
  },
];

const Events = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[954px] mx-auto py-20">
        <h2 className="text-[#CC4D34] font-clash text-center uppercase font-semibold text-[24px] md:text-[48px] mb-10">
          Our Events & Initiatives
        </h2>
        <div className="relative p-4 md:p-0">
          <div className="hidden md:block absolute bg-[#8B2F97] w-full h-full top-4 left-4 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 border-4 border-black relative z-10">
            {events.map((event, idx) => (
              <div key={idx} className={`${event.bgColor} p-4 md:p-8 border-2 border-black`}>
                <div className="flex items-center gap-6 mb-4">
                  <h3 className="text-[18px] md:text-[32px] font-clash font-semibold text-[#111413]">
                    {event.title}
                  </h3>
                  <div className="bg-[#CC4D34] rounded-[9999] min-w-[96px] h-[36px] flex items-center justify-center px-2 py-4">
                    <div
                      className={`text-white rounded-[9999] border border-white px-4 py-1 text-sm`}
                    >
                      {event.frequency}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#343B39] font-medium">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
