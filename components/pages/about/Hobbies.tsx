import React from "react";

export const Hobbies = () => {
  return (
    <section className="w-full">
      <h3 className="text-3xl font-grandSlang font-bold tracking-wider py-4">
        Interests and Hobbies
      </h3>
      <p className="font-neueMontreal text-2xl tracking-wider leading-normal">
        Outside of my professional life, I have a range of hobbies that keep me
        active and inspired:
      </p>
      <ul className=" relative font-neueMontreal text-2xl leading-normal">
        <li className="experience pl-8 relative">
          Playing basketball, tennis, and padel.
        </li>
        <li className="experience pl-8 relative">
          Reading history books, particularly those about ancient fortresses.
        </li>
        <li className="experience pl-8 relative">
          Traveling and exploring historical sites.
        </li>
      </ul>
    </section>
  );
};
