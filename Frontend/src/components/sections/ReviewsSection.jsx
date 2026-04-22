// // import { useEffect, useState } from "react";
// // import { getApprovedReviews } from "../../services/api";
// // import { motion } from "framer-motion";
// // import { FaStar } from "react-icons/fa";

// // export default function ReviewsSection() {
// //   const [reviews, setReviews] = useState([]);

// //   useEffect(() => {
// //     const load = async () => {
// //       try {
// //         const res = await getApprovedReviews();
// //         setReviews(res.data);
// //       } catch (err) {
// //         console.error("Review fetch error:", err);
// //       }
// //     };
// //     load();
// //   }, []);

// //   const loopReviews =
// //   reviews.length === 1
// //     ? [...reviews, ...reviews, ...reviews, ...reviews]
// //     : reviews.length === 2
// //     ? [...reviews, ...reviews]
// //     : [...reviews, ...reviews];
// //   return (
// //    <section className="mt-32 flex flex-col items-center">

// //   {/* 🔥 HEADING */}
// //   <div className="text-center mb-12">
// //     <h2 className="text-4xl font-bold gradient-text">
// //       What People Say 💬
// //     </h2>
// //     <p className="text-gray-400 mt-3">
// //       Real feedback from clients & users
// //     </p>
// //   </div>

// //   {/* 💎 CONTAINER (LIMIT WIDTH) */}
// //   <div className="w-full max-w-5xl overflow-hidden relative">

// //     <motion.div
// //       className="flex gap-6"
// //       animate={
// //         reviews.length > 2 ? { x: ["0%", "-50%"] } : {}
// //       }
// //       transition={{
// //         repeat: Infinity,
// //         duration: 20,
// //         ease: "linear",
// //       }}
// //     >

// //       {loopReviews.map((r, index) => (
// //         <div
// //           key={index}
// //           className="min-w-[280px] max-w-[280px]"
// //         >
// //           <div className="p-5 rounded-2xl bg-white dark:bg-white/5
// // text-gray-700 dark:text-gray-300
// // border border-gray-200 dark:border-white/50
// // shadow-md dark:shadow-none">

// //             {/* ⭐ STARS */}
// //             <div className="flex gap-1 mb-2">
// //               {[...Array(r.rating)].map((_, i) => (
// //                 <FaStar key={i} className="text-yellow-400" />
// //               ))}
// //             </div>

// //             {/* TEXT */}
// //             <p className="text-sm text-gray-300">
// //               “{r.text}”
// //             </p>

// //             {/* USER */}
// //             <div className="mt-4 flex items-center gap-2">
// //               <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 flex items-center justify-center text-black text-sm font-bold">
// //                 {r.name.charAt(0)}
// //               </div>

// //               <p className="text-sm font-semibold">{r.name}</p>
// //             </div>

// //           </div>
// //         </div>
// //       ))}

// //     </motion.div>

// // <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white dark:from-[#020617] to-transparent" />
// // <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white dark:from-[#020617] to-transparent" />
// //   </div>
// // </section>
// //   );
// // }


// import { useEffect, useState } from "react";
// import { getApprovedReviews } from "../../services/api";
// import { motion } from "framer-motion";
// import { FaStar } from "react-icons/fa";

// export default function ReviewsSection() {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const load = async () => {
//       try {
//         const res = await getApprovedReviews();
//         setReviews(res.data);
//       } catch (err) {
//         console.error("Review fetch error:", err);
//       }
//     };
//     load();
//   }, []);

//   // ✅ SCROLL CONDITION
//   const shouldScroll = reviews.length > 3;

//   // ✅ DUPLICATE ONLY IF SCROLL
//   const loopReviews = shouldScroll
//     ? [...reviews, ...reviews]
//     : reviews;

//   return (
//     <section className="mt-32 flex flex-col items-center">

//       {/* 🔥 HEADING */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold gradient-text">
//           What People Say 💬
//         </h2>
//         <p className="text-gray-500 dark:text-gray-400 mt-3">
//           Real feedback from clients & users
//         </p>
//       </div>

//       {/* 💎 CONTAINER */}
//       <div className="w-full max-w-5xl overflow-hidden relative">

