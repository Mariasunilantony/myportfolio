type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  status: string;
};

function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  status,
}: ProjectCardProps) {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300">

      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">{title}</h3>

        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
          {status}
        </span>
      </div>

      <p className="text-gray-400 mt-5 leading-7">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 rounded-full bg-white/10 text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <a
          href={github}
          target="_blank"
          className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
        >
          GitHub
        </a>

        <a
          href={live}
          target="_blank"
          className="px-5 py-2 rounded-xl border border-white/20 hover:border-cyan-400 transition"
        >
          Live Demo
        </a>
      </div>

    </div>
  );
}

export default ProjectCard;