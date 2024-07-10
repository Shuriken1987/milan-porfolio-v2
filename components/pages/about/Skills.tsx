import React from "react";

export const Skills = () => {
  return (
    <section className="w-full">
      <h3 className="text-3xl font-grandSlang font-bold tracking-wider py-4">
        Technical Skills
      </h3>
      <p className="font-neueMontreal text-2xl tracking-wider leading-normal">
        Here are some of the technologies and tools I’ve been working with
        recently:
      </p>
      <ul className=" relative font-neueMontreal text-2xl leading-normal">
        <li className="experience pl-8 relative">
        <span className="font-bold"> Frontend:</span> JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS,
          Bootstrap, SCSS, React, Next.js, Redux
        </li>
        <li className="experience pl-8 relative">
        <span className="font-bold"> Backend:</span> PHP, Node.js, Express.js, MongoDB, Mongoose, PostgreSQL,
          Prisma
        </li>
        <li className="experience pl-8 relative"> 
          <span className="font-bold">CMS:</span> Wordpress, Storyblok</li>
        <li className="experience pl-8 relative">
        <span className="font-bold"> Tools:</span> Git, Trello, NPM, Webpack, Figma
        </li>
      </ul>
    </section>
  );
};
