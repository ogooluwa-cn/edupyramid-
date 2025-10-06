'use client';

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

type Props = {
  onNavClick?: (id: string) => void; // 👈 expect section id (without #)
};

export default function DesktopNavbar({ onNavClick }: Props) {
  const router = useRouter();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace('#', ''); // remove #
    if (onNavClick) {
      onNavClick(targetId); // 👈 pass clean id
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="hidden md:flex justify-between items-center w-full text-center">
      {/* Logo */}
      <div>
        <Image src="/icons/logo.png" alt="Logo" width={120} height={40} />
      </div>

      {/* Nav Links */}
      <div className="flex gap-12 font-bold text-black text-[15px]">
        <ul className="flex gap-12">
          {[
            { name: 'INTRO', href: '#hero' },
            { name: 'Courses', href: '#programmes' },
            { name: 'Study', href: '#study' },
            { name: 'FAQ', href: '#faq' },
            { name: 'Contact', href: '#contact' },
          ].map((link) => (
            <motion.li
              key={link.href}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="hover:text-blueColor3"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => window.location.href = 'https://edupyramidspace.com/lms'} 
          className="w-36 h-12 rounded-full border-2 border-blueColor2 text-black"
        >
          Log in
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="w-48 h-12 rounded-full bg-blueColor3 border-2 border-blueColor2 text-white flex items-center justify-center gap-2"
          onClick={() => router.push('/registration')}
        >
          Let’s Get Started
          <FaArrowRight />
        </motion.button>
      </div>
    </nav>
  );
}
