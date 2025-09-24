'use client';

import React, { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const courseTitles = [
  'UI/UX Design',
  'Database Management',
  'Front-End Engineering',
  'Screenwriting',
  'Graphic Design',
  'Generative AI Tools',
  'Desktop Publishing',
  'Virtual Assistant',
];

const programmeOptions = ['IT', 'SIWES', 'Regular'];

export default function RegisterStep2Form() {
  const [email, setEmail] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [course, setCourse] = useState('');
  const [programme, setProgramme] = useState('');

  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(
        'https://backend-code-3-3qwp.onrender.com/step2',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            otpCode,
            course,
            programme,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || 'OTP verification failed');
      }

      localStorage.setItem('userProgramme', programme);
      localStorage.setItem('userCourse', course);

      if (programme === 'Regular') {
        router.push('/registration/step4');
      } else {
        router.push('/registration/step3');
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !otpCode || !course || !programme) {
      alert('Please fill in all fields');
      return;
    }
    mutation.mutate();
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* Image Section (mobile + desktop) */}
      <div className="w-full lg:w-1/2 relative h-80 lg:h-auto">
        <Image
          src="/student3.png"
          alt="Signup Visual"
          fill
          className="object-cover rounded-b-[2rem] lg:rounded-r-[2rem] lg:rounded-b-none"
        />
        <div className="absolute bottom-6 left-6">
          <button className="bg-black text-white text-xs py-2 px-4 rounded-full">
            Go back to website
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center px-4 sm:px-6 py-10 bg-white overflow-y-auto">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md sm:max-w-lg bg-white shadow-lg rounded-2xl px-6 sm:px-8 py-10"
        >
          {/* Header */}    
          <Image 
            src="/icons/logo.png" 
            alt="EduPyramid Logo" 
            width={120}  
            height={40} 
            className="mb-6 mx-auto"
          />

          <p className="text-center text-base font-medium text-gray-700 mb-1">
            Programme & Course Selection
          </p>
          <p className="text-center text-sm text-gray-500 mb-6">
            Join us to launch your tech or creative career!
          </p>

          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-8">
            {['Personal Info', 'Programme', 'Supervision', 'Security'].map(
              (label, i) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center text-[10px] sm:text-xs"
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 font-medium ${
                      i === 1
                        ? 'bg-black text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span className="text-gray-500">{label}</span>
                </div>
              )
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full p-2 border border-gray-300 rounded-full bg-gray-100 text-sm"
            />
          </div>

          {/* Course */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Course</label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-full text-sm bg-gray-100"
            >
              <option value="">Select</option>
              {courseTitles.map((title, index) => (
                <option key={index} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>

          {/* Programme */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Programme</label>
            <select
              value={programme}
              onChange={(e) => setProgramme(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-full text-sm bg-gray-100"
            >
              <option value="">Select</option>
              {programmeOptions.map((prog, index) => (
                <option key={index} value={prog}>
                  {prog}
                </option>
              ))}
            </select>
          </div>

          {/* OTP */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">OTP Code</label>
            <input
              type="text"
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value)}
              placeholder="Enter OTP code"
              className="w-full p-2 border border-gray-300 rounded-full text-sm bg-gray-100"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`w-full py-3 rounded-full text-sm font-semibold transition ${
              mutation.isPending
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-black text-white hover:bg-gray-900'
            }`}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'Verifying...' : 'Proceed'}
          </button>
        </form>
      </div>
    </div>
  );
}
