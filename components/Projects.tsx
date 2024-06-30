"use client";
import { motion } from "framer-motion";
import { TextReveal } from "./ui/Typography";
import { projects } from "@/constants";
import { Transition } from "./ui/Transitions";
import { SectionTitle } from "./shared/SectionTitle";
import { ProjectType } from "@/types";

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
        <div className={`flex flex-col-reverse ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} mb-8`}>
          <div className="flex-1 p-4 md:pt-20">
            <h2 className="blurb__heading font-grandSlang tracking-wider">
              {project.title}
            </h2>
            <h4 className="pb-4 font-neueMontreal bold text-xl">Role: {project.role}</h4>
            <p className="font-neueMontreal tracking-widest text-[24px]">
              {project.excerpt}
            </p>
            <motion.button
              type="submit"
              whileHover="whileHover"
              initial="initial"
              className="border border-black px-8 py-2 mt-8 md:mt-20 rounded-3xl relative overflow-hidden font-grandSlang font-bold"
            >
              <TextReveal className="uppercase">Find out more</TextReveal>
            </motion.button>
          </div>
          <div
            className="flex-1 bg-center min-h-[300px] md:h-[659px]"
            style={{
              backgroundImage: `url(${project.featuredImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
          </div>
        </div>
        </Transition>
      ))}
      </div>
     

      {/* <Transition>
        <div className="app-design">
          <div className="app-design__wrapper wrapper--large">
            <div className="app-design__content blurb">
              <h2 className="blurb__heading font-grandSlang">Renax App</h2>
              <p className="blurb__copy blurb__copy--tight font-neueMontreal tracking-widest text-[24px]">
                The Workforce Management System that streamlines HR and
                management processes, including leave applications, time
                reporting, and user account management, fostering a more
                transparent, efficient, and user-friendly work environment.
              </p>
              <motion.button
                type="submit"
                whileHover="whileHover"
                initial="initial"
                className="border border-black px-8 py-2 mt-4 rounded-3xl relative overflow-hidden font-grandSlang font-bold"
              >
                <TextReveal className="uppercase">Find out more</TextReveal>
              </motion.button>
            </div>
          </div>
          <figure className="app-design__visual"></figure>
        </div>
      </Transition> */}

      {/* <!-- END div: App Design -->
		<!-- div: Web Design --> */}

      {/* <Transition>
        <div className="web-design">
          <div className="web-design__wrapper wrapper--small">
            <div className="web-design__content blurb">
              <h2 className="blurb__heading font-grandSlang">
                Arbetscentralen
              </h2>
              <p className="blurb__copy blurb__copy--tight font-neueMontreal tracking-widest text-[24px]">
                The Workforce Management System that streamlines HR and
                management processes, including leave applications, time
                reporting, and user account management, fostering a more
                transparent, efficient, and user-friendly work environment.
              </p>
              <motion.button
                type="submit"
                whileHover="whileHover"
                initial="initial"
                className="border border-black px-8 py-2 mt-4 rounded-3xl relative overflow-hidden font-grandSlang font-bold"
              >
                <TextReveal className="uppercase">Find out more</TextReveal>
              </motion.button>
            </div>
          </div>
          <figure className="web-design__visual"></figure>
        </div>
      </Transition> */}
    </section>
  );
};
