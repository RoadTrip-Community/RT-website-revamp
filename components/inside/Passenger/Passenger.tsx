import React from "react";

const Passenger = () => {
  return (
    <div className="bg-[#111413] py-20">
      <div>
        <h1 className="text-white text-clash font-bold text-[24px] md:text-[40px] text-center">
          The passengers’ experience
        </h1>
        <p className="text-white text-clash font-normal text-sm md:text-base text-center mt-4">
          Whether you&apos;re a beginner, a professional, or an expert, the
          community provides opportunities <br className="md:block hidden" /> to
          connect, grow, and contribute in ways that align with your interests
          and goals.
        </p>
      </div>

      <div className="py-10">
        <div className="border-1 border-white/40 border-l-0 border-r-0">
          <div className="w-full md:w-[954px] flex justify-center flex-col md:flex-row mx-auto px-4 md:px-0">
            <img src="/peop.png" alt="people" />
            <div className="bg-[#F6B847] flex justify-center flex-col text-left md:px-10 text-black px-4 py-4 md:py-0">
              <h3 className="font-clash text-black text-[18px] md:text-[24px] font-bold">
                For Beginners
              </h3>
              <p className="text-sm font-medium text-[#111413] my-3">
                Start your journey with confidence:
              </p>

              <div className="text-sm font-medium text-[#111413] py-3 px-3 border border-black">
                Learning resources: Access beginner-friendly guides, toolkits,
                and tutorials to build essential skills and knowledge.
              </div>

              <div className="text-sm font-medium text-[#111413] py-3 px-3 border border-black my-3">
                Workshops & masterclasses: Participate in events designed to
                introduce you to foundational concepts and practical tools.
              </div>

              <div className="text-sm font-medium text-[#111413] py-3 px-3 border border-black">
                Connect with a buddy: Partner with a fellow member for shared
                learning, mutual support, and progress tracking.
              </div>
            </div>
          </div>
        </div>

        <div className="border-1 border-white/40 border-l-0 border-r-0">
          <div className="w-full  md:w-[954px] flex justify-center flex-col md:flex-row mx-auto px-4 md:px-0 mt-10">
            <img src="/peop1.png" alt="people" />
            <div className="bg-[#F6B847] flex justify-center flex-col text-left md:px-10 text-black px-4 py-4 md:py-0">
              <h3 className="font-clash text-black text-[18px] md:text-[24px] font-bold">
                For Professionals
              </h3>
              <p className="text-sm font-medium text-[#111413] my-3">
                Refine your skills and build meaningful connections:
              </p>

              <div className="text-sm font-medium text-[#111413] py-3 px-3 border border-black">
                Collaborate on projects: Work alongside peers on initiatives
                that challenge and expand your expertise.
              </div>

              <div className="text-sm font-medium text-[#111413] py-3 px-3 border border-black my-3">
                Engage in discussions: Share insights, participate in
                problem-solving sessions, or simply explore new ideas with
                like-minded professionals.
              </div>

              <div className="text-sm font-medium text-[#111413] py-3 px-3 border border-black">
                Connect with a buddy: Foster relationships that encourage growth
                and provide fresh perspectives.
              </div>
            </div>
          </div>
        </div>

        <div className="border-1 border-white/40 border-l-0 border-r-0">
          <div className="w-full md:w-[954px] flex justify-center flex-col md:flex-row mx-auto px-4 md:px-0 mt-10">
            <img src="/peop2.png" alt="people" />
            <div className="bg-[#F6B847] flex justify-center flex-col text-left md:px-10 text-black px-4 py-4 md:py-0">
              <h3 className="font-clash text-black text-[18px] md:text-[24px] font-bold">
                For Experts
              </h3>
              <p className="text-sm font-medium text-[#111413] my-3">
                Share your knowledge or simply enjoy the community experience:
              </p>

              <div className="text-sm font-medium text-[#111413] py-3 px-3 border border-black">
                Host or attend masterclasses: Lead sessions to share your
                expertise or join as a participant to explore advanced topics.
              </div>

              <div className="text-sm font-medium text-[#111413] py-3 px-3 border border-black my-3">
                Create or use advanced resources: Contribute to or utilize
                community-created guides, templates, or case studies - the
                choice is yours.
              </div>

              <div className="text-sm font-medium text-[#111413] py-3 px-3 border border-black mb-3">
                Mentorship opportunities: Mentor individuals or groups if it
                aligns with your interests and goals.
              </div>

              <div className="text-sm font-medium text-[#111413] py-3 px-3 border border-black">
                Connect with a buddy: Build relationships with others at all
                levels for inspiration, collaboration, and shared success.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passenger;
