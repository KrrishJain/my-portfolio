'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";

const ContactPage = () => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formBody = new URLSearchParams({
      "entry.839337160": formData.get("name") || "", // Name
      "entry.1045781291": formData.get("email") || "", // Email
      "entry.2005620554": formData.get("message") || "", // Message
    }).toString();

    try {
      const response = await fetch(process.env.GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Forms
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });
      e.target.reset(); // Clear the form
      alert("Form submitted! Please check the Google Form for your response.");
    } catch (error) {
      console.error("Submission failed:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="lg:h-screen overflow-y-hidden">
      <Navbar currentPage="Contact" />
      <div className="flex lg:flex-row justify-center h-full lg:gap-6 mx-2 lg:mx-10 mt-22">
        <div className="w-full lg:w-[60%] lg:h-[100%] rounded-3xl space-y-4 hidden lg:block">
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
                href="https://instagram.com"
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
              <a href="mailto:krishjain167@gmail.com">
                <FaEnvelope className="text-xl hover:text-primary transition-all" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] h-full lg:h-[85%] bg-black rounded-3xl lg:overflow-y-auto px-5 lg:px-8 py-10 text-gray-200 space-y-6 font-light shadow-2xl">
          <div>
            <h2 className="text-xl font-semibold text-white">Get in touch!</h2>
            <p className="text-sm text-[#CDCDCB]">Reply as soon as possible</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm text-[#CDCDCB]">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-[#262626] text-gray-200 border-none rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-[#CDCDCB]">
                Email id *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-[#262626] text-gray-200 border-none rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-[#CDCDCB]">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full bg-[#262626] text-gray-200 border-none rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent flex justify-center items-center gap-2 text-xs text-black rounded-2xl py-3 hover:bg-gray-600 transition-colors"
            >
              Send Message <IoMdSend />
            </button>
          </form>
        </div>
      </div>
      <div className="block lg:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;