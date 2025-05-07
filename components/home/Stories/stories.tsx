"use client";

import React, { useState } from "react";

const testimonials = [
  {
    name: "Mariam Abdul",
    role: "Product Designer",
    image: "/testimonial1.png",
    text: "I joined the Roadtrip Community expecting it to be like any other, but it's far from it. The energy here is unmatched, with everyone—no matter their level—being down-to-earth and welcoming. The projects and challenges constantly push me to grow personally and professionally, and I even landed my first job from an opportunity shared here! I'm proud and grateful to be part of such an incredible community 😄",
    twitter: "https://twitter.com/mariamabdul",
    linkedin: "https://linkedin.com/in/mariamabdul",
  },
  {
    name: "Samuel Okon",
    role: "Frontend Developer",
    image: "/testimonial2.png",
    text: "I joined the Roadtrip Community expecting it to be like any other, but it's far from it. The energy here is unmatched, with everyone—no matter their level—being down-to-earth and welcoming. The projects and challenges constantly push me to grow personally and professionally, and I even landed my first job from an opportunity shared here! I'm proud and grateful to be part of such an incredible community 😄",
    twitter: "https://twitter.com/samokon",
    linkedin: "https://linkedin.com/in/samokon",
  },
];

const Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-[#198046] py-20 md:p-0 px-4">
      <div className="max-w-[954px] mx-auto">
        <h2 className="hidden md:block text-5xl font-semibold text-white uppercase text-center font-clash mb-16">
          Success stories
        </h2>

        <div className="relative">
          <div>
            <div className="flex items-center flex-wrap">
              <div className="bg-[#F6B847] min-h-[300px] w-[250px] md:w-[358px] flex items-center justify-center flex-col">
                <div className="rounded-[9999] overflow-hidden border-2 border-black w-[147px] h-[147px]"></div>
                <div className="text-black font-clash uppercase text-2xl font-semibold mt-2">
                  {testimonials[currentIndex].name}
                </div>
                <div className="flex items-center">
                  <img src="/ins.png" alt="" />
                  <img src="/twi.png" alt="" />
                </div>
              </div>

              <div className="bg-white min-h-[300px] px-8 py-12 md:flex-1">
                <h3 className="text-lg font-clash font-semibold mb-2 text-[#111413]">
                  MY RT STORY
                </h3>

                <p className="text-sm text-[#4A5752] mb-6 ">
                  {testimonials[currentIndex].text}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 mt-6">
            <img
              src="/left.png"
              alt=""
              onClick={prevSlide}
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            />

            <div className="relative w-[160px] h-2 bg-[#4FD98A]">
              <div
                className="absolute top-0 left-0 h-full bg-[#111413] transition-all duration-300 ease-in-out"
                style={{
                  width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
                }}
              />
            </div>

            <img
              src="/right.png"
              alt=""
              onClick={nextSlide}
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
