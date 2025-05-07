import React from "react";

interface Facilitator {
  name: string;
  emoji: string;
}

const Facilitators = () => {
  const facilitators: Facilitator[] = [
    // Row 1
    { name: "DEJAVU", emoji: "🤩" },
    { name: "ATA RODO", emoji: "😷" },
    { name: "ATM", emoji: "🥰" },
    { name: "TOBILOBA", emoji: "🥰" },
    { name: "BISOLA", emoji: "🤩" },
    // Row 2
    { name: "WAJU", emoji: "🤩" },
    { name: "OYINKANSOLA", emoji: "🥺" },
    { name: "ADEMOLA", emoji: "🥰" },
    { name: "KINGADE", emoji: "🥰" },
    { name: "GLORY-ANN", emoji: "🤩" },
    { name: "VICKIE", emoji: "🥺" },
    // Row 3
    { name: "ABIODUN", emoji: "😎" },
    { name: "JEJEFOLORUNSHO", emoji: "😷" },
    { name: "TUMININU", emoji: "🥰" },
    { name: "CAT", emoji: "🤩" },
    { name: "HOWARD", emoji: "🥰" },
    { name: "MONSIEURPAULO", emoji: "😊" },
    // Row 4
    { name: "EBENEZER", emoji: "😎" },
    { name: "ELOZINO", emoji: "😷" },
    { name: "JOYCE", emoji: "🥰" },
    { name: "VICTORIA", emoji: "😊" },
    { name: "OBAMAOLU", emoji: "🤩" },
    { name: "DEREK", emoji: "🤩" },
    // Row 5
    { name: "QUEEN TEMMY", emoji: "😷" },
    { name: "MARIAM MARIE", emoji: "🥰" },
    { name: "AYOMIDOTUN", emoji: "🤩" },
    { name: "SAM", emoji: "🤩" },
  ];

  return (
    <div className="bg-[#FCE8E4] py-20 md:px-0 px-4">
      <h1 className="text-center font-clash text-[20px] md:text-[28px] text-[#111413] uppercase font-semibold">
        with Over 40 Facilitators, Mentors and Volunteers{" "}
      </h1>
      <p className="text-[#111413] text-center text-sm md:text-base">
        Some of our dedicated individuals (here present) supporting our
        community initiatives.
      </p>

      {/* Facilitators Grid */}
      <div className="max-w-[1001px] mx-auto mt-12">
        <div className="flex flex-wrap justify-center gap-4">
          {facilitators.map((facilitator) => (
            <div
              key={facilitator.name}
              className="px-4 cursor-pointer py-2 border border-[#111413] flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <span className="text-2xl">{facilitator.emoji}</span>
              <span className="font-semibold text-[#111413]">
                {facilitator.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilitators;
