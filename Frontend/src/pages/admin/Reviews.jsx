import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaTrash, FaCheck, FaUndo } from "react-icons/fa";
import toast from "react-hot-toast";
import Pagination from "../../components/Pagination";
import {
  getReviews,
  updateReview,
  deleteReview,
} from "../../services/api";

export default function ReviewAdmin() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const reviewsPerPage = 6;

  const indexOfLast = currentPage * reviewsPerPage;
  const indexOfFirst = indexOfLast - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const load = async () => {
    try {
      setLoading(true);
      const res = await getReviews();
      setReviews(res.data);
    } catch {
      toast.error("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleStatus = async (id, status) => {
    try {
      await updateReview(id, { status });

      setReviews((prev) =>
        prev.map((r) => (r._id === id ? { ...r, status } : r))
      );

      toast.success(status === "approved" ? "Approved" : "Moved to pending");
    } catch {
      toast.error("Update failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteReview(id);

      setReviews((prev) => prev.filter((r) => r._id !== id));
      setSelected(null);

      toast.success("Review deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      {/* <div className="rounded-2xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-emerald-400 text-transparent bg-clip-text">
          Reviews Dashboard
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage and moderate user feedback
        </p>
      </div> */}
{/* 🔥 HEADER */}
 <div
  className="
  flex flex-col md:flex-row md:items-center justify-between gap-5

  p-5 rounded-2xl

  bg-white dark:bg-white/5
  backdrop-blur-xl

  border border-gray-200 dark:border-white/10
  shadow-sm dark:shadow-none
"
>
  {/* LEFT */}
  <div>
    <p className="text-[10px] tracking-[0.35em] uppercase text-gray-500">
      Admin Panel
    </p>

    <h1 className="text-3xl md:text-4xl font-bold gradient-text mt-1">
     Client Review
    </h1>

    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
      Manage and control user feedback
    </p>
  </div>

  {/* RIGHT (future actions / filters) */}
  <div className="flex items-center gap-3">
    {/* optional buttons here */}
  </div>
</div>
      {/* LOADING */}
      {loading && (
        <div className="text-center text-gray-400 animate-pulse">
          Loading reviews...
        </div>
      )}

      {/* EMPTY */}
      {!loading && reviews.length === 0 && (
        <div className="text-center text-gray-500">
          No reviews found
        </div>
      )}

      {/* GRID */}
      {!loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {currentReviews.map((r, i) => (
            <motion.div
              key={r._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="
                group relative p-6 rounded-2xl
                bg-white/70 dark:bg-white/5
                backdrop-blur-xl
                border border-black/10 dark:border-white/10
                shadow-sm hover:shadow-xl
                transition-all duration-300
              "
            >

              {/* TOP ROW */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {r.name}
                  </h3>

                  {/* STARS */}
                  <div className="flex gap-1 text-yellow-500 mt-1">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <FaStar key={i} className="text-sm" />
                    ))}
                  </div>
                </div>

                {/* DELETE ICON */}
                <button
                  onClick={() => setSelected(r)}
                  className="opacity-0 group-hover:opacity-100 transition text-red-400 hover:text-red-600"
                >
                  <FaTrash />
                </button>
              </div>

              {/* REVIEW TEXT */}
              <p className="text-sm text-gray-500 mt-3 line-clamp-3">
                {r.text}
              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between mt-5">

                {/* STATUS BADGE */}
                <span
                  className={`
                    px-3 py-1 rounded-full text-xs font-medium
                    ${
                      r.status === "approved"
                        ? "bg-green-100 text-green-600 dark:bg-green-500/10"
                        : "bg-yellow-100 text-yellow-600 dark:bg-yellow-500/10"
                    }
                  `}
                >
                  {r.status}
                </span>

                {/* ACTION BUTTON */}
                {r.status === "approved" ? (
                  <button
                    onClick={() => handleStatus(r._id, "pending")}
                    className="
                      flex items-center gap-1 text-xs px-3 py-1
                      rounded-lg bg-yellow-500/10 text-yellow-500
                      hover:bg-yellow-500/20 transition
                    "
                  >
                    <FaUndo />
                    Withdraw
                  </button>
                ) : (
                  <button
                    onClick={() => handleStatus(r._id, "approved")}
                    className="
                      flex items-center gap-1 text-xs px-3 py-1
                      rounded-lg bg-emerald-500/10 text-emerald-500
                      hover:bg-emerald-500/20 transition
                    "
                  >
                    <FaCheck />
                    Approve
                  </button>
                )}

              </div>
            </motion.div>
          ))}

        </div>
      )}

      {/* PAGINATION */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}

      {/* DELETE MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9 }}
              className="
                w-[90%] max-w-sm p-6 rounded-2xl
                bg-white dark:bg-[#0f172a]
                border border-black/10 dark:border-white/10
                text-center
              "
            >
              <h2 className="text-lg font-semibold mb-2">
                Delete Review?
              </h2>

              <p className="text-sm text-gray-500 mb-6">
                This action cannot be undone.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelected(null)}
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/10"
                >
                  Cancel
                </button>

                <button
                  onClick={() => handleDelete(selected._id)}
                  className="flex-1 px-4 py-2 rounded-lg bg-red-500 text-white"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}