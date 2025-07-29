'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

export default function RegisterStep3Client() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    if (type === 'Regular') {
      setIsAllowed(true);
    } else {
      router.push('/registration/form');
    }
  }, [type, router]);

  if (isAllowed === null) return null;

  const [institution, setInstitution] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [supervisorPhone, setSupervisorPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/registration/step4');
  };

  return (
    <div className="flex h-screen w-full">
      <div className="w-1/2 hidden lg:block relative">
        <Image
          src="/student3.png"
          alt="Person waving"
          layout="fill"
          objectFit="cover"
          className="rounded-r-[2rem]"
        />
        <div className="absolute bottom-6 left-6">
          <button
            className="bg-black text-white text-xs py-2 px-4 rounded-full"
            onClick={() => router.push('/')}
          >
            Go back to website
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center bg-white px-6">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h2 className="text-center text-2xl font-bold mb-2 text-gray-900">EDU</h2>
          <p className="text-center text-md text-gray-700 font-semibold mb-1">Create an account</p>
          <p className="text-center text-sm text-gray-500 mb-4">
            Join us to launch your tech or creative career!
          </p>

          <div className="flex justify-between items-center mb-6">
            {['Personal Information', 'Programme/Course', 'Supervision Information', 'Security'].map((label, index) => (
              <div key={label} className="text-center flex flex-col items-center text-xs">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 ${
                    index === 2 ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index + 1}
                </div>
                <span className="text-[10px] text-gray-600">{label}</span>
              </div>
            ))}
          </div>

          <input
            placeholder="Name of Institution"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            className="w-full mb-3 border rounded-full px-4 py-2 text-sm"
          />
          <input
            placeholder="Name of Supervisor"
            value={supervisor}
            onChange={(e) => setSupervisor(e.target.value)}
            className="w-full mb-3 border rounded-full px-4 py-2 text-sm"
          />
          <input
            placeholder="Supervisor's Phone Number"
            value={supervisorPhone}
            onChange={(e) => setSupervisorPhone(e.target.value)}
            className="w-full mb-6 border rounded-full px-4 py-2 text-sm"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full text-sm font-medium"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}
