"use client";
import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import { SectionHeading, TextReveal } from "../ui/Typography";
import { SlideIn, Transition } from "../ui/Transitions";
import { Input, Textarea } from "../ui/Input";
import logo from "../../public/assets/logo/logo.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import SanitizeInputs from "@/utils/sanitizeInputs";
import { toast } from "react-toastify";

export const Footer = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const sanitizedEmail = form.email.toLowerCase();
    const sanitizedName = form.name.trim();
    const sanitizedSubject = form.subject.trim();
    const sanitizedMessage = form.message.trim();

    const errors = {};
    SanitizeInputs(sanitizedEmail, sanitizedName, sanitizedSubject, sanitizedMessage, errors);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setLoading(false);
      return;
    }

    if (!form.name || !form.email || !form.message) {
      setLoading(false);
      toast.error("All fields required.");
      return;
    }

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        "service_rughb4c", // paste your ServiceID here (you'll get one when your service is created).
        "template_e845x3c", // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: "Milan Stanojevic", // put your name here.
          from_email: form.email,
          to_email: "stanojevicmilan17@yahoo.com", //put your email here.
          subject: form.subject,
          message: form.message,
        },
        "EiHO7Y6N70Cc4MwEG" //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          setErrors({});
          toast.success("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.section className="relative">
      {/* <span className="blob size-1/2 absolute top-20 right-0 blur-[100px]" /> */}
      <div className="p-4 md:p-8 md:px-16">
        <SectionHeading className="font-grandSlang">
          <SlideIn className="text-slate-200 ">Get in touch</SlideIn> <br />{" "}
          <SlideIn>Contact</SlideIn>
        </SectionHeading>
        <div className="grid md:grid-cols-2 gap-10 md:pt-16">
          <div className="space-y-4">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <Transition className="w-full mb-2">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    className="border-0 border-b border-black rounded-none"
                    value={form.name}
                    onChange={handleChange}
                  />
                  
                </Transition>
                <Transition className="w-full mb-2">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border-0 border-b border-black rounded-none"
                    value={form.email}
                    onChange={handleChange}
                  />
                </Transition>
              </div>
              <div className="space-y-2">
                <Transition className="mb-2">
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Enter the subject"
                    className="border-0 border-b border-black rounded-none"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </Transition>
              </div>
              <div className="space-y-2">
                <Transition>
                  <Textarea
                    className="min-h-[100px] rounded-none border-0 border-b resize-none border-black"
                    name="message"
                    placeholder="Enter your message"
                    value={form.message}
                    onChange={handleChange}
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
                    <TextReveal className="uppercase">{loading ? 'Sending...' : 'Send'}</TextReveal>
                  </motion.button>
                </Transition>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="flex items-center justify-between md:px-8 px-2 pt-4 pb-0 text-sm">
        <Transition>
          <Image src={logo} alt="logo" width={50} height={50} />
        </Transition>
        <Transition>
          <div>&copy; {new Date().getFullYear()} Milan Stanojevic</div>
        </Transition>
      </footer>
    </motion.section>
  );
};

