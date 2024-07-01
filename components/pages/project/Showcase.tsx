"use client";
import { ProjectType } from "@/types";
import { HorizontalScrollCarousel } from "./HorizontalScrollCarousel";

type ProjectProps = {
  project: ProjectType;
};

export const Showcase = ({ project }: ProjectProps) => {
  return (
    <div>
      <div className="max-w-4xl mx-auto mb-8">
        <h3 className="text-3xl font-neueMontreal font-bold tracking-wider pb-4">
          Project Showcase
        </h3>
      </div>
      {!project.demo && (
        <HorizontalScrollCarousel
          images={project.images ?? []}
          title={project.title}
        />
      )}
    </div>
  );
};



