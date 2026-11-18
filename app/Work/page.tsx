import ProjectCard from "../components/ProjectCard";

const WorkSection = () => {
  return (
    <section className="px-[40px] pb-[72px] text-white flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="font-sans text-sm font-light">Selected Work</p>
        <p className="font-sans text-sm font-light text-gray-500">
          01 — 02 / WEB PROJECTS
        </p>
      </div>
      <ProjectCard />
    </section>
  );
};

export default WorkSection;
