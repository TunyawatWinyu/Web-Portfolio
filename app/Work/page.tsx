import ProjectCard from "../components/ProjectCard";

const WorkSection = () => {
  return (
    <section
      id="work"
      className="w-full max-w-280 mx-auto px-6 md:px-10 pb-14 md:pb-20 text-white flex flex-col gap-5"
    >
      {/* Section Header */}
      <div className="flex justify-between items-center gap-4">
        <p className="font-sans text-xs md:text-sm font-light">Selected Work</p>

        <p className="font-sans text-xs md:text-sm font-light text-white/40 whitespace-nowrap">
          01 — 02 / WEB PROJECTS
        </p>
      </div>

      {/* Projects */}
      <ProjectCard />
    </section>
  );
};

export default WorkSection;
