'use client';

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DesktopNavbar() {
      const router = useRouter();
  return (
    <nav className="hidden md:flex justify-between items-center w-full  ">
      {/* Logo */}
          <div>
        <Image src="/icons/logo.png" alt="Logo" width={120} height={40} />
      </div>

      {/* Nav links */}
      <div className="flex gap-12 font-bold text-black text-[15px]">
<ul className="flex fl gap-12">
  <li>
    <a href="#hero" className="hover:text-blueColor3">INTRO</a>
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

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="w-36 h-12 rounded-full border-2 border-blueColor2 text-black">
          Log in
        </button>
        <button className="w-48 h-12 rounded-full bg-blueColor3 border-2 border-blueColor2 text-white flex items-center justify-center gap-2"
        onClick={() => router.push('/registration')}
        >
          Let’s Get Started
         
        </button>
      </div>
    </nav>
  );
}
