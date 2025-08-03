'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
export default function RegisterStep4() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      alert('Email not found. Please start from Step 1.');
      router.push('/register/step1');
    }
  }, [router]);

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch('https://edupyramid-new-backend.onrender.com/step4', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Submission failed');
      return data;
    },
    onSuccess: () => {
      alert('Registration completed!');
      localStorage.clear();
      router.push('/Home');
    },
    onError: (err: any) => {
      alert(err.message || 'Something went wrong');
    },
  });

  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      alert('Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    mutation.mutate();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9FAFB] px-4">
            <div className="hidden lg:block w-1/2 relative">
              <Image
                src="/student3.png"
                alt="Signup Visual"
                layout="fill"
                objectFit="cover"
                className="rounded-r-[2rem]"
              />
              <div className="absolute bottom-6 left-6">
                <button className="bg-black text-white text-xs py-2 px-4 rounded-full">
                  Go back to website
                </button>
              </div>
            </div>
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-2xl shadow-md">
        <div className="mb-6 text-center">
          <h1 className="text-[28px] font-bold text-[#1E1E1E]">Create an account</h1>
          <p className="text-sm text-[#5F5F5F]">
            Join us to launch your tech or creative career!
          </p>
        </div>

        {/* Stepper */}
        <div className="flex justify-between items-center mb-8">
          {['1', '2', '3', '4'].map((step, index) => {
            const stepTitles = [
              'Personal Information',
              'Programme/Course',
              'Supervision Information',
              'Security',
            ];
            const isCurrent = index === 3;
            const isCompleted = index < 3;

            return (
              <div
                key={step}
                className={`flex flex-col items-center ${
                  isCompleted
                    ? 'text-black'
                    : isCurrent
                    ? 'text-black'
                    : 'text-[#B0B0B0]'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border ${
                    isCurrent
                      ? 'bg-black text-white border-black'
                      : isCompleted
                      ? 'border-black'
                      : 'border-[#B0B0B0]'
                  }`}
                >
                  {step}
                </div>
                <span className="text-[10px] text-center mt-1 w-20 leading-tight">
                  {stepTitles[index]}
                </span>
              </div>
            );
          })}
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={mutation.isPending}
          className={`w-full py-3 mt-6 text-sm font-semibold text-white rounded-lg ${
            mutation.isPending ? 'bg-gray-400' : 'bg-black hover:bg-[#333]'
          }`}
        >
          {mutation.isPending ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
}
