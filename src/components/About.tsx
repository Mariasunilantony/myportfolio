import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24 px-8"
    >
      <div className="max-w-7xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-[6px]">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Who am I?
          </h2>

          <p className="text-gray-400 leading-8 mt-8 max-w-3xl">
            I'm Maria Sunil Antony, a Computer Science student at
            Christ College of Engineering.

            I enjoy designing beautiful user interfaces,
            learning modern web technologies and building
            interactive applications that solve real problems.

            Every project teaches me something new, and I'm
            continuously improving my skills in frontend
            development, UI/UX, Python and Firebase.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">

  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300">
    <h3 className="text-2xl font-bold">🎓 Education</h3>
    <p className="text-gray-400 mt-4">
      B.Tech Computer Science
      <br />
      Christ College of Engineering
    </p>
  </div>

  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300">
    <h3 className="text-2xl font-bold">💻 Frontend</h3>
    <p className="text-gray-400 mt-4">
      HTML
      <br />
      CSS
      <br />
      JavaScript
      <br />
      React
    </p>
  </div>

  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300">
    <h3 className="text-2xl font-bold">🎨 UI / UX</h3>
    <p className="text-gray-400 mt-4">
      Figma
      <br />
      Responsive Design
      <br />
      User-Centered Thinking
    </p>
  </div>

  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300">
    <h3 className="text-2xl font-bold">🚀 Currently Learning</h3>
    <p className="text-gray-400 mt-4">
      React
      <br />
      Node.js
      <br />
      Firebase
      <br />
      Python
    </p>
  </div>

</div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;