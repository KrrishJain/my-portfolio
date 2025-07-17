'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

const Card = ({ title, description, image, link }) => {
  const imgWrapperRef = useRef(null);

  const trimText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  useEffect(() => {
    gsap.set(imgWrapperRef.current, { scale: 1.05 });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(imgWrapperRef.current, {
      scale: 1,
      duration: 1,
      ease: 'expo.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imgWrapperRef.current, {
      scale: 1.1,
      duration: 1,
      ease: 'expo.out',
    });
  };

  return (
    <div className="w-full lg:w-[45%] rounded-xl shadow-sm overflow-hidden">
      <Link href={link}>
        <div
          className="relative w-full aspect-[4/2.5] overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={imgWrapperRef}
            className="w-full h-full will-change-transform"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
        </div>
      </Link>

      <div className="p-5 bg-transparent">
        <Link href={link}>
          <h5 className="mb-2 text-base tracking-tight text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 text-xs text-[#B5B5B5]">
          {trimText(description, 80)}
        </p>
        <Link
          href={link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-black bg-accent rounded-full hover:bg-accent/80 focus:outline-none focus:ring-4 focus:ring-accent/50"
        >
          View details
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
