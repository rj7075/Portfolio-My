import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mobile
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary text-black border bg-amber-50 border-amber-300 px-6 py-3 rounded-lg font-medium hover:bg-secondary transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-6">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <img
                    className="h-6 bg-white w-6 px-0.5 py-0.3"
                    src="/email1.png"
                    alt="email"
                  />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:john@example.com"
                      className="text-gray-600 hover:text-primary transition"
                    >
                      rj7075yadav@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <img
                    className="h-6 w-6 px-0.5"
                    src="/phone.png"
                    alt="phone"
                  />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 hover:text-primary transition"
                    >
                      +91 9838692186
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <img className="h-6 w-6" src="/location.png" alt="location" />

                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">
                      Gurugram <Haryana></Haryana>(HR).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition"
                    aria-label="Twitter"
                  >
                    <img className="h-6 w-6" src="/twitter.png" alt="twitter" />
                  </a>
                  <a
                    href="https://github.com/rj7075?tab=repositories"
                    className="text-gray-600 hover:text-primary transition"
                    aria-label="GitHub"
                  >
                    <img className="h-6 w-6" src="/github.png" alt="github" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ranjeet-yadav-174865211/"
                    className="text-gray-600 hover:text-primary transition"
                    aria-label="LinkedIn"
                  >
                    <img className="h-6 w-6" src="/linkdin.png" alt="linkdin" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition"
                    aria-label="LinkedIn"
                  >
                    <img
                      className="h-6 w-6"
                      src="/instagram.png"
                      alt="instagram"
                    />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition"
                    aria-label="LinkedIn"
                  >
                    <img
                      className="h-6 w-6"
                      src="/facebook.png"
                      alt="facebook"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
