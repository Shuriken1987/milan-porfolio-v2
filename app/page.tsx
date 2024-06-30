import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
       <Hero />
       <Projects />
       <Experience />
       <Testimonials />
    </div>
  );
}
