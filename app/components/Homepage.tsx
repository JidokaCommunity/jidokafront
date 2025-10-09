import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Homepage: FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar (Assuming it's a separate component, not included here) */}
      {/* Example if you were to include it:
      <nav className="w-full py-4 px-8 bg-white shadow-sm flex items-center justify-between fixed top-0 z-50">
        <div className="text-xl font-bold text-gray-900 tracking-wide">JIDOKA</div>
        <ul className="flex space-x-6">
          <li><Link href="/vision"><a className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Vision</a></Link></li>
          <li><Link href="/community"><a className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Community</a></Link></li>
          <li><Link href="/about"><a className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">About Us</a></Link></li>
          <li><Link href="/profile"><a className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">My Profile</a></a></Link></li>
        </ul>
        <Link href="/login" legacyBehavior>
          <a className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 ml-6">Log In</a>
        </Link>
      </nav>
      */}

      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-gray-200 to-slate-200">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto">
          <span className="italic font-serif">Training new developers with cutting-edge technology</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-sans">
          Non-profit community since 2017. We enable knowledge so anyone can learn to program, reducing gaps in gender, social status, profession, and age.
        </p>
        <div className="mt-8">
          <Link href="/members" legacyBehavior>
            <a className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-sans inline-flex items-center justify-center">
              Join the Community
            </a>
          </Link>
        </div>
      </section>

      {/* Main Content Section with Illustrations */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10 font-sans">
          A Chain of Favors
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Left Illustration */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            <Image
              src={'/images/homepage-people.jpg'}
              alt="Learn and Collaborate"
              width={700}
              height={500}
              className="object-contain rounded-lg shadow-md max-w-md"
            />
            <h3 className="mt-6 text-2xl font-semibold text-gray-800 font-sans">Learn and Collaborate</h3>
            <p className="mt-2 text-gray-600 text-lg leading-relaxed font-sans">
              We create minimum viable products while you acquire technical and attitudinal skills to enter the Tech world.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            <Image
              src={'/images/homepage-people.jpg'}
              alt="Train New Jidokas"
              width={700}
              height={500}
              className="object-contain rounded-lg shadow-md max-w-md"
            />
            <h3 className="mt-6 text-2xl font-semibold text-gray-800 font-sans">Train New Jidokas</h3>
            <p className="mt-2 text-gray-600 text-lg leading-relaxed font-sans">
              If you have been a Jidoka before, our vocation of service calls us to train new Jidokas. We share knowledge and experience.
            </p>
          </div>
        </div>

        {/* Small Text Block below illustrations */}
        <p className="mt-12 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-center font-sans">
          We start from a fundamental principle: anyone can learn to program. Join our community and be part of the change.
        </p>
      </section>

      {/* "OUR MISSION" Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <h4 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10 uppercase tracking-wider font-sans">
          OUR MISSION
        </h4>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans">
            We are a non-profit community founded in 2017, whose purpose is to serve people who want to learn to program by enabling knowledge, training new developers with cutting-edge technology through the creation of minimum viable products.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-sans">
            We acquire technical and attitudinal skills to enter the Tech world, reducing gaps in gender, social status, profession, and age. We are a chain of favors: if you have been a Jidoka before, our vocation of service calls us to train new Jidokas. We start from a fundamental principle that anyone can learn to program.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Homepage;