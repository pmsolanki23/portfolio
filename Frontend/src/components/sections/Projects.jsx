// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import { getProjects } from "../../services/api";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);

//   const assetBaseUrl = (import.meta.env.VITE_API_URL || "/api").replace(
//     /\/api\/?$/,
//     ""
//   );

//   useEffect(() => {
//     getProjects().then((res) => {
//       setProjects(res.data?.slice(0, 3) || []);
//     });
//   }, []);

//   return (
//     <section className="relative py-20 md:py-24">
//       <div className="mx-auto max-w-7xl px-6">

//         {/* HEADER */}
//         <div className="mb-10 flex items-center justify-between">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             My <span className="gradient-text">Projects</span>
//           </h2>

//           <a
//             href="/projects"
//             className="hidden md:inline-flex px-6 py-4 rounded-xl text-md font-semibold
//             bg-gradient-to-r from-blue-500 to-emerald-400 text-white
//             hover:scale-105 transition"
//           >
//             View All →
//           </a>
//         </div>

//         {/* GRID */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project._id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -6 }}
//             >
//               <div className="
//                 group rounded-2xl overflow-hidden
//                 border border-white/10 bg-[#171b2d]
//                 shadow-md hover:shadow-xl transition
//               ">

//                 {/* IMAGE */}
//                 <div className="relative h-[180px] overflow-hidden">
//                   <img
//                     src={`${assetBaseUrl}${project.image}`}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
//                   />

//                   {/* OVERLAY */}
//                   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
//                     {project.live && (
//                       <a
//                         href={project.live}
//                         target="_blank"
//                         className="icon-btn"
//                       >
//                         <FaExternalLinkAlt />
//                       </a>
//                     )}
//                     {project.github && (
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         className="icon-btn"
//                       >
//                         <FaGithub />
//                       </a>
//                     )}
//                   </div>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-white">
//                     {project.title}
//                   </h3>

//                   <p className="text-sm text-gray-400 mt-1 line-clamp-2">
//                     {project.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mt-3">
//                     {project.tech?.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="px-2 py-1 text-xs rounded-full border border-white/20 text-gray-300"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* MOBILE BUTTON */}
//         <div className="mt-10 flex justify-center md:hidden">
//           <a
//             href="/projects"
//             className="px-6 py-2 rounded-xl text-sm font-semibold
//             bg-gradient-to-r from-blue-500 to-emerald-400 text-white"
//           >
//             View All →
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { getProjects } from "../../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const assetBaseUrl = (import.meta.env.VITE_API_URL || "/api").replace(
    /\/api\/?$/,
    ""
  );

  useEffect(() => {
    getProjects().then((res) => {
      setProjects(res.data?.slice(0, 3) || []);
    });
  }, []);

  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h2>

          <a
            href="/projects"
            className="hidden md:inline-flex px-6 py-4 rounded-xl text-md font-semibold
            bg-gradient-to-r from-blue-500 to-emerald-400 text-white
            hover:scale-105 transition"
          >
            View All →
          </a>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div
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
                <div className="relative h-[180px] overflow-hidden p-3">
                  <div className="w-full h-full rounded-xl overflow-hidden border border-gray-200 dark:border-white/10">
                    <img
                      src={`${assetBaseUrl}${project.image}`}
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
                    <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition">
                      {project.live && (
                        <a href={project.live} target="_blank">
                          <FaExternalLinkAlt className="text-white text-xl" />
                        </a>
                      )}

                      {project.github && (
                        <a href={project.github} target="_blank">
                          <FaGithub className="text-white text-xl" />
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

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech?.map((tech, i) => (
                      <span
                        key={i}
                        className="
                          px-3 py-1 text-xs rounded-full
                          bg-gray-100 text-gray-700 
                          dark:bg-white/10 dark:text-gray-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <div className="mt-10 flex justify-center md:hidden">
          <a
            href="/projects"
            className="px-6 py-2 rounded-xl text-sm font-semibold
            bg-gradient-to-r from-blue-500 to-emerald-400 text-white"
          >
            View All →
          </a>
        </div>
      </div>
    </section>
  );
}