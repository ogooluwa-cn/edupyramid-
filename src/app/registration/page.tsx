'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

const Login = () => {
  const router = useRouter();

  const handleRegistrationType = (type: string) => {
    localStorage.setItem('registrationType', type);

    if (type === 'complete') {
      router.push('/registration/login'); // 👈 direct complete applicant to login page
    } else {
      router.push('/registration/decision'); // 👈 new applicant continues flow
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f9f9f9]">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 relative h-80 lg:h-auto">
        <Image
          src="/login.png"
          alt="Signup Visual"
          fill
          className="object-cover rounded-b-[2rem] lg:rounded-r-[2rem] lg:rounded-b-none"
        />
        <div className="absolute bottom-6 left-6">
          <button
            onClick={() => router.push('/')}
            className="bg-black text-white text-xs py-2 px-4 rounded-full hover:bg-gray-800 transition"
          >
            Go back to website
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between items-center px-4 sm:px-6 py-10 bg-white overflow-y-auto text-center">
        {/* Logo */}
        <div>
          <Image 
            src="/icons/logo.png" 
            alt="EduPyramid Logo" 
            width={120}  
            height={40} 
            className="mb-6 mx-auto"
          />
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            let's get started
          </h2>
        </div>
       
        {/* Buttons for registration type */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mb-6">
          <button
            onClick={() => handleRegistrationType('complete')}
            className="flex-1 px-4 py-2 border border-gray-800 rounded-full hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Complete Applicant 
          </button>
          <button
            onClick={() => handleRegistrationType('new')}
            className="flex-1 px-4 py-2 border border-gray-800 rounded-full hover:bg-gray-100 transition text-sm sm:text-base"
          >
            New Applicant 
          </button>
        </div>

        {/* Links */}
        <div>
          <p className="text-sm text-gray-700 mb-2">
            Already Have An Account?{' '}
            <a href="/login" className="text-green-600 hover:underline">
              Log In
            </a>
          </p>
          <p className="text-xs text-gray-500">Privacy And Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
