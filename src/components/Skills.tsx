import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[6px]">
          Skills
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Technologies I Work With
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              level={skill.level}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;