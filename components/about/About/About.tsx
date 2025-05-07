import React from "react";

const About = () => {
  return (
    <div className="bg-[#F6F7F7] py-20 border-t border-black">
      <div className="border border-black border-r-0 border-l-0">
        <div className="w-full md:w-[954px] mx-auto p-10 border border-black border-t-0 border-b-0">
          <h3 className="text-[24px] md:text-[32px] font-bold font-clash uppercase text-black">
            Back story...
          </h3>
          <p className="text-[14px] md:text-[16px] font-medium text-black">
            Founded on April 12, 2021, Roadtrip Community started as a
            design-focused initiative in Lagos, Nigeria, and has since expanded
            into a dynamic network of diverse talents across continents,
            including members in the UK, Canada, and the US. From our humble
            beginnings, we&apos;ve grown into a thriving ecosystem that empowers
            African creatives and professionals to reach their full potential.
          </p>
        </div>
      </div>
      <div className="border border-black border-t-0 border-r-0 border-l-0">
        <div className="flex justify-between flex-col md:flex-row w-full md:w-[954px] mx-auto">
          <div className="w-full md:w-[449px] p-10 border-l border-r border-black">
            <h3 className="text-[24px] font-bold font-clash uppercase text-black">
              The vision
            </h3>
            <p className="text-[14px] font-medium text-black">
              <strong>
                We envision a world where African talents are not only
                recognized but celebrated and rewarded on the global stage.
              </strong>{" "}
              <br /> <br />
              Our community serves as a launchpad for dreams and a nurturing
              ground for skills, where African creativity meets global
              opportunity, inspiring transformative success stories along the
              way.
            </p>
          </div>

          <div className="w-full md:w-[449px] p-10 border-l border-r border-black">
            <h3 className="text-[24px] font-bold font-clash uppercase text-black">
              The mission
            </h3>
            <p className="text-[14px] font-medium text-black">
              <strong>
                {" "}
                To empower African talents to reach unprecedented heights in
                their careers and financial well-being.
              </strong>{" "}
              <br /> <br />
              We&apos;re committed to guiding at least 50% of our members to
              achieve financial independence, with earnings of $10,000 monthly.
            </p>
          </div>
        </div>
      </div>

      <div className="border border-black border-r-0 border-l-0 border-t-0">
        <div className="w-full md:w-[954px] mx-auto p-10 border border-black border-t-0 border-b-0 bg-[#198046]">
          <p className="font-medium text-white text-[16px] md:text-[22px] font-clash text-center">
            More than just financial success, our mission is about changing the
            global narrative surrounding African talent, equipping our members
            with the tools, knowledge, and support they need to confidently
            seize opportunities and thrive.
          </p>
        </div>
      </div>

      <div className="border border-black border-r-0 border-l-0 border-t-0">
        <div className="w-full md:w-[954px] mx-auto p-10 border border-black border-t-0 border-b-0">
          <h3 className="text-[24px] md:text-[32px] font-bold font-clash uppercase text-[#111413]">
            Our Commitment (SDG 4, 5 & 8)
          </h3>
          <p className="font-medium text-[#111413] text-[14px] md:text-[16px] text-left">
            Our vision, mission, and values at Roadtrip Community align with
            SDGs 4, 5, and 8 through our community-driven initiatives. We are
            dedicated to providing quality education, promoting gender equality,
            and driving economic growth—all of which are key to empowering
            African talent. <br />
            Through our programs, mentorship, and global network, we ensure
            access to quality education in design and technology, create
            opportunities that promote gender equality in the creative and tech
            sectors, and help our members build sustainable careers. These
            efforts contribute to the economic development of Africa, driving
            positive change and fostering lasting growth across the continent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
