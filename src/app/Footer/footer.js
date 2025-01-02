import React from "react";

export default function Footer() {
  return (
    <div>
      {/* Footer Section */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-8 shadow-xl mt-12">
        <div className="container mx-auto text-center">
          
          {/* Contact Info with an id */}
          <div id="contact" className="mb-6">
            <h3 className="text-xl font-semibold text-gray-300">Contact Information</h3>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:shrestha7prafulla@gmail.com"
                className="hover:underline text-indigo-400"
              >
                shrestha7prafulla@gmail.com
              </a>
            </p>
            <p className="mt-2">
              Phone:{" "}
              <a href="tel:+977 9810354021" className="hover:underline text-indigo-400">
                +977 9810354021
              </a>
            </p>
            <p className="mt-2">Address: Kathmandu, Nepal</p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-300">Follow Me</h4>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-white transition"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-white transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
