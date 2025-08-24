"use client";

import React from "react";

const Ways = () => {
  return (
    <div className="bg-[#FEF9EC] py-20 px-4 md:px-0">
      <h1 className="font-clash text-2xl md:text-[48px] text-[#111413] uppercase font-semibold my-5 text-center">
        Ways to Become a Partner
      </h1>

      <div className="relative w-full md:w-[954px] mx-auto">
        <div className="bg-[#7A1980] w-full md:w-[954px] hidden md:block min-h-[439px] mx-auto absolute right-[-15px] bottom-[-15px] z-0"></div>
        <div className="w-full md:w-[954px] mx-auto border border-[#111413] z-10 relative">
          <div className="flex flex-col md:flex-row flex-wrap">
            <div className="w-full md:w-[50%] min-h-[144px] border bg-[#F9D78E] border-[#111413] flex items-start flex-col pl-5">
              <div className="w-full md:w-[397px] mt-2">
                <h3 className="text-[22px] md:text-[30px] font-semibold text-[#111413] font-clash text-left mt-4 md:mt-0">
                  Corporate partnerships
                </h3>

                <p className="text-[#111413] w-full md:w-[377px] text-sm">
                  Align your brand with a purpose-driven community. Sponsor
                  programs, events, or initiatives that build talent pipelines
                  and foster professional growth.
                </p>
              </div>
            </div>

            <div className="w-full md:w-[50%] min-h-[144px] border bg-[#BDF5D5] border-[#111413] flex items-start flex-col pl-5">
              <div className="w-full md:w-[397px] mt-2">
                <h3 className="text-[22px] md:text-[30px] font-semibold text-[#111413] font-clash text-left mt-4 md:mt-0">
                  Mentorship & training
                </h3>

                <p className="text-[#111413] w-full md:w-[377px] text-sm">
                  Share your expertise and insights to guide our members toward
                  career excellence. Collaborate on workshops, training
                  sessions, or mentorship programs.
                </p>
              </div>
            </div>

            <div className="w-full md:w-[50%] min-h-[144px] border bg-[#C6CCFF] border-[#111413] flex items-start flex-col pl-5">
              <div className="w-full md:w-[397px] mt-2">
                <h3 className="text-[22px] md:text-[30px] font-semibold text-[#111413] font-clash text-left mt-4 md:mt-0">
                  Corporate partnerships
                </h3>

                <p className="text-[#111413] w-full md:w-[377px] text-sm">
                  Align your brand with a purpose-driven community. Sponsor
                  programs, events, or initiatives that build talent pipelines
                  and foster professional growth.
                </p>
              </div>
            </div>

            <div className="w-full md:w-[50%] min-h-[144px] border bg-[#FAD5CE] border-[#111413] flex items-start flex-col pl-5">
              <div className="w-full md:w-[397px] mt-2">
                <h3 className="text-[22px] md:text-[30px] font-semibold text-[#111413] font-clash text-left mt-4 md:mt-0">
                  Mentorship & training
                </h3>

                <p className="text-[#111413] w-full md:w-[377px] text-sm">
                  Share your expertise and insights to guide our members toward
                  career excellence. Collaborate on workshops, training
                  sessions, or mentorship programs.
                </p>
              </div>
            </div>

            <div className="w-full min-h-[144px] border bg-[#BFD9FE] border-[#111413] flex items-start flex-col pl-5">
              <div className="w-full mt-2">
                <h3 className="text-[22px] md:text-[30px] font-semibold text-[#111413] font-clash text-left mt-4 md:mt-0">
                  Financial support
                </h3>

                <p className="text-[#111413] w-full text-sm">
                  Invest in our mission by supporting scholarships, grants, or
                  operational initiatives to expand our reach and impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[954px] mx-auto mt-10">
        <h3 className="text-[#111413] text-[22px] md:text-[30px] font-clash font-medium text-center">
          Donate, sponsor or partner as...
        </h3>

        <div className="mt-5 flex flex-col md:flex-row items-center justify-around w-full md:w-[425px] mx-auto gap-4 md:gap-0">
          <button
            className="font-clash bg-[#CC4D34] uppercase text-white w-full md:min-w-[184px] h-[56px] font-semibold cursor-pointer md:mr-4"
            onClick={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSd9MaZHwqpVxZUw0NhmHxTv99aEQTM6MNbUtacbxu8GOVhAPA/viewform?usp=preview",
                "_blank"
              );
            }}
          >
            an individual
          </button>
          <button
            className="font-clash bg-[#198046] uppercase text-white w-full md:min-w-[184px] h-[56px] font-semibold cursor-pointer"
            onClick={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSd9MaZHwqpVxZUw0NhmHxTv99aEQTM6MNbUtacbxu8GOVhAPA/viewform?usp=preview",
                "_blank"
              );
            }}
          >
            an organization
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ways;
