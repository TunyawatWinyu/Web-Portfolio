import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
];

export default function Skills() {
  return (
    <section id="about" className=" text-white px-6 md:px-8 lg:px-12 py-12">
      <div className="border-t border-white/15 pt-14">
        <div className="flex justify-between">
          <div>
            <span className="text-sm font-medium">A little about me</span>
          </div>

          <div className="w-150">
            <h2 className="font-sans text-3xl">
              Thoughtfully built. Simple to use.
            </h2>

            <p className="mt-7 text-md font-sans">
              I approach web development with curiosity and care, bringing
              structure, functionality, and attention to detail together to
              build websites that work as well as they look.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-y-10 gap-x-4 mt-12">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-5"
                  >
                    <span className="text-xs font-sans whitespace-nowrap">
                      {skill.name}
                    </span>

                    <Icon size={26} className="text-white" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
