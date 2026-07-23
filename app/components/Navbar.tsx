import React, { FC } from "react";
import Link from "next/link";
// import AvatarMenu from "./AvatarMenu"; // hidden until real auth exists

const Navbar: FC = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link href="/" className="text-2xl font-jidoka-newsreader">
        JIDOKA
      </Link>
      <div className="flex items-center space-x-8">
        <nav className="flex space-x-4">
          <Link href="#" className="hover:underline hidden">
            Vision
          </Link>
          <Link href="#" className="hover:underline hidden">
            Goals
          </Link>
          <Link href="/members" className="hover:underline">
            Members
          </Link>
        </nav>
        {/* <AvatarMenu /> */}
      </div>
    </header>
  );
}

export default Navbar;
