"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "../../public/assets/logo/logo.png";
import Image from "next/image";
import { navLinks } from "@/constants";
import { MobileNavbar } from "./MobileNavbar";
import { NavLink } from "@/types";

export const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");
  return (
    <nav className={`paddingX w-full flex items-center py-2 sticky transition-colors duration-500 hover:bg-white 
      top-0 z-20 bg-white sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt="logo"
            priority
            width={65}
            height={65}
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
        {navLinks.map((nav: NavLink) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-french" : "text-eerieBlack"
              } hover:text-taupe text-[21px] font-bold font-grandSlang 
                uppercase tracking-[3px] cursor-pointer nav-links text-neutral-600`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        {/* MOBILE  */}
        <MobileNavbar navLinks={navLinks} />
      </div>
    </nav>
  );
};
