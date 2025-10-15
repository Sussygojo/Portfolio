"use client";
import react, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const GoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <Link
          href="/"
          scroll={false}
          onClick={GoTop}
          className="text-lg font-bold tracking-wide"
        >
          Niko
        </Link>
        <div className="hidden md:flex gap-6 text-sm">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="hover:text-gray-300 transition"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, "skills")}
            className="hover:text-gray-300 transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="hover:text-gray-300 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hover:text-gray-300 transition"
          >
            Contact
          </a>
          <a
            href="/Resume W port.pdf"
            target="_blank"
            className="hover:text-gray-300 transition border px-4 rounded-xl  bg-white text-black font-medium"
          >
            Resume
          </a>
        </div>
        {/* mobile menu button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-[#0a0a0a] border-t border-white/10">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="hover:text-gray-400 transition"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="hover:text-gray-400 transition"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hover:text-gray-400 transition"
          >
            Contact
          </a>
          <a
            href="/Resume W port.pdf"
            target="_blank"
            className="hover:text-gray-300 transition border px-4 rounded-xl  bg-white text-black font-medium"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
