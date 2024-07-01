import { notFound } from "next/navigation";
import { projects } from "@/constants";
import { ProjectType } from "@/types";
import { Hero } from "@/components/pages/project/Hero";
import { Project } from "@/components/pages/project";
import { Showcase } from "@/components/pages/project/Showcase";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = projects.map((project: ProjectType) => ({
    slug: project.slug,
  }));

  return slugs;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(
    (project: ProjectType) => project.slug === params.slug
  );

  if (!project) {
    return notFound();
  }

  return (
    <main className="py-20">
      <Hero project={project} />
      <section className="max-w-4xl mx-auto">
        <Project project={project} />
      </section>
     {!project.demo &&<Showcase project={project} />}
    </main>
  );
}
