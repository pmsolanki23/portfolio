// import { useEffect, useState } from "react";
// import ProjectForm from "../../components/admin/ProjectForm";
// import ProjectList from "../../components/admin/ProjectList";
// import { getProjects } from "../../services/api";
// import { FaPlus} from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [selected, setSelected] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const load = async () => {
//     try {
//       setLoading(true);
//       const res = await getProjects();
//       setProjects(res.data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     load();
//   }, []);

//   return (
//     <div className="p-4 md:p-6 space-y-8">
//       {/* 🔥 HEADER */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6

// p-5 rounded-2xl

// bg-white dark:bg-white/5
// backdrop-blur-xl

// border border-gray-200 dark:border-white/10
// shadow-sm dark:shadow-none
// ">
//         {/* LEFT */}
//         <div>
//           <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
//             Admin Panel
//           </p>

//           <h1 className="text-4xl font-bold gradient-text">Projects</h1>

//           <p className="text-gray-500 dark:text-gray-400 mt-2">
//             Manage and showcase your portfolio projects
//           </p>
//         </div>

//         {/* RIGHT ACTION */}
//       <div>
//           <button
//           onClick={() => {
//             setSelected(null);
//             setShowForm(true);
//           }}
//           className="
//         flex items-center gap-2

//         px-4 py-2 md:py-4 md:py-0  
//         rounded-lg     

//         text-md font-medium

//         bg-gradient-to-r from-blue-400/90 to-emerald-400/90
//         text-black

//         shadow-sm
//         hover:shadow-md
//         hover:scale-105

//         transition
//         "
//         >
//           <FaPlus /> Add Project
//         </button>
//       </div>
//       </div>

//       {/* 🔥 LIST */}
//       <div>
//         {loading ? (
//           <p className="text-center text-gray-500 animate-pulse">
//             Loading projects...
//           </p>
//         ) : projects.length === 0 ? (
//           <div className="text-center py-20">
//             <h2 className="text-xl font-bold text-gray-600 dark:text-gray-300">
//               No projects yet 🚀
//             </h2>

//             <p className="text-gray-500 mt-2">
//               Start by adding your first project
//             </p>
//           </div>
//         ) : (
//           <ProjectList
//             projects={projects}
//             refresh={load}
//             setSelected={(p) => {
//               setSelected(p);
//               setShowForm(true);
//             }}
//           />
//         )}
//       </div>

//       {/* 🔥 MODAL */}
//       {showForm && (
//         <div
//           className="
//           fixed inset-0 z-50 flex items-center justify-center

//           bg-black/50 backdrop-blur-md
//         "
//           onClick={() => {
//             setShowForm(false);
//             setSelected(null);
//           }}
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0, y: 50 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             transition={{ type: "spring", damping: 15 }}
//             onClick={(e) => e.stopPropagation()}
//             className="w-full max-w-xl px-4"
//           >
//             <ProjectForm
//               selected={selected}
//               refresh={() => {
//                 load();
//                 setShowForm(false);
//                 setSelected(null);
//               }}
//             />

//             {/* CLOSE */}
//             <button
//               onClick={() => setShowForm(false)}
//               className="
//                 mt-4 w-full py-2 rounded-xl

//                 bg-gray-200 dark:bg-gray-700
//                 text-gray-900 dark:text-white

//                 hover:opacity-80 transition
//               "
//             >
//               Close
//             </button>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import ProjectForm from "../../components/admin/ProjectForm";
import ProjectList from "../../components/admin/ProjectList";
import { getProjects } from "../../services/api";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import Pagination from "../../components/Pagination";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // 🔥 LOAD
  const load = async () => {
    try {
      setLoading(true);
      const res = await getProjects();
      setProjects(res.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // 🔥 PAGINATION LOGIC
  const totalPages = Math.max(
    1,
    Math.ceil(projects.length / projectsPerPage)
  );

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;

  const currentProjects = projects.slice(
    indexOfFirst,
    indexOfLast
  );

  // 🔥 PAGE FIX
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [projects]);

  // 🔥 SCROLL TOP
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="p-4 md:p-6 space-y-8">

      {/* 🔥 HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6
      p-5 rounded-2xl
      bg-white dark:bg-white/5 backdrop-blur-xl
      border border-gray-200 dark:border-white/10
      shadow-sm">

        <div>
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
            Admin Panel
          </p>

          <h1 className="text-4xl font-bold gradient-text">
            Projects
          </h1>

          <p className="text-gray-500 mt-2">
            Manage and showcase your portfolio projects
          </p>
        </div>

        <button
          onClick={() => {
            setSelected(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg
          bg-gradient-to-r from-blue-400 to-emerald-400 text-black
          hover:scale-105 transition"
        >
          <FaPlus /> Add Project
        </button>
      </div>

      {/* 🔥 LIST */}
      <div>
        {loading ? (
          <p className="text-center text-gray-500 animate-pulse">
            Loading projects...
          </p>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-xl font-bold text-gray-600">
              No projects yet 🚀
            </h2>
          </div>
        ) : (
          <>
            {/* 🔥 PROJECT LIST */}
            <ProjectList
              projects={currentProjects}   // 🔥 PAGINATED DATA
              refresh={load}
              setSelected={(p) => {
                setSelected(p);
                setShowForm(true);
              }}
            />

            {/* 🔥 PAGINATION */}
            {projects.length > projectsPerPage && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>

      {/* 🔥 MODAL */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
          bg-black/50 backdrop-blur-md"
          onClick={() => {
            setShowForm(false);
            setSelected(null);
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl px-4"
          >
            <ProjectForm
              selected={selected}
              refresh={() => {
                load();
                setShowForm(false);
                setSelected(null);
              }}
            />

            <button
              onClick={() => setShowForm(false)}
              className="mt-4 w-full py-2 rounded-xl
              bg-gray-200 dark:bg-gray-700"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

    </div>
  );
}