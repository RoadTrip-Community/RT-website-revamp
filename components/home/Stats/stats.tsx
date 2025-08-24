"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const statistics = [
  {
    figure: "400+",
    end: 400,
    description:
      "Community members with multi-disciplinary interests and skills across various Design and Tech professions",
  },
  {
    figure: "30+",
    end: 30,
    description:
      "active pairs of Accountability Partners with solid feedback on growth and career progress",
  },
  {
    figure: "20%",
    end: 20,
    description:
      "of newly onboarded members land their first gig/ internship/ job in the first 6 months of joining the closed community",
  },
];

const Stats = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-black px-8 md:px-0 py-10" ref={ref}>
      <div className="max-w-[954px] mx-auto flex-wrap flex items-center justify-between gap-8 md:gap-0">
        {statistics.map((stat, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center md:w-[300px] w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h2 className="text-[80px] font-clash font-medium text-white">
              {isInView ? (
                <CountUp
                  end={stat.end}
                  duration={2.5}
                  delay={idx * 0.3}
                  suffix={stat.figure.includes('+') ? '+' : stat.figure.includes('%') ? '%' : ''}
                />
              ) : (
                "0"
              )}
            </h2>
            <p className="text-base font-normal text-white text-center">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
