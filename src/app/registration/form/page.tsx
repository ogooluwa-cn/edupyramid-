// app/registration/form/page.tsx
import Image from 'next/image';
import { Suspense } from 'react';
import RegisterFormContent from '@/components/RegisterFormContent';

export default function RegisterFormPage() {
  return (
    <div className="flex h-screen w-full">
      {/* Left Side Image */}
      <div className="w-1/2 hidden lg:block relative">
        <Image
          src="/student3.png"
          alt="Person waving"
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

      {/* Right Side Form with Suspense */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-white px-6">
        <Suspense fallback={<div>Loading form...</div>}>
          <RegisterFormContent />
        </Suspense>
      </div>
    </div>
  );
}
