"use client";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Transition } from "@/components/ui/Transitions";
import { testimonials } from "@/constants";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import CardTestimonial from "./CardTestimonial";

export const Testimonials: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const title = "WORDS EXPRESSED";

  return (
    <section ref={container} className="py-20">
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
