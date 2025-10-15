"use client";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiLinux,
  SiPython,
  SiFastapi,
  SiDocker,
  SiPostgresql,
} from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      items: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Python", icon: <SiPython /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Postgres", icon: <SiPostgresql /> },
      ],
    },
    {
      title: "Tools / DevOps",
      items: [
        { name: "Git", icon: <SiGit /> },
        { name: "Linux / CLI", icon: <SiLinux /> },
        { name: "Docker", icon: <SiDocker /> },
      ],
    },
  ];
  return (
    // bg-[#0a0a0a]
    <section id="skills" className="py-24 px-6 mt-50  text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
        Skills & Technologies
      </h2>
      <p className="text-xl font-medium text-center max-w-2x mb-10">
        Technology Stack i work with
      </p>
      {/* max width is 6xl margin auto and sapce-y-12 means margin-block of 48px on y */}
      <div className="max-w-6xl mx-auto space-y-12">
        {categories.map((category, idx) => (
          <div key={idx}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xl font-semibold mb-6 uppercase tracking-wide text-gray-300 "
            >
              {category.title}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.items.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 flex flex-col items-center justify-center rounded-lg border-white/10 bg-white/5 background-blur-md hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="text-sm text-gray-300">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
