// components/Footer.tsx
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-gray-200 rounded-t-3xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img src={"/icons/logo.png"} alt="edupyramid logo" className="w-28 h-auto" />
        </div>

        {/* Center: Nav links */}
        <nav className="flex space-x-6 text-sm font-medium text-gray-800">
          <Link href="#intro" className="hover:text-green-500">
            Intro
          </Link>
          <Link href="#programmes" className="hover:text-green-500">
            Programmes
          </Link>
          <Link href="#why" className="hover:text-green-500">
            Why Study With Us
          </Link>
          <Link href="#faq" className="hover:text-green-500">
            Faq
          </Link>
          <Link href="#contact" className="text-green-600 hover:text-green-700">
            Contact Us
          </Link>
        </nav>

        {/* Right: Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          
        >
          <img src={"/icons/arrow-up-remove.png"} alt="edupyramid logo" className="w-10 h-10" />
        </button>
      </div>
    </footer>
  );
}
