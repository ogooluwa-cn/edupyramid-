'use client'

import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import countries from 'world-countries'
import Link from 'next/link'

export default function SignUpPage() {
  const router = useRouter()

  const [surname, setSurname] = useState('')
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [telegramPhoneNumber, setTelegramPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isIntern, setIsIntern] = useState(false)
  const [institutionName, setInstitutionName] = useState('')
  const [supervisorName, setSupervisorName] = useState('')

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = countries.find(c => c.name.common === e.target.value)
    setSelectedCountry(e.target.value)
    setCountryCode(selected?.idd?.root + (selected?.idd?.suffixes?.[0] || ''))
  }

  const signUpMutation = useMutation({
    mutationFn: async () => {
      const username = `${surname}_${firstName}_${middleName}`.trim()
      const res = await fetch('https://ogo-server.onrender.com/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          username,
          password,
          phoneNumber: countryCode + phoneNumber,
          telegramPhoneNumber,
          isIntern,
          institutionName,
          supervisorName
        }),
      })

      if (!res.ok) {
        const error = await res.text()
        console.error('Signup error:', error)
        throw new Error('Sign up failed: ' + error)
      }

      return res.json()
    },
    onSuccess: (data) => {
      localStorage.setItem('authToken', data.token)
      router.push('/home')
    },
    onError: (error: any) => {
      alert(error.message)
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    signUpMutation.mutate()
  }

  return (
    <div>
      <Link href="/" className=" text-center text-blue-600 hover:underline ">
        &larr; Back to Home
      </Link>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 sm:px-8 lg:px-10 animate__animated animate__fadeIn">
        <div className="bg-white p-10 rounded-xl shadow-lg max-w-lg w-full">
          <header className="mb-8 text-center">
        
            <p className="text-lg text-blue-800 mt-2 font-semibold">Create Your Account</p>
            <p className="text-gray-600 mt-2 max-w-xs mx-auto">
              Sign up to get started with your learning journey.
            </p>
          </header>

          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Personal Information */}
            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-100 pb-2">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="surname" className="block text-sm font-medium text-blue-900 mb-1">Surname</label>
                  <input
                    id="surname"
                    type="text"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                    placeholder="Your surname"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-blue-900 mb-1">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    placeholder="Your first name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="middleName" className="block text-sm font-medium text-blue-900 mb-1">Middle Name</label>
                  <input
                    id="middleName"
                    type="text"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    placeholder="Your middle name (optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-100 pb-2">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-blue-900 mb-1">Country</label>
                  <select
                    id="country"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    required
                  >
                    <option value="">Select your country</option>
                    {countries.map((country) => (
                      <option key={country.cca2} value={country.name.common}>
                        {country.name.common}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blue-900 mb-1">Phone Number</label>
                  <div className="flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-700 text-sm select-none">
                      {countryCode || '+Code'}
                    </span>
                    <input
                      id="phone"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      placeholder="Enter phone number"
                      className="flex-1 block w-full rounded-r-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-1">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-100 pb-2">Security</h2>
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-blue-900 mb-1">Password</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Create a password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-blue-900 mb-1">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm your password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>
            </section>

            {/* Internship Info */}
            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-4 border-b border-blue-100 pb-2">Internship Info (Optional)</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <input
                    id="internCheckbox"
                    type="checkbox"
                    checked={isIntern}
                    onChange={(e) => setIsIntern(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="internCheckbox" className="text-sm text-blue-900 font-medium">
                    Are you an internship student?
                  </label>
                </div>

                {isIntern && (
                  <>
                    <div>
                      <label htmlFor="institution" className="block text-sm font-medium text-blue-900 mb-1">Name of Institution</label>
                      <input
                        id="institution"
                        type="text"
                        value={institutionName}
                        onChange={(e) => setInstitutionName(e.target.value)}
                        placeholder="e.g. University of Lagos"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="supervisor" className="block text-sm font-medium text-blue-900 mb-1">Name of Supervisor</label>
                      <input
                        id="supervisor"
                        type="text"
                        value={supervisorName}
                        onChange={(e) => setSupervisorName(e.target.value)}
                        placeholder="e.g. Mr. John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="telegramPhoneNumber" className="block text-sm font-medium text-blue-900 mb-1">Telegram Phone Number</label>
                      <input
                        id="telegramPhoneNumber"
                        type="tel"
                        value={telegramPhoneNumber}
                        onChange={(e) => setTelegramPhoneNumber(e.target.value)}
                        placeholder="Enter Telegram phone number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition"
                      />
                    </div>
                  </>
                )}
              </div>
            </section>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition duration-300 font-semibold text-lg"
              disabled={signUpMutation.isPending}
            >
              {signUpMutation.isPending ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-700 mt-8">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-800 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
