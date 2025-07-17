// app/work/[id]/page.jsx
"use client";
import React, { useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";
import { gsap } from "gsap";
import Navbar from "@/components/Navbar";
import { projectDetails } from "@/data/projectDetails";
import Link from "next/link";
import Footer from "@/components/Footer";
import ViewOtherProjects from "@/components/ViewOtherProjects";

const ProjectPage =  () => {
  const { projectId } =  useParams();
  console.log(projectId);
  
  const project = projectDetails.find((p) => p.id === Number(projectId));

  const projectOverviewRef = useRef(null);
  const roleResponsibilityRef = useRef(null);
  const challengesRef = useRef(null);
  const keyTakeawaysRef = useRef(null);
  const navButtonRefs = useRef([]);

  const sections = [
    { id: "project-overview", label: "Project Overview", ref: projectOverviewRef },
    { id: "role-responsibility", label: "My Role and Responsibility", ref: roleResponsibilityRef },
    { id: "challenges", label: "Challenges", ref: challengesRef },
    { id: "key-takeaways", label: "Key takeaways", ref: keyTakeawaysRef },
  ];

  useEffect(() => {
    navButtonRefs.current.forEach((btn, index) => {
      if (btn) {
        const handleMouseEnter = () => {
          gsap.to(btn, { scale: 1.05, y: -2, duration: 0.3, ease: "power2.out" });
        };
        const handleMouseLeave = () => {
          gsap.to(btn, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
        };
        btn.addEventListener("mouseenter", handleMouseEnter);
        btn.addEventListener("mouseleave", handleMouseLeave);
        return () => {
          btn.removeEventListener("mouseenter", handleMouseEnter);
          btn.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section?.ref.current) {
      section.ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      gsap.fromTo(
        section.ref.current,
        { opacity: 1 },
        {
          opacity: 0.3,
          duration: 0.4,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        }
      );
    }
  };

  if (!project) return <div className="p-10 text-center">Project not found.</div>;

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="Work" />
      <div className="px-4 md:px-12 py-22">
        <div className="mb-8 md:mx-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl font-bold text-black">{project.title}</h1>
            <Link href={project.github}><FiExternalLink  className="w-6 h-6 text-[#4D4D4D]" /></Link>
          </div>
          <p className="text-[#4D4D4D] max-w-md">{project.description}</p>
        </div>

        <div className="mb-12 md:mx-4">
          <div className="relative w-full">
            <img
              src={project.image}
              className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 lg:mx-8">
          <div className="lg:col-span-3 max-w-[90%]">
            <div className="space-y-8">
              <section ref={projectOverviewRef}>
                <h2 className="text-xl font-medium mb-3">Project Overview</h2>
                <p className="text-[#4D4D4D] leading-relaxed">{project.overview}</p>
              </section>

              <section ref={roleResponsibilityRef}>
                <h2 className="text-xl font-medium mb-3">My Role and Responsibility</h2>
                <p className="text-[#4D4D4D] leading-relaxed">{project.role}</p>
              </section>

              <section ref={challengesRef}>
                <h2 className="text-xl font-medium mb-3">Challenges</h2>
                <p className="text-[#4D4D4D] leading-relaxed">{project.challenges}</p>
              </section>

              <section ref={keyTakeawaysRef}>
                <h2 className="text-xl font-medium mb-3">Key takeaways</h2>
                <p className="text-[#4D4D4D] leading-relaxed">{project.takeaways}</p>
              </section>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-10">
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    ref={(el) => (navButtonRefs.current[index] = el)}
                    onClick={() => scrollToSection(section.id)}
                    className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ease-in-out text-[#4D4D4D] hover:text-black hover:scale-105 hover:shadow-md hover:bg-gray-50 cursor-pointer"
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <ViewOtherProjects currentProjectId={project.id} />
      <Footer />
    </div>
  );
};

export default ProjectPage;
