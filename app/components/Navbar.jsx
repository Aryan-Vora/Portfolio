import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-10">
      <nav>
        <ul id="myDIV">
          <Link rel="noopener" target="_self" href="#home">
            Home
          </Link>
          <Link rel="noopener" target="_self" href="#about">
            About
          </Link>
          <Link rel="noopener" target="_self" href="#projects">
            Projects
          </Link>
          <Link
            rel="noopener"
            target="_self"
            href="mailto:voraaryan1@gmail.com"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
