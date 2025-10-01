'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:10000/login', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Email or password is incorrect');
      }

      // ✅ Successful login
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userEmail', email);
        router.push('/payment'); // redirect to payment page
      } else {
        alert(data.message || 'Something went wrong');
      }
    } catch (error: any) {
      alert(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen bg-gray-50">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 relative h-80 lg:h-auto">
        <Image
          src="/login.png"
          alt="Login Visual"
          fill
          className="object-cover rounded-b-[2rem] lg:rounded-r-[2rem] lg:rounded-b-none"
        />
        <div className="absolute bottom-6 left-6">
          <button className="bg-black text-white text-xs py-2 px-4 rounded-full">
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
          <h1 className="text-3xl font-bold text-center text-black mb-2">Welcome Back</h1>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-full bg-gray-100 text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-full text-sm"
              placeholder="Enter your password"
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
