import React, { FC } from "react";
import Link from "next/link";
import AvatarMenu from "./AvatarMenu";

const Navbar: FC = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link href="/" legacyBehavior>
        <a className="text-2xl font-jidoka-newsreader">JIDOKA</a>
      </Link>
      <div className="flex items-center space-x-8">
        <nav className="flex space-x-4">
          <Link href="#" legacyBehavior>
            <a className="hover:underline hidden">Vision</a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="hover:underline hidden">Goals</a>
          </Link>
          <Link href="/members" legacyBehavior>
            <a className="hover:underline">Members</a>
          </Link>
        </nav>
        <AvatarMenu />
      </div>
    </header>
  );
}

export default Navbar;
