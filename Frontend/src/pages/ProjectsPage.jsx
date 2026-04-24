// // import { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import { getProjects } from "../services/api";
// // import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// // export default function Projects() {
// //   const [projects, setProjects] = useState([]);
// //   const [filter, setFilter] = useState("All");

// //   useEffect(() => {
// //     getProjects().then((res) => setProjects(res.data));
// //   }, []);

// //   const categories = ["All", "Frontend", "Full Stack"];

// //   const filteredProjects =
// //     filter === "All"
// //       ? projects
// //       : projects.filter((p) =>
// //           p.tech?.some((t) => t.toLowerCase().includes(filter.toLowerCase())),
// //         );

// //   return (
// //     <section className="relative pt-36 pb-28 px-6 max-w-7xl mx-auto">
// //       {/* 🔥 BACKGROUND GLOW */}
// //       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10 blur-3xl"></div>

// //       {/* 🔥 HERO */}
// //       <div className="text-center mb-16">
// //         <h1 className="text-5xl font-bold gradient-text mb-4">My Work</h1>

// //         <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
// //           A collection of projects focused on performance, scalability, and
// //           real-world problem solving.
// //         </p>
// //       </div>

// //       {/* 🎯 FILTER */}
// //       <div className="flex justify-center flex-wrap gap-3 mb-14">
// //         {categories.map((c) => (
// //           <button
// //             key={c}
// //             onClick={() => setFilter(c)}
// //             className={`
// //               px-5 py-2 rounded-full text-sm transition-all duration-300

// //               ${
// //                 filter === c
// //                   ? "bg-gradient-to-r from-blue-400 to-emerald-400 text-white font-semibold shadow-md scale-105"
// //                   : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:border-white/10 dark:hover:bg-white/10"
// //               }
// //             `}
// //           >
// //             {c}
// //           </button>
// //         ))}
// //       </div>

// //       {/* 📦 GRID */}
// //       <div className="grid md:grid-cols-3 gap-8">
// //         {filteredProjects.map((project, index) => (
// //           <motion.div
// //             key={project._id}
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: index * 0.08 }}
// //             whileHover={{ y: -10 }}
// //             className="
// //               group relative rounded-2xl overflow-hidden

// //               bg-white border border-gray-200
// //               dark:bg-white/5 dark:border-white/10

// //               backdrop-blur-xl

// //               shadow-md hover:shadow-2xl
// //               dark:shadow-xl dark:hover:shadow-[0_10px_40px_rgba(16,185,129,0.2)]

// //               hover:border-emerald-400/40
// //               transition-all duration-300
// //             "
// //           >
// //             {/* 🖼 IMAGE */}
// //             <div className="relative h-48 overflow-hidden">
// //               {/* IMAGE */}
// //               <img
// //                 src={`http://localhost:5000${project.image}`}
// //                 alt={project.title}
// //                 className="
// //       w-full h-full object-cover
// //       group-hover:scale-110 group-hover:rotate-[1deg]
// //       transition duration-700
// //     "
// //               />

// //               {/* 🔥 DARK OVERLAY */}
// //               <div
// //                 className="
// //     absolute inset-0
// //     bg-black/50
// //     opacity-0 group-hover:opacity-100
// //     transition duration-300
// //   "
// //               ></div>

// //               {/* 🚀 ICON BUTTONS */}
// //               <div
// //                 className="
// //     absolute inset-0 flex items-center justify-center gap-6

// //     opacity-0 group-hover:opacity-100
// //     scale-90 group-hover:scale-100

// //     transition-all duration-300
// //   "
// //               >
// //                 {/* LIVE */}
// //                 <a
// //                   href={project.live}
// //                   target="_blank"
// //                   className="
// //         p-3 rounded-full

// //         bg-gradient-to-r from-blue-400 to-emerald-400
// //         text-white

// //         shadow-lg hover:scale-110
// //         transition
// //       "
// //                 >
// //                   <FaExternalLinkAlt size={18} />
// //                 </a>

