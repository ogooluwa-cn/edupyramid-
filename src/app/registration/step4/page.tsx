'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import * as LucideIcons from 'lucide-react';
import Image from 'next/image';

export default function RegisterStep4() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isReferred, setIsReferred] = useState(false);
  const [referralCode, setReferralCode] = useState('');

  // Get stored email from Step 1
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      alert('Email not found. Please start from Step 1.');
      router.push('/registration/step1');
    }
  }, [router]);

  // Mutation for registration API
  const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch('https://backend-code-3-3qwp.onrender.com/step4', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          referralCode: isReferred ? referralCode : null,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Submission failed');
      return data;
    },
    onSuccess: () => {
      alert('🎉 Registration completed!');
      router.push('/payment');
    },
    onError: (err: any) => {
      alert(err.message || 'Something went wrong');
    },
  });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      alert('Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (isReferred && !referralCode) {
      alert('Please enter a referral code');
      return;
    }

    mutation.mutate();
  };

  const { Eye, EyeOff } = LucideIcons;

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left image */}
      <div className="w-full lg:w-1/2 relative h-80 lg:h-auto">
        <Image
          src="/login.png"
          alt="Signup Visual"
          fill
          className="object-cover rounded-b-[2rem] lg:rounded-r-[2rem] lg:rounded-b-none"
        />
        <div className="absolute bottom-6 left-6">
          <button
            onClick={() => router.push('/')}
            className="bg-black text-white text-xs py-2 px-4 rounded-full"
          >
            Go back to website
          </button>
        </div>
      </div>

      {/* Right form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center px-4 sm:px-6 py-10 bg-white overflow-y-auto">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-lg rounded-2xl px-6 sm:px-8 py-10"
        >
          <h2 className="text-3xl font-bold text-center text-black mb-2">
            Create an account
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Set your password to finalize registration
          </p>

          {/* Stepper */}
          <div className="flex justify-between items-center mb-8">
            {['Personal Info', 'Programme', 'Supervision', 'Security'].map(
              (label, index) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center text-[10px] sm:text-xs"
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 font-medium ${
                      index === 3
                        ? 'bg-black text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-gray-500">{label}</span>
                </div>
              )
            )}
          </div>

          {/* Password */}
          <div className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black pr-10"
              />
              <div
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>

            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black pr-10"
              />
              <div
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
          </div>

          {/* Referral */}
          <div className="mt-6">
            <p className="text-sm text-gray-700 mb-2">Are you being referred?</p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="referral"
                  value="yes"
                  checked={isReferred}
                  onChange={() => setIsReferred(true)}
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="referral"
                  value="no"
                  checked={!isReferred}
                  onChange={() => setIsReferred(false)}
                />
                <span>No</span>
              </label>
            </div>

            {isReferred && (
              <input
                type="text"
                placeholder="Enter referral code"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                className="w-full mt-3 px-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={mutation.isPending}
            className={`w-full py-3 mt-6 text-sm font-semibold text-white rounded-full transition ${
              mutation.isPending
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-black hover:bg-gray-900'
            }`}
          >
            {mutation.isPending ? 'Submitting...' : 'Submit'}
          </button>
    
        </form>
      </div>
    </div>
  );
}
