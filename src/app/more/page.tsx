import Head from 'next/head';
import Link from 'next/link';
import { FaWhatsapp, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaLink } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Asdin.net Clone</title>
      </Head>
      <main className="min-h-screen bg-[#f7f9ff] text-[#1a1a1a] font-sans">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white shadow transition-all duration-300 animate__animated animate__fadeInDown">
        <div className="flex justify-between items-center ">
          <div className="text-xl font-bold text-blue-800 animate__animated animate__fadeInLeft flex">
          <h1 className="font-serif text-[30px]">Edu<span className="font-mono font-bold text-[50px] ml-1 text-blue-900">Pyramid</span></h1>
         </div>

          
         
          <nav className="flex gap-6 items-center animate__animated animate__fadeInRight">
            <a href="#" className="hover:text-blue-800 transition">Home</a>
            <Link 
            href='/course' className="hover:text-blue-800 transition"
            >
              Programmes
              </Link>

            
            <a href="#" className="hover:text-blue-800 transition">LMS</a>
             <Link 
            href='/more' className="hover:text-blue-800 transition"
            >
              More
              </Link>
            <Link
              href="/login"
              className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Sign in
            </Link>
            
          </nav>
        </div>
      </header>

        {/* Content Section */}
        <section className="max-w-6xl mx-auto bg-white mt-10 p-8 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Empowering Global Innovation, One Developer at a Time</h2>
          <p className="text-sm text-gray-700 mb-6">
            At Advanced Software Developers International Network (EduPyramid), we believe that bridging talent with opportunity is the key to driving innovation worldwide we are dedicated to connecting skilled developers in African with startups and smaill business across Europe America 
            providing both with the support they need to hrive . Our mission is simple yet powerful create a seamless synergy between developers and global project , fueling success for all
          </p>

          <div className="space-y-6 text-sm text-gray-700">
            <div>
              <h3 className="font-bold text-black">OUR VISION</h3>
              <p className="text-base">EduPyramid envisions a world where talented developers regarless of location 
                can access career- changing opportunitie while enable startus to scale faster and innovated more
                affordably .By buliding a bridge between top tech talent and ambitious companies . we're reshaping 
                the tech industry landscape and empowerment growth for both developers and businesses alike
              </p>
            </div>

            <div>
              <h3 className="font-bold text-black">OUR COMMITMENT TO DEVELOPERS</h3>
              <p className="text-base">We’re more than a recruitment network; we’re a developer incubator that suppoert skill development and career advancment .Our rigorous vetting process ensure that our
                client connect with only the best ,and our developer incubator offer resources, real world project and mentorship ,helping developers continously grow and excel. At EduPyramid
                developers don't just find job-they find opportunities to build their career and make an impact globally. 
                 </p>
            </div>

            <div>
              <h3 className="font-bold text-black">WHY STARTUPS WORK WITH US</h3>
              <p className="text-base">Startups and small businesses face unique challenges ecspecially when it comes to find high-quality , Affordable tech telent
                 EduPyramid simplifies process, providingclient with access to pool ti pre-vetted ,skill developer we  understand the demand of fast -paced startup environment  and we're 
                 here to help ou scale efficiently with cost effective innovative and scaleable solution. Together. we drive your success
              </p>
            </div>

            <div>
              <h3 className="font-bold text-black">JOIN US ON OUR MISSION</h3>
              <p className="text-base">Whether you’re a developer ready to take your career to the next level ,or a startup looing to grow with 
                top talent. EduPyramid is your patner in progress. Togethere we're not just filling role ,we’re building future and fostering innovation that knows no boundaies  </p>
            </div>
          </div>
        </section>
      </main>
       <main className="min-h-screen bg-[#f5f7ff] p-6 md:p-12 font-sans">
      <h1 className="text-3xl font-bold text-center mb-10">Contact us</h1>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-8 grid md:grid-cols-3 gap-8">
        {/* Left Intro */}
        <div className="col-span-1">
          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Get in touch</span>
          <h2 className="text-2xl font-bold mt-4 mb-2">We would like to hear from you.</h2>
          <p className="text-sm text-gray-600">
            We're here to help! Whether you have questions about our services, need support, or want to learn more about joining our network, feel free to reach out through any of the options below.
          </p>
        </div>

        {/* Contact Options */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* WhatsApp */}
          <div className="border p-4 rounded-xl shadow-sm">
            <FaWhatsapp className="text-green-500 text-xl mb-2" />
            <h3 className="font-semibold">Chat our support</h3>
            <p className="text-sm text-gray-500">We are here to help</p>
            <a href="https://wa.me/2349035456197" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm mt-2 inline-block">Chat on WhatsApp</a>
          </div>

          {/* Email */}
          <div className="border p-4 rounded-xl shadow-sm">
            <FaEnvelope className="text-gray-600 text-xl mb-2" />
            <h3 className="font-semibold">Send us a mail</h3>
            <p className="text-sm text-gray-500">Speak to us via mail</p>
            <a href="badarunuratullaho@gmail.com" className="text-blue-600 text-sm mt-2 inline-block">contact@asdin.net</a>
          </div>

          {/* Phone */}
          <div className="border p-4 rounded-xl shadow-sm">
            <FaPhone className="text-blue-600 text-xl mb-2" />
            <h3 className="font-semibold">Call us</h3>
            <p className="text-sm text-gray-500">Mon–Fri from 8am to 5pm</p>
            <a href="tel:+2349035456197" className="text-blue-600 text-sm mt-2 inline-block">+234 905 217 8963</a>
          </div>

          {/* Social Media */}
          <div className="border p-4 rounded-xl shadow-sm">
            <FaLink className="text-gray-700 text-xl mb-2" />
            <h3 className="font-semibold">Social Media</h3>
            <p className="text-sm text-gray-500 mb-2">Connect with us..</p>
            <div className="flex space-x-4 text-xl text-gray-600">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="TikTok"><FaTiktok /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
