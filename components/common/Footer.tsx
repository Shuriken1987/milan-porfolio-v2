"use client";
import { motion } from "framer-motion";
import { Transition } from "../ui/Transitions";
import logo from "../../public/assets/logo/logo.png";
import Image from "next/image";

export const Footer = () => {
  return (
    // <motion.section className="relative">
      <footer className="flex items-center justify-between md:px-8 px-2 pt-4 pb-0 text-sm">
        <Transition>
          <Image src={logo} alt="logo" width={50} height={50} />
        </Transition>
        <Transition>
          <div className="font-neueMontreal ">
            &copy; {new Date().getFullYear()} Milan Stanojevic
          </div>
        </Transition>
      </footer>
    // </motion.section>
  );
};
