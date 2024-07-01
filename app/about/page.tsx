'use client';
import React, { useState, useEffect } from "react";

const About = () => {
  const text =
    "Energetic and inquisitive, I am continuously refining my craft to stay ahead in the ever-evolving tech landscape.";
  const words = text.split(" ");
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the proportion of the page scrolled through
      const section = document.getElementById("colorChangeSection");
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      // Convert the scrolled proportion to the active word index
      if (
        scrollPosition > sectionTop &&
        scrollPosition < sectionTop + sectionHeight + window.innerHeight
      ) {
        const delay = window.innerHeight / 1.2;
        const scrolledPortion = (scrollPosition - delay - sectionTop) / (sectionHeight + window.innerHeight);
        const newActiveIndex = Math.floor(scrolledPortion * 2 * words.length);
        setActiveWordIndex(Math.min(newActiveIndex, words.length - 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length]);

  return (
    <div
      className="min-h-screen px-8 py-24 md:px-0 w-full" id="colorChangeSection">
         <h1 className="font-grandSlang tracking-widest absolute  lg:top-120 left-0 right-0 text-[60px] sm:text-[80px] md:text-[160px] lg:text-[280px] font-bold text-gray-200 z-0 opacity-50 text-center"
         style={{ background: 'linear-gradient(to bottom, gray, transparent)',
         WebkitBackgroundClip: 'text',
         WebkitTextFillColor: 'transparent',
        //  textStroke: '1px black'
        }}
         >
            ABOUT
          </h1>
      <div className="relative h-[300vh] w-3/4 mx-auto">
   
        <div className="sticky left-0 top-40 ">
      
          {words.map((word, index) => (
            <span className="text-[30px] sm:text-[20px] md:text-[40px] lg:text-[80px]"
              key={index}
              style={{
                color: index <= activeWordIndex ? "#3b3b3b" : "rgb(212 212 212)",
                transition: "color 0.3s",
                marginRight: "28px",
                display: "inline-block",
              }}
            >
              {word}
            </span>
          ))}

        </div>
        
      </div>
    </div>
  );
};

export default About;
