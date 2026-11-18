import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Osteria Milano",
    image: "/projects/osteria-milano.png",
    description:
      "An Italian restaurant website pairing atmospheric photography with an elegant menu and clear table-reservation prompts.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://osteriamilano-project.netlify.app/",
    githubUrl: "https://github.com/TunyawatWinyu/osteriamilano",
  },
  {
    id: 2,
    title: "Noir Baber",
    image: "/projects/noir-baber.png",
    description:
      "A modern barbershop website showcasing services, an elegant visual identity and an intuitive appointment booking experience.",
    technologies: ["React", "Typescript", "Tailwind CSS"],
    liveUrl: "https://noirbaber.netlify.app/",
    githubUrl: "https://github.com/TunyawatWinyu/noirbaber ",
  },
];

export default function ProjectCard() {
  return (
    <section id="projects" className="py-20">
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group overflow-hidden rounded-xl"
          >
            {/* Project Preview */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} website preview`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Project Information */}
            <div className="py-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs border px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm mt-4 mb-6 text-gray-500">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-4 py-3 transition-all duration-200 hover:bg-white hover:text-black"
                >
                  Live Project ↗
                </a>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border px-4 py-3 transition-all duration-200 hover:bg-white hover:text-black"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