// //                 {/* GITHUB */}
// //                 <a
// //                   href={project.github}
// //                   target="_blank"
// //                   className="
// //         p-3 rounded-full

// //         bg-white text-black
// //         dark:bg-white/90 dark:text-black

// //         shadow-lg hover:scale-110
// //         transition
// //       "
// //                 >
// //                   <FaGithub size={18} />
// //                 </a>
// //               </div>
// //             </div>

// //             {/* 📦 CONTENT */}
// //             <div className="p-5">
// //               {/* TITLE */}
// //               <h3
// //                 className="
// //                 text-lg font-semibold
// //                 text-gray-800 dark:text-white

// //                 group-hover:text-transparent
// //                 group-hover:bg-clip-text
// //                 group-hover:bg-gradient-to-r
// //                 group-hover:from-blue-400 group-hover:to-emerald-400
// //                 transition
// //               "
// //               >
// //                 {project.title}
// //               </h3>

// //               {/* DESC */}
// //               <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
// //                 {project.description}
// //               </p>

// //               {/* TECH */}
// //               <div className="flex flex-wrap gap-2 mt-4">
// //                 {project.tech?.map((t, i) => (
// //                   <span
// //                     key={i}
// //                     className="
// //                       px-3 py-1 text-xs rounded-full

// //                       bg-gray-100 text-gray-700 border border-gray-200
// //                       dark:bg-white/10 dark:text-gray-300 dark:border-white/10
// //                     "
// //                   >
// //                     {t}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>

// //       {/* 🚀 CTA */}
// //       <section
// //         className="
// //         mt-28 text-center py-20 px-6 rounded-3xl
// //         bg-gradient-to-r from-blue-50 via-white to-emerald-50
// //         dark:bg-gradient-to-r dark:from-[#020617] dark:via-[#020617] dark:to-[#020617]

// //         border border-gray-200 dark:border-white/10
// //       "
// //       >
// //         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
// //           Let’s build something impactful
// //         </h2>

// //         <p className="text-gray-600 dark:text-gray-400 mt-4">
// //           Open to freelance, collaborations and exciting opportunities.
// //         </p>

// //         <a
// //           href="/contact"
// //           className="
// //             inline-block mt-8 px-8 py-3 rounded-xl font-semibold

// //             bg-gradient-to-r from-blue-400 to-emerald-400
// //             text-white

// //             shadow-lg hover:shadow-xl
// //             hover:scale-105

// //             transition
// //           "
// //         >
// //           Let’s Connect
// //         </a>
// //       </section>
// //     </section>
// //   );
// // }

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { getProjects } from "../services/api";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import Pagination from "../components/Pagination";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [filter, setFilter] = useState("All");

//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 6;

//   useEffect(() => {
//     getProjects().then((res) => setProjects(res.data || []));
//   }, []);

//   const categories = ["All", "Frontend", "Full Stack"];

//   // ✅ FILTER (FINAL)
//   const filteredProjects =
//     filter === "All"
//       ? projects
//       : projects.filter(
//           (p) => p.category === filter.toLowerCase().replace(" ", ""),
//         );

//   // ✅ PAGINATION
//   const totalPages = Math.max(
//     1,
//     Math.ceil(filteredProjects.length / projectsPerPage),
//   );

//   const indexOfLast = currentPage * projectsPerPage;
//   const indexOfFirst = indexOfLast - projectsPerPage;

//   const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

//   // 🔥 RESET PAGE WHEN FILTER CHANGE
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [filter]);

//   // 🔥 FIX OVERFLOW PAGE
//   useEffect(() => {
//     if (currentPage > totalPages) setCurrentPage(1);
//   }, [filteredProjects]);

//   // 🔥 SCROLL TOP
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [currentPage]);

//   return (
//     <section className="relative pt-36 pb-28 px-6 max-w-7xl mx-auto">
//       {/* 🔥 BACKGROUND */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10 blur-3xl"></div>

