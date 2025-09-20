'use client';

import Image from 'next/image';

export default function RegisterImage() {
  return (
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
  );
}