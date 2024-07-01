import { ProjectType } from "@/types";
import Image from "next/image";

type HeroProps = {
  project: ProjectType;
};
export const Hero = ({ project }: HeroProps) => {
  return (
    <div className="hero flex justify-center">
      <Image
        src={project.featuredImg}
        alt={project.title}
        width={500}
        height={500}
      />
    </div>
  );
};
