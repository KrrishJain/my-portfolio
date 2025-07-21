"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useRef } from "react";
import Image from "next/image";
import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiImagej,
} from "react-icons/si";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const page = () => {
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  const skills = [
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      description: "NoSQL database for scalable apps",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      description: "Backend framework for Node.js",
    },
    {
      name: "React",
      icon: <SiReact />,
      description: "UI library for dynamic interfaces",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      description: "Server-side JavaScript runtime",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      description: "Core language for web development",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      description: "Typed JavaScript for scalability",
    },
    {
      name: "HTML",
      icon: <SiHtml5 />,
      description: "Markup for web structure",
    },
    {
      name: "CSS",
      icon: <SiCss3 />,
      description: "Styling for web aesthetics",
    },
    { name: "Git", icon: <SiGit />, description: "Version control for code" },
    {
      name: "ImageKit",
      icon: <SiImagej />,
      description: "Image optimization and delivery",
    },
  ];

  useGSAP(() => {
    // Animate left section (slides in from left)
    gsap.fromTo(
      leftSectionRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2,
      }
    );

    // Animate right section (slides in from right)
    gsap.fromTo(
      rightSectionRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      }
    );
  }, []);

  return (
    <div className="lg:h-screen overflow-y-hidden">
      <Navbar currentPage="About" />
      <div className="flex flex-col-reverse lg:flex-row justify-center h-full lg:gap-6 mx-2 lg:mx-10 mt-22">
        <div
          ref={leftSectionRef}
          className="w-full lg:w-[40%] h-full lg:h-[85%] bg-black rounded-3xl lg:overflow-y-auto px-5 lg:px-8 py-10 text-gray-200 space-y-10 font-light shadow-2xl"
        >
            <h2 className="text-xs uppercase tracking-widest text-gray-400 font-medium text-center">
              About Me
            </h2>
          <div className="text-center space-y-3 transform transition-all duration-300 hover:scale-[1.07]">
            <h3 className="text-base md:text-xl font-bold text-white leading-tight">
              Curious Creator
            </h3>
            <p className="text-sm md:text-xs leading-relaxed max-w-sm mx-auto text-gray-300">
              I'm Krish Jain, a software engineering student passionate about
              web development. I specialize in the MERN stack, DSA, and system
              design for scalable solutions.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="border-l border-gray-500 h-5 transition-all duration-300 hover:h-7" />
          </div>

          <div className="text-center space-y-3 transform transition-all duration-300 hover:scale-[1.07]">
            <h3 className="text-base md:text-xl font-semibold text-white">
              Project Adventures
            </h3>
            <p className="text-sm md:text-xs leading-relaxed max-w-sm mx-auto text-gray-300">
              I’ve built projects from scratch, including apps and prototypes,
              using event-driven systems, AI, and tools like ImageKit for
              performance.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="border-l border-gray-500 h-5 transition-all duration-300 hover:h-7" />
          </div>

          <div className="text-center space-y-3 transform transition-all duration-300 hover:scale-[1.07]">
            <h3 className="text-base md:text-xl font-semibold text-white">
              Forever Learning
            </h3>
            <p className="text-sm md:text-xs leading-relaxed max-w-sm mx-auto text-gray-300">
              Exploring AI, emerging tech, and startup strategies to build
              impactful products.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="border-l border-gray-500 h-5 transition-all duration-300 hover:h-7" />
          </div>

          <div className="text-center space-y-3">
            <h3 className="text-base md:text-xl font-semibold text-white">
              Skills
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 max-w-sm mx-auto mb-16">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative flex flex-col items-center group"
                >
                  <div className="w-12 h-12 text-gray-300 text-xl rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-150">
                    {skill.icon}
                  </div>

                  <div className="absolute top-12 hidden group-hover:block bg-accent z-50 text-white text-xs rounded-lg px-3 py-2 w-40 text-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-medium text-black">{skill.name}</p>
                    <p className="text-[16px] text-black">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={rightSectionRef}
          className="w-full lg:w-[60%] lg:h-[100%] rounded-3xl space-y-4"
        >
          <div className="flex items-center justify-center bg-[#C2C5BA] rounded-3xl lg:h-[72%] overflow-hidden">
            <div className="w-full h-full flex items-end justify-center">
              <Image
                src="/Profile_Pic.png"
                alt="Description"
                width={700}
                height={700}
                className="object-contain"
              />
            </div>
          </div>
          <div className="h-[10%] py-4 lg:py-0 w-full bg-accent px-5 items-center justify-center font-bold text-primary rounded-3xl mb-4 lg:mb-0 hidden lg:flex">
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/krish-jain-437b07268/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin className="text-xl hover:text-primary transition-all" />
              </a>
              <a
                href="https://www.instagram.com/jain_krish_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl hover:text-primary transition-all" />
              </a>
              <a
                href="https://github.com/KrrishJain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl hover:text-primary transition-all" />
              </a>
              <a href="mailto:krishjain167@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="text-xl hover:text-primary transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default page;