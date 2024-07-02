import { Hero } from "@/components/pages/home/Hero";
import { Experience } from "@/components/pages/home/Experience";
import { Testimonials } from "@/components/pages/home/testimonials/Testimonial";
import { Projects } from "@/components/pages/home/Projects";
import { Contact } from "@/components/pages/home/Contact";

export default function Home() {
  return (
    <main>
       <Hero />
       <Projects />
       <Experience />
       <Testimonials />
       <Contact />
    </main>
  );
}