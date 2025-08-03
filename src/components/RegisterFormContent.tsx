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

      const res = await fetch('https://edupyramid-new-backend.onrender.com/createAccount', {
        method: 'POST',
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
      localStorage.setItem('email', email); // Save email
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
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md sm:max-w-lg bg-white shadow-lg rounded-2xl px-6 sm:px-8 py-10"
    >
      <h2 className="text-3xl font-bold text-center text-black mb-2 tracking-tight">EDU</h2>
      <p className="text-center text-base font-medium text-gray-700 mb-1">
        Create an account {type ? `as ${type} applicant` : ''}
      </p>
      <p className="text-center text-sm text-gray-500 mb-6">
        Join us to launch your tech or creative career!
      </p>

      {/* Stepper */}
      <div className="flex justify-between items-center mb-8">
        {['Personal Info', 'Programme', 'Supervision', 'Security'].map((label, index) => (
          <div key={label} className="flex flex-col items-center text-center text-[10px] sm:text-xs">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 font-medium ${
                index === 0 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'
              }`}
            >
              {index + 1}
            </div>
            <span className="text-gray-500">{label}</span>
          </div>
        ))}
      </div>

      {/* Fields */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <input
          placeholder="Surname"
          value={surname}
          onChange={e => setSurname(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none w-full"
        />
        <input
          placeholder="Firstname"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none w-full"
        />
      </div>

      <input
        placeholder="Middlename"
        value={middleName}
        onChange={e => setMiddleName(e.target.value)}
        className="w-full mb-3 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
      />

      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="w-full mb-3 border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-600 focus:outline-none"
      >
        <option value="">Select Country</option>
        {countries.map(country => (
          <option key={country.cca2} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>

      <div className="flex gap-2 mb-3">
        <input
          placeholder="+Code"
          value={countryCode}
          readOnly
          className="border border-gray-300 rounded-full px-4 py-2 text-sm w-1/3 focus:outline-none bg-gray-100"
        />
        <input
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 text-sm w-2/3 focus:outline-none"
        />
      </div>

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full mb-4 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-full text-sm font-semibold hover:bg-gray-900 transition"
      >
        Proceed
      </button>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-xs text-gray-500 gap-2">
        <p>
          Already have an account?{' '}
          <a href="#" className="text-green-600 hover:underline">Log In</a>
        </p>
        <a href="#" className="hover:underline">Privacy and Policy</a>
      </div>
    </form>
  );
}
