// components/RegisterFormContent.tsx
'use client';

import React, { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import countries from 'world-countries';
import { useMutation } from '@tanstack/react-query';

export default function RegisterFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const [surname, setSurname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find(c => c.name.common === e.target.value);
    setSelectedCountry(e.target.value);
    const code = country?.idd?.root + (country?.idd?.suffixes?.[0] || '');
    setCountryCode(code || '');
  };

  const signUpMutation = useMutation({
    mutationFn: async () => {
      const username = `${surname}_${firstName}_${middleName}`.trim();

      const res = await fetch('http://localhost:3037/createAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'your-api-key', // hide this in env var later
        },
        body: JSON.stringify({
          email,
          username,
          phoneNumber: countryCode + phoneNumber,
          type,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Sign up failed');
      }

      return res.json();
    },
    onSuccess: (data) => {
      router.push(`/registration/step2?userId=${data.id}`);
    },
    onError: (error: Error) => {
      alert(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!surname || !firstName || !email || !selectedCountry || !phoneNumber) {
      alert('Please fill in all required fields');
      return;
    }

    signUpMutation.mutate();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <h2 className="text-center text-2xl font-bold mb-2 text-gray-900">EDU</h2>
      <p className="text-center text-md text-gray-700 font-semibold mb-1">
        Create an account {type ? `as ${type} applicant` : ''}
      </p>
      <p className="text-center text-sm text-gray-500 mb-4">
        Join us to launch your tech or creative career!
      </p>

      <div className="flex justify-between items-center mb-6">
        {['Personal Information', 'Programme/Course', 'Supervision Information', 'Security'].map((label, index) => (
          <div key={label} className="text-center flex flex-col items-center text-xs">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 ${
              index === 0 ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {index + 1}
            </div>
            <span className="text-[10px] text-gray-600">{label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <input placeholder="Surname" value={surname} onChange={e => setSurname(e.target.value)} className="border rounded-full px-4 py-2 text-sm col-span-1" />
        <input placeholder="Firstname" value={firstName} onChange={e => setFirstName(e.target.value)} className="border rounded-full px-4 py-2 text-sm col-span-1" />
      </div>

      <input placeholder="Middlename" value={middleName} onChange={e => setMiddleName(e.target.value)} className="w-full mb-3 border rounded-full px-4 py-2 text-sm" />

      <select value={selectedCountry} onChange={handleCountryChange} className="w-full mb-3 border rounded-full px-4 py-2 text-sm text-gray-600">
        <option value="">Select Country</option>
        {countries.map(country => (
          <option key={country.cca2} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>

      <div className="flex gap-2 mb-3">
        <input placeholder="+Code" value={countryCode} readOnly className="border rounded-full px-4 py-2 text-sm w-1/3" />
        <input placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="border rounded-full px-4 py-2 text-sm w-2/3" />
      </div>

      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full mb-3 border rounded-full px-4 py-2 text-sm" />

      <button type="submit" className="w-full bg-black text-white py-3 rounded-full text-sm font-medium">
        Proceed
      </button>

      <div className="flex justify-between items-center mt-6 text-xs text-gray-500">
        <div>
          Already have an account?{' '}
          <a href="#" className="text-green-600 hover:underline">
            Log In
          </a>
        </div>
        <a href="#" className="hover:underline">Privacy And Policy</a>
      </div>
    </form>
  );
}
