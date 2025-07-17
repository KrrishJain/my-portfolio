"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "@/components/Card";
import { projectDetails } from "@/data/projectDetails";
import Footer from "@/components/Footer";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const zoomRef = useRef(null);

  useGSAP(() => {
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
  }, []);

  return (
    <main className="relative overflow-hidden">
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
          <div className="w-2xl space-y-3">
            <h1 className="text-xl md:text-2xl text-center text-black">
              Not Just Code, I Build Experiences
            </h1>
            <p className="md:text-base text-center text-[#4D4D4D] ">
              Interactive journeys, built with intent.
            </p>
            <div className="flex flex-col md:flex-row mt-5 md:mt-0 justify-center items-center gap-4">
              <Link href="/work/1">
                <button className="bg-accent hover:bg-accent/50 cursor-pointer transition-all duration-300 px-6 font-medium py-2 rounded-full text-xs">
                  Explore Work
                </button>
              </Link>
              <Link href="/contact">
                <button className="flex items-center gap-4 bg-primary hover:bg-primary/80 cursor-pointer transition-all duration-300   px-6 font-medium py-2 rounded-full text-xs text-white">
                  Let's Connect
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Animated Section */}
      <div className="flex justify-center items-center">
        <div
          ref={zoomRef}
          className="bg-primary rounded-3xl px-5 md:px-[10vw] py-[10vh]"
          style={{ width: "90%" }}
        >
          <h2 className="text-white text-xs">Work</h2>
          <p className="text-white text-[28px] md:text-[32px] w-full md:max-w-lg mt-5 font-">
            Experience with a variety of Projects and industries.
          </p>
          <div className="flex justify-start gap-[5%] space-y-10 flex-wrap mt-10">
            {projectDetails.map((project) => (
              <Card key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full min-h-[60vh] mt-10 flex justify-center items-center">
        <div className="w-2xl space-y-2 text-center">
          <h1 className="text-[30px] md:text-[40px] text-center text-black">
            Ready to start something impactful?
          </h1>
          <p className="md:text-base text-center text-[#4D4D4D]">
            Let’s collaborate and create engaging digital experiences.
          </p>
          <div className="flex mt-5  justify-center items-center gap-4">
            <button className="bg-accent hover:bg-accent/50 cursor-pointer transition-all duration-300 px-6 font-medium py-2 rounded-full text-xs">
              See My Work in Action
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
