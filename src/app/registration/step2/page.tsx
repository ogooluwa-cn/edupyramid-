'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function RegisterStep2() {
  const router = useRouter();
  const [course, setCourse] = useState('');
  const [programme, setProgramme] = useState('');

  const handleProceed = () => {
    // Placeholder for form validation and navigation
    router.push('/registration/step3');
  };

  return (
    <main className="min-h-screen bg-[#3B0A58] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl bg-white rounded-3xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden shadow-xl">
        {/* Left: Image and Back Button */}
        <div className="relative hidden lg:block">
          <Image
            src="/student3.png"
            alt="Smiling woman waving during video call"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
          <button
            className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-full text-sm"
            onClick={() => router.push('/')}
          >
            Go back to website
          </button>
        </div>

        {/* Right: Form */}
        <div className="w-full px-6 py-10 sm:px-12 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-[#1A1A1A]">EDU
            <span className="text-green-500 ml-1">▲</span>
          </h1>
          <h2 className="text-xl font-semibold text-center mt-4">Create an account</h2>
          <p className="text-sm text-center text-gray-500 mb-6">
            Join us to launch your tech or creative career!
          </p>

          {/* Steps Indicator */}
          <div className="flex justify-center gap-4 mb-6">
            {['Personal Information', 'Programme/Course', 'Supervision Information', 'Security'].map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-xs ${index === 1 ? 'text-black' : 'text-gray-400'}`}
              >
                <div className={`w-3 h-3 mb-1 rounded-full ${index === 1 ? 'bg-black' : 'bg-gray-300'}`}></div>
                {step}
              </div>
            ))}
          </div>

          {/* Select Fields */}
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-700 mb-1 block">Course</label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="web">Web Development</option>
                <option value="design">UI/UX Design</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-700 mb-1 block">Programme</label>
              <select
                value={programme}
                onChange={(e) => setProgramme(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleProceed}
            className="mt-6 bg-black text-white w-full py-3 rounded-full text-center hover:bg-gray-900"
          >
            Proceed
          </button>
        </div>
      </div>
    </main>
  );
}
