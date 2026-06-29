import { motion } from "framer-motion";
import { contact } from "../data/contact";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <section id="contact" className="min-h-screen py-24 px-8">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-[6px]">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4 mb-16">
            Let's Connect
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <ContactCard title="Email" value={contact.email} />
            <ContactCard title="Phone" value={contact.phone} />
            <ContactCard title="Location" value={contact.location} />
            <ContactCard title="LinkedIn" value={contact.linkedin} />

          </div>

          <div className="flex gap-4 mt-10">

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
            >
              GitHub
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/20 hover:border-cyan-400 transition"
            >
              LinkedIn
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;