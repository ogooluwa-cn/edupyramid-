import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaCertificate, FaTag } from 'react-icons/fa';


export default function Home() {
  return (
    <>
      <Head>
        <title>EduPyramid</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <header className="sticky top-0 z-50 bg-white shadow transition-all duration-300 animate__animated animate__fadeInDown">
        <div className="flex justify-between items-center ">
          <div className="text-xl font-bold text-blue-800 animate__animated animate__fadeInLeft flex">
           <img className=" w-26 h-20" src="/logo2.jpg" alt="User 1" />
         </div>

          
         
          <nav className="flex gap-6 items-center animate__animated animate__fadeInRight">
            <a href="#" className="hover:text-blue-800 transition">Home</a>
            <Link 
            href='/course' className="hover:text-blue-800 transition"
            >
              Courses
              </Link>
            <a href="#" className="hover:text-blue-800 transition">About</a>
            <a href="#" className="hover:text-blue-800 transition">Contact</a>
            <Link
              href="/login"
              className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Sign in
            </Link>
          </nav>
        </div>
      </header>

      <main className="text-center py-24 px-5 bg-gradient-to-b from-blue-50 to-white animate__animated animate__fadeIn">
        <h2 className="text-lg text-gray-600 animate__animated animate__fadeInUp animate__delay-1s">Empowering Education for All</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 my-4 leading-tight animate__animated animate__fadeInUp animate__delay-2s">
          Learn New Skills & Advance Your Career Today
        </h1>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto animate__animated animate__fadeInUp animate__delay-3s">
          Discover a wide range of online courses curated by top professionals. Whether you're looking to boost your career or learn something new, we've got you covered with flexible and accessible learning options.
        </p>
        <button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded transition duration-300 shadow-lg animate__animated animate__zoomIn animate__delay-4s"><Link href="/course">
          Get Started
          </Link>
        </button>
      </main>

        <section className="bg-blue-100 py-16 px-5 text-center animate__animated animate__fadeInUp">
          <h3 className="text-sm text-amber-800 font-semibold mb-2">WHY CHOOSE US</h3>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Empower Your Learning Journey</h2>
          <div className="max-w-4xl mx-auto text-gray-700 text-lg space-y-4">
            <p>Our platform offers expertly designed courses tailored to industry needs and real-world skills.</p>
            <p>Track your learning path with progress tracking, certifications, and feedback mechanisms.</p>
            <p>Connect with mentors and learners from around the globe and grow within a vibrant learning community.</p>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4">
          <h3 className="text-center text-sm text-orange-600 font-semibold">FEATURES</h3>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-blue-50 p-6 rounded shadow-sm text-center">
              <FaCertificate className="text-3xl text-blue-700 mx-auto mb-4" />
              <h4 className="font-semibold">Certification</h4>
              <p className="text-sm mt-2 text-gray-600">Receive industry recognized credentials.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded shadow-sm text-center">
              <FaCalendarAlt className="text-3xl text-blue-700 mx-auto mb-4" />
              <h4 className="font-semibold">Flexible Learning</h4>
              <p className="text-sm mt-2 text-gray-600">Learn at your own pace, anytime, anywhere.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded shadow-sm text-center">
              <FaTag className="text-3xl text-blue-700 mx-auto mb-4" />
              <h4 className="font-semibold">Affordable</h4>
              <p className="text-sm mt-2 text-gray-600">Access high quality content at competitive prices.</p>
            </div>
          </div>
        </section>



      <section className="py-16 px-4">
          <h3 className="text-center text-sm text-orange-600 font-semibold">What Our Student Say</h3>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-blue-50 p-6 rounded shadow-sm text-center">
              
             
              <p className="text-sm mt-2 text-gray-600">The courses are engaging and impactful</p>
            </div>
            <div className="bg-blue-50 p-6 rounded shadow-sm text-center">
              
              <p className="text-sm mt-2 text-gray-600">I glanced valuable skill that boosted my career </p>
            </div>
            <div className="bg-blue-50 p-6 rounded shadow-sm text-center">
              
              
              <p className="text-sm mt-2 text-gray-600">Excellent platform with expert instructor.</p>
            </div>
          </div>
        </section>

     

      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-5 text-center animate__animated animate__fadeInUp">
        <h3 className="text-sm text-amber-800 font-semibold mb-2">JOIN US</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Start Your Learning Adventure Today</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6">
          Take the first step towards achieving your goals. Join thousands of students and professionals who are transforming their lives through knowledge and skills.
        </p>
        <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300">
          Explore Courses
        </button>
      </section>

      <footer className="bg-blue-900 text-white py-12 px-5 animate__animated animate__fadeInUp">
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
          <div>
            <h3 className="font-bold text-lg mb-2">EduSkill</h3>
            <p className="text-sm text-blue-200 max-w-sm">
              EduSkill is dedicated to providing accessible, high-quality education for learners of all levels. Our platform is designed to bridge the gap between ambition and achievement.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Courses</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#"><Image src="/twitter.png" alt="Twitter" width={24} height={24} /></a>
              <a href="#"><Image src="/instargram.jpg" alt="Instagram" width={24} height={24} /></a>
              <a href="#"><Image src="/icons/facebook.jpg" alt="Facebook" width={24} height={24} /></a>
            </div>
          </div>
        </div>
        <p className="text-center mt-8 text-blue-100 text-sm">
          © 2024 EduSkill - Learning Management System. All rights reserved.
        </p>
      </footer>
    </>
  );
}