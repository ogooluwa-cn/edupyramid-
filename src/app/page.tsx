'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';

import DesktopNavbar from '@/components/DesktopNavbar';
import MobileNavbar from '@/components/MobileNavbar';
import FaqSection from '@/components/faqSection';

import Programmes from './programm/page';
import Study from './study/page';
import ContactPage from './contact/page';

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="w-full min-h-screen bg-gray-lightGray p-4 md:p-8 lg:pl-12 rounded-b-[50px]">
        {/* Navigation */}
        <div className="hidden lg:block">
          <DesktopNavbar />
        </div>
        <div className="lg:hidden">
          <MobileNavbar />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full mt-16 gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 pt-12 lg:pt-20 text-center lg:text-left">
            <h1 className="font-sans text-[32px] sm:text-[40px] lg:text-[60px] leading-tight">
              Empowering The Next<br />
              Generation Talent of<br />
              <span className="font-pacifico text-greenColor3">
                Tech & Industry
              </span>
            </h1>
            <p className="pt-4 text-base sm:text-lg lg:text-xl text-gray-700">
              Unlock your potential with specialized training and real-world skills.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-6 gap-6">
              <button
                onClick={() => router.push('/registration')}

                className="w-[230px] h-[60px] sm:h-[70px] bg-blueColor3 text-white rounded-full flex items-center justify-center gap-2"
              >
                Let's Get Started
                <FaArrowRight className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-lightGray rounded-full" />
              </button>
              <img src="/icons/connect.png" alt="Connect" className="w-40 sm:w-60" />
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src="student.png"
              alt="Student"
              className="w-full h-auto max-h-[500px] object-contain"
            />
            <button className="absolute top-[85%] left-8 w-[240px] h-16 rounded-full border-2 border-blueColor3 text-blueColor3 hidden lg:flex items-center justify-center gap-2">
              Explore courses
              <FaArrowRight className="w-8 h-8 bg-blueColor3 text-white rounded-full" />
            </button>
          </div>
        </div>
      </div>

      {/* Engagement Section */}
      <section className="text-center px-4 py-16">
        <h2 className="text-[28px] sm:text-[40px] font-poppins mb-4 leading-tight">
          Just like a regular class. Engage with real-time
        </h2>
        <h3 className="text-[24px] sm:text-[32px] md:text-[40px] font-poppins mb-12 leading-snug">
          <span className="inline-block text-orangeColor font-sfcompact border-2 border-orangeColor px-4 py-2 rounded-3xl">
            Interaction
          </span>{" "}
          and{" "}
          <span className="inline-block text-greenColor3 font-sfcompact border-2 border-greenColor3 px-4 py-2 rounded-3xl">
            Active learning
          </span>
          .
        </h3>

        {/* Decorative Icons */}
        <div className="relative mb-12 hidden md:block">
          <img src="/icons/arrow.png" alt="Arrow" className="w-12 h-12 absolute top-[-50px] left-[460px]" />
          <img src="/icons/noto.png" alt="Noto" className="w-16 h-16 absolute top-[-150px] left-[1078px]" />
        </div>

        {/* Learning Image */}
        <div className="max-w-4xl mx-auto px-4">
          <img src="student3.png" alt="Student learning" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* Other Sections */}
      <div id="programmes">
        <Programmes />
      </div>

      <div id="study">
        <Study />
      </div>

      <div id="faq">
        <FaqSection />
      </div>

      <div id="contact">
        <ContactPage />
      </div>
    </div>
  );
}