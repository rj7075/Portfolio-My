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
    <section className="py-6">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-84 h-114 ">
              <div className="absolute inset-0 bg-primary rounded-lg opacity-10"></div>
              <img
                src="/rj1.jpeg"
                alt="Developer"
                className="relative w-full h-full rounded-lg object-cover z-1"
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">
              Passionate Full Stack Developer
            </h3>
            <p className="text-gray-600 mb-6">
              With over 5 years of experience in web development, I specialize
              in creating responsive, user-friendly websites and applications.
              My journey in tech started with a curiosity about how things work,
              which has grown into a passion for building digital solutions that
              solve real-world problems.
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not coding, you can find me contributing to open-source
              projects, learning new technologies, or sharing knowledge through
              tech blogs and workshops.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">My Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-primary border border-amber-400 bg-opacity-10 hover:text-white hover:bg-black text-primary px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="/resume.pdf"
              download="My_Resume.pdf"
              className="inline-block border bg-white bg-primary text-black px-6 py-3 rounded-lg font-medium hover:bg-secondary transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
