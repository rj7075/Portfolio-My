import ProjectCard from "../components/ProjectCard";


const projects = [
  {
    title: "Property Listing & Management Platform",
    description:
  "Developed a full-stack multi-vendor real estate SaaS platform where vendors can register, complete KYC verification, publish property listings, generate leads, and manage their business operations. Implemented end-to-end authentication, vendor and user management, CRM, lead tracking, payment processing, advanced search & filters, chatbot integration, order management, CMS, and comprehensive admin dashboards with scalable architecture using Next.js, Node.js, MongoDB, and JWT authentication.",
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
  title: "Blood Bank Management System",
  description:
    "Built a secure healthcare management platform that streamlines blood inventory management and blood request processing between hospitals and receivers. Integrated role-based access control, JWT authentication, blood compatibility validation, and scalable REST APIs using Next.js, Node.js, Express.js, and MongoDB.",
  category: "Healthcare Management Platform",
  features: [
    "Hospital & Receiver Portals",
    "Blood Inventory Management",
    "Blood Request Workflow",
    "Blood Group Compatibility Engine",
  ],
  technologies: [
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "bcrypt",
    "Zod",
    "Tailwind CSS"
  ],
  image: "/blood.png",
  demoUrl: "https://bloodbank-puce-one.vercel.app/",
  codeUrl: "#",
},

{
  title: "My Work Estate - Real Estate Management Platform",
  description:
    "Developed a comprehensive real estate platform that enables users to explore and manage multiple property categories, including residential, commercial, rental, and investment properties. Built a complete ecosystem with property listings, CMS-driven blogs, admin dashboard, payment gateway integration, order management, mini CRM, and secure authentication using JWT and HTTP-only cookies.",
  category: "Real Estate Web Application",
  features: [
    "Multi-Category Property Listings",
    "Property Search & Advanced Filtering",
    "Property Detail Pages",
  
  ],
  technologies: [
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "HTTP Only Cookies",
    "Tailwind CSS",
    "REST API",
    "Cloudinary",
    "Payment Gateway API"
  ],
  image: "/mywork.png",
  demoUrl: "https://myworkestate.com",
  codeUrl: "#",
},

{
  title: "Kisan Khad Bhandar & Building Material",
  description:
    "Developed a business website for a building material and agricultural supplier, enabling customers to explore products, request quotations, and inquire about transport services, fertilizers, seeds, cement, sand, bricks, and construction materials online." ,
  category: "Business Website",
  features: [
    "Product Showcase",
    "Building Material Listings",
    "Agriculture Product Listings",
    "Transport Service Information",
    "Inquiry & Quote Forms",
    "WhatsApp Integration",
    "SEO Optimized Pages",
    "Responsive Design"
  ],
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "JavaScript",
    "SEO"
  ],
  image: "/kisan.png",
  demoUrl: "https://www.kisankhadbhandarbuildingmaterial.com/",
  codeUrl: "#",
},

  {
    title: "Hotel Booking Platform",
    description:
  "Developed a full-stack Hotel Management SaaS platform that enables hotel owners to register, manage properties, list rooms, handle bookings, and track reservations through dedicated dashboards. Built a complete booking ecosystem featuring secure authentication, hotel and room management, availability tracking, booking workflows, payment integration, user management, role-based access control, advanced search and filtering, customer inquiry management, and admin controls using React.js, Node.js, Express.js, MongoDB, and JWT authentication.",
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
  title: "The Work Lounge",
  description:
    "Developed a coworking and virtual office platform that allows users to explore and inquire about private cabins, meeting rooms, conference rooms, and virtual office services through a modern and responsive web experience.",
  category: "Workspace Management Platform",
  features: [
    "Virtual Office Services",
    "Private Cabin Listings",
    "Meeting Room Booking",
    "Conference Room Management",
    "Lead & Inquiry System",
    "Admin Dashboard",
    "CMS Management",
    "SEO Optimized Pages"
  ],
  technologies: [
    "Next.js",
    "Node.js",
    "MongoDB",
    "JWT",
    "Tailwind CSS"
  ],
  image: "/thework.png",
  demoUrl: "https://theworklounge.in/",
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
