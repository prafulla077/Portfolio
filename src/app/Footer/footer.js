import React from "react";

export default function Footer() {
  return (
    <div>
      {/* Contact Section */}
      <section id="contact" className="bg-black text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4">I'd love to hear from you!</p>
          <a
            href="mailto:shrestha7prafulla@gmail.com"
            className="bg-white text-black px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Email Me
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white p-4 shadow-md">
        <div className="container mx-auto text-center">

          {/* Contact Info */}
          <div className="mb-4">
            <h3 className="text-lg font-bold">Contact Information</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:shrestha7prafulla@gmail.com"
                className="hover:underline"
              >
                shrestha7prafulla@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:underline">
                +123 456 7890
              </a>
            </p>
            <p>Address: Kathmandu, Nepal</p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-md font-semibold">Follow Me</h4>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-4 text-sm">
            &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
