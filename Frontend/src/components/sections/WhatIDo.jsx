import { motion } from "framer-motion";

const SKILLS = [
  "Full Stack Development",
  "UI/UX Design",
  "API Integration",
  "Authentication Systems",
  "Database Design",
  "Performance Optimization",
  "Responsive Design",
  "Deployment & Hosting",
];

export default function WhatIDo() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">

      {/* SMALL TEXT */}
      <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase mb-4">
        What I Do
      </p>

      {/* HEADING */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        What I{" "}
        <span className="gradient-text">
          Build
        </span>
      </h2>

      {/* PILLS */}
      <div className="flex flex-wrap justify-center gap-5">

        {SKILLS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.08, y: -4 }}
            className="
              relative px-6 py-2 rounded-full text-sm font-medium cursor-pointer
              overflow-hidden group

              bg-white text-gray-800 border border-gray-200
              dark:bg-white/5 dark:text-gray-300 dark:border-white/10

              shadow-sm hover:shadow-xl
              transition-all duration-300
            "
          >

            {/* GLOW */}
            <span className="
              absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-blue-400 to-emerald-400
              blur-[6px] transition duration-300
            "></span>

            {/* TEXT */}
            <span className="relative z-10">
              {item}
            </span>

          </motion.div>
        ))}

      </div>
    </section>
  );
}