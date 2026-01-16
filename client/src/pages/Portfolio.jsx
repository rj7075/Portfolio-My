import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Property Listing & Management Platform",
    description:
      "A full-stack property listing platform where users can list, browse, search, and purchase properties across multiple categories. The system includes role-based authentication for admins, sellers, and buyers, advanced search and filtering, admin approval workflows, cart and checkout functionality, and secure payment integration.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Stripe",
      "Razorpay",
      "React Router",
      "Tailwind CSS",
      "Cloudinary",
      "Multer",
    ],
    image: "/assetsenseproperty.png",
    demoUrl: "https://assetsense.in/",
    codeUrl: "#",
  },
  {
    title: "Hotel Booking Advanced Featured Website",
    description:
      "A full-stack hotel booking website with login & register system, role-based authentication for users, admins, and hotel owners, integrated payment gateway, and advanced features like hotel search, filters, and booking management. It also supports hotel registration for owners, admin controls, and a smooth end-to-end booking flow for users.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Express",
      "JWT",
      "Tailwind CSS",
      "React Router",
      "cloudinary",
      "multer",
    ],
    image: "/HotelBooking.png",
    demoUrl: "https://resort-client-b33z.vercel.app/",
    codeUrl: "#",
  },
  {
    title: "Physiowell Advanced Featured Website",
    description:
      "A role-based appointment booking platform where patients can book appointments, doctors can register to offer their services, and admins can manage services and oversee the system, ensuring a seamless healthcare booking experience.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Express",
      "JWT",
      "Tailwind CSS",
      "React Router",
      "cloudinary",
      "multer",
    ],
    image: "/AppointmentBooking.png",
    demoUrl: "https://appointment-booking-jade.vercel.app/",
    codeUrl: "#",
  },

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
    title: "Virtual Office Website",
    description:
      "A premium Virtual Office Solution Provider website with modern UI featuring booking system, WhatsApp & call buttons, and quick form submission for seamless customer interaction.",
    technologies: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "React Router",
    ],
    image: "/virtualoffice.png",
    demoUrl: "https://workspaces.assetsense.in/",
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
