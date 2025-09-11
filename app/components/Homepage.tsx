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
      <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto">
          <span className="italic font-serif">We are devs, people, and teachers of technology's dreams</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-sans">
          Jidoka is the meeting point where innovation, learning, and collaboration unite to drive the digital future.
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
          Empower Your Digital Journey
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Left Illustration */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            <Image
              src={'/images/homepage-computer.jpg'} // Adjust the path if necessary
              alt="Learn and Collaborate"
              width={736} // Adjust width and height for Next/Image performance
              height={546}
              className="w-full h-auto object-contain rounded-lg shadow-md max-w-md"
            />
            <h3 className="mt-6 text-2xl font-semibold text-gray-800 font-sans">Learn and Collaborate</h3>
            <p className="mt-2 text-gray-600 text-lg leading-relaxed font-sans">
              Access interactive courses, practical workshops, and collaborative projects. Exchange knowledge with experienced devs and boost your skills.
            </p>
          </div>

          {/* Right Illustration (replace with another image if you have one) */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            <Image
              src={'/images/homepage-mobile.jpg'} // Assuming you have another image for the right, adjust the path
              alt="Innovation and Development"
              width={736} // Same width/height or adjust as per your image
              height={546}
              className="w-full h-auto object-contain rounded-lg shadow-md max-w-md"
            />
            <h3 className="mt-6 text-2xl font-semibold text-gray-800 font-sans">Innovation and Development</h3>
            <p className="mt-2 text-gray-600 text-lg leading-relaxed font-sans">
              Explore the latest technologies, participate in coding challenges, and contribute to open-source projects. Create solutions that impact the world.
            </p>
          </div>
        </div>

        {/* Small Text Block below illustrations */}
        <p className="mt-12 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-center font-sans">
          Discover a dynamic environment for professional growth, where every line of code is a step towards mastery. Connect with mentors and peers, and become part of the community that is building tomorrow.
        </p>
      </section>

      {/* "WHAT WE BELIEVE" Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <h4 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10 uppercase tracking-wider font-sans">
          WHAT WE BELIEVE
        </h4>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans">
            At Jidoka, the core belief is that technology is a force for good, and developers are its architects. We are dedicated to fostering a space where intellectual curiosity and a collaborative spirit are the pillars. We believe in the power of sharing knowledge, in mentorship as a talent catalyst, and in the importance of a diverse and inclusive community. Here, every member is empowered to explore new ideas, overcome challenges, and reach their full potential, driving not only their career but also the advancement of the tech industry.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-sans">
            We are passionate about seeing skills transform into innovative solutions that impact the real world. We strive to be the epicenter where the boldest ideas take shape. We value diversity of thought and inclusion, promoting a safe space for discussion, constructive criticism, and mentorship. We believe that resilience and adaptability are as important as technical ability. Therefore, Jidoka is not just a community, but a movement that empowers developers to lead change in the digital era.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Homepage;