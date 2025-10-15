"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "BookSync",
      description:
        "A Book/PDF reader application that saves your reading progress with synching capability across devices.",
      link: "https://github.com/Sussygojo/BookSync",
      tech: ["React", "JavaScript", "Next.js", "Tailwind"],
      source: "/BookSync.png",
      github: "",
    },
    {
      title: "Hand-Pose Interpreter",
      description:
        "A Hand-Pose Interpreter that recognizes few Hand positions and gives us the code.",
      tech: ["Python", "Computer Vision"],
      source: "/image.png",
      link: "https://github.com/Sussygojo/HandSigns",
      github: "#",
    },
  ];
  return (
    <section
      id="projects"
      className="py-50 mb-50 mt-10 scroll-pt-55 text-white px-6 pt"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          href="https://github.com/Sussygojo"
          target="_blank"
          className="inline-block fl px-10 py-6 border-1 border-white/30  rounded-xl mt-6 text-White font-semibold hover:bg-white/10 transition"
        >
          <img
            src="/github.svg"
            alt="Github Logo"
            className="w-7 h-7 bg-white rounded-full inline-block items-center text-center"
          />
          <span className="pl-4">View All Projects</span>
        </Link>
      </div>
    </section>
  );
}
