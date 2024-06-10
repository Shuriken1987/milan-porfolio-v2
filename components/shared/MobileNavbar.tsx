import Image from "next/image";
import React, { useState } from "react";
import close from "../../public/assets/icons/close.png";
import menu from "../../public/assets/icons/menu.png";
import Link from "next/link";
import { motion } from "framer-motion"

interface MobileNavbarProps {
  navLinks: { id: string; title: string }[];
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ navLinks }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }
  
  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02]
      }
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02]
      }
    }
  }
  
  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2
      }
    },
    closed: { opacity: 0 }
  }
  
  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1
      }
    }
  }
  
  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div className="nav sm:hidden"
    initial="closed"
    animate={mobileNavOpen ? "opened" : "closed"}
  >
    <div className="menu-container overflow-y-hidden">
      <motion.div className="px-5 cursor-pointer"
        variants={hideNavItemsVariant}
        onClick={() => setMobileNavOpen(true)}
      >
        <Image src={menu} alt="menu" width={32} height={32}/>
      </motion.div>
    </div>
    <motion.div variants={mobileMenuVariant} className="mobile-menu fixed top-0 left-0 h-screen w-full flex flex-col items-center bg-black">
      <motion.button className="self-end outline-none border-none bg-transparent uppercase text-white font-[13px] cursor-pointer mt-[30px] mr-[25px] mb-0 ml-0"
        variants={fadeInVariant}
        onClick={() => setMobileNavOpen(false)}
      >
        Close
      </motion.button>
      <motion.ul className="list-none mt-[40px]" variants={ulVariant}>
        {navLinks.map(navItem => (
          <motion.li whileTap={{ scale: 0.95 }} key={navItem.id} className="mt-[20px] mb-0 overflow-y-hidden select-none cursor-pointer">
            <motion.div className={`text-white font-grandSlang font-extrabold text-[34px] mb-10    
                uppercase tracking-widest cursor-pointer text-center`} 
                variants={liVariant}>
                  <Link href={`/#${navItem.id}`}>{navItem.title}</Link>
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  </motion.div>
  );
};
