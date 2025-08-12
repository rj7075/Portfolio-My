import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Resort-Booking Website",
    description:
      "Elegant resort-booking website designed for smooth reservations, stunning gallery displays, and a user-friendly experience that turns visitors into guests.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/Resort.png",
    demoUrl: "https://final-resort.vercel.app/",
    codeUrl: "#",
  },
  {
    title: "Real Estate Website",
    description:
      "Modern real estate website built to showcase properties with stunning visuals,perfect for driving sales and inquiries",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    image: "/assetsense.png",
    demoUrl: "https://assestsence.vercel.app/",
    codeUrl: "#",
  },
  {
    title: "Role Based Service Portal",
    description:
      "A secure and scalable portal where services are tailored to user roles, ensuring each user — admin, manager, or client",
    technologies: ["JavaScript", "API Integration", "Chart.js"],
    image: "/service.png",
    demoUrl: "https://service-portal-blue.vercel.app/",
    codeUrl: "#",
  },
  {
    title: "Interior Designer Website",
    description:
      "Showcasing creative interior designs with stunning visuals, portfolio galleries, and service details — crafted to inspire and attract clients.",
    technologies: ["Python", "Django", "PostgreSQL", "D3.js"],
    image: "/interiror.png",
    demoUrl: "https://yourhomefinder.in/interior-page/",
    codeUrl: "#",
  },
  {
    title: "Fitness Tracker",
    description:
      "Mobile app for tracking workouts, nutrition, and health metrics.",
    technologies: ["React Native", "GraphQL", "Firebase"],
    image: "/r4.jpg",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Recipe Finder",
    description:
      "Search and save recipes with dietary filters and meal planning.",
    technologies: ["Vue.js", "Express", "MongoDB"],
    image: "/r4.jpg",
    demoUrl: "https://yourhomefinder.in/interior-page/",
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
