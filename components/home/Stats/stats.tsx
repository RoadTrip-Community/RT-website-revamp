import React from "react";

const statistics = [
  {
    figure: "400+",
    description:
      "Community members with multi-disciplinary interests and skills across various Design and Tech professions",
  },
  {
    figure: "30+",
    description:
      "active pairs of Accountability Partners with solid feedback on growth and career progress",
  },
  {
    figure: "20%",
    description:
      "of newly onboarded members land their first gig/ internship/ job in the first 6 months of joining the closed community",
  },
];

const Stats = () => {
  return (
    <div className="bg-black px-8 md:px-0 py-10">
      <div className="max-w-[954px] mx-auto flex-wrap flex items-center justify-between gap-8 md:gap-0">
        {statistics.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center md:w-[300px] w-full"
          >
            <h2 className="text-[80px] font-clash font-medium text-white">
              {stat.figure}
            </h2>
            <p className="text-base font-normal text-white text-center">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
