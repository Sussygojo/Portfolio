"use client";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-full mb-50 mt-80 flex flex-col justify-center items-center text-center text-white  px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-4 "
      >
        Hi, I'm <span className="text-gray-300"> Nikhil </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-400 max-w-xl"
      >
        I am a Full Stack Developer & AI / Robotics Enthusiast. I build scalable
        web apps and smart automation solutions.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex gap-6 mt-8"
      >
        <a
          href="#projects"
          scroll="false"
          className="px-6 py-3 border border-white border-opacity-20 hover:bg-white/15 transition rounded-md"
        >
          {" "}
          View projects
        </a>
        <a
          href="#contact"
          scroll="false"
          className="px-6 py-3 border border-white border-opacity-20 hover:bg-white/15 transition rounded-md"
        >
          Contact me
        </a>
      </motion.div>
    </section>
  );
}
