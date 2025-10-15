"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="about"
      className="py-20 mt-10 mb-30 px-6 text-center max-w-4xl mx-auto scroll-p-3"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-10"
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-bold text-3xl mb-6">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I’m a web developer who enjoys building clean, modern, and
            user-focused digital experiences. I work primarily with React,
            Next.js, Tailwind CSS, and JavaScript and I'm currently working on a
            Financial web application that combinese my interest in technology
            and financial systems. I’m ambitious about refining my development
            style and building scalable, efficient products — especially in the
            tech and finance space.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/About img.jpg"
            alt="My photo"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border border-gray-700 shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
