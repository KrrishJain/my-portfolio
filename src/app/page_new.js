"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "@/components/Card";
import { projectDetails } from "@/data/projectDetails";
import { experienceDetails } from "@/data/experienceDetails";
import Footer from "@/components/Footer";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const zoomRef = useRef(null);
  const heroTextRef = useRef(null);

  useGSAP(() => {
    // Existing zoom animation for the Work section
    gsap.fromTo(
      zoomRef.current,
      { width: "90%" },
      {
        width: "100vw",
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: zoomRef.current,
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );

    // New Hero Section text animation
    const heroElements = heroTextRef.current.children;
    gsap.fromTo(
      heroElements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.3,
      }
    );
  }, []);

  return (
    <main className="relative overflow-hidden bg">
      {/* Hero Section */}
      <div
        className="w-full h-screen py-2"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div className="w-full h-full flex justify-center items-center">
          <div ref={heroTextRef} className="w-2xl space-y-3">
            <h1 className="text-xl md:text-2xl text-center text-black">
              Not Just Code, I Build Experiences
            </h1>
            <p className="md:text-base text-center text-[#4D4D4D]">
              Interactive journeys, built with intent.
            </p>
            <div className="flex flex-col md:flex-row mt-5 md:mt-0 justify-center items-center gap-4">
              <Link href="/work/1">
                <button className="bg-accent hover:bg-accent/50 cursor-pointer transition-all duration-300 px-6 font-medium py-2 rounded-full text-xs">
                  Explore Work
                </button>
              </Link>
              <Link href="/contact">
                <button className="flex items-center gap-4 bg-primary hover:bg-primary/80 cursor-pointer transition-all duration-300 px-6 font-medium py-2 rounded-full text-xs text-white">
                  Let's Connect
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Experience Section */}
      <div className="w-full px-5 md:px-[10vw] py-[5vh]">
        <div className="w-full mx-auto">
          <div className="flex flex-col md:flex-row w-full md:gap-8">
            {/* Left side - Header and description (hidden on mobile) */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-primary text-xs mb-2">Experience</h2>
              <p className="text-primary text-base md:text-xl hidden md:block">
                My journey through education, research, and professional development.
              </p>
            </div>
            
            {/* Right side - Experience items */}
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
                {experienceDetails.map((experience, index) => (
                  <div key={experience.id} className="border-b border-gray-200 pb-3 last:border-b-0">
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between items-center gap-2">
                        <h3 className="text-primary text-sm font-medium flex-1">
                          {experience.title}
                        </h3>
                        <span className="text-sm text-text px-2 py-1 bg-accent rounded-full whitespace-nowrap">
                          {experience.type}
                        </span>
                      </div>
                      <p className="text-primary text-lg">
                        {experience.organization}
                      </p>
                      <span className="text-text">
                        {experience.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Work Section */}
      <div className="flex justify-center items-center">
        <div
          ref={zoomRef}
          className="bg-primary rounded-3xl px-5 md:px-[10vw] py-[10vh]"
          style={{ width: "90%" }}
        >
          <h2 className="text-white text-xs">Work</h2>
          <p className="text-white text-[28px] md:text-[32px] w-full md:max-w-lg mt-5">
            Experience with a variety of Projects and industries.
          </p>
          <div className="flex justify-start gap-[5%] space-y-10 flex-wrap mt-10">
            {projectDetails.map((project) => (
              <Card key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Resume Download Section */}
      <div className="w-full min-h-[60vh] mt-10 flex justify-center items-center">
        <div className="w-2xl space-y-2 text-center">
          <h1 className="text-[30px] md:text-[40px] text-center text-black">
            Want to know more about my journey?
          </h1>
          <p className="md:text-base text-center text-[#4D4D4D]">
            Download my resume to explore my complete professional experience and skills.
          </p>
          <div className="flex mt-5 justify-center items-center gap-4">
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Krrish_Jain_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="bg-accent hover:bg-accent/50 cursor-pointer transition-all duration-300 px-6 font-medium py-2 rounded-full text-xs"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
