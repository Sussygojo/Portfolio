"use client";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  source,
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="group block p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all overflow-hidden relative"
    >
      {/* Glow on hover */}
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <img src={source} alt="Website image" className=" rounded-lg mb-5" />
      <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
        {title}
      </h3>

      <p className="text-sm text-gray-400 mb-4">{description}</p>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="text-xs px-2 py-1 rounded-md bg-white/10 group-hover:bg-white/20 transition"
          >
            {t}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
}
