import React from "react";
import TweetCard from "./TweetCard";

const FootPrints = () => {
  const tweetData = {
    username: "Boluwatife",
    handle: "tifeolasup",
    content:
      "Roadtrip is a big influence on my tech journey. The masterclasses have helped me and the community has guided me to become better.\n\nTrust me, this is the community to be in if you want to become good at this tech thing, plus we have people making at least $10k monthly.\n\n#RoadtripCommunity #RTC #Roadtrip",
    timestamp: "10:51 AM · Jun 1, 2024",
    metrics: {
      replies: 999,
      retweets: 999,
      likes: 999,
      views: 999,
    },
  };

  return (
    <div className="bg-[#E1E6E3] py-20">
      <h1 className="text-black text-clash font-bold text-[40px] text-left pl-4 md:text-center uppercase font-clash">
        Footprints
      </h1>
      <p className="text-black text-clash font-normal text-base text-left md:text-center w-[298px] mx-auto">
        Explore the impact Roadtrip Community is making through our
        members&apos; <br className="md:block hidden" />
        involvement in tech events, conferences, and volunteering activities.
      </p>

      <div className="max-w-[1300px] mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 overflow-hidden gap-4 md:gap-0">
          <div className="relative h-[400px] md:h-[800px] overflow-hidden">
            <div className="absolute w-full animate-marquee-up">
              {[...Array(6)].map((_, i) => (
                <div key={`col1-${i}`}>
                  <TweetCard {...tweetData} />
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] md:h-[800px] overflow-hidden">
            <div className="absolute w-full animate-marquee-down">
              {[...Array(6)].map((_, i) => (
                <div key={`col2-${i}`}>
                  <TweetCard {...tweetData} />
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] md:h-[800px] overflow-hidden">
            <div className="absolute w-full animate-marquee-up">
              {[...Array(6)].map((_, i) => (
                <div key={`col3-${i}`}>
                  <TweetCard {...tweetData} />
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] md:h-[800px] overflow-hidden">
            <div className="absolute w-full animate-marquee-down">
              {[...Array(6)].map((_, i) => (
                <div key={`col4-${i}`}>
                  <TweetCard {...tweetData} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootPrints;
