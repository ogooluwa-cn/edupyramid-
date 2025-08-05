'use client';

import React, { useState } from 'react';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
      const router = useRouter();
  return (
    <nav className="md:hidden bg-gray-lightGray px-6 py-4 relative z-50">
      <div className="flex justify-between items-center">
        <Image src="/icons/logo.png" alt="Logo" width={100} height={30} />
        <button onClick={() => setIsOpen(true)}>
          <FaBars className="text-black text-2xl" />
        </button>
      </div>

      {/* Slide-in Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-lightGray flex flex-col justify-between px-6 py-8 z-50">
          {/* Header */}
          <div className="flex justify-between items-center">
            <Image src="/icons/logo.png" alt="Logo" width={100} height={30} />
            <button onClick={() => setIsOpen(false)}>
              <FaTimes className="text-2xl text-black" />
            </button>
          </div>

          {/* Navigation Links */}
                    <div className="flex flex-col items-start space-y-6 mt-8 text-lg font-semibold">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#hero" className="hover:text-blueColor3">Home</a>
            </li>
            <li>
              <a href="#programmes" className="hover:text-blueColor3">Courses</a>
            </li>
            <li>
              <a href="#study" className="hover:text-blueColor3">Study</a>
            </li>
            <li>
              <a href="#faq" className="hover:text-blueColor3">FAQ</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blueColor3">Contact</a>
            </li>
          </ul>

          </div>

          {/* Footer Buttons */}
          <div className="space-y-4">
            <button className="w-full rounded-full border border-black py-3 font-medium">
              Log In
            </button>
            <button className="w-full rounded-full bg-black text-white py-3 flex items-center justify-center gap-2"
             onClick={() => router.push('/registration')}
            >
              Let’s Get Started
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
