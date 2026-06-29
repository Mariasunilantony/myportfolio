import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import portfolio from "../data/portfolio";
import profile from "../assets/maria.jpeg";
import resume from "../assets/resume.pdf";

function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen bg-[#09090B] text-white flex items-center"
>
      <div className="max-w-7xl mx-auto px-8 w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* LEFT SIDE */}

          <div>

            <p className="text-cyan-400 uppercase tracking-[6px]">
              Welcome
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mt-5 leading-tight">
              {portfolio.name}
            </h1>

            <div className="text-2xl text-cyan-400 mt-6 font-semibold">
  <TypeAnimation
    sequence={[
      "Aspiring Full Stack Developer",
      1800,
      "Frontend Developer",
      1800,
      "UI/UX Enthusiast",
      1800,
      "Python Learner",
      1800,
      "Always Learning 🚀",
      1800,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</div>

            <p className="text-gray-500 leading-8 mt-8 max-w-xl">
              {portfolio.tagline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">

  <a
    href={resume}
    download
    className="px-6 py-3 rounded-full bg-cyan-500 text-white font-medium hover:bg-cyan-400 transition-all duration-300 hover:scale-105"
  >
    📄 Resume
  </a>

  <a
    href={portfolio.github}
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
  >
    💻 GitHub
  </a>

  <a
    href={portfolio.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
  >
    🔗 LinkedIn
  </a>
  <a
  href="https://myportfolio-iota-flame-26.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
>
  🌐 Live Portfolio
</a>

</div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center">

  <motion.div
    className="relative"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1,
      ease: "easeOut",
    }}
  >

    <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-25"></div>

    <img
      src={profile}
      alt="Maria Sunil Antony"
      className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
    />

  </motion.div>

</div>

        </div>

      </div>
    </section>
  );
}

export default Hero;