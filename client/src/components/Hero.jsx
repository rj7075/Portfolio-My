import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-6 pb-10 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-10">

          {/* LEFT CONTENT */}
          <div className="md:w-1/2 mb-10 md:mb-0">

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Ranjeet Yadav</span>
            </h1>

            <h2 className="text-xl md:text-3xl font-semibold mb-6">
              Full Stack Software Developer
            </h2>

            <p className="text-md mb-6 font-semibold text-gray-600">
              I design and build scalable web applications with a focus on performance,
              clean architecture, and seamless user experience.
            </p>

            <p className="text-md mb-8 text-gray-500">
              My work includes developing multi-vendor platforms, booking systems,
              and AI-powered applications, handling everything from frontend interfaces
              to backend systems, APIs, and database design.
            </p>

            <div className="mb-8 space-y-2 text-gray-700">

            <p>✔ Build scalable SaaS platforms with multi-role dashboards</p>
            <p>✔ Implement authentication, KYC verification & secure APIs</p>
            <p>✔ Integrate payment gateways, email systems & automation tools</p>
            <p>✔ Develop AI-powered solutions like chatbots & workflow automation</p>
            <p>✔ Deploy full-stack applications on VPS using Nginx</p>

            </div>

            {/* SKILLS SECTION */}
            <div className="mb-8 space-y-4">

              <div>
                <h3 className="font-semibold text-lg">Frontend</h3>
                <p className="text-gray-600 text-sm">
                  React.js, Next.js, JavaScript (ES6+), Typescript(Currently in Learning Phase) ,Tailwind CSS, HTML5, CSS3
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Backend</h3>
                <p className="text-gray-600 text-sm">
                  Node.js, Express.js, REST APIs, Authentication (JWT)
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Database</h3>
                <p className="text-gray-600 text-sm">
                  MongoDB, MySQL
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Core</h3>
                <p className="text-gray-600 text-sm">
                  Data Structures & Algorithms, OOP, DBMS
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Tools</h3>
                <p className="text-gray-600 text-sm">
                  Git, GitHub, Vercel, Postman, Hostinger, VPS Nginnx
                </p>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex space-x-4">
              <Link
                to="/portfolio"
                className="bg-primary text-black border border-primary px-6 py-3 rounded-lg font-medium hover:bg-secondary transition"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-black transition"
              >
                Contact
              </Link>
            </div>

          </div>

          {/* RIGHT IMAGE */}
            <div className="w-full md:w-1/2 mt-[210] flex justify-center md:justify-end">
              <div className="relative w-82 h-84 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]">

                {/* background shape */}
                <div className="absolute inset-0 bg-primary opacity-10 rounded-2xl"></div>

                {/* border frame */}
                <div className="absolute inset-4 border-2 border-primary rounded-2xl"></div>

                <img
                  src="/Ranjeet-Yadav3.jpg"
                  alt="Ranjeet Yadav"
                  className="relative w-full h-full object-cover rounded-xl shadow-xl"
                />
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;