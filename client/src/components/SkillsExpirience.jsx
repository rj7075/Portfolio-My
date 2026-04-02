import React from "react";

const Skills = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Skills & Expertise
        </h2>
       <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
  Built and deployed real-world full stack applications with end-to-end ownership, 
  handling everything from frontend interfaces to backend systems, integrations, 
  and scalable deployment.
</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Frontend */}
          <div className="p-6 bg-primary rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-3">Frontend Development</h3>
            <p className="text-gray-600 text-sm">
              React.js, Next.js, JavaScript (ES6+), Tailwind CSS, responsive UI development
            </p>
          </div>

          {/* Backend */}
          <div className="p-6 bg-primary rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-3">Backend Development</h3>
            <p className="text-gray-600 text-sm">
              Node.js, Express.js, REST API design, middleware, scalable backend architecture
            </p>
          </div>

          {/* Database */}
          <div className="p-6 bg-primary rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-3">Database Management</h3>
            <p className="text-gray-600 text-sm">
              MongoDB, MySQL, schema design, efficient data handling
            </p>
          </div>

          {/* Auth */}
          <div className="p-6 bg-primary rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-3">Authentication & Security</h3>
            <p className="text-gray-600 text-sm">
              JWT authentication, role-based access control, mobile OTP verification
            </p>
          </div>

          {/* Integrations */}
          <div className="p-6 bg-primary rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-3">Integrations</h3>
            <p className="text-gray-600 text-sm">
              Payment gateway integration, Cashfree KYC verification, email services, notifications & alerts
            </p>
          </div>

          {/* Systems */}
          <div className="p-6 bg-primary rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-3">System Development</h3>
            <p className="text-gray-600 text-sm">
              Multi-vendor platforms, SaaS applications, admin dashboards, booking systems
            </p>
          </div>

          {/* Features */}
          <div className="p-6 bg-primary rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-3">Advanced Features</h3>
            <p className="text-gray-600 text-sm">
              Search, filtering, sorting, lead management, order management systems
            </p>
          </div>{/* Systems & Architecture */}
            <div className="p-6 bg-primary rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-3">System Architecture</h3>
            <p className="text-gray-600 text-sm">
                Designed and developed multi-role platforms with dedicated dashboards 
                for Super Admin, Admin, Vendors, and Users, ensuring secure access and 
                personalized data visibility for each role.
            </p>
            </div>

            {/* Dashboards */}
            <div className="p-6 bg-primary rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-3">Dashboard Systems</h3>
            <p className="text-gray-600 text-sm">
                Built dynamic dashboards with role-based data access, analytics, 
                booking management, order tracking, and lead management systems.
            </p>
            </div>

            {/* Advanced Features */}
            <div className="p-6 bg-primary rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-3">Advanced Features</h3>
            <p className="text-gray-600 text-sm">
                Implemented search, filtering, sorting, and real-time data handling 
                for complex applications with multiple user interactions.
            </p>
            </div>

          {/* Deployment */}
          <div className="p-6 bg-primary rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-3">Deployment & DevOps</h3>
            <p className="text-gray-600 text-sm">
              Nginx, VPS deployment, Hostinger, domain setup, production hosting
            </p>
          </div>

          {/* Tools */}
          <div className="p-6 bg-primary rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-3">Tools & Workflow</h3>
            <p className="text-gray-600 text-sm">
              Git, GitHub, Postman, API testing, version control
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;