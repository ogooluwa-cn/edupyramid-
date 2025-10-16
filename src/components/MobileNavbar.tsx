'use client';

import React, { useState } from 'react';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

type Props = {
  onNavClick?: (id: string) => void; // 👈 accept clean section id
};

export default function MobileNavbar({ onNavClick }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace('#', ''); // remove #
    setIsOpen(false); // close menu
    if (onNavClick) {
      onNavClick(targetId); // 👈 trigger bounce
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="md:hidden bg-gray-lightGray px-6 py-4 relative z-50 text-center">
      <div className="flex justify-between items-center">
        <Image src="/icons/logo.png" alt="Logo" width={100} height={30} />
        <button onClick={() => setIsOpen(true)}>
          <FaBars className="text-black text-2xl" />
        </button>
      </div>

      {/* Slide-in Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full bg-gray-lightGray flex flex-col justify-between px-6 py-8 z-50"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <Image src="/icons/logo.png" alt="Logo" width={100} height={30} />
            <button onClick={() => setIsOpen(false)}>
              <FaTimes className="text-2xl text-black" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col mt-8 text-lg font-semibold text-center">
            <ul className="flex flex-col gap-6 text-center">
              {[
                { name: 'Home', href: '#hero' },
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

          {/* Footer Buttons */}
          <div className="space-y-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
               onClick={() => {
              setIsOpen(false);
              window.location.href = 'https://edupyramidspace.com/lms'; // ✅ redirect to LMS
            }}
              className="w-full rounded-full border border-black py-3 font-medium"
            >
              Log In
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-full rounded-full bg-black text-white py-3 flex items-center justify-center gap-2"
              onClick={() => {
                setIsOpen(false);
                router.push('/registration/decision'); // ✅ redirect to decision page
              }}
            >
              Let’s Get Started
              <FaArrowRight className="text-white" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
