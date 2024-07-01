"use client";
import { Transition } from "@/components/ui/Transitions";
import { ProjectType } from "@/types";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/Typography";

type ProjectProps = {
  project: ProjectType;
};

export const Project = ({ project }: ProjectProps) => {
  return (
    <>
    <div className="heading"> 
      <div className="flex items-start justify-between flex-wrap">
      <h1 className="blurb__heading font-grandSlang ">{project.title}</h1>
      <div className="flex items-center gap-x-2">
      {project.demo &&<Link href={project.demo || ""} target="_blank">
                  <motion.button
                    type="submit"
                    whileHover="whileHover"
                    initial="initial"
                    className="border border-black px-8 py-2 mt-6 rounded-md relative overflow-hidden font-neueMontreal flex items-center gap-x-2"
                  >
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                      Live url
                  </motion.button>
      </Link>}
      </div>
      </div>

      <p className="font-neueMontreal text-xl tracking-wider">
        <span className="font-bold">Role:</span> {project.role}
      </p>
    </div>
      <Transition>
        <div className="py-10">
          <h3 className="text-3xl font-neueMontreal font-bold tracking-wider pb-4">
            Overview
          </h3>
          <p className="font-neueMontreal text-xl tracking-wider">
            {project.description}
          </p>
        </div>
      </Transition>
      <Transition>
        <div className="py-10">
          <h3 className="text-3xl font-neueMontreal font-bold tracking-wider pb-4">
            Technical Details
          </h3>
          <p className="font-neueMontreal text-xl tracking-wider">
            App is built using modern web technologies to ensure high
            performance, responsiveness, and ease of maintenance. Key
            technologies include:
          </p>

          <div>
            <p className="font-neueMontreal font-bold text-xl tracking-wider py-4">
              Client App:
            </p>
            <ul className="font-neueMontreal text-xl tracking-wider">
              {project?.technicalDetails?.clientApp.map((detail, index) => (
                <li key={index}>
                  <span className="font-bold">{detail.label}:</span>{" "}
                  {detail.detail}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-neueMontreal font-bold text-xl tracking-wider py-4">
              Backend:
            </p>
            <ul className="font-neueMontreal text-xl tracking-wider">
              {project?.technicalDetails?.backend.map((detail, index) => (
                <li key={index}>
                  <span className="font-bold">{detail.label}:</span>{" "}
                  {detail.detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Transition>

      <Transition>
        <div className="py-10">
          <h3 className="text-3xl font-neueMontreal font-bold tracking-wider pb-4">
            Features and Functionality
          </h3>
          {project?.features?.map((feature, index) => (
            <div key={index} className="py-4">
              <p className="font-neueMontreal text-xl tracking-wider font-bold">
                {feature.title}
              </p>
              <p className="font-neueMontreal text-xl tracking-wider">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Transition>
    </>
  );
};
