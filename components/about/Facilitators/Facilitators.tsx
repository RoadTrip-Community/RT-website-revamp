import Image from "next/image";
import React from "react";

interface Facilitator {
  name: string;
  emoji: string;
}

const Facilitators = () => {
  const facilitatorRows: Facilitator[][] = [
    // Row 1
    [
      { name: "DEJAVU", emoji: "/dj.svg" },
      { name: "ATA RODO", emoji: "/ata.png" },
      { name: "ATM", emoji: "/atm.png" },
      { name: "TOBILOBA", emoji: "/atm.png" },
      { name: "BISOLA", emoji: "/bis.png" },
      { name: "FEYI", emoji: "/feyi.png" },
    ],
    // Row 2
    [
      { name: "WAJU", emoji: "/dj.svg" },
      { name: "OYINKANSOLA", emoji: "/oyin.png" },
      { name: "ADEMOLA", emoji: "/atm.png" },
      { name: "KINGADE", emoji: "/king.png" },
      { name: "GLORY-ANN", emoji: "/bis.png" },
      { name: "VICKIE", emoji: "/oyin.png" },
    ],
    // Row 3
    [
      { name: "ABIODUN", emoji: "/abs.png" },
      { name: "JEJEFOLORUNSHO", emoji: "/ata.png" },
      { name: "TUMININU", emoji: "/king.png" },
      { name: "CAT", emoji: "/bis.png" },
      { name: "HOWARD", emoji: "/feyi.png" },
      { name: "MONSIEURPAULO", emoji: "/mo.png" },
    ],
    // Row 4
    [
      { name: "EBENEZER", emoji: "/abs.png" },
      { name: "ELOZINO", emoji: "/ata.png" },
      { name: "JOYCE", emoji: "/feyi.png" },
      { name: "VICTORIA", emoji: "/mo.png" },
      { name: "OBAMAOLU", emoji: "/laugh.svg" },
      { name: "DEREK", emoji: "/laugh.svg" },
    ],
    // Row 5
    [
      { name: "QUEEN TEMMY", emoji: "/ata.png" },
      { name: "MARIAM MARIE", emoji: "/feyi.png" },
      { name: "AYOMIDOTUN", emoji: "/laugh.svg" },
      { name: "SAM", emoji: "/laugh.svg" },
      { name: "JAY", emoji: "/laugh.svg" },
    ],
  ];

  return (
    <div className="bg-[#FCE8E4] md:px-0">
      <div className="max-w-[1200px] mx-auto border-l border-r border-[#111413] py-20">
        <h1 className="text-center font-clash text-[20px] md:text-[28px] text-[#111413] uppercase font-semibold">
          with Over 40 Facilitators, Mentors and Volunteers{" "}
        </h1>
        <p className="text-[#111413] text-center text-sm md:text-base">
          Some of our dedicated individuals (here present) supporting our
          community initiatives.
        </p>

        {/* Facilitators Grid - Staggered/Pyramid Layout */}
        <div className="max-w-full mx-auto mt-12">
          <div className="flex flex-col items-center gap-3 md:gap-4">
            {facilitatorRows.map((row, rowIndex) => {
              // Create staggered effect - alternate rows have slight offset
              const offset = rowIndex % 2 === 1 ? 'md:ml-8' : '';
              return (
                <div
                  key={rowIndex}
                  className={`flex flex-wrap justify-center gap-3 md:gap-4 w-full ${offset}`}
                >
                  {row.map((facilitator) => (
                    <div
                      key={facilitator.name}
                      className="px-4 cursor-pointer py-2 border border-[#111413] flex items-center gap-2 hover:scale-105 transition-transform bg-white"
                    >
                      <Image src={facilitator.emoji} alt={facilitator.name} className="w-8 h-8" width={32} height={32} />
                      <span className="font-semibold text-[#111413]">
                        {facilitator.name}
                      </span>
                    </div> 
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilitators;
