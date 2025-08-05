// app/registration/form/page.tsx
'use client';

import Image from 'next/image';

import RegisterFormContent from '@/components/RegisterFormContent';

export default function RegisterFormPage() {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      {/* Left image (hidden on small screens) */}
      <div className="hidden lg:block w-1/2 relative">
        <Image
          src="/student3.png"
          alt="Signup Visual"
          layout="fill"
          objectFit="cover"
          className="rounded-r-[2rem]"
        />
        <div className="absolute bottom-6 left-6">
          <button className="bg-black text-white text-xs py-2 px-4 rounded-full">
            Go back to website
          </button>
        </div>
      </div>

      {/* Right form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center px-6 py-10 bg-white overflow-y-auto">
      
          <RegisterFormContent />
      
      </div>
    </div>
  );
}
