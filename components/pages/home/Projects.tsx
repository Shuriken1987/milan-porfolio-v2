"use client";
import { motion } from "framer-motion";
import { projects } from "@/constants";
import { ProjectType } from "@/types";
import { Transition } from "@/components/ui/Transitions";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { TextReveal } from "@/components/ui/Typography";
import Link from "next/link";

export const Projects: React.FC = () => {
  const title = "SELECTED WORK";
  return (
    <section className="md:my-20">
      <Transition>
        <SectionTitle title={title} />
      </Transition>
      <div className="md:py-20">
        {projects.map((project: ProjectType, i: number) => (
          <Transition key={i}>
            <div
              className={`flex flex-col-reverse ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } mb-8`}
            >
              <div className="flex-1 p-4 md:pt-20">
                <h2 className="blurb__heading font-grandSlang tracking-wider">
                  {project.title}
                </h2>
                <h4 className="pb-4 font-neueMontreal bold text-xl">
                  Role: {project.role}
                </h4>
                <p className="font-neueMontreal tracking-widest text-[24px]">
                  {project.excerpt}
                </p>
                <Link href={`/projects/${project.slug}`}>
                  <motion.button
                    type="submit"
                    whileHover="whileHover"
                    initial="initial"
                    className="border border-black px-8 py-2 mt-8 md:mt-20 rounded-3xl relative overflow-hidden font-grandSlang font-bold"
                  >
                    <TextReveal className="uppercase">Find out more</TextReveal>
                  </motion.button>
                </Link>
              </div>
              <div
                className="flex-1 bg-center min-h-[300px] md:h-[659px]"
                style={{
                  backgroundImage: `url(${project.featuredImg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </Transition>
        ))}
      </div>
    </section>
  );
};
