"use client";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { experiences } from "@/constants";
import { Transition } from "@/components/ui/Transitions";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { TextRevealClick } from "@/components/ui/Typography";

export const Experience: React.FC = () => {
  const [activeCompany, setActiveCompany] = useState<keyof typeof experiences>("Edument");
  const title = "WORK EXPERIENCE";

  return (
    <section className="py-20">
      <Transition>
        <SectionTitle title={title} />
      </Transition>

      <Transition>
        <div className="flex flex-col md:flex-row md:justify-between max-w-7xl mx-auto my-20">
          <div className="sidebar md:flex-auto font-grandSlang font-bold tracking-widest">
            <ul className="flex flex-row md:flex-col text-[20px] md:text-[40px] py-10 md:py-0">
              {Object.keys(experiences).map((company) => (
                <li
                  key={company}
                  className={`mx-2 ${
                    activeCompany === company
                      ? " text-neutral-300"
                      : ""
                  }`}
                  onClick={() => setActiveCompany(company as keyof typeof experiences)}
                  style={{ cursor: "pointer" }}
                  aria-pressed={activeCompany === company ? "true" : "false"}
                >
                  <TextRevealClick>{company}</TextRevealClick>
                </li>
              ))}
            </ul>
          </div>
          <div className="changing-content md:flex-auto font-neueMontreal text-[20px]">
            <div className="pl-5 mb-4">
              <h3>{experiences[activeCompany].title}</h3>
              <p>{experiences[activeCompany].period}</p>
            </div>
            <ul className="pl-10">
              {experiences[activeCompany].description.map((value, index) => (
                <li key={index} className="company-valueription">
                  <FaPlay className="inline-block mr-2" style={{fontSize: '8px'}}/>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Transition>
    </section>
  );
};
