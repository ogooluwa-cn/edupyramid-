'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const RegistrationHome = () => {
  const router = useRouter();

  const handleRegistrationType = (type: string) => {
    localStorage.setItem('registrationType', type);
    router.push('/registration/step1');
  };

  return (
    <div className="min-h-screen flex flex-row md:flex-col bg-[#3D0E70]">

      {/* Left section: Image - left side on mobile, top on desktop */}
      <div className="relative w-1/2 md:w-full">
        <img
          src="/student.png"
          alt="Student"
          className="w-full object-cover h-full max-h-full md:h-72 md:rounded-t-3xl rounded-l-3xl md:rounded-none"
        />

        {/* Go Back Button */}
        <button
          className="absolute top-4 right-4 z-10 px-4 py-1 border border-white text-white rounded-full hover:bg-white hover:text-[#3D0E70] transition"
          onClick={() => router.push('/')}
        >
          Go Back To Website
        </button>
      </div>

      {/* Right section: Form */}
      <div className="w-1/2 md:w-full bg-white rounded-r-3xl md:rounded-none md:rounded-b-3xl p-6 sm:p-10 md:p-12 flex flex-col items-center text-center space-y-6">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold flex items-center gap-1">
          EDU <span className="text-green-600 text-2xl">▲</span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold">Create an account</h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Join us to launch your tech or creative career!
        </p>

        <p className="text-gray-800 font-medium text-sm sm:text-base">
          Please select your registration type
        </p>

        {/* Buttons for type selection */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button
            onClick={() => handleRegistrationType('IT/SIWES')}
            className="flex-1 px-4 py-2 border border-gray-800 rounded-full hover:bg-gray-100 transition text-sm sm:text-base"
          >
            IT/SIWES Applicant
          </button>
          <button
            onClick={() => handleRegistrationType('Regular')}
            className="flex-1 px-4 py-2 border border-gray-800 rounded-full hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Regular Applicant
          </button>
        </div>

        <button
          onClick={() => handleRegistrationType('Unspecified')}
          className="w-full py-3 bg-[#0d1117] text-white rounded-full hover:bg-black transition text-sm sm:text-base"
        >
          Proceed
        </button>

        <p className="text-sm text-gray-700">
          Already Have An Account?{' '}
          <a href="#" className="text-green-600 hover:underline">Log In</a>
        </p>
        <p className="text-xs text-gray-500">Privacy And Policy</p>
      </div>
    </div>
  );
};

export default RegistrationHome;
