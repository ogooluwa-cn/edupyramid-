// // 'use client';

// // import { useRouter } from 'next/navigation';
// // import React from 'react';

// // const RegistrationHome = () => {
// //   const router = useRouter();

// //   const handleRegistrationType = (type: string) => {
// //     localStorage.setItem('registrationType', type);
// //     router.push('/registration/step1');
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col md:flex-row bg-[#3D0E70]">

// //       {/* Left section: Image */}
// //       <div className="relative h-1/2 md:h-screen w-full md:w-1/2">
// //         <img
// //           src="/student.png"
// //           alt="Student"
// //           className="w-full h-full object-cover md:rounded-l-3xl md:rounded-t-none rounded-t-3xl"
// //         />

// //         {/* Go Back Button */}
// //         <button
// //           className="absolute bottom-8 left-8 z-10 px-4 py-1 border border-white text-white rounded-full hover:bg-white hover:text-[#3D0E70] transition"
// //           onClick={() => router.push('/')}
// //         >
// //           Go Back To Website
// //         </button>
// //       </div>

// //       {/* Right section: Form */}
// //       <div className="h-1/2 md:h-screen w-full md:w-1/2 bg-white rounded-b-3xl md:rounded-none md:rounded-r-3xl p-6 sm:p-10 md:p-12 flex flex-col items-center text-center space-y-6">
        
// //         {/* Logo */}
// //         <h1 className="text-3xl font-bold flex items-center gap-1">
// //           EDU <span className="text-green-600 text-2xl">▲</span>
// //         </h1>

// //         <h2 className="text-xl sm:text-2xl font-semibold">Create an account</h2>
// //         <p className="text-gray-600 text-sm sm:text-base">
// //           Join us to launch your tech or creative career!
// //         </p>

// //         <p className="text-gray-800 font-medium text-sm sm:text-base">
// //           Please select your registration type
// //         </p>

// //         {/* Buttons for type selection */}
// //         <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
// //           <button
// //             onClick={() => handleRegistrationType('IT/SIWES')}
// //             className="flex-1 px-4 py-2 border border-gray-800 rounded-full hover:bg-gray-100 transition text-sm sm:text-base"
// //           >
// //             IT/SIWES Applicant
// //           </button>
// //           <button
// //             onClick={() => handleRegistrationType('Regular')}
// //             className="flex-1 px-4 py-2 border border-gray-800 rounded-full hover:bg-gray-100 transition text-sm sm:text-base"
// //           >
// //             Regular Applicant
// //           </button>
// //         </div>

// //         <button
// //           onClick={() => handleRegistrationType('Unspecified')}
// //           className="w-full py-3 bg-[#0d1117] text-white rounded-full hover:bg-black transition text-sm sm:text-base"
// //         >
// //           Proceed
// //         </button>

// //         <p className="text-sm text-gray-700">
// //           Already Have An Account?{' '}
// //           <a href="#" className="text-green-600 hover:underline">Log In</a>
// //         </p>
// //         <p className="text-xs text-gray-500">Privacy And Policy</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegistrationHome;

// 'use client';

// import { useRouter } from 'next/navigation';
// import React from 'react';

// const RegistrationHome = () => {
//   const router = useRouter();

//   const handleRegistrationType = (type: string) => {
//     localStorage.setItem('registrationType', type);
//     router.push('/registration/step1');
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-[#3D0E70]">

//       {/* Left section: Image */}
//       <div className="relative h-1/2 md:h-screen w-full md:w-1/2">
//         <img
//           src="/student.png"
//           alt="Student"
//           className="w-full h-full object-cover md:rounded-l-3xl md:rounded-t-none rounded-t-3xl"
//         />

//         {/* Go Back Button */}
//         <button
//           className="absolute bottom-8 left-8 z-10 px-4 py-1 border border-white text-white rounded-full hover:bg-white hover:text-[#3D0E70] transition"
//           onClick={() => router.push('/')}
//         >
//           Go Back To Website
//         </button>
//       </div>

//       {/* Right section: Form */}
//       <div className="h-1/2 md:h-screen w-full md:w-1/2 bg-white rounded-b-3xl md:rounded-none md:rounded-r-3xl p-6 sm:p-10 md:p-12 flex flex-col items-center text-center space-y-6">
//         <h1 className="text-3xl font-bold flex items-center gap-1">
//           EDU <span className="text-green-600 text-2xl">▲</span>
//         </h1>

//         <h2 className="text-xl sm:text-2xl font-semibold">Create an account</h2>
//         <p className="text-gray-600 text-sm sm:text-base">
//           Join us to launch your tech or creative career!
//         </p>
 

//         <button
//           onClick={() => handleRegistrationType('Unspecified')}
//           className="w-full py-3 bg-[#0d1117] text-white rounded-full hover:bg-black transition text-sm sm:text-base"
//         >
//           Proceed
//         </button>

//         <p className="text-sm text-gray-700">
//           Already Have An Account?{' '}
//           <a href="#" className="text-green-600 hover:underline">Log In</a>
//         </p>
//         <p className="text-xs text-gray-500">Privacy And Policy</p>
//       </div>
//     </div>
//   );
// };

// export default RegistrationHome;
'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

const RegistrationHome = () => {
  const router = useRouter();

  const handleRegistrationType = (type: string) => {
    localStorage.setItem('registrationType', type);
    router.push('/registration/step1');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f9f9f9]">
      {/* Image Section (mobile + desktop) */}
      <div className="w-full lg:w-1/2 relative h-80 lg:h-auto">
        <Image
          src="/student3.png"
          alt="Signup Visual"
          fill
          className="object-cover rounded-b-[2rem] lg:rounded-r-[2rem] lg:rounded-b-none"
        />
        <div className="absolute bottom-6 left-6">
          <button
            onClick={() => router.push('/')}
            className="bg-black text-white text-xs py-2 px-4 rounded-full hover:bg-gray-800 transition"
          >
            Go back to website
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-4 sm:px-6 py-10 bg-white overflow-y-auto text-center">
        {/* Logo */}
               <Image 
                 src="/icons/logo.png" 
                 alt="EduPyramid Logo" 
                 width={120}  
                 height={40} 
                 className="mb-6 mx-auto"
               />

        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          Create an account
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Join us to launch your tech or creative career!
        </p>

        {/* Buttons for registration type */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mb-6">
          <button
            onClick={() => handleRegistrationType('IT/SIWES')}
            className="flex-1 px-4 py-2 border border-gray-800 rounded-full hover:bg-gray-100 transition text-sm sm:text-base"
          >
            IT/SIWES Applicant
          </button>
          <button
            onClick={() => handleRegistrationType('Regular')}
            className="flex-1 px-4 py-2 border border-gray-800 rounded-full hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Regular Applicant
          </button>
        </div>

        {/* Proceed button */}


        {/* Links */}
        <p className="text-sm text-gray-700 mb-2">
          Already Have An Account?{' '}
          <a href="#" className="text-green-600 hover:underline">
            Log In
          </a>
        </p>
        <p className="text-xs text-gray-500">Privacy And Policy</p>
      </div>
    </div>
  );
};

export default RegistrationHome;
