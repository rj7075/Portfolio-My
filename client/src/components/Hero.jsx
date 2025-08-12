import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Ranjeet Yadav</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold mb-6">
              Full Stack Developer
            </h2>
            <p className="text-md mb-8 font-semibold text-gray-500">
              I am a passionate Full Stack Software Developer specializing in
              building scalable and user-friendly web applications. Skilled in
              HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, SQL,
              and MySQL, I have a strong foundation in both frontend and backend
              development, enabling complete end-to-end project delivery.
              Proficient in Python, C, and C++ with expertise in Data
              Structures, Algorithms, and Object-Oriented Programming (OOP) in
              C++, I bring a well-rounded technical skill set to every project.
            </p>
            <p className="text-md mb-8 font-semibold text-gray-500">
              Adept at writing clean, efficient, and maintainable code, I
              combine strong technical skills with analytical thinking to
              deliver optimized, high-performance solutions. I am committed to
              continuous learning and adapting to evolving technologies while
              maintaining a focus on creating seamless, high-quality user
              experiences that meet and exceed project requirements.
            </p>

            <div className="flex space-x-4">
              <Link
                to="/portfolio"
                className="bg-primary text-black border border-primary px-6 py-3 rounded-lg font-medium hover:bg-secondary transition"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-black transition"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className=" w-full h-full md:w-1/2 flex justify-center">
            <div className="relative w-84 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary rounded-full opacity-10"></div>
              <div className="absolute inset-4 border-4 border-primary rounded-full"></div>
              <img
                src="/public/Ranjeet-Yadav3.jpg"
                alt="Developer"
                className="relative w-94 h-100 rounded-md object-cover z-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
