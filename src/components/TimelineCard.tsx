type TimelineCardProps = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
};

function TimelineCard({
  year,
  title,
  subtitle,
  description,
}: TimelineCardProps) {
  return (
    <div className="relative pl-12">

      <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-cyan-400"></div>

      <div className="absolute left-2 top-7 w-[2px] h-full bg-cyan-500"></div>

      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 mb-10 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

        <p className="text-cyan-400 font-semibold">
          {year}
        </p>

        <h3 className="text-2xl font-bold mt-2">
          {title}
        </h3>

        <h4 className="text-gray-300 mt-2">
          {subtitle}
        </h4>

        <p className="text-gray-400 mt-5 leading-7">
          {description}
        </p>

      </div>

    </div>
  );
}

export default TimelineCard;