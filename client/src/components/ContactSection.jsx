import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdt9FLqDPkjd-DWbOAODaVC2abmVTnUI_ujinSjRZABpKjMbA/formResponse";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formBody = new FormData();

    formBody.append("entry.783140003", formData.name);
    formBody.append("entry.1563551126", formData.email);
    formBody.append("entry.407814668", formData.mobile);
    formBody.append("entry.1679191168", formData.message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });

      setTimeout(() => setSuccess(false), 4000);

    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="py-3">
      <div className="container mx-auto px-4">

        <h2 className="section-title">Get In Touch</h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Want a professional website that helps grow your business? Contact us now for a free demo.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* FORM */}
          <div className="lg:w-1/2">

            <form onSubmit={handleSubmit} className="space-y-6 p-6 rounded-lg shadow-md">

              {/* Success Message */}
              {success && (
                <div className="bg-green-100 text-green-700 p-3 rounded-lg">
                  ✅ Message sent successfully! I will contact you soon.
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Mobile
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

          {/* CONTACT INFO */}
          <div className="lg:w-1/2">

            <div className="p-8 rounded-lg shadow-md">

              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>

              <p className="text-gray-600 mb-6">
                Contact now to get your professional website and increase your strong online presence.
              </p>

              <div className="space-y-4">

                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:rj7075yadav@gmail.com">
                    rj7075yadav@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+917290968759">
                    +91 9838692186
                  </a>
                </div>

                <div>
                  <h4 className="font-medium">Location</h4>
                  <p>Gurugram, Haryana</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
