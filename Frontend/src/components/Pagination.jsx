import { motion } from "framer-motion";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  // 🔥 SHOW ONLY 3 PAGES (SLIDING WINDOW)
  const getPages = () => {
    let start = Math.max(currentPage - 1, 1);
    let end = Math.min(start + 2, totalPages);

    if (end - start < 2) {
      start = Math.max(end - 2, 1);
    }

    return Array.from(
      { length: end - start + 1 },
      (_, i) => start + i
    );
  };

  const pages = getPages();

  return (
    <div className="flex justify-center mt-10 px-4">

      {/* 🔥 GLASS CONTAINER */}
      <div
        className="
        flex items-center gap-1 md:gap-2
        p-1 md:p-2 rounded-full

        border border-gray-200 dark:border-white/10
        bg-white/60 dark:bg-white/[0.05]
        backdrop-blur-xl

        shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)]
      "
      >

        {/* PREV */}
        <button
          onClick={() =>
            onPageChange(Math.max(currentPage - 1, 1))
          }
          disabled={currentPage === 1}
          className="
          px-3 md:px-4 py-1.5 md:py-2
          text-xs md:text-sm rounded-full

          text-gray-600 dark:text-gray-400
          hover:text-emerald-400

          disabled:opacity-30
          transition
        "
        >
          Prev
        </button>

        {/* 🔥 PAGES */}
        <div className="flex relative">

          {pages.map((page) => {
            const isActive = currentPage === page;

            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className="
                relative px-3 md:px-4 py-1.5 md:py-2
                text-xs md:text-sm font-medium
                rounded-full group
              "
              >

                {/* 🔥 ACTIVE PILL */}
                {isActive && (
                  <motion.span
                    layoutId="pagination-pill"
                    className="
                    absolute inset-0 rounded-full
                    bg-gradient-to-r from-emerald-400 to-teal-300

                    shadow-[0_6px_20px_rgba(16,185,129,0.4)]
                  "
                  />
                )}

                {/* TEXT */}
                <span
                  className={`
                  relative z-10 transition
                  ${
                    isActive
                      ? "text-black"
                      : "text-gray-700 dark:text-gray-300 group-hover:text-emerald-400"
                  }
                `}
                >
                  {page}
                </span>

              </button>
            );
          })}

        </div>

        {/* NEXT */}
        <button
          onClick={() =>
            onPageChange(
              Math.min(currentPage + 1, totalPages)
            )
          }
          disabled={currentPage === totalPages}
          className="
          px-3 md:px-4 py-1.5 md:py-2
          text-xs md:text-sm rounded-full

          text-gray-600 dark:text-gray-400
          hover:text-emerald-400

          disabled:opacity-30
          transition
        "
        >
          Next
        </button>

      </div>

    </div>
  );
};

export default Pagination;