import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";

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

export default function TechLogoScroll() {
  return (
    <section className="py-28 -mt-36 overflow-hidden">

      <div className="relative overflow-hidden">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 w-12 sm:w-20 md:w-28 lg:w-40 h-full bg-gradient-to-r from-white via-white/70 to-transparent dark:from-[#020617] dark:via-[#020617]/80 z-10" />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 w-12 sm:w-20 md:w-28 lg:w-40 h-full bg-gradient-to-l from-white via-white/70 to-transparent dark:from-[#020617] dark:via-[#020617]/80 z-10" />

        {/* SCROLL */}
        <motion.div
  className="flex gap-6 py-5 sm:gap-8 md:gap-10 lg:gap-14 w-max"
  animate={{ x: ["0%", "-50%"] }}
  transition={{
    repeat: Infinity,
    duration: 18,
    ease: "linear",
  }}
>
          {[...TECH, ...TECH].map((tech, i) => (
            <div
              key={i}
              className="
                relative flex flex-col items-center justify-center
                gap-4 px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-7 lg:px-10 lg:py-8 rounded-2xl

                bg-white text-gray-800 border border-gray-200
                dark:bg-white/5 dark:text-gray-200 dark:border-white/10

                backdrop-blur-xl
                shadow-md dark:shadow-xl

                transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-2
                hover:shadow-[0_10px_40px_rgba(52,211,153,0.25)]

w-[130px] h-[110px]
sm:w-[160px] sm:h-[130px]
md:w-[190px] md:h-[140px]
lg:w-[220px] lg:h-[160px]
                overflow-visible   /* 🔥 FIX CUT */
                group
              "
            >
              {/* ICON */}
              <span
                className={`
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-300
                  ${tech.color}
                  group-hover:scale-110
                `}
              >
                {tech.icon}
              </span>

              {/* TEXT */}
              <span className="
                text-base font-semibold tracking-wide text-center
                text-gray-700 dark:text-gray-300
              ">
                {tech.name}
              </span>

              {/* GLOW EFFECT */}
              <div className="
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                bg-gradient-to-r from-blue-400/10 to-emerald-400/10
                blur-xl transition duration-300
              "></div>

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}