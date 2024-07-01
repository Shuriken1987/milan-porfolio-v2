import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Card } from "./Card";

type HorizontalScrollCarouselProps = {
    images: string[];
    title: string;
  };
  
  export const HorizontalScrollCarousel = ({
    images,
    title,
  }: HorizontalScrollCarouselProps) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  
    return (
      <section ref={targetRef} className="relative h-[300vh] ">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {images.map((image, index) => (
              <Card key={index} image={image} title={title} />
            ))}
          </motion.div>
        </div>
      </section>
    );
  };