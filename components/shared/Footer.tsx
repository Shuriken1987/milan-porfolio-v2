"use client";
import { motion } from "framer-motion";
import { ReactNode, useRef} from "react";
// import { cn } from "@/utils/cn";
// import { SocialHandle } from "@/utils/interfaces";
import Link from "next/link";
import { SectionHeading, TextReveal } from "../ui/Typography";
import { SlideIn, Transition } from "../ui/Transitions";
import { Input, Textarea } from "../ui/Input";
import logo from "../../public/assets/logo/logo.png";
import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import useContactForm from "@/hooks/useContactForm";
import { socials } from "@/constants";

export const Footer = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { formData, errors, loading, onHandleInput, handleSubmit } = useContactForm();

  return (
    <motion.section className="relative">
      <Transition>
          <SectionTitle title="CONTACT" />
        </Transition>
      <div className="p-4 md:p-8 md:px-16">
      
        {/* <SectionHeading className="font-grandSlang">
          <SlideIn className="text-slate-200 ">Get in touch</SlideIn> <br />{" "}
          <SlideIn>Contact</SlideIn>
        </SectionHeading> */}
        <div className="grid md:grid-cols-2 gap-10 md:pt-16">
          <div className="space-y-4">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <Transition className="w-full mb-2">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    className="border-0 border-b border-black rounded-none font-grandSlang font-bold"
                    value={formData.name}
                    onChange={onHandleInput}
                  />
                </Transition>
                <Transition className="w-full mb-2">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border-0 border-b border-black rounded-none font-grandSlang font-bold"
                    value={formData.email}
                    onChange={onHandleInput}
                  />
                </Transition>
              </div>
              <div className="space-y-2">
                <Transition className="mb-2">
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="border-0 border-b border-black rounded-none font-grandSlang font-bold"
                    value={formData.subject}
                    onChange={onHandleInput}
                  />
                </Transition>
              </div>
              <div className="space-y-2">
                <Transition>
                  <Textarea
                    className="min-h-[100px] rounded-none border-0 border-b resize-none border-black font-grandSlang font-bold "
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={onHandleInput}
                  />
                </Transition>
              </div>
              <div>
                <Transition>
                  <motion.button
                    type="submit"
                    whileHover="whileHover"
                    initial="initial"
                    className="border border-black px-8 py-2 mt-4 rounded-3xl relative overflow-hidden font-grandSlang font-bold"
                  >
                    <TextReveal className="uppercase">
                      {loading ? "Sending..." : "Send"}
                    </TextReveal>
                  </motion.button>
                </Transition>
              </div>
            </form>
          </div>
          <div className="md:justify-self-end flex flex-col">
          <div className="pb-4">
              <Transition>
                <SectionHeading className="font-grandSlang">
                <span className="text-neutral-300">Get in touch</span>
                </SectionHeading>
              </Transition>
              <div className="text-2xl md:text-4xl font-bold py-2 font-grandSlang">
                <Transition>
                  <Link className="text-[18px]" href="mailto:stanojevicmilan17@yahoo.com">
                  <TextReveal>stanojevicmilan17@yahoo.com</TextReveal>
                  </Link>
                </Transition>
              </div>
              <Transition>
                <Link href="tel:+46760578216">
                <div className="pb-1 text-neutral-300 font-neueMontreal tracking-widest font-bold">+46760578216</div>
                </Link>
              </Transition>
              <Transition>
                <div className="text-neutral-300 font-neueMontreal tracking-widest font-bold">Helsingborg, Sweden</div>
              </Transition>
            </div>

          <div className="flex md:gap-8 gap-4 mt-auto md:pb-16 font-neueMontreal tracking-widest">
              {socials.map((social, index) =>
               
                  <Transition
                    key={social.platform}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Link href={social.url} target="_blank">
                      <TextReveal>{social.platform}</TextReveal>
                    </Link>
                  </Transition>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer className="flex items-center justify-between md:px-8 px-2 pt-4 pb-0 text-sm">
        <Transition>
          <Image src={logo} alt="logo" width={50} height={50} />
        </Transition>
        <Transition>
          <div className="font-neueMontreal ">&copy; {new Date().getFullYear()} Milan Stanojevic</div>
        </Transition>
      </footer>
    </motion.section>
  );
};