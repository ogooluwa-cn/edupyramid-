// app/registration/form/page.tsx
'use client';

import Image from 'next/image';
import RegisterFormContent from '@/components/RegisterFormContent';

export default function RegisterFormPage() {
  return (
<div className="flex flex-col lg:flex-row w-full">
      {/* Image Section (mobile + desktop) */}
      <div className="w-full lg:w-1/2 relative h-80 lg:h-auto">
        <Image
          src="/login.png"
          alt="Signup Visual"
          fill
          className="object-cover rounded-b-[2rem] lg:rounded-r-[2rem] lg:rounded-b-none"
        />
        <div className="absolute bottom-6 left-6">
          <button className="bg-black text-white text-xs py-2 px-4 rounded-full" onClick={() => window.location.href = '/#hero'}>
            Go back to website
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center px-4 sm:px-6 py-10 bg-white overflow-y-auto">
          <RegisterFormContent />
        </div>
      </div>
 
  );
}
