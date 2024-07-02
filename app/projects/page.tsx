import { Projects } from "@/components/pages/home/Projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Milan Stanojevic",
  description: "Software developer, frontend developer.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <Projects />
    </main>
  );
}
