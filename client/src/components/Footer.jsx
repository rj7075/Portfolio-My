import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-black pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 4 column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/mylogo.png"
                alt="RJ Yadav Logo"
                className="h-9 w-10 object-contain"
              />
              <h3 className="text-2xl font-bold">RANJEET YADAV</h3>
            </div>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Full Stack Developer creating modern, scalable and user-friendly
              web applications.
            </p>
          </div>

          {/* Column 2: Menu Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>

            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/" className="hover:text-black transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-black transition">
                  About
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-black transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-black transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/resume.pdf" className="hover:text-black transition">
                  Download Resume
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>

            <div className="flex gap-4">

              <a
                href="https://github.com/rj7075"
                target="_blank"
                className="text-xl hover:text-gray-800 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ranjeet-yadav-174865211/"
                target="_blank"
                className="text-xl hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="text-xl hover:text-blue-500 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="text-xl hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="text-xl hover:text-blue-400 transition"
              >
                <FaTwitter />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-600 text-sm">
          © {currentYear} Ranjeet Yadav. All rights reserved.
        </div>

      </div>
    </footer>
  );
}