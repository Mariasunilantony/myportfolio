type ContactCardProps = {
  title: string;
  value: string;
};

function ContactCard({ title, value }: ContactCardProps) {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300">
      <h3 className="text-cyan-400 text-lg font-semibold">{title}</h3>
      <p className="text-gray-300 mt-2 break-words">{value}</p>
    </div>
  );
}

export default ContactCard;