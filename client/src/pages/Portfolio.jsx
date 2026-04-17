import ProjectCard from "../components/ProjectCard";

// const projects = [
//   {
//     title: "Property Listing & Management Platform",
//     description:
//       "A full-stack property listing platform where users can list, browse, search, and purchase properties across multiple categories. The system includes role-based authentication for admins, sellers, and buyers, advanced search and filtering, admin approval workflows, cart and checkout functionality, and secure payment integration.",
//     technologies: [
//       "React",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "JWT",
//       "Stripe",
//       "Razorpay",
//       "React Router",
//       "Tailwind CSS",
//       "Cloudinary",
//       "Multer",
//     ],
//     image: "/assetsenseproperty.png",
//     demoUrl: "https://assetsense.in/",
//     codeUrl: "#",
//   },
//   {
//     title: "Hotel Booking Advanced Featured Website",
//     description:
//       "A full-stack hotel booking website with login & register system, role-based authentication for users, admins, and hotel owners, integrated payment gateway, and advanced features like hotel search, filters, and booking management. It also supports hotel registration for owners, admin controls, and a smooth end-to-end booking flow for users.",
//     technologies: [
//       "React",
//       "Node.js",
//       "MongoDB",
//       "Stripe",
//       "Express",
//       "JWT",
//       "Tailwind CSS",
//       "React Router",
//       "cloudinary",
//       "multer",
//     ],
//     image: "/HotelBooking.png",
//     demoUrl: "https://resort-client-b33z.vercel.app/",
//     codeUrl: "#",
//   },
//   {
//   title: "Weather & Air Quality Dashboard",
//   description: "A responsive weather application that provides real-time weather updates, hourly forecasts, historical data, and detailed air quality metrics using geolocation. Includes charts, AQI insights, and interactive UI.",
//   technologies: [
//     "React.js",
//     "Vite",
//     "Tailwind CSS",
//     "Open-Meteo API",
//     "Axios",
//     "React Router",
//     "Recharts / ApexCharts",
//     "React Hot Toast",
//     "Geolocation API"
//   ],
//   image: "/weather.png",
//   demoUrl: "https://weatherapp-amber-rho-61.vercel.app/",
//   codeUrl: "#"
// },
//   {
//     title: "Physiowell Advanced Featured Website",
//     description:
//       "A role-based appointment booking platform where patients can book appointments, doctors can register to offer their services, and admins can manage services and oversee the system, ensuring a seamless healthcare booking experience.",
//     technologies: [
//       "React",
//       "Node.js",
//       "MongoDB",
//       "Stripe",
//       "Express",
//       "JWT",
//       "Tailwind CSS",
//       "React Router",
//       "cloudinary",
//       "multer",
//     ],
//     image: "/AppointmentBooking.png",
//     demoUrl: "https://appointment-booking-jade.vercel.app/",
//     codeUrl: "#",
//   },


//   {
//     title: "Full Stack Blog Platform",
//     description: "A dynamic blog platform with admin dashboard where users can publish blogs, manage categories, and upload images.",
//     technologies: [
//       "Next.js",
//       "Node.js",
//       "MongoDB",
//       "Auth System",
//       "Tailwind CSS",
//       "JWT",
//       "Cloudinary"
//     ],
//     image: "/blog.png",
//     demoUrl: "https://my-blog-k3jr.vercel.app/",
//     codeUrl: "#"
//   },

//   {
//   title: "Gym & Fitness Website",
//   description:
//     "High-converting gym and fitness website designed to attract new members, showcase services, and increase client engagement with modern UI and strong call-to-action sections.",
//   technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
//   image: "/gymwebsite.png",
//   demoUrl: "https://core-conversion-engine.lovable.app/",
//   codeUrl: "#",
// },


