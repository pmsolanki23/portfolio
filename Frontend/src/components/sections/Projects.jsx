import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProjects } from "../../services/api";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((res) => setProjects(res.data));
  }, []);

  return (
    <section className="pt-28 pb-28 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <div className="relative flex items-center justify-center md:justify-between mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left">
          My <span className="gradient-text">Projects</span>
        </h2>

        <a
          href="/projects"
          className="hidden md:block px-6 py-3 rounded-xl text-sm font-semibold
          bg-gradient-to-r from-blue-500 to-emerald-500 text-white
          hover:scale-105 transition"
        >
          View All →
        </a>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        
        {projects.slice(0, 3).map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div
  className="
  w-full

  group relative p-5 rounded-3xl overflow-hidden

  bg-white/70 dark:bg-white/5
  backdrop-blur-xl

  border border-gray-200 dark:border-white/10

  shadow-md hover:shadow-2xl

  transition-all duration-500
  hover:-translate-y-2
"
>
  {/* 🔥 GLOW EFFECT */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 blur-3xl" />
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-400/20 blur-3xl" />
  </div>

  {/* IMAGE */}
  <div className="relative overflow-hidden rounded-2xl">
    <img
      // src={`http://localhost:5000${project.image}`}
src={`${import.meta.env.VITE_API_URL.replace('/api','')}${project.image}`}
      alt={project.title}
      className="
        w-full h-56 md:h-64 object-cover
        transition duration-700
        group-hover:scale-110
      "
    />

    {/* OVERLAY */}
    <div className="
      absolute inset-0 flex items-center justify-center gap-4
      bg-black/60 opacity-0 group-hover:opacity-100
      transition
    ">
      <a href={project.live} target="_blank" className="icon-btn">
        <FaExternalLinkAlt />
      </a>

      <a href={project.github} target="_blank" className="icon-btn">
        <FaGithub />
      </a>
    </div>
  </div>

  {/* CONTENT */}
  <div className="mt-5">
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
      {project.title}
    </h3>

    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed line-clamp-2">
      {project.description}
    </p>

    {/* TECH */}
    <div className="flex flex-wrap gap-2 mt-4">
      {project.tech?.map((t, i) => (
        <span
          key={i}
          className="
            px-3 py-1 text-xs rounded-full

            bg-gray-100 text-gray-700 border border-gray-200
            dark:bg-white/10 dark:text-gray-300 dark:border-white/10

            backdrop-blur-sm
          "
        >
          {t}
        </span>
      ))}
    </div>
  </div>
</div>
          </motion.div>
        ))}
      </div>

      {/* MOBILE BUTTON */}
      <div className="mt-12 flex justify-center md:hidden">
        <a
          href="/projects"
          className="px-6 py-3 rounded-xl text-sm font-semibold
          bg-gradient-to-r from-blue-500 to-emerald-500 text-white
          hover:scale-105 transition"
        >
          View All →
        </a>
      </div>
    </section>
  );
}