'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import RegisterImage from '@/components/heroImage';

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

  const handleSubmit = async () => {
    if (!email || !institution || !supervisorName || !supervisorPhone) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://edupyramid-backend.onrender.com/step3', {
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
    <div className="flex flex-col lg:flex-row h-screen w-full">
      <RegisterImage />

      <div className="h-1/2 md:h-screen w-full md:w-1/2 bg-white rounded-b-3xl md:rounded-none md:rounded-r-3xl p-6 sm:p-10 md:p-12 flex flex-col items-center text-center space-y-6">

        <h1 className="text-2xl font-bold mb-2">Supervision Info</h1>
        <p className="text-gray-600">Help us identify your institution and supervisor.</p>

        <div className="flex justify-between items-center mb-6">
          {['Personal Info', 'Programme', 'Supervision', 'Security'].map((label, index) => (
            <div key={label} className="flex flex-col items-center text-xs">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 font-medium ${
                  index === 2 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index + 1}
              </div>
              <span className="text-gray-500">{label}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4 w-full max-w-md text-left">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Institution Name</label>
            <input
              type="text"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your institution"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Supervisor Name</label>
            <input
              type="text"
              value={supervisorName}
              onChange={(e) => setSupervisorName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter supervisor’s full name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Supervisor Phone</label>
            <input
              type="tel"
              value={supervisorPhone}
              onChange={(e) => setSupervisorPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g. 08012345678"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full py-3 rounded-md text-white font-semibold ${
              loading ? 'bg-gray-500' : 'bg-black hover:bg-gray-800'
            }`}
          >
            {loading ? 'Submitting...' : 'Proceed'}
          </button>
        </div>
      </div>
    </div>
  );
}
