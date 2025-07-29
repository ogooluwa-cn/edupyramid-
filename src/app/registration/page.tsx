// 'use client';

// import React from 'react';
// import DecisionForm from '@/components/DecisionForm';
// import RegisterHeroImage from '@/components/RegisterHeroImage';

// export default function RegisterDecision() {
//   return (
//     <div className="flex flex-col content-around lg:flex-row h-screen w-full bg-[#0F172A] p-8">
//       {/* Left: Image Section */}
//       <div className="w-full lg:w-1/2 h-screen lg:h-full ">
//         <RegisterHeroImage />
//       </div>

//       {/* Right: Form Section */}
//       <div className="w-full lg:w-1/2 h-screen lg:h-full flex justify-center items-center bg-white  rounded-full">
//         <div className="w-full max-w-md px-8 rounded-full">
//           <DecisionForm />
//         </div>
//       </div>
//     </div>
//   );
// }

// You said:
// 'use client';

// import React from 'react';
// import DecisionForm from '@/components/DecisionForm';
// import RegisterHeroImage from '@/components/RegisterHeroImage';

// export default function RegisterDecision() {
//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-[#0F172A]">
//       {/* Left: Image */}
//       <div className="hidden lg:block w-1/2 h-screen">
//         <RegisterHeroImage />
//       </div>

//       {/* Right: Form Card */}
//       <div className="w-full lg:w-1/2 flex justify-center items-center">
//         <div className="bg-white w-full h-screen max-w-md rounded-2xl p-8 shadow-lg">
//           <DecisionForm />
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import React from 'react';
import DecisionForm from '@/components/DecisionForm';
import RegisterHeroImage from '@/components/RegisterHeroImage';

export default function RegisterDecision() {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full p-4 bg-[#0F172A] gap-4">
      {/* Left: Image Section */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full">
        <RegisterHeroImage />
      </div>

      {/* Right: Form Section */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex justify-center items-center bg-white rounded-[30p]">
        <div className="w-full max-w-md px-6 ">
          <DecisionForm />
        </div>
      </div>
    </div>
  );
}
