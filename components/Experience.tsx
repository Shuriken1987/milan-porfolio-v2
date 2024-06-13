'use client'
import React, { useState } from "react";
import { Transition } from "./ui/Transitions";
import { TextRevealClick } from "./ui/Typography";

export const Experience = () => {
  const [activeCompany, setActiveCompany] = useState("Edument");

  const companies: { [key: string]: { title: string; period: string; descriptions: string[] } } = {
    Edument: {
      title: "Software developer @ Edument",
      period: "Nov 2023 - Feb 2024",
      descriptions: [
        "Successfully optimized application speed by implementing advanced front-end technologies, resulting in a 40% improvement in loading times.",
        "Enhanced overall application efficiency by 50% through strategic optimizations and coding best practices.",
        "Completed an advanced React course provided by the employing company, deepening knowledge and skills in modern web development frameworks.",
        "Received personalized TypeScript training from a mentor, leading to significant enhancements in coding proficiency and project contributions.",
      ],
    },
    Renax: {
      title: "Software developer @ Renax",
      period: "Jan 2023 - Sep 2023",
      descriptions: [
        `Spearheaded the development and integration of a comprehensive workforce management system, boosting user engagement by 25% and operational efficiency by 30%.`,
        `Architected and deployed interactive React-based user interfaces, enhancing customer satisfaction scores by 20% and contributing to a 15% increase in projectsuccess metrics.`,
        `Streamlined data interactivity by integrating RESTful services and optimizing full-stack operations, which resulted in a 35% reduction in data retrieval times.`,
        `Ensured high standards of quality by developing testable modules and thorough test cases for the application.`,
      ],
    },
    Freelance: {
      title: "Freelance Developer",
      period: "Aug 2021 - Present",
      descriptions: [
       `Engineered and launched over ten web applications with React and Next.js, achieving an improvement in responsive design and user experience ratings.`,
       `Designed and implemented robust backend APIs using Node.js and Express, enabling faster data exchange by 40% and enhancing integration between frontendand backend systems.`,
       `Implemented MongoDB for data management, which improved application responsiveness by 50% and user satisfaction scores.`,
       `Optimized application performance through efficient database queries and streamlined code implementation.`,
       `Strengthened security measures within applications by conducting vulnerability assessments and implementing patches as needed.`,
      ],
    },
  };

  return (
    <section>
      <Transition>
      <div>
        <h2 className="sectionHeadings">WORK EXPERIENCE</h2>
      </div>
      </Transition>

      <Transition>
      <div className="flex flex-col md:flex-row md:justify-between max-w-7xl mx-auto my-20">
        <div className="sidebar md:flex-auto font-grandSlang font-bold tracking-widest">
          <ul className="flex flex-row md:flex-col text-[20px] md:text-[40px]">
            {Object.keys(companies).map((company) => (
              <li
                key={company}
                className={`mx-2 ${activeCompany === company ? "border-l-2 border-black px-2" : ""}`}
                onClick={() => setActiveCompany(company)}
                style={{ cursor: "pointer" }}
              >
              <TextRevealClick>{company}</TextRevealClick>  
              </li>
            ))}
          </ul>
        </div>
        <div className="changing-content md:flex-auto font-neueMontreal text-[20px]">
          <div className="pl-5 mb-4">
            <h3>{companies[activeCompany].title}</h3>
            <p>{companies[activeCompany].period}</p>
          </div>
          <ul className="list-disc pl-10">
            {companies[activeCompany].descriptions.map((description, index) => (
              <li key={index} className="company-description">
                {description}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </Transition>

    </section>
  );
};
