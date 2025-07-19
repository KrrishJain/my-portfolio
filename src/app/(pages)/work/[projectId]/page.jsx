"use client";

import React, { useRef } from "react";
import { useParams } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import { projectDetails } from "@/data/projectDetails";
import Link from "next/link";
import Footer from "@/components/Footer";
import ViewOtherProjects from "@/components/ViewOtherProjects";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projectDetails.find((p) => p.id === Number(projectId));

  const projectOverviewRef = useRef(null);
  const roleResponsibilityRef = useRef(null);
  const techStackRef = useRef(null);
  const challengesRef = useRef(null);
  const keyTakeawaysRef = useRef(null);
  const navButtonRefs = useRef([]);
  const headerRef = useRef(null);
  const imageRef = useRef(null);

  const sections = [
    { id: "project-overview", label: "Project Overview", ref: projectOverviewRef },
    { id: "role-responsibility", label: "My Role and Responsibility", ref: roleResponsibilityRef },
    { id: "tech-stack", label: "Tech Stack", ref: techStackRef },
    { id: "challenges", label: "Challenges", ref: challengesRef },
    { id: "key-takeaways", label: "Key Takeaways", ref: keyTakeawaysRef },
  ];

  useGSAP(() => {
    // Animate header (title, description, and GitHub link)
    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.2,
      }
    );

    // Animate image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      }
    );

    // Animate content sections (slide in from left)
    const contentSections = [
      projectOverviewRef.current,
      roleResponsibilityRef.current,
      techStackRef.current,
      challengesRef.current,
      keyTakeawaysRef.current,
    ];
    gsap.fromTo(
      contentSections,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        delay: 0.6,
      }
    );

    // Animate navigation buttons (fade in)
    gsap.fromTo(
      navButtonRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.8,
      }
    );
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
        <div ref={headerRef} className="mb-8 md:mx-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl font-bold text-black">{project.title}</h1>
            <Link href={project.github}>
              <FiExternalLink className="w-6 h-6 text-[#4D4D4D]" />
            </Link>
          </div>
          <p className="text-[#4D4D4D] max-w-md">{project.description}</p>
        </div>

        <div ref={imageRef} className="mb-12 md:mx-4">
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

              <section ref={techStackRef}>
                <h2 className="text-xl font-medium mb-3">Tech Stack</h2>
                <p className="text-[#4D4D4D] leading-relaxed">{project.tech}</p>
              </section>

              <section ref={challengesRef}>
                <h2 className="text-xl font-medium mb-3">Challenges</h2>
                <p className="text-[#4D4D4D] leading-relaxed">{project.challenges}</p>
              </section>

              <section ref={keyTakeawaysRef}>
                <h2 className="text-xl font-medium mb-3">Key Takeaways</h2>
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