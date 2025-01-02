import React from "react";

export default function Header() {
  return (
    <nav className="bg-black text-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-xl font-bold">
          <a href="/">MyPortfolio</a>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-gray-300 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300 transition">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-300 transition">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
