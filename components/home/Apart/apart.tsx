import React from "react";

const reasons = [
  {
    title: "Holistic Growth",
    reason:
      "We focus not just on technical skills, but on the whole individual - from financial literacy to personal branding.",
  },
  {
    title: "Accountability and Support",
    reason:
      "Our buddy system and accountability partnerships ensure no one walks alone on this journey.",
  },
  {
    title: "Exclusive Opportunities",
    reason:
      "We create and curate opportunities that align with our members' goals and potential.",
  },
  {
    title: "Celebration of Milestones",
    reason:
      "Every step forward is acknowledged and celebrated, fostering a culture of continuous achievement.",
  },
  {
    title: "Global Representation",
    reason:
      "With members in Nigeria, the UK, Canada, the US, and beyond, our diverse network empowers African talents to excel on the international stage.",
  },
];

const Apart = () => {
  return (
    <div className="bg-[#F2A9FE]">
      <div className="max-w-[954px] mx-auto py-20">
        <h2 className="text-[48px] text-black font-semibold font-clash uppercase mb-10 text-center hidden md:block">
          What Sets Us Apart
        </h2>

        <div className="flex items-center justify-between flex-wrap md:p-0 p-4">
          {/* left */}
          <div className="flex flex-col gap-4 w-full md:w-[449px]">
            {reasons.map((reasons, idx) => (
              <div key={idx}>
                <h3 className="font-medium text-[18px] md:text-[22px] uppercase font-clash text-black">
                  {reasons.title}
                </h3>
                <p className="text-sm md:text-base text-[#111413] font-medium">
                  {reasons.reason}
                </p>
              </div>
            ))}
          </div>

          {/* right */}
          <div className="mt-10 md:mt-0">
            <img src="/apart.png" alt="apart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apart;
