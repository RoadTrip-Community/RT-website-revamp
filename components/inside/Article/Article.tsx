"use client"

import React, { useState, useEffect } from "react";

const Article = () => {
  const articles = [
    {
      title: "Understanding User Behavior: Enhancing UX Research with Mindful Insights",
      author: "Bootcamp UX Design",
      date: "Published on Medium",
      source: "bootcamp.uxdesign.cc",
      url: "https://bootcamp.uxdesign.cc/understanding-user-behavior-enhancing-ux-research-with-mindful-insights-696a9fce2055"
    },
    {
      title: "How to Read 5K Books in 2024",
      author: "Ovayoza Balogun",
      date: "Published on Medium",
      source: "ovayozabalogun.medium.com",
      url: "https://ovayozabalogun.medium.com/how-to-read-5k-books-in-2024-76ef4590a9ad"
    },
    {
      title: "Prioritising Horizontal Networking While Working Towards a Relationship with Seniors in Our Careers",
      author: "Jeremiah Oluwagbotemi",
      date: "Published on Medium",
      source: "medium.com",
      url: "https://medium.com/@jeremiaholuwagbotemi1/prioritising-horizontal-networking-while-working-towards-a-relationship-with-seniors-in-our-careers-2944738add16"
    }
  ];

  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  // Rotate articles every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [articles.length]);

  const currentArticle = articles[currentArticleIndex];

  return (
    <div className="bg-[#F6B847] py-20 md:px-0 px-4">
      <h1 className="text-black text-clash font-bold text-[24px] md:text-[40px] text-center uppercase font-clash">
        Article of the day
      </h1>
      <p className="text-black text-clash font-normal text-sm md:text-base text-center mt-4">
        Gain insights, tips, and entertaining perceptions from our{" "}
        <br className="md:block hidden" /> articles of the day written by
        Passengers
      </p>

      <div className="relative w-full md:w-[954px] h-[496px] mx-auto mt-10">
        <div className="absolute top-2 left-2 w-full h-full bg-[#198046] -z-10" />
        <div className="relative bg-[#F9D78E] md:p-10 p-4">
          <img src="/art.png" alt="article png" />
          <h3 className="font-clash text-[20px] md:text-[24px] text-[#111413] font-medium mt-3">
            <a 
              href={currentArticle.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              {currentArticle.title}
            </a>
          </h3>
          <p className="text-[#111413] font-normal md:text-base text-sm">
            {currentArticle.author}
          </p>
          <p className="text-[#111413] font-normal md:text-base text-sm">
            {currentArticle.date}
          </p>
          <p className="text-[#111413] font-normal md:text-base text-sm">
            {currentArticle.source}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