//       {/* 🔥 HERO */}
//       <div className="text-center mb-16">
//         <h1 className="text-5xl font-bold gradient-text mb-4">My Work</h1>

//         <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//           A collection of projects focused on performance, scalability, and
//           real-world problem solving.
//         </p>
//       </div>

//       {/* 🎯 FILTER */}
//       <div className="flex justify-center flex-wrap gap-3 mb-14">
//         {categories.map((c) => (
//           <button
//             key={c}
//             onClick={() => setFilter(c)}
//             className={`
//               px-5 py-2 rounded-full text-sm transition-all duration-300

//               ${
//                 filter === c
//                   ? "bg-gradient-to-r from-blue-400 to-emerald-400 text-white font-semibold shadow-md scale-105"
//                   : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:border-white/10 dark:hover:bg-white/10"
//               }
//             `}
//           >
//             {c}
//           </button>
//         ))}
//       </div>

//       {/* 📦 GRID */}
//       <div className="grid md:grid-cols-3 gap-8">
//         {currentProjects.map((project, index) => (
//           <motion.div
//             key={project._id}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.08 }}
//             whileHover={{ y: -10 }}
//             className="group relative rounded-2xl overflow-hidden
//             bg-white border border-gray-200
//             dark:bg-white/5 dark:border-white/10
//             backdrop-blur-xl shadow-md hover:shadow-2xl
//             transition-all duration-300"
//           >
//             {/* IMAGE */}
//             <div className="relative h-48 overflow-hidden">
//               <img
//                 // src={`http://localhost:5000${project.image}`}
//                 src={`${import.meta.env.VITE_API_URL.replace("/api", "")}${project.image}`}
//                 alt={project.title}
//                 className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
//               />

//               {/* OVERLAY */}
//               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition" />

//               {/* ICONS */}
//               <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition">
//                 {project.live && (
//                   <a href={project.live} target="_blank">
//                     <FaExternalLinkAlt className="text-white text-xl" />
//                   </a>
//                 )}

//                 {project.github && (
//                   <a href={project.github} target="_blank">
//                     <FaGithub className="text-white text-xl" />
//                   </a>
//                 )}
//               </div>
//             </div>

//             {/* CONTENT */}
//             <div className="p-5">
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//                 {project.title}
//               </h3>

//               <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mt-4">
//                 {project.tech?.map((t, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 text-xs rounded-full
//                     bg-gray-100 text-gray-700 border
//                     dark:bg-white/10 dark:text-gray-300"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* 🔥 PAGINATION */}
//       {filteredProjects.length > projectsPerPage && (
//         <div className="mt-16">
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={setCurrentPage}
//           />
//         </div>
//       )}

//       {/* 🚀 CTA */}
//       <section
//         className="mt-28 text-center py-20 px-6 rounded-3xl
//       bg-gradient-to-r from-blue-50 via-white to-emerald-50
//       dark:from-[#020617] dark:via-[#020617] dark:to-[#020617]
//       border border-gray-200 dark:border-white/10"
//       >
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//           Let’s build something impactful
//         </h2>

//         <p className="text-gray-600 dark:text-gray-400 mt-4">
//           Open to freelance, collaborations and exciting opportunities.
//         </p>

