'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import RegisterImage from '@/components/heroImage'; 
import Image from 'next/image';

export default function RegisterStep3Form() {
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [supervisorName, setSupervisorName] = useState('');
  const [supervisorPhone, setSupervisorPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !institution || !supervisorName || !supervisorPhone) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://backend-code-3-3qwp.onrender.com/step3', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          institutionName: institution,
          supervisorName,
          supervisorPhone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || 'Submission failed');
      }

      router.push('/registration/step4');
    } catch (error: any) {
      alert(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* Image Section (mobile + desktop) */}
      <div className="w-full lg:w-1/2 relative h-80 lg:h-auto">
        <Image
          src="/login.png"
          alt="Signup Visual"
          fill
          className="object-cover rounded-b-[2rem] lg:rounded-r-[2rem] lg:rounded-b-none"
        />
        <div className="absolute bottom-6 left-6">
          <button className="bg-black text-white text-xs py-2 px-4 rounded-full" onClick={() => window.location.href = '/#hero'}>
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
               <Image 
                      src="/icons/logo.png" 
                      alt="EduPyramid Logo" 
                      width={120}  
                      height={40} 
                      className="mb-6 mx-auto"
                    />
          <h2 className="text-3xl font-bold text-center text-black mb-2">Supervision Info</h2>
          <p className="text-center text-gray-600 mb-6">
            Help us identify your institution and supervisor.
          </p>

          <div className="flex justify-between items-center mb-8">
            {['Personal Info', 'Programme', 'Supervision', 'Security'].map((label, index) => (
              <div key={label} className="flex flex-col items-center text-center text-[10px] sm:text-xs">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 font-medium ${index === 2 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {index + 1}
                </div>
                <span className="text-gray-500">{label}</span>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full p-2 border border-gray-300 rounded-full bg-gray-100 text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Institution Name</label>
            <input
              type="text"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-full text-sm"
              placeholder="Enter your institution"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Supervisor Name</label>
            <input
              type="text"
              value={supervisorName}
              onChange={(e) => setSupervisorName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-full text-sm"
              placeholder="Enter supervisor’s full name"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium">Supervisor Phone</label>
            <input
              type="tel"
              value={supervisorPhone}
              onChange={(e) => setSupervisorPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-full text-sm"
              placeholder="e.g. 08012345678"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-full text-sm font-semibold transition ${
              loading ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-black text-white hover:bg-gray-900'
            }`}
          >
            {loading ? 'Submitting...' : 'Proceed'}
          </button>
        </form>
      </div>
    </div>
  );
}