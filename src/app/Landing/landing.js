import React from "react";

export default function Landing() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Home Section */}
      <section id="home" className="bg-black text-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg mb-6">
            Hi, I'm Prafulla Shrestha, a passionate enthusiastic developer.
          </p>
          <a
            href="#contact"
            className="bg-white text-black px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          I am a skilled developer with experience in creating web applications,
          machine learning projects, and more. I love solving problems and
          building things that make an impact.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-lg">Web Development</h3>
              <p className="text-gray-600">React, HTML, CSS, JavaScript</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-lg">Machine Learning</h3>
              <p className="text-gray-600">Python, TensorFlow, PyTorch</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-lg">UI/UX Design</h3>
              <p className="text-gray-600">Figma, Adobe XD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Project 1</h3>
            <p className="text-gray-600">Description of project 1</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Project 2</h3>
            <p className="text-gray-600">Description of project 2</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Project 3</h3>
            <p className="text-gray-600">Description of project 3</p>
          </div>
        </div>
      </section>
    </div>
  );
}
