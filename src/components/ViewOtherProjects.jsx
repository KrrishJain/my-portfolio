// components/ViewOther.jsx
"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "@/components/Card"; // Adjust path to your Card component
import { projectDetails } from "@/data/projectDetails";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ViewOther = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    // Ensure navigation is updated after refs are assigned
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Carousel Header and Navigation */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-base md:text-xl font-medium text-white">View other projects</h2>
            <div className="flex space-x-4 z-10">
              <button
                ref={prevRef}
                className="swiper-prev text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 focus:outline-none disabled:opacity-50"
                aria-label="Previous slide"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                ref={nextRef}
                className="swiper-next text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 focus:outline-none disabled:opacity-50"
                aria-label="Next slide"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper; // Store Swiper instance
            }}
            className="mySwiper"
          >
            {projectDetails.map((project) => (
              <SwiperSlide key={project.id}>
                <Card
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={`/work/${project.id}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ViewOther;