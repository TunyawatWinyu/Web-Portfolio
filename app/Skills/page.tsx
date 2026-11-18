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
    <section
      id="about"
      className="w-full max-w-280 mx-auto text-white px-6 md:px-10 py-12"
    >
      <div className="border-t border-white/15 pt-10 md:pt-14">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-12">
          {/* Left Column */}
          <div className="lg:w-[30%]">
            <span className="text-sm font-medium">A little about me</span>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[70%]">
            <h2 className="font-sans text-2xl md:text-3xl font-medium tracking-tight">
              Thoughtfully built. Simple to use.
            </h2>

            <p className="mt-6 md:mt-7 text-sm md:text-base font-sans leading-relaxed text-white/80">
              I approach web development with curiosity and care, bringing
              structure, functionality, and attention to detail together to
              build websites that work as well as they look.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-y-10 gap-x-4 mt-10 md:mt-12">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-4"
                  >
                    <span className="text-xs md:text-sm font-sans whitespace-nowrap">
                      {skill.name}
                    </span>

                    <Icon
                      size={26}
                      className="text-white transition-transform duration-300 hover:scale-110"
                    />
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
