import React from 'react';
import Image from 'next/image';

export default function RegisterHeroImage() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/student3.png"
        alt="Person waving at laptop"
        layout="fill"
        objectFit="cover"
        className="rounded-[30px]"
      />
      <div className="absolute bottom-6 left-6">
        <button className="bg-black text-white text-xs py-2 px-4 rounded-full">
          Go back to website
        </button>
      </div>
    </div>
  );
}
