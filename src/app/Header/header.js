import React from "react";

export default function Header() {
  return (
    <nav className="bg-gradient-to-b from-black to-gray-900 text-white p-6 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-extrabold tracking-wider">
          <a href="/" className="text-white hover:text-indigo-400 transition-colors">
            MyPortfolio
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg">
          <li>
            <a
              href="#home"
              className="hover:text-indigo-400 transition-all transform hover:scale-110"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-indigo-400 transition-all transform hover:scale-110"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-indigo-400 transition-all transform hover:scale-110"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-indigo-400 transition-all transform hover:scale-110"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition-all transform hover:scale-110"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
