export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {/* <h3 className="text-2xl font-bold text-primary">DevPortfolio</h3> */}
            <p className="mt-2 font-semibold text-gray-600">
              Building digital experiences that matter
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/ranjeet-yadav-174865211/"
              className="text-black hover:text-primary transition"
              aria-label="linkdin"
            >
              <img className="h-6 w-6" src="/linkdin.png" alt="linkdin" />
            </a>
            <a
              href="https://github.com/rj7075?tab=repositories"
              className="text-black hover:text-primary transition"
              aria-label="GitHub"
            >
              <img className="h-6 w-6" src="/github.png" alt="Github" />
            </a>
            <a
              href="#"
              className="text-black hover:text-primary transition"
              aria-label="facebook"
            >
              <img className="h-6 w-6" src="/facebook.png" alt="facebook" />
            </a>
            <a
              href="#"
              className="text-black hover:text-primary transition"
              aria-label="instagram"
            >
              <img className="h-6 w-6" src="/instagram.png" alt="instagram" />
            </a>
            <a
              href="#"
              className="text-black hover:text-primary transition"
              aria-label="LinkedIn"
            >
              <img className="h-6 w-6" src="/twitter.png" alt="twitter" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 text-black pt-6 text-center">
          <p>&copy; {currentYear} Ranjeet Yadav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
