// // app/contact/page.tsx
// import Link from 'next/link';

// export default function ContactPage() {
//     return (
//         <div className=" text-gray-900 min-h-screen py-10 px-6 md:px-20">
//             {/* Get through to us */}
//             <section className="mb-20">
//                 <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
//                     Get through to us
//                 </h2>
//                 <div className="flex flex-col md:flex-row justify-center items-center gap-10">
//                     <div className="flex flex-col items-center text-center">
//                         <img src="/icons/sms.png" className="h-24 w-24 text-gray-700 mb-2" />
//                         <p className="font-bold">Email Us</p>
//                         <p className="text-sm text-gray-600">
//                             <a
//                                 href="mailto:Edupyramid@gmail.com"
//                                 className="text-sm text-gray-600 hover:underline"
//                             >
//                                 Edupyramid@gmail.com
//                             </a>
//                         </p>
//                     </div>
//                     <div className="flex flex-col items-center text-center">
//                         <img src="/icons/call.png" className="h-24 w-24 text-gray-700 mb-2" />
//                         <p className="font-bold">Contact Information</p>
//                         <p className="text-sm text-gray-600">
//                             <a
//                                 href="tel:+2347049258491"
//                                 className="text-sm text-gray-600 hover:underline"
//                             >
//                                 07049258491 , 09018212652
//                             </a>
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Take the next step */}
//             <section
//                 className="relative rounded-2xl overflow-hidden text-white text-center max-w-4xl mx-auto"
//             >
//                 {/* Background image */}
//                 <div className="absolute inset-0 bg-[url('/icons/card.png')] bg-cover bg-center"></div>
//                 {/* Overlay for readability */}
//                 <div className="absolute inset-0 bg-black/50"></div>

//                 {/* Content */}
//                 <div className="relative p-24">
//                     <h3 className="text-3xl font-bold mb-4">TAKE THE NEXT STEP!</h3>
//                     <p className="mb-6 text-gray-200">
//                         Let's transform the digital landscape together.
//                     </p>
//                     <Link
//                         href="/registration"
//                         className="bg-white text-black py-3 px-6 rounded-full font-medium hover:bg-gray-100 transition"
//                     >
//                         Let’s Get Started →
//                     </Link>
//                 </div>
//             </section>
//         </div>
//     );
// }


// app/contact/page.tsx
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="text-gray-900 min-h-screen py-10 px-6 md:px-20">
            {/* Get through to us */}
            <section className="mb-20">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
                    Get through to us
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <div className="flex flex-col items-center text-center">
                        <img src="/icons/sms.png" className="h-24 w-24 text-gray-700 mb-2" />
                        <p className="font-bold">Email Us</p>
                        <p className="text-sm text-gray-600">
                            <a
                                href="mailto:Edupyramid@gmail.com"
                                className="text-sm text-gray-600 hover:underline"
                            >
                                Edupyramid@gmail.com
                            </a>
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="/icons/call.png" className="h-24 w-24 text-gray-700 mb-2" />
                        <p className="font-bold">Contact Information</p>
                        <p className="text-sm text-gray-600">
                            <a
                                href="tel:+2347049258491"
                                className="text-sm text-gray-600 hover:underline"
                            >
                                07049258491 , 09018212652
                            </a>
                        </p>
                    </div>
                </div>
            </section>

{/* Take the next step */}
<section className="relative rounded-2xl overflow-hidden text-white text-center max-w-4xl mx-auto my-16">
  {/* Gradient background */}
  <div
    className="absolute inset-0"
    style={{
      background: 'radial-gradient(ellipse at 80% 20%, #0f3c2d 0%, #000 70%)',
    }}
  ></div>

  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative px-6 py-16 sm:px-10 md:px-20 lg:px-24 flex flex-col items-center justify-center">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      TAKE THE NEXT STEP!
    </h3>
    <p className="mb-6 text-gray-200 text-sm sm:text-base md:text-lg max-w-lg">
      Let&apos;s transform the digital landscape together.
    </p>
    <Link
      href="/registration"
      className="bg-white text-black py-3 px-8 rounded-full font-medium hover:bg-gray-100 transition text-sm sm:text-base"
    >
      Let’s Get Started →
    </Link>
  </div>
</section>

        </div>
    );
}
