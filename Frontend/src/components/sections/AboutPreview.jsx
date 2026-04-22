import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="relative py-36 px-6 max-w-7xl mx-auto text-center">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-100px] top-[-100px] w-[300px] h-[300px] bg-blue-400/10 blur-[140px] rounded-full" />
        <div className="absolute right-[-100px] bottom-[-100px] w-[300px] h-[300px] bg-emerald-400/10 blur-[140px] rounded-full" />
      </div>

      {/* SMALL TEXT */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-xs tracking-[0.4em] text-gray-500 mb-4"
      >
        ABOUT ME
      </motion.p>

      {/* MAIN HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto"
      >
        I build{" "}
        <span className="gradient-text">
          modern web experiences
        </span>{" "}
        that are fast, scalable & impactful
      </motion.h2>

      {/* DESC */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
      >
        Passionate MERN Stack Developer focused on crafting high-performance
        applications with clean architecture and premium user experience.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-10"
      >
        <NavLink
          to="/about"
          className="
            inline-block px-8 py-3 rounded-xl font-semibold

            bg-gradient-to-r from-blue-400 to-emerald-400 text-white

            shadow-lg shadow-emerald-400/20
            hover:scale-105 hover:shadow-xl
            transition
          "
        >
          Read Full Story →
        </NavLink>
      </motion.div>

    </section>
  );
}