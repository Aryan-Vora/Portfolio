import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-10 z-50">
      <nav>
        <ul id="myDIV">
          <Link rel="noopener" scroll={false} target="_self" href="#home">
            Home
          </Link>
          <Link
            rel="noopener"
            scroll={false}
            target="_self"
            href="#about"
            className="mobile-hidden"
          >
            About
          </Link>
          <Link
            rel="noopener"
            scroll={false}
            target="_self"
            href="#projects"
            className="mobile-hidden"
          >
            Projects
          </Link>
          <Link
            rel="noopener"
            target="_self"
            href="mailto:voraaryan1@gmail.com"
            className="mobile-hidden"
          >
            Contact
          </Link>
          <Link
            rel="noopener"
            target="_self"
            href="latexresume.pdf"
            className="mobile-hidden"
          >
            Resume
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
