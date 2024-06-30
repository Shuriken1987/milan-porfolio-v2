"use client";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "../constants";
import CardTestimonial from "./CardTestimonial";
import { Transition } from "./ui/Transitions";
import { SectionTitle } from "./shared/SectionTitle";

export const Testimonials: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const title = "WORDS EXPRESSED";

  return (
    <section ref={container} className="my-20">
      <Transition>
        <SectionTitle title={title} />
      </Transition>
      {testimonials.map((testimonial, i) => {
        const targetScale = 1 - (testimonials.length - i) * 0.05;

        return (
          <CardTestimonial
            key={`p_${i}`}
            i={i}
            {...testimonial}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};
