'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react"


const ContactPage = () => {
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const formRef = useRef(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-hide status messages after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000); // Hide after 5 seconds

      return () => clearTimeout(timer); // Cleanup timer on component unmount or status change
    }
  }, [submitStatus]);

  useGSAP(() => {
    // Animate left section (form, slides in from left)
    gsap.fromTo(
      leftSectionRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      }
    );

    // Animate right section (image and social links, slides in from right)
    gsap.fromTo(
      rightSectionRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      }
    );

    // Animate form elements (fade in and slide up sequentially)
    const formElements = formRef.current.children;
    gsap.fromTo(
      formElements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.6,
      }
    );
  }, []);

  return (
    <div className="lg:h-screen overflow-y-hidden">
      <Navbar currentPage="Contact" />
      <div className="flex flex-col-reverse lg:flex-row justify-center h-full lg:gap-6 mx-2 lg:mx-10 mt-22">
        <div
          ref={rightSectionRef}
          className="w-full lg:w-[60%] lg:h-[100%] rounded-3xl space-y-4 hidden lg:block"
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
        <div
          ref={leftSectionRef}
          className="w-full lg:w-[40%] h-full lg:h-[85%] bg-black rounded-3xl lg:overflow-y-auto px-5 lg:px-8 py-10 text-gray-200 space-y-6 font-light shadow-2xl"
        >
          <div ref={formRef} className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-white">Get in touch!</h2>
              <p className="text-sm text-[#CDCDCB]">Reply as soon as possible</p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <div className="bg-green-600 text-white p-3 rounded-lg text-sm">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-600 text-white p-3 rounded-lg text-sm">
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}
              <div>
                <label htmlFor="name" className="text-sm text-[#CDCDCB]">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-[#262626] text-gray-200 border-none rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 disabled:opacity-50"
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
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-[#262626] text-gray-200 border-none rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-[#CDCDCB]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  disabled={isSubmitting}
                  className="w-full bg-[#262626] text-gray-200 border-none rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent flex justify-center items-center gap-2 text-xs text-black rounded-2xl py-3 hover:bg-accent/60 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <IoMdSend />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
