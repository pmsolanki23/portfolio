import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { deleteProject } from "../../services/api";
import toast from "react-hot-toast";

export default function ProjectList({ projects, refresh, setSelected }) {
  const [deleteId, setDeleteId] = useState(null);

  const confirmDelete = async () => {
    try {
      await deleteProject(deleteId);
      toast.success("Project deleted 🗑️");
      setDeleteId(null);
      refresh();
    } catch (err) {
      console.error(err);
      toast.error("Delete failed ❌");
    }
  };

  // ❌ EMPTY STATE
  if (!projects.length) {
    return (
      <div className="text-center mt-16 text-gray-500 dark:text-gray-400">
        No projects found
      </div>
    );
  }

  return (
    <>
      {/* 🔥 GRID */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.03 }}
          >
            <div
              className="
              relative rounded-2xl p-4

              bg-white dark:bg-white/5
              backdrop-blur-xl

              border border-gray-200 dark:border-white/10
              shadow-sm hover:shadow-lg

              transition
            "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.image || "/images/default.png"}
                  alt={project.title}
                  className="w-full h-40 object-cover transition duration-500 group-hover:scale-110"
                />

                {/* HOVER LINKS */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-3
                bg-black/50 opacity-0 hover:opacity-100 transition"
                >
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="p-2 rounded-full bg-white text-black hover:scale-110"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-2 rounded-full bg-white text-black hover:scale-110"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mt-3 text-gray-800 dark:text-white">
                {project.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                {project.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech?.map((t, i) => (
                  <span
                    key={i}
                    className="
                    text-xs px-2 py-1 rounded-full
                    bg-gray-100 dark:bg-white/10
                    border border-gray-200 dark:border-white/10
                  "
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span className="text-xs text-emerald-500 mt-2 inline-block">
                {project.category}
              </span>

              {/* ACTIONS */}
              <div className="flex gap-2 mt-4">
                {/* EDIT */}
                <button
                  onClick={() => setSelected(project)}
                  className="
                  flex-1 flex items-center justify-center gap-2
                  px-3 py-2 rounded-lg text-sm

                  bg-white dark:bg-white/10
                  border border-gray-200 dark:border-white/10

                  hover:bg-gray-100 dark:hover:bg-white/20
                  transition
                "
                >
                  <FaEdit /> Edit
                </button>

                {/* DELETE */}
                <button
                  onClick={() => setDeleteId(project._id)}
                  className="
                  flex-1 flex items-center justify-center gap-2
                  px-3 py-2 rounded-lg text-sm

                  bg-red-500 hover:bg-red-600
                  text-white

                  transition
                "
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 DELETE MODAL */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="
            w-[90%] max-w-sm p-6 rounded-2xl text-center

            bg-white dark:bg-[#0f172a]
            border border-gray-200 dark:border-white/10
            shadow-xl
          "
          >
            <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
              Delete Project?
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mb-6">
              This action cannot be undone.
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 rounded-lg bg-gray-400 hover:bg-gray-500 text-white"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
