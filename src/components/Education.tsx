import { motion } from "framer-motion";
import { education } from "../data/education";
import TimelineCard from "./TimelineCard";

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen py-24 px-8"
    >
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-[6px]">
            Education
          </p>

          <h2 className="text-5xl font-bold mt-4 mb-16">
            My Journey
          </h2>

          {education.map((item) => (
            <TimelineCard
              key={item.year}
              year={item.year}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Education;