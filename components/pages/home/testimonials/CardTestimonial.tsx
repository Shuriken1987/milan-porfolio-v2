import { useTransform,  motion } from 'framer-motion';
import { useRef } from 'react';
import { Testimonial } from '@/types';
import { Badge } from './Badge';

interface CardTestimonialProps extends Testimonial {
    i: number;
    progress: any;
    range: number[];
    targetScale: number;
  }

  const CardTestimonial: React.FC<CardTestimonialProps> = ({ i, name, text, title, progress, range, targetScale }) => {  
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        className="flex flex-col relative min-h-[500px] w-[1000px] rounded-[25px] p-[50px] transform-origin-top bg-white"
        style={{scale, top:`calc(-5vh + ${i * 25}px)`}} 
      >
        <div className="flex h-full mt-[50px] gap-[50px]">
          <div className="w-full relative top-[10%]">
            <p className="text-[16px]">
              <span className="text=[18px] md:text-[28px] font-neueMontreal  tracking-widest">{text}</span>
            </p>
            <div className='flex flex-col justify-end items-center'>
            <h2 className="mt-6 text-[28px] font-bold font-grandSlang tracking-widest ">{name}</h2>
            <span className="flex items-center gap-[5px] mt-6 ">
                {title && <Badge text={title} />}
            </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CardTestimonial;