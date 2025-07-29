// app/contact/page.tsx
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className=" text-gray-900 min-h-screen py-10 px-6 md:px-20">
            {/* Get through to us */}
            <section className="mb-20">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
                    Get through to us
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <div className="flex flex-col items-center text-center">
                        <img src="/icons/sms.png" className="h-24 w-24 text-gray-700 mb-2" />
                        <p className="font-bold">Email Us</p>
                        <p className="text-sm text-gray-600"><a href="mailto:Edupyramid@gmail.com" className="text-sm text-gray-600 hover:underline">
                            Edupyramid@gmail.com
                        </a>


                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="/icons/call.png" className="h-24 w-24 text-gray-700 mb-2" />
                        <p className="font-bold">Contact Information</p>
                        <p className="text-sm text-gray-600"><a href="tel:+2347049258491" className="text-sm text-gray-600 hover:underline">
                            0704 925 8491, 0903 545 6197
                        </a></p>
                    </div>
                </div>
            </section>

            {/* Take the next step */}
            <section className="bg-gradient-to-br from-gray-800 to-black text-white rounded-2xl p-24 text-center max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-4">TAKE THE NEXT STEP!</h3>
                <p className="mb-6 text-gray-300">
                    Let's transform the digital landscape together.
                </p>
                <Link
                    href="/get-started"
                    className="bg-white text-black py-3 px-6 rounded-full font-medium hover:bg-gray-100 transition"
                >
                    Let’s Get Started →
                </Link>
            </section>
        </div>
    );
}
