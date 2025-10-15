"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
export default function Contact() {
  return (
    <section id="contact" className="text-center pb-50 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {" "}
        <h2 className="font-bold text-3xl mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-8">Lets connect !</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="items-center flex-col justify-center text-center"
      >
        <a
          href="mailto: nikhilmanjunm@gmail.com"
          className="flex items-center gap-3 justify-center hover:opacity-80 transition border max-w-xs rounded-3xl place-self-center px-5 py-4 mb-10  bg-white/10 group-hover:bg-white/20"
        >
          <Mail className="w-7 h-7" />
          <span>nikhilmanjunm@gmail.com</span>
        </a>
        <a
          href="https://github.com/SussyGojo"
          className="flex items-center justify-center hover:opacity-80 transition mb-4 border max-w-xs place-self-center px-5 rounded-3xl  bg-white/10 group-hover:bg-white/20"
        >
          <img
            src="/github.svg"
            alt="Github Logo"
            className="w-7 h-7 bg-white rounded-full "
          />
          <span className="p-4"> Sussygojo</span>
        </a>
      </motion.div>
    </section>
  );
}
