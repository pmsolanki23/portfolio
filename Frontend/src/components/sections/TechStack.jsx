import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiRedux,
  SiVercel,
} from "react-icons/si";
import TechLogoScroll from "./TechLogoScroll";

const TECH = [
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
  { name: "Docker", icon: <FaDocker />, color: "text-blue-400" },
  { name: "Vercel", icon: <SiVercel />, color: "text-black dark:text-white" },
];

export default function TechStack() {
  return (
    <section className="py-28 px-6 max-w-6xl mx-auto text-center">

      {/* TOP TEXT */}
      <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase mb-4">
        Tech Stack
      </p>

      {/* HEADING */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        Tech Behind <span className="gradient-text">My Work</span>
      </h2>

      {/* GRID */}
      <div className="flex flex-wrap justify-center gap-6">

        {TECH.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.1, y: -6 }}
            className="
              relative px-6 py-3 rounded-xl flex items-center gap-3

              bg-white text-gray-800 border border-gray-200
              dark:bg-white/5 dark:text-gray-300 dark:border-white/10

              shadow-md hover:shadow-xl
              transition-all duration-300

              overflow-visible   /* 🔥 FIX */
            "
          >

            {/* ICON */}
            <span className={`text-xl ${tech.color}`}>
              {tech.icon}
            </span>

            {/* TEXT */}
            <span className="font-medium">
              {tech.name}
            </span>

            {/* HOVER GLOW */}
            <span className="
              absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-blue-400/20 to-emerald-400/20
              blur-md transition
            "></span>

          </motion.div>
        ))}

      </div>
      
    </section>
    
  );
}