import React, { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link href="/" legacyBehavior>
        <a className="text-2xl font-jidoka-newsreader">JIDOKA</a>
      </Link>
      <div className="flex items-center space-x-8">
        <nav className="flex space-x-4">
          <Link href="#" legacyBehavior>
            <a className="hover:underline">Vision</a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="hover:underline">Goals</a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="hover:underline">Who we are</a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="hover:underline">My profile</a>
          </Link>
        </nav>
        <button className="bg-[#1F5D6B] text-white px-4 py-2 rounded">Log Out</button>
      </div>
    </header>
  );
}

export default Navbar;
