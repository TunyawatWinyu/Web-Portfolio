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
    title: "Noir Barber",
    image: "/projects/noir-baber.png",
    description:
      "A modern barbershop website showcasing services, an elegant visual identity and an intuitive appointment booking experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://noirbaber.netlify.app/",
    githubUrl: "https://github.com/TunyawatWinyu/noirbaber",
  },
];

export default function ProjectCard() {
  return (
    <section
      id="work"
      className="w-full max-w-280 mx-auto px-6 md:px-10 py-14 md:py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
        {projects.map((project) => (
          <article key={project.id} className="group min-w-0">
            {/* Project Preview */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white/5">
              <Image
                src={project.image}
                alt={`${project.title} website preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Project Information */}
            <div className="pt-5">
              <h3 className="text-xl md:text-2xl font-semibold">
                {project.title}
              </h3>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs border border-white/20 px-3 py-1.5 rounded-full text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed mt-5 mb-6 text-white/60">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/30 px-4 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Live Project ↗
                </a>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/30 px-4 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black"
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
