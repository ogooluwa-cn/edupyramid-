'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import countries from 'world-countries';
import Image from 'next/image';

export default function RegisterFormContent() {
  const router = useRouter();

  const [type, setType] = useState('student');
  const [surname, setSurname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedType = localStorage.getItem('type');
    if (storedType) setType(storedType);
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find(c => c.name.common === e.target.value);
    setSelectedCountry(e.target.value);
    const code = country?.idd?.root + (country?.idd?.suffixes?.[0] || '');
    setCountryCode(code || '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!surname || !firstName || !email || !selectedCountry || !phoneNumber) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const username = `${surname}_${firstName}`.replace(/\s+/g, '');
      const fullPhoneNumber = `${countryCode}${phoneNumber}`;

      const response = await fetch(
        'https://backend-code-3-3qwp.onrender.com/step1',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username,
            email,
            phoneNumber: fullPhoneNumber,
            type,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Registration failed');

      localStorage.setItem('userEmail', email);
      router.push('/registration/step2');
    } catch (error: any) {
      alert(error.message || 'Something went wrong. Try again.');
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md sm:max-w-lg bg-white shadow-xl rounded-2xl px-6 sm:px-8 py-10"
    >
      {/* Logo */}
      <Image
        src="/icons/logo.png"
        alt="EduPyramid Logo"
        width={140}
        height={45}
        className="mb-6 mx-auto"
      />

      {/* Intro text */}
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">
        Create an Account
      </h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        Join us to launch your tech or creative career{' '}
        {type ? `as a ${type} applicant` : ''}.
      </p>

      {/* Progress steps */}
      <div className="flex justify-between items-center mb-8">
        {['Personal Info', 'Programme', 'Supervision', 'Security'].map(
          (label, i) => (
            <div
              key={label}
              className="flex flex-col items-center text-center text-[11px] sm:text-xs"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center mb-1 font-medium ${
                  i === 0
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

      {/* Surname + Firstname */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="surname"
            className="block text-xs font-medium text-gray-600 mb-1"
          >
            Surname
          </label>
          <input
            id="surname"
            placeholder="Enter your surname"
            value={surname}
            onChange={e => setSurname(e.target.value)}
            className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-black focus:outline-none w-full"
          />
        </div>

        <div>
          <label
            htmlFor="firstname"
            className="block text-xs font-medium text-gray-600 mb-1"
          >
            Firstname
          </label>
          <input
            id="firstname"
            placeholder="Enter your firstname"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-black focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Country */}
      <div className="mb-4">
        <label
          htmlFor="country"
          className="block text-xs font-medium text-gray-600 mb-1"
        >
          Country
        </label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-600 focus:ring-2 focus:ring-black focus:outline-none"
        >
          <option value="">Select Country</option>
          {countries.map(country => (
            <option key={country.cca2} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-xs font-medium text-gray-600 mb-1"
        >
          Phone Number
        </label>
        <div className="flex gap-2">
          <input
            placeholder="+Code"
            value={countryCode}
            readOnly
            className="border border-gray-300 rounded-full px-4 py-2 text-sm w-1/3 focus:outline-none bg-gray-100"
          />
          <input
            id="phone"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            className="border border-gray-300 rounded-full px-4 py-2 text-sm w-2/3 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-xs font-medium text-gray-600 mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded-full text-sm font-semibold transition ${
          loading
            ? 'bg-gray-400 cursor-not-allowed text-white'
            : 'bg-black text-white hover:bg-gray-900'
        }`}
      >
        {loading ? 'Creating Account...' : 'Proceed'}
      </button>

      {/* Footer links */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-xs text-gray-500 gap-2">
        <p>
          Already have an account?{' '}
          <a
            href="/registration/login"
            className="text-green-600 hover:underline"
          >
            Log In
          </a>
        </p>
        <a href="#" className="hover:underline">
          Privacy and Policy
        </a>
      </div>
    </form>
  );
}
