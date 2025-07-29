'use client';

import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface CourseModalProps {
  course: {
    title: string;
    description: string;
  };
  onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center px-4">
      <div className="bg-gradient-to-br from-[#0b1c10] to-[#0b1c1a] rounded-[30px] p-8 w-full max-w-5xl relative text-white">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-xl hover:text-gray-300"
        >
          <FaTimes size={24} />
        </button>

        <h2 className="text-3xl font-bold text-center mb-2">{course.title}</h2>
        <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
          {course.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* SIWES Plan */}
          <div className="bg-black/30 border border-white/20 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold mb-1">SIWES</h3>
            <p className="text-sm text-gray-400 mb-2">4 Months</p>
            <p className="text-2xl font-bold mb-4">₦25,999</p>
            <ul className="text-left text-sm space-y-2 text-green-400 mb-4">
              <li>✔️ Design Thinking and user needs analysis</li>
              <li>✔️ Basic Figma for wireframing</li>
              <li>✔️ Mini-project: Mobile app wireframe</li>
            </ul>
            <button className="bg-white text-black font-medium rounded-full px-4 py-2 text-sm">Enroll Now</button>
          </div>

          {/* IT Plan */}
          <div className="bg-black/30 border border-white/20 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold mb-1">IT</h3>
            <p className="text-sm text-gray-400 mb-2">10 Months</p>
            <p className="text-2xl font-bold mb-4">₦59,999</p>
            <ul className="text-left text-sm space-y-2 text-green-400 mb-4">
              <li>✔️ All SIWES features</li>
              <li>✔️ Research, personas, architecture</li>
              <li>✔️ High-fidelity UI & accessibility</li>
              <li>✔️ Responsive design + Portfolio</li>
            </ul>
            <button className="bg-white text-black font-medium rounded-full px-4 py-2 text-sm">Enroll Now</button>
          </div>

          {/* Regular Plan */}
          <div className="bg-black/30 border border-white/20 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold mb-1">REGULAR</h3>
            <p className="text-sm text-gray-400 mb-2">12 Months</p>
            <p className="text-2xl font-bold mb-4">₦169,999</p>
            <ul className="text-left text-sm space-y-2 text-green-400 mb-4">
              <li>✔️ All IT features</li>
              <li>✔️ Real-world briefs</li>
              <li>✔️ Mentorship + job readiness</li>
              <li>✔️ Portfolio creation + review</li>
            </ul>
            <button className="bg-white text-black font-medium rounded-full px-4 py-2 text-sm">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
