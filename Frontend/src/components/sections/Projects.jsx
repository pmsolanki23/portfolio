// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import { getProjects } from "../../services/api";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);
//   const assetBaseUrl = (import.meta.env.VITE_API_URL || "/api").replace(
//     /\/api\/?$/,
//     "",
//   );

//   useEffect(() => {
//     getProjects().then((res) => {
//       setProjects(res.data?.slice(0, 3) || []);
//     });
//   }, []);

//   return (
//     <section className="relative overflow-hidden py-20 md:py-28">
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent" />
//         <div className="absolute right-0 top-20 h-96 w-96 bg-emerald-300/10 blur-3xl" />
//       </div>

//       <div className="mx-auto max-w-[1600px] px-6 md:px-8">
//         <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//           <h2 className="text-4xl font-bold md:text-5xl">
//             My <span className="gradient-text">Projects</span>
//           </h2>

//           <a
//             href="/projects"
//             className="hidden rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 md:inline-flex"
//           >
//             View All →
//           </a>
//         </div>

//         <div className="grid gap-10 xl:grid-cols-3">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project._id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -8 }}
//               className="h-full"
//             >
//               <div className="group relative flex h-full min-h-[412px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#171b2d] shadow-[0_12px_36px_rgba(0,0,0,0.24)]">
//                 <div className="relative h-[240px] overflow-hidden">
//                   <img
//                     src={`${assetBaseUrl}${project.image}`}
//                     alt={project.title}
//                     className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:blur-[3px]"
//                   />

//                   <div className="absolute inset-0 bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100" />

//                   <div className="absolute inset-0 flex items-center justify-center gap-5 opacity-0 transition duration-300 group-hover:opacity-100">
//                     {project.live && (
//                       <a
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-emerald-400 hover:text-black"
//                       >
//                         <FaExternalLinkAlt size={18} />
//                       </a>
//                     )}

//                     {project.github && (
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-emerald-400 hover:text-black"
//                       >
//                         <FaGithub size={18} />
//                       </a>
//                     )}
//                   </div>
//                 </div>

//                 <div className="flex flex-1 flex-col bg-[#171b2d] px-6 pb-6 pt-7">
//                   <h3 className="text-[2.2rem] font-semibold leading-none text-white">
//                     {project.title}
//                   </h3>

//                   <p className="mt-5 text-[1.05rem] text-slate-400 line-clamp-2">
//                     {project.description}
//                   </p>

//                   <div className="mt-6 flex flex-wrap gap-3">
//                     {project.tech?.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="rounded-full border border-white/40 px-4 py-2 text-sm text-slate-200"
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

//         <div className="mt-10 flex justify-center md:hidden">
//           <a
//             href="/projects"
//             className="inline-flex rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
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
              <div className="
                group rounded-2xl overflow-hidden
                border border-white/10 bg-[#171b2d]
                shadow-md hover:shadow-xl transition
              ">

                {/* IMAGE */}
                <div className="relative h-[180px] overflow-hidden">
                  <img
                    src={`${assetBaseUrl}${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="icon-btn"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="icon-btn"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full border border-white/20 text-gray-300"
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