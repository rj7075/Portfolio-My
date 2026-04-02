export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

      {/* IMAGE */}
      <div className="h-52 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        {/* CATEGORY BADGE */}
        {project.category && (
          <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full 
bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md backdrop-blur-sm">
  {project.category}
</span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">

        <h3 className="text-xl font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {project.description}
        </p>

        {/* FEATURE TAGS (NEW 🔥) */}
        {project.features && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.features.map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-primary bg-opacity-10 text-primary text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA BUTTONS */}
        <div className="flex gap-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            {project.category === "AI"
              ? "Try Live AI →"
              : "Live Demo →"}
          </a>

          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 font-medium hover:underline"
            >
              GitHub →
            </a>
          )}
        </div>

      </div>
    </div>
  );
}