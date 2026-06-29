type SkillCardProps = {
  icon: string;
  name: string;
  level: string;
};

function SkillCard({ icon, name, level }: SkillCardProps) {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300">

      <div className="text-5xl">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mt-5">
        {name}
      </h3>

      <p className="text-cyan-400 mt-2">
        {level}
      </p>

    </div>
  );
}

export default SkillCard;