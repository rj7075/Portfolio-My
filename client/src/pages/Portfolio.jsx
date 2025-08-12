import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online store with product catalog, cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/public/r4.jpg",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application for organizing tasks with drag-and-drop functionality.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    image: "/public/r4.jpg",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather information with forecasts and historical data visualization.",
    technologies: ["JavaScript", "API Integration", "Chart.js"],
    image: "/public/r4.jpg",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Social Media Analytics",
    description:
      "Dashboard for tracking engagement metrics across multiple social platforms.",
    technologies: ["Python", "Django", "PostgreSQL", "D3.js"],
    image: "/public/r4.jpg",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Fitness Tracker",
    description:
      "Mobile app for tracking workouts, nutrition, and health metrics.",
    technologies: ["React Native", "GraphQL", "Firebase"],
    image: "/public/r4.jpg",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Recipe Finder",
    description:
      "Search and save recipes with dietary filters and meal planning.",
    technologies: ["Vue.js", "Express", "MongoDB"],
    image: "/public/r4.jpg",
    demoUrl: "#",
    codeUrl: "#",
  },
];

export default function Portfolio() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Portfolio</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one was built to solve a
          specific problem or explore new technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
