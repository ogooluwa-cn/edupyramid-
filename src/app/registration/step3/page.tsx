'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import RegisterImage from '@/components/heroImage';

export default function RegisterStep3() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [supervisorName, setSupervisorName] = useState('');
  const [supervisorPhone, setSupervisorPhone] = useState('');

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
      const res = await fetch('https://edupyramid-backend.onrender.com/step3', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          institution,
          supervisorName,
          supervisorPhone,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Submission failed');
      return data;
    },
    onSuccess: () => {
      localStorage.setItem(
        'supervisionInfo',
        JSON.stringify({ institution, supervisorName, supervisorPhone })
      );
      router.push('/register/step4');
    },
    onError: (error: any) => {
      alert(error.message || 'Something went wrong');
    },
  });

  const handleProceed = () => {
    if (!institution || !supervisorName || !supervisorPhone) {
      alert('Please fill all fields');
      return;
    }

    mutation.mutate();
  };

  return (
       <div className="flex flex-col lg:flex-row h-screen w-full">
      <RegisterImage/>
      <div className="w-full lg:w-1/2 flex justify-center items-center px-6 py-10 bg-white overflow-y-auto">
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-2xl shadow-md">
        <div className="mb-6 text-center">
          <h1 className="text-[28px] font-bold text-[#1E1E1E]">
            Create an account
          </h1>
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
            const isCurrent = index === 2;
            const isCompleted = index < 2;

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

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Institution"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            placeholder="Name of supervisor"
            value={supervisorName}
            onChange={(e) => setSupervisorName(e.target.value)}
            className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="tel"
            placeholder="Supervisor’s phone number"
            value={supervisorPhone}
            onChange={(e) => setSupervisorPhone(e.target.value)}
            className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          onClick={handleProceed}
          disabled={mutation.isPending}
          className={`w-full py-3 mt-6 text-sm font-semibold text-white rounded-lg ${
            mutation.isPending ? 'bg-gray-400' : 'bg-black hover:bg-[#333]'
          }`}
        >
          {mutation.isPending ? 'Submitting...' : 'Proceed'}
        </button>
      </div>
      </div>
    </div>
  );
}
