export default function AboutSection() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "Django",
    "HTML/CSS",
    "Tailwind CSS",
    "Git",
    "Docker",
    "AWS",
    "SQL",
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h2 className="
          text-center
          pt-10
          text-2xl sm:text-3xl md:text-4xl
          font-bold
          mb-8 sm:mb-12
        ">
          About Me
        </h2>

        {/* Main layout */}
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          
          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-84 sm:w-64 md:w-72 lg:w-80 aspect-[3/4]">
              
              <div className="absolute inset-0 bg-primary rounded-xl opacity-10"></div>

              <img
                src="/rj1.png"
                alt="RJ Yadav Full Stack Developer"
                className="relative w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
              Passionate Full Stack Developer
            </h3>

            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              With over 1.5 years of experience in web development, I specialize
              in creating responsive, user-friendly websites and applications.
            </p>

            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              I contribute to open-source projects, learn new technologies,
              and build scalable digital solutions.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-center md:text-left">
                My Skills
              </h4>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="
                      text-sm sm:text-base
                      border border-amber-400
                      px-3 py-1.5 sm:px-4 sm:py-2
                      rounded-full
                      hover:bg-black hover:text-white
                      transition duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume button */}
            <div className="text-center md:text-left">
              <a
                href="/resume.pdf"
                download="RJ_Yadav_Resume.pdf"
                className="
                  inline-block
                  text-sm sm:text-base
                  px-5 py-2.5 sm:px-6 sm:py-3
                  border border-black
                  rounded-lg
                  font-medium
                  hover:bg-black hover:text-white
                  transition duration-300
                "
              >
                Download Resume
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}