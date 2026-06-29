import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-[6px]">
            Projects
          </p>

          <h2 className="text-5xl font-bold mt-4 mb-16">
            Things I've Built
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                live={project.live}
                status={project.status}
              />
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Projects;