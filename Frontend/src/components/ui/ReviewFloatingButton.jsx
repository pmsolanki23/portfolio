// import { useState } from "react";
// import { MdReviews } from "react-icons/md";
// import ReviewModal from "../sections/ReviewModal";

// export default function ReviewFloatingButton() {
//   const [openReview, setOpenReview] = useState(false);

//   return (
//     <>
//       {/* 🔥 FLOAT BUTTON */}
//       <div
//         className="
//           fixed z-50

//           bottom-4 right-4
//           sm:bottom-6 sm:right-6
//           md:bottom-6 md:right-8
//         "
//       >
//         <button
//           onClick={() => setOpenReview(true)}
//           className="
//             group flex items-center gap-2

//             px-4 py-2.5 text-sm
//             sm:px-5 sm:py-3 sm:text-base

//             rounded-full md:rounded-xl
//             font-medium text-white

//             bg-gradient-to-r from-blue-500/90 to-emerald-500/90
//             backdrop-blur-xl

//             shadow-lg shadow-emerald-400/20
//             hover:scale-105
//             hover:shadow-[0_10px_40px_rgba(52,211,153,0.4)]

//             transition-all duration-300
//           "
//         >
//           <MdReviews className="text-base sm:text-lg" />

//           {/* optional text */}
//           {/* <span className="hidden sm:inline">Give Review</span> */}

//           <span className="group-hover:translate-x-1 transition">→</span>
//         </button>
//       </div>

//       {/* 🔥 MODAL */}
//       {openReview && <ReviewModal onClose={() => setOpenReview(false)} />}
//     </>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { MdReviews } from "react-icons/md";
import ReviewModal from "../sections/ReviewModal";

export default function ReviewFloatingButton() {
  const [openReview, setOpenReview] = useState(false);

  return (
    <>
      {/* 🔥 FLOAT BUTTON (FIRST STYLE POSITION + SECOND UI) */}
<motion.button
  onClick={() => setOpenReview(true)}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.9 }}
  className="
    fixed z-[9999]   /* 🔥 STRONG OVERLAY */

    bottom-5 right-5
    sm:bottom-6 sm:right-6

    w-14 h-14 flex items-center justify-center
    rounded-full

    bg-gradient-to-r from-blue-500/90 to-emerald-500/90
    text-white

    backdrop-blur-xl
    border border-white/20 dark:border-white/10

    shadow-[0_10px_30px_rgba(52,211,153,0.35)]
    hover:shadow-[0_0_40px_rgba(52,211,153,0.6)]

    transition-all duration-300
  "
>
  <MdReviews className="text-lg" />
</motion.button>
      {/* 🔥 MODAL */}
      {openReview && (
        <ReviewModal onClose={() => setOpenReview(false)} />
      )}
    </>
  );
}