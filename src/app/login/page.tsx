'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div className=" bg-gray-100">
       <Link href="/" className=" text-center text-blue-600  hover:underline ">
          &larr; Back to Home
        </Link>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
       
         
        <h3 className="text-xl font-bold text-center text-blue-900 mt-2">Login or Enroll</h3>
        <p className="text-center text-gray-600 mt-2 mb-6">
          Enter your email and password to access your account.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-blue-800 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition"
          
          >
            login
          </button>
        </form>

        <p className="text-center text-sm text-gray-700 mt-6">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-blue-800 font-semibold hover:underline">
            Enroll Now
          </Link>
        </p>
      </div>
    </div>
    </div>
  )
}