//         <motion.div
//           className={`flex gap-6 ${
//             shouldScroll ? "w-max" : "justify-center flex-wrap"
//           }`}
//           animate={
//             shouldScroll
//               ? { x: ["0%", "-50%"] }
//               : {}
//           }
//           transition={{
//             repeat: Infinity,
//             duration: 20,
//             ease: "linear",
//           }}
//         >

//           {loopReviews.map((r, index) => (
//             <div
//               key={index}
//               className="min-w-[280px] max-w-[280px] flex-shrink-0"
//             >
//               <div
//                 className="
//                 p-5 rounded-2xl

//                 bg-white dark:bg-white/5
//                 backdrop-blur-xl

//                 border border-gray-200 dark:border-white/10
//                 shadow-md dark:shadow-none

//                 transition hover:shadow-lg
//               "
//               >

//                 {/* ⭐ STARS */}
//                 <div className="flex gap-1 mb-2">
//                   {[...Array(r.rating)].map((_, i) => (
//                     <FaStar key={i} className="text-yellow-400" />
//                   ))}
//                 </div>

//                 {/* 📝 TEXT */}
//                 <p className="text-sm text-gray-700 dark:text-gray-300">
//                   “{r.text}”
//                 </p>

//                 {/* 👤 USER */}
//                 <div className="mt-4 flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 flex items-center justify-center text-black text-sm font-bold">
//                     {r.name.charAt(0)}
//                   </div>

//                   <p className="text-sm font-semibold text-gray-800 dark:text-white">
//                     {r.name}
//                   </p>
//                 </div>

//               </div>
//             </div>
//           ))}

//         </motion.div>

//         {/* 🔥 FADE ONLY IF SCROLL */}
//         {shouldScroll && (
//           <>
//             <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white dark:from-[#020617] to-transparent" />
//             <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white dark:from-[#020617] to-transparent" />
//           </>
//         )}

//       </div>
//     </section>
//   );
// }   

import { useEffect, useState } from "react";
import { getApprovedReviews } from "../../services/api";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getApprovedReviews();
        setReviews(res.data);
      } catch (err) {
        console.error("Review fetch error:", err);
      }
    };
    load();
  }, []);

  // ✅ SCROLL CONDITION
  const shouldScroll = reviews.length > 2;

  // ✅ DUPLICATE ONLY IF SCROLL
  const loopReviews = shouldScroll
    ? [...reviews, ...reviews]
    : reviews;

  return (
    <section className="mt-32 flex flex-col items-center">

      {/* 🔥 HEADING */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase mb-4">
        Testimonial
      </p>
        <h2 className="text-4xl font-bold gradient-text">
          What People Say 
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3">
          Real feedback from clients & users
        </p>
      </div>

      {/* 💎 CONTAINER */}
      <div className="w-full max-w-5xl overflow-hidden relative">

        <motion.div
          className={`flex gap-6 ${
            shouldScroll ? "min-w-max" : "justify-center flex-wrap"
          }`}
          animate={
            shouldScroll
              ? { x: ["0%", "-50%"] }
              : {}
          }
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >

          {loopReviews.map((r, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-[280px] flex-shrink-0"
            >
              <div
                className="
                p-5 rounded-2xl

                bg-white dark:bg-white/5
                backdrop-blur-xl

                border border-gray-200 dark:border-white/10
                shadow-md dark:shadow-none

                transition hover:shadow-lg
              "
              >

                {/* ⭐ STARS */}
                <div className="flex gap-1 mb-2">
                  {[...Array(r.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                {/* 📝 TEXT */}
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  “{r.text}”
                </p>

                {/* 👤 USER */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 flex items-center justify-center text-black text-sm font-bold">
                    {r.name.charAt(0)}
                  </div>

                  <p className="text-sm font-semibold text-gray-800 dark:text-white">
                    {r.name}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </motion.div>

        {/* 🔥 FADE ONLY IF SCROLL */}
        {shouldScroll && (
          <>
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white dark:from-[#020617] to-transparent" />
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white dark:from-[#020617] to-transparent" />
          </>
        )}

      </div>
    </section>
  );
}