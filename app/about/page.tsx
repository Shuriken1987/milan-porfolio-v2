import { Competencies } from "@/components/pages/about/Competencies";
import { Focus } from "@/components/pages/about/Focus";
import { Hobbies } from "@/components/pages/about/Hobbies";
import { Intro } from "@/components/pages/about/Intro";
import { Skills } from "@/components/pages/about/Skills";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Milan Stanojevic",
  description: "Software developer, frontend developer.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <main>
      <div className="min-h-screen max-w-4xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl font-grandSlang font-bold tracking-wider pb-4">
          About me
        </h1>
        <Intro />
        <Focus />
        <Competencies />
        <Hobbies />
        <Skills />
      </div>
    </main>
  );
}