//         <a
//           href="/contact"
//           className="inline-block mt-8 px-8 py-3 rounded-xl
//           bg-gradient-to-r from-blue-400 to-emerald-400 text-white
//           hover:scale-105 transition"
//         >
//           Let’s Connect
//         </a>
//       </section>
//     </section>
//   );
// }


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProjects } from "../services/api";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Pagination from "../components/Pagination";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    getProjects().then((res) => setProjects(res.data || []));
  }, []);

  const categories = ["All", "Frontend", "Full Stack"];

  // ✅ FILTER (FINAL)
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (p) => p.category === filter.toLowerCase().replace(" ", ""),
        );

  // ✅ PAGINATION
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / projectsPerPage),
  );

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;

  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  // 🔥 RESET PAGE WHEN FILTER CHANGE
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // 🔥 FIX OVERFLOW PAGE
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [filteredProjects]);

  // 🔥 SCROLL TOP
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <section className="relative pt-36 pb-28 px-6 max-w-7xl mx-auto">
      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10 blur-3xl"></div>

      {/* 🔥 HERO */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold gradient-text mb-4">My Work</h1>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of projects focused on performance, scalability, and
          real-world problem solving.
        </p>
      </div>

      {/* 🎯 FILTER */}
      <div className="flex justify-center flex-wrap gap-3 mb-14">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`
              px-5 py-2 rounded-full text-sm transition-all duration-300

              ${
                filter === c
                  ? "bg-gradient-to-r from-blue-400 to-emerald-400 text-white font-semibold shadow-md scale-105"
                  : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:border-white/10 dark:hover:bg-white/10"
              }
            `}
          >
            {c}
          </button>
        ))}
      </div>

      {/* 📦 GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {currentProjects.map((project, index,i) => (
          <motion.div
  key={project._id}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.1 }}
  whileHover={{ y: -8 }}
  className="
    group relative overflow-hidden rounded-2xl

    bg-white border border-gray-200
    dark:bg-white/5 dark:border-white/10

    backdrop-blur-xl
    shadow-md hover:shadow-2xl

    transition-all duration-300
  "
>
  {/* IMAGE */}
  <div className="relative h-52 overflow-hidden p-3">
    <div className="w-full h-full rounded-xl overflow-hidden border border-gray-200 dark:border-white/10">
      
      <img
        src={`${import.meta.env.VITE_API_URL.replace("/api", "")}${project.image}`}
        alt={project.title}
        className="
          w-full h-full object-cover

          transform scale-105
          group-hover:scale-115

          transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)]
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition" />

      {/* ICONS */}
      <div className="
        absolute inset-0 flex items-center justify-center gap-6
        opacity-0 group-hover:opacity-100 transition
      ">
        {project.github && (
          <a href={project.github} target="_blank">
            <FaGithub className="text-white text-xl" />
          </a>
        )}

        {project.live && (
          <a href={project.live} target="_blank">
            <FaExternalLinkAlt className="text-white text-xl" />
          </a>
        )}
      </div>
    </div>
  </div>

  {/* CONTENT */}
  <div className="p-5">
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-emerald-400 transition">
      {project.title}
    </h3>

    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
      {project.description}
    </p>

    {/* TECH STACK (SECOND CODE STYLE) */}
    <div className="flex flex-wrap gap-2 mt-4">
      {project.tech?.map((t, i) => (
        <span
          key={i}
          className="
            px-3 py-1 text-xs rounded-full
            bg-gray-100 text-gray-700 border
            dark:bg-white/10 dark:text-gray-300
          "
        >
          {t}
        </span>
      ))}
    </div>
  </div>
</motion.div>
        ))}
      </div>

      {/* 🔥 PAGINATION */}
      {filteredProjects.length > projectsPerPage && (
        <div className="mt-16">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}

      {/* 🚀 CTA */}
      <section
        className="mt-28 text-center py-20 px-6 rounded-3xl
      bg-gradient-to-r from-blue-50 via-white to-emerald-50
      dark:from-[#020617] dark:via-[#020617] dark:to-[#020617]
      border border-gray-200 dark:border-white/10"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Let’s build something impactful
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mt-4">
          Open to freelance, collaborations and exciting opportunities.
        </p>

        <a
          href="/contact"
          className="inline-block mt-8 px-8 py-3 rounded-xl
          bg-gradient-to-r from-blue-400 to-emerald-400 text-white
          hover:scale-105 transition"
        >
          Let’s Connect
        </a>
      </section>
    </section>
  );
}
