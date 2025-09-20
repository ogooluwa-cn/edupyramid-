// // 'use client';

// // import React, { useState } from 'react';
// // import { useSearchParams, useRouter } from 'next/navigation';
// // import countries from 'world-countries';

// // export default function RegisterFormContent() {
// //   const router = useRouter();
// //   const searchParams = useSearchParams();
// //   const type = searchParams.get('type');

// //   const [surname, setSurname] = useState('');
// //   const [firstName, setFirstName] = useState('');
// //   const [middleName, setMiddleName] = useState('');
// //   const [selectedCountry, setSelectedCountry] = useState('');
// //   const [countryCode, setCountryCode] = useState('');
// //   const [phoneNumber, setPhoneNumber] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //     const country = countries.find(c => c.name.common === e.target.value);
// //     setSelectedCountry(e.target.value);
// //     const code = country?.idd?.root + (country?.idd?.suffixes?.[0] || '');
// //     setCountryCode(code || '');
// //   };
// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if (!surname || !firstName || !email || !selectedCountry || !phoneNumber) {
// //       alert('Please fill in all required fields');
// //       return;
// //     }

// //     setLoading(true);

// //     try {
// //       const username = `${surname}_${firstName}_${middleName}`.trim();

// //       const res = await fetch('https://edupyramid-new-backend.onrender.com/api/createAccount', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           email,
// //           username,
// //           phoneNumber: countryCode + phoneNumber,
// //           type,
// //         }),
// //       });

// //       const data = await res.json();

// //       if (!res.ok || !data.success) {
// //         throw new Error(data?.message || 'Signup failed');
// //       }

// //       localStorage.setItem('userEmail', email);
// //       router.push('/registration/step2');

// //     } catch (err: any) {
// //       alert(err.message || 'Something went wrong');
// //       console.error('Registration error:', err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="w-full max-w-md sm:max-w-lg bg-white shadow-lg rounded-2xl px-6 sm:px-8 py-10">
// //       <h2 className="text-3xl font-bold text-center text-black mb-2">EDU</h2>
// //       <p className="text-center text-base font-medium text-gray-700 mb-1">
// //         Create an account {type ? `as ${type} applicant` : ''}
// //       </p>
// //       <p className="text-center text-sm text-gray-500 mb-6">
// //         Join us to launch your tech or creative career!
// //       </p>

// //       <div className="flex justify-between items-center mb-8">
// //         {['Personal Info', 'Programme', 'Supervision', 'Security'].map((label, i) => (
// //           <div key={label} className="flex flex-col items-center text-center text-[10px] sm:text-xs">
// //             <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 font-medium ${i === 0 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>{i + 1}</div>
// //             <span className="text-gray-500">{label}</span>
// //           </div>
// //         ))}
// //       </div>

// //       <div className="grid grid-cols-2 gap-3 mb-4">
// //         <input placeholder="Surname" value={surname} onChange={e => setSurname(e.target.value)} className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none w-full" />
// //         <input placeholder="Firstname" value={firstName} onChange={e => setFirstName(e.target.value)} className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none w-full" />
// //       </div>

// //       <input placeholder="Middlename" value={middleName} onChange={e => setMiddleName(e.target.value)} className="w-full mb-3 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none" />

// //       <select value={selectedCountry} onChange={handleCountryChange} className="w-full mb-3 border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-600 focus:outline-none">
// //         <option value="">Select Country</option>
// //         {countries.map(country => (
// //           <option key={country.cca2} value={country.name.common}>{country.name.common}</option>
// //         ))}
// //       </select>

// //       <div className="flex gap-2 mb-3">
// //         <input placeholder="+Code" value={countryCode} readOnly className="border border-gray-300 rounded-full px-4 py-2 text-sm w-1/3 focus:outline-none bg-gray-100" />
// //         <input placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="border border-gray-300 rounded-full px-4 py-2 text-sm w-2/3 focus:outline-none" />
// //       </div>

// //       <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full mb-4 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none" />

// //       <button type="submit" disabled={loading} className={`w-full py-3 rounded-full text-sm font-semibold transition ${loading ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-black text-white hover:bg-gray-900'
// //         }`}>
// //         {loading ? 'Creating Account...' : 'Proceed'}
// //       </button>

// //       <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-xs text-gray-500 gap-2">
// //         <p>Already have an account? <a href="#" className="text-green-600 hover:underline">Log In</a></p>
// //         <a href="#" className="hover:underline">Privacy and Policy</a>
// //       </div>
// //     </form>
// //   );
// // }

// 'use client';

// import React, { useState } from 'react';
// import { useSearchParams, useRouter } from 'next/navigation';
// import countries from 'world-countries';

// export default function RegisterFormContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const type = searchParams.get('type') || 'student'; // Default to student

//   const [surname, setSurname] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [middleName, setMiddleName] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [countryCode, setCountryCode] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const country = countries.find(c => c.name.common === e.target.value);
//     setSelectedCountry(e.target.value);
//     const code = country?.idd?.root + (country?.idd?.suffixes?.[0] || '');
//     setCountryCode(code || '');
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validation
//     if (!surname || !firstName || !email || !selectedCountry || !phoneNumber) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     setLoading(true);

