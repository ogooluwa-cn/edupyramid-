'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import DesktopNavbar from '@/components/DesktopNavbar';
import MobileNavbar from '@/components/MobileNavbar';
import FaqSection from '@/components/faqSection';
import Footer from '@/components/footer';
import Programmes from './programm/page';
import Study from './study/page';
import ContactPage from './contact/page';

export default function Home() {
  const router = useRouter();
  const [isBouncing, setIsBouncing] = useState(false);

 const handleNavClick = (id: string) => {
  setIsBouncing(true);

  setTimeout(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsBouncing(false);
  }, 400); // wait for bounce before scrolling
};


  return (
    
    <motion.div
      className="bg-gray-50"
      animate={isBouncing ? { scale: [1, 1.05, 0.95, 1] } : {}}
      transition={{ duration: 0.4 }}
    >
      {/* Header / Hero Section */}
      <div className="w-full min-h-screen bg-gray-lightGray p-4 md:p-8 lg:pl-12 rounded-b-[50px]">
        {/* Navigation */}
        <div className="hidden lg:block">
          <DesktopNavbar onNavClick={handleNavClick} />
        </div>
        <div className="lg:hidden">
          <MobileNavbar onNavClick={handleNavClick} />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full mt-16 gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 pt-12 lg:pt-20 text-center lg:text-left">
            <h1 className="font-sans text-[32px] sm:text-[40px] lg:text-[60px] leading-tight">
              Empowering The Next <br /> Generation Talent of <br />
              <span className="font-pacifico text-greenColor3">Tech & Industry</span>
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
                Let&apos;s Get Started
                <img
                  src="/icons/arrow-right-white.png"
                  alt="Arrow Right"
                  className="w-6 h-6"
                />
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
            <button className="absolute top-[85%] left-8 w-[240px] h-16 rounded-full border-2 border-blueColor3 text-blueColor3 hidden lg:flex items-center justify-center gap-2"
                 onClick={() => router.push('/courses')}
                 >
              Explore courses
              <img
                src="/icons/arrow-up-dark.png"
                alt="Arrow Up"
                className="w-12 h-12"
              />
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
          </span>{' '}
          and{' '}
          <span className="inline-block text-greenColor3 font-sfcompact border-2 border-greenColor3 px-4 py-2 rounded-3xl">
            Active learning
          </span>
          .
        </h3>

        {/* Learning Image */}
        <div className="max-w-4xl mx-auto px-4">
          <img
            src="student3.png"
            alt="Student learning"
            className="w-full h-auto object-cover"
          />
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

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