//   {
//     title: "Resort-Booking Website",
//     description:
//       "Elegant resort-booking website designed for smooth reservations, stunning gallery displays, and a user-friendly experience that turns visitors into guests.",
//     technologies: ["React", "Node.js", "MongoDB", "Stripe"],
//     image: "/Resort.png",
//     demoUrl: "https://final-resort.vercel.app/",
//     codeUrl: "#",
//   },
//   {
//     title: "Real Estate Website",
//     description:
//       "Modern real estate website built to showcase properties with stunning visuals,perfect for driving sales and inquiries",
//     technologies: ["React", "Firebase", "Tailwind CSS"],
//     image: "/assetsense.png",
//     demoUrl: "https://assestsence.vercel.app/",
//     codeUrl: "#",
//   },
//   {
//     title: "Role Based Service Portal",
//     description:
//       "A secure and scalable portal where services are tailored to user roles, ensuring each user — admin, manager, or client",
//     technologies: ["JavaScript", "API Integration", "Chart.js"],
//     image: "/service.png",
//     demoUrl: "https://service-portal-blue.vercel.app/",
//     codeUrl: "#",
//   },
//   {
//     title: "Interior Designer Website",
//     description:
//       "Showcasing creative interior designs with stunning visuals, portfolio galleries, and service details — crafted to inspire and attract clients.",
//     technologies: ["Python", "Django", "PostgreSQL", "D3.js"],
//     image: "/interiror.png",
//     demoUrl: "https://yourhomefinder.in/interior-page/",
//     codeUrl: "#",
//   },
//   {
//     title: "Virtual Office Website",
//     description:
//       "A premium Virtual Office Solution Provider website with modern UI featuring booking system, WhatsApp & call buttons, and quick form submission for seamless customer interaction.",
//     technologies: [
//       "React",
//       "Node",
//       "Express",
//       "MongoDB",
//       "Tailwind CSS",
//       "React Router",
//     ],
//     image: "/virtualoffice.png",
//     demoUrl: "https://workspaces.assetsense.in/",
//     codeUrl: "#",
//   },
// ];
const projects = [
  {
    title: "Property Listing & Management Platform",
    description:
      "Developed a scalable SaaS platform with multi-role dashboards (Admin, Seller, Buyer), advanced property search, secure payments, and KYC-based user verification.",
    category: "SaaS",
    features: [
      "Multi-role Dashboard",
      "Property Search & Filters",
      "Payment Integration",
      "KYC Verification",
      "Cart & Checkout",
      "Admin Approval Workflow"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Razorpay", "Tailwind CSS"],
    image: "/assetsenseproperty.png",
    demoUrl: "https://assetsense.in/",
    codeUrl: "#",
  },

  {
    title: "Hotel Booking Platform",
    description:
      "Built a full-stack booking system with role-based dashboards (Admin, Hotel Owner, User), real-time booking flow, and integrated payment system.",
    category: "SaaS",
    features: [
      "Role-Based Access",
      "Booking Management",
      "Hotel Registration",
      "Search & Filters",
      "Payment Gateway",
      "Admin Controls"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Tailwind CSS"],
    image: "/HotelBooking.png",
    demoUrl: "https://resort-client-b33z.vercel.app/",
    codeUrl: "#",
  },

  {
  title: "PG Listing & Accommodation Platform",
  description:
    "Developed a full-stack PG listing platform using Next.js with Server-Side Rendering (SSR) and SEO optimization, allowing users to explore PG accommodations with detailed pages, location-based filtering, and high-performance loading.",
  category: "Web Application",
  features: [
    "SEO Optimized SSR Pages",
    "Dynamic PG Listing & Detail Pages",
    "Location-Based Search & Filtering",
    "Fast Loading with Next.js Optimization",
    "Responsive UI for Mobile & Desktop",
    "Image Optimization & Lazy Loading",
    "Scalable Component-Based Architecture"
  ],
  technologies: ["Next.js", "JavaScript", "React", "Tailwind CSS", "SSR", "SEO"],
  image: "/radheradhe.png",
  demoUrl: "https://www.radheradhepg.com/",
  codeUrl: "#",
},

  {
  title: "Finance Dashboard (Multi-Feature UI System)",
  description:
    "Built a modern finance dashboard with role-based transaction management, advanced filtering, and a custom theming system using CSS variables for seamless dark/light mode experience.",
  category: "Frontend",
  features: [
    "Role-based Access (Admin / Viewer)",
    "CRUD Operations for Transactions",
    "Advanced Search, Filter & Sorting",
    "Client-side Pagination",
    "Dark/Light Mode (Custom Theme System)",
    "Responsive Dashboard UI",
    "Real-time Toast Feedback"
  ],
  technologies: [
    "React",
    "Zustand",
    "Tailwind CSS",
    "CSS Variables",
    "React Router",
    "React Icons",
    "React Hot Toast"
  ],
  image: "/finanance.png",
  demoUrl: "https://finance-dashboard-kappa-orcin.vercel.app/",
  codeUrl: "https://github.com/rj7075/financeDashboard",
},

  {
    title: "Weather & Air Quality Dashboard",
    description:
      "Developed an interactive dashboard for real-time weather, forecasts, and air quality insights with charts and geolocation-based data.",
    category: "Full Stack",
    features: [
      "Real-time Weather",
      "Air Quality Index",
      "Charts & Graphs",
      "Geolocation",
      "Responsive UI"
    ],
    technologies: ["React", "Tailwind CSS", "API Integration", "Charts"],
    image: "/weather.png",
    demoUrl: "https://weatherapp-amber-rho-61.vercel.app/",
    codeUrl: "#",
  },

  {
    title: "Physiowell Booking Platform",
    description:
      "Built a role-based healthcare booking system where patients, doctors, and admins interact through dedicated dashboards and booking workflows.",
    category: "SaaS",
    features: [
      "Appointment Booking",
      "Role-Based Dashboards",
      "Admin Management",
      "Doctor Registration",
      "Payment Integration"
    ],
    technologies: ["React", "Node.js", "MongoDB", "JWT", "Stripe"],
    image: "/AppointmentBooking.png",
    demoUrl: "https://appointment-booking-jade.vercel.app/",
    codeUrl: "#",
  },

  {
    title: "Full Stack Blog Platform",
    description:
      "Developed a dynamic blogging platform with admin dashboard, content management system, and image upload functionality.",
    category: "Full Stack",
    features: [
      "Admin Dashboard",
      "Content Management",
      "Image Upload",
      "Authentication",
      "Category Management"
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    image: "/blog.png",
    demoUrl: "https://my-blog-k3jr.vercel.app/",
    codeUrl: "#"
  },

  {
    title: "AI Chatbot",
    description:
      "Developed an AI-powered chatbot for automated user interaction and real-time query handling.",
    category: "AI",
    features: [
      "Automated Chat",
      "Real-time Response",
      "User Interaction",
      "AI Workflow"
    ],
    technologies: ["AI", "Automation"],
    image: "/chatbot.png",
    demoUrl: "https://ai.assetsense.in/webhook/6d094791-5412-4d2c-bdce-7335e980adf9/chat"
  },

  {
    title: "Document Automation System",
    description:
      "Built an AI system to automate document generation and streamline repetitive workflows.",
    category: "AI",
    features: [
      "Document Generation",
      "Workflow Automation",
      "Form Input",
      "AI Processing"
    ],
    technologies: ["AI", "Automation"],
    image: "/documentautomation.png",
    demoUrl: "https://ai.assetsense.in/form/f3a0a382-186f-4ccc-8b12-831716085d25"
  },

  {
    title: "Social Media Automation Tool",
    description:
      "Created an AI-powered tool to generate and automate social media posts efficiently.",
    category: "AI",
    features: [
      "Auto Content Generation",
      "Post Automation",
      "Workflow System",
      "AI Processing"
    ],
    technologies: ["AI", "Automation"],
    image: "/postautomation.png",
    demoUrl: "https://ai.assetsense.in/form/73e3c71e-9e7f-4188-ad96-1b9c0b92ae2f"
  },

  {
    title: "Virtual Office Platform",
    description:
      "Developed a business platform with booking system, lead capture, and customer interaction features.",
    category: "Full Stack",
    features: [
      "Booking System",
      "Lead Management",
      "Form Handling",
      "User Interaction"
    ],
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/virtualoffice.png",
    demoUrl: "https://workspaces.assetsense.in/",
  },

  {
    title: "Role-Based Service Portal",
    description:
      "Built a scalable service platform where different user roles access personalized data and features.",
    category: "Frontend",
    features: [
      "Role-Based Access",
      "Dashboard System",
      "Data Visualization",
      "API Integration"
    ],
    technologies: ["JavaScript", "Chart.js", "API"],
    image: "/service.png",
    demoUrl: "https://service-portal-blue.vercel.app/",
  }
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