//     try {
//       const username = `${surname}_${firstName}_${middleName}`.replace(/\s+/g, '');
//       const fullPhoneNumber = `${countryCode}${phoneNumber}`;

//       const response = await fetch('https://edupyramid-new-backend.onrender.com/api/createAccount', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           email,
//           phoneNumber: fullPhoneNumber,
//           type
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Registration failed');
//       }

//       localStorage.setItem('userEmail', email);
//       router.push('/registration/step2');
//     } catch (error: any) {
//       console.error('Registration error:', error);
//       alert(error.message || 'Registration failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full max-w-md sm:max-w-lg bg-white shadow-lg rounded-2xl px-6 sm:px-8 py-10">
//       {/* Your existing form JSX remains the same */}
//       {/* ... */}
// //    
// //       <h2 className="text-3xl font-bold text-center text-black mb-2">EDU</h2>
// //       <p className="text-center text-base font-medium text-gray-700 mb-1">
// //         Create an account {type ? `as ${type} applicant` : ''}
// //       </p>
// //       <p className="text-center text-sm text-gray-500 mb-6">
// //         Join us to launch your tech or creative career!
// //       </p>

// //       <div className="flex justify-between items-center mb-8">
// //         {['Personal Info', 'Programme', 'Supervision', 'Security'].map((label, i) => (
// //           <div key={label} className="flex flex-col items-center text-center text-[10px] sm:text-xs">
// //             <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 font-medium ${i === 0 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>{i + 1}</div>
// //             <span className="text-gray-500">{label}</span>
// //           </div>
// //         ))}
// //       </div>

// //       <div className="grid grid-cols-2 gap-3 mb-4">
// //         <input placeholder="Surname" value={surname} onChange={e => setSurname(e.target.value)} className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none w-full" />
// //         <input placeholder="Firstname" value={firstName} onChange={e => setFirstName(e.target.value)} className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none w-full" />
// //       </div>

// //       <input placeholder="Middlename" value={middleName} onChange={e => setMiddleName(e.target.value)} className="w-full mb-3 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none" />

// //       <select value={selectedCountry} onChange={handleCountryChange} className="w-full mb-3 border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-600 focus:outline-none">
// //         <option value="">Select Country</option>
// //         {countries.map(country => (
// //           <option key={country.cca2} value={country.name.common}>{country.name.common}</option>
// //         ))}
// //       </select>

// //       <div className="flex gap-2 mb-3">
// //         <input placeholder="+Code" value={countryCode} readOnly className="border border-gray-300 rounded-full px-4 py-2 text-sm w-1/3 focus:outline-none bg-gray-100" />
// //         <input placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="border border-gray-300 rounded-full px-4 py-2 text-sm w-2/3 focus:outline-none" />
// //       </div>

// //       <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full mb-4 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none" />

// //       <button type="submit" disabled={loading} className={`w-full py-3 rounded-full text-sm font-semibold transition ${loading ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-black text-white hover:bg-gray-900'
// //         }`}>
// //         {loading ? 'Creating Account...' : 'Proceed'}
// //       </button>

// //       <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-xs text-gray-500 gap-2">
// //         <p>Already have an account? <a href="#" className="text-green-600 hover:underline">Log In</a></p>
// //         <a href="#" className="hover:underline">Privacy and Policy</a>
// //       </div>
// //  
//     </form>
//   );
// }

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
  const [middleName, setMiddleName] = useState('');
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
      const username = `${surname}_${firstName}_${middleName}`.replace(/\s+/g, '');
      const fullPhoneNumber = `${countryCode}${phoneNumber}`;

      const response = await fetch('https://edupyramid-backend.onrender.com/step1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email,
          phoneNumber: fullPhoneNumber,
          type,
        }),
      });

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
      className="w-full max-w-md sm:max-w-lg bg-white shadow-lg rounded-2xl px-6 sm:px-8 py-10"
    >
          <Image 
            src="/icons/logo.png" 
            alt="EduPyramid Logo" 
            width={120}  
            height={40} 
            className="mb-6 mx-auto"
          />
      <p className="text-center text-base font-medium text-gray-700 mb-1">
        Create an account {type ? `as ${type} applicant` : ''}
      </p>
      <p className="text-center text-sm text-gray-500 mb-6">
        Join us to launch your tech or creative career!
      </p>

      <div className="flex justify-between items-center mb-8">
        {['Personal Info', 'Programme', 'Supervision', 'Security'].map((label, i) => (
          <div key={label} className="flex flex-col items-center text-center text-[10px] sm:text-xs">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 font-medium ${i === 0 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>
              {i + 1}
            </div>
            <span className="text-gray-500">{label}</span>
          </div>
        ))}
      </div>

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
        disabled={loading}
        className={`w-full py-3 rounded-full text-sm font-semibold transition ${
          loading ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-black text-white hover:bg-gray-900'
        }`}
      >
        {loading ? 'Creating Account...' : 'Proceed'}
      </button>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-xs text-gray-500 gap-2">
        <p>
          Already have an account?{' '}
          <a href="#" className="text-green-600 hover:underline">
            Log In
          </a>
        </p>
        <a href="#" className="hover:underline">Privacy and Policy</a>
      </div>
    </form>
  );
}