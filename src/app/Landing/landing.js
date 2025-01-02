import React from "react";

export default function Landing() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Home Section */}
      <section
        id="home"
        className="bg-gradient-to-b from-gray-900 to-black text-white text-center py-20 mt-16"  // Added mt-16
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="text-indigo-400">My Portfolio</span>
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Hi, I'm <span className="font-semibold">Prafulla Shrestha</span>,
            a passionate and driven Computer Engineering student specializing
            in artificial intelligence and deep learning.
          </p>
          <a
            href="#about"
            className="bg-indigo-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-indigo-600 transition-all transform hover:scale-110"
          >
            Learn More About Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="container mx-auto py-16 px-4 text-center pt-32"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800">About Me</h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          I am currently a 4th-year Computer Engineering student, 
          passionate about exploring the world of technology and 
          its potential to drive innovation. Throughout my academic journey, 
          I have gained a strong foundation in programming, algorithms, and data structures, 
          while also specializing in areas like artificial intelligence and machine learning. 
          My curiosity drives me to constantly seek new challenges and opportunities to grow, 
          both academically and professionally. I aim to leverage my skills to create impactful 
          solutions and contribute to the rapidly evolving tech industry.
        </p>
        <a
          href="/CV.pdf"  // Replace with the correct path or URL to your CV
          download
          className="mt-8 inline-block bg-indigo-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-indigo-600 transition-all transform hover:scale-110"
        >
          Download CV
        </a>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="bg-gray-100 py-16 pt-32"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-800">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              title="Languages"
              skills="Python, C, C++, SQL, HTML, CSS, JavaScript"
            />
            <SkillCard
              title="Framework"
              skills="Bootstrap, Django, TensorFlow, PyTorch, YOLOv7, DeepLab, NumPy, Pandas, Scikit-learn, Keras, React"
            />
            <SkillCard 
              title="Tools" 
              skills="Git, GitHub, Jupyter Notebook, Matlab, Elastix, VS code, Kaggle" />
            <SkillCard 
              title="Platform" 
              skills="Google Colab, Kaggle, Windows, Ubuntu, RedHat" />
            <SkillCard 
              title="Soft Skills" 
              skills="Problem-Solving, Collabration, Communication, Time Management, Continuous Learning" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="container mx-auto py-16 px-4 pt-32"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            title="Comparision Between YOLOv7 and CNN-LSTM Fusion for American Sign Language" 
            description="This was a minor project as part of our engineering curriculum, 
              where we developed a YOLO-based model and a CNN-LSTM fusion model to translate 
              American Sign Language. The system was able to recognize a range of basic words. 
              We then evaluated both models based on their F1 scores for real-time and non-real-time 
              applications." />
          <ProjectCard 
            title="Comparative Analysis of CNN LSTM and Transformer for Nepali Image Captioning" 
            description="In this paper, we created various CNN-LSTM and CNN-Transformer models,
              and compared their performance based on 4 different types of BLEU score for Nepali
              Image Captioning in devanagari script." />
          <ProjectCard 
            title="Comparision between Segmentation and Atlas-Based Segmentation for 3D Brain MRI images" 
            description="This is an ongoing project done as a major project for the part of engineering
              curriculum where we are segmenting 3D MRI brain using deeplab v3 and elastix." />
        </div>
      </section>
    </div>
  );
}

function SkillCard({ title, skills }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow transform hover:scale-105">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{skills}</p>
    </div>
  );
}

function ProjectCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-justify text-gray-600">{description}</p>
    </div>
  );
}
