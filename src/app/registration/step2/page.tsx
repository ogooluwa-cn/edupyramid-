'use client';
import RegisterImage from '@/components/heroImage';
import React, { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

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
        'https://edupyramid-backend.onrender.com/step2',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            otp: otpCode,
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
        router.push('/register/step4');
      } else {
        router.push('/register/step3');
      }
    },
  });

  const handleSubmit = () => {
    if (!email || !otpCode || !course || !programme) {
      alert('Please fill in all fields');
      return;
    }
    mutation.mutate();
  };

  return (
       <div className="flex flex-col lg:flex-row h-screen w-full">
      <RegisterImage/>
      <div className="w-full lg:w-1/2 flex justify-center items-center px-6 py-10 bg-white overflow-y-auto">

      <h1 className="text-2xl font-bold mb-2 text-center">Create an account</h1>
      <p className="text-center text-gray-600 mb-6">
        Join us to launch your tech or creative career!
      </p>

      <div className="flex justify-between items-center mb-8">
        {['Personal Info', 'Programme', 'Supervision', 'Security'].map((label, index) => (
          <div key={label} className="flex flex-col items-center text-center text-[10px] sm:text-xs">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 font-medium ${index === 0 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'
                }`}
            >
              {index + 1}
            </div>
            <span className="text-gray-500">{label}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={email}
            disabled
            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Course</label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select</option>
            {courseTitles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Programme</label>
          <select
            value={programme}
            onChange={(e) => setProgramme(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select</option>
            {programmeOptions.map((prog, index) => (
              <option key={index} value={prog}>
                {prog}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">OTP Code</label>
          <input
            type="text"
            value={otpCode}
            onChange={(e) => setOtpCode(e.target.value)}
            placeholder="Enter OTP code"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? 'Verifying...' : 'Proceed'}
        </button>
      </div>
      </div>
    </div>
  );
}
