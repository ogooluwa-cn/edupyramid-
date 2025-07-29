'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DecisionForm() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

const handleProceed = () => {
  if (selected) {
    console.log("Navigating to: ", `/registration/form?type=${selected}`);
    router.push(`/registration/form?type=${selected}`);
  }
};


  return (
    <>
      <h2 className="text-center text-2xl font-bold mb-1 text-gray-900 tracking-tight">EDU</h2>
      <p className="text-center text-md text-gray-700 mb-1 font-semibold">Create an account</p>
      <p className="text-sm text-center text-gray-500 mb-6">
        Join us to launch your tech or creative career!
      </p>

      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 border rounded-full text-sm transition ${
            selected === 'IT'
              ? 'border-gray-900 bg-gray-100 font-medium'
              : 'border-gray-300 text-gray-600'
          }`}
          onClick={() => setSelected('IT')}
        >
          IT/SIWES Applicant
        </button>
        <button
          className={`px-4 py-2 border rounded-full text-sm transition ${
            selected === 'Regular'
              ? 'border-gray-900 bg-gray-100 font-medium'
              : 'border-gray-300 text-gray-600'
          }`}
          onClick={() => setSelected('Regular')}
        >
          Regular Applicant
        </button>
      </div>

      <button
        disabled={!selected}
        onClick={handleProceed}
        className="w-full bg-gray-900 text-white py-3 rounded-full text-sm font-medium disabled:opacity-50"
      >
        Proceed
      </button>

      <div className="flex justify-between items-center mt-6 text-xs text-gray-500">
        <div>
          Already have an account?{' '}
          <a href="#" className="text-green-600 hover:underline">
            Log in
          </a>
        </div>
        <a href="#" className="hover:underline">
          Privacy and Policy
        </a>
      </div>
    </>
  );
}
