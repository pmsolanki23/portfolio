// import {
//   FaGithub,
//   FaLinkedin,
//   FaBriefcase,
//   FaCode,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Footer() {
//   return (
//     <footer
//       className="
//       relative mt-32
//       bg-gray-100 dark:bg-[#020617]
//       border-t border-gray-200 dark:border-white/10
//       overflow-hidden
//     "
//     >

//       {/* 🔥 BACKGROUND GLOW */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-500/20 blur-3xl rounded-full" />
//       </div>

//       {/* 🔥 TOP GRADIENT LINE */}
//       <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>

//       <div className="relative max-w-7xl mx-auto px-6 py-12">

//         {/* 🔥 MAIN SECTION */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-10">

//           {/* LEFT */}
//           <div className="text-center md:text-left">
//             <h2 className="text-2xl font-bold gradient-text">
//               Pruthvi
//             </h2>

//             <p className="mt-3 text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start gap-2">
//               <FaCode className="text-blue-400" />
//               Crafting scalable & modern web experiences
//             </p>
//           </div>

//           {/* 🔥 SOCIAL ICONS */}
//           <div className="flex gap-5">

//             {/* ICON */}
//             {[
//               { icon: <FaGithub />, link: "https://github.com/pmsolanki23", color: "hover:bg-black" },
//               { icon: <FaLinkedin />, link: "#", color: "hover:bg-blue-500" },
//               { icon: <FaBriefcase />, link: "#", color: "hover:bg-yellow-500" },
//             ].map((item, i) => (
//               <motion.a
//                 key={i}
//                 href={item.link}
//                 target="_blank"
//                 rel="noreferrer"
//                 whileHover={{ scale: 1.15, rotate: 5 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`
//                 group relative w-12 h-12 flex items-center justify-center rounded-2xl

//                 bg-white/70 dark:bg-white/5
//                 border border-gray-200 dark:border-white/10

//                 text-gray-700 dark:text-gray-300 text-xl

//                 transition-all duration-300
//                 ${item.color}
//                 `}
//               >

//                 {/* GLOW */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 blur-xl rounded-2xl" />

//                 <span className="relative z-10 group-hover:text-white">
//                   {item.icon}
//                 </span>
//               </motion.a>
//             ))}

//           </div>
//         </div>

//         {/* 🔥 DIVIDER */}
//         <div className="mt-10 border-t border-gray-200 dark:border-white/10"></div>

//         {/* 🔥 BOTTOM */}
//         <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400 gap-3">

//           <p>
//             © {new Date().getFullYear()} Pruthvi. All rights reserved.
//           </p>

//           <p className="text-xs opacity-70">
//             Designed & Developed with ❤️ using React
//           </p>

//         </div>
//       </div>
//     </footer>
//   );
// }

import { FaGithub, FaLinkedin, FaBriefcase, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="
      relative mt-32
      bg-gray-100 dark:bg-[#020617]
      border-t border-gray-200 dark:border-white/10
      overflow-hidden
    "
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* 🔥 TOP LINE */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* 🔥 TOP */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* LEFT */}
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl font-bold gradient-text">Pruthvi</h2>

            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start gap-2 text-sm">
              <FaCode className="text-blue-400" />
              Crafting scalable & modern web experiences
            </p>
          </div>

          {/* 🔥 SOCIALS */}
          <div className="flex gap-5">
            {/* ICON */}{" "}
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/pmsolanki23",
                color: "hover:bg-black",
              },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/pruthvi-solanki-691b0422b", color: "hover:bg-blue-500" },
              {
                icon: <FaBriefcase />,
                link: "#",
                color: "hover:bg-yellow-500",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`
                 group relative w-12 h-12 flex items-center justify-center rounded-2xl

                 bg-white/70 dark:bg-white/5
                 border border-gray-200 dark:border-white/10

                 text-gray-700 dark:text-gray-300 text-xl

                 transition-all duration-300
                 ${item.color}
                 `}
              >
                {/* GLOW */}
                {" "}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 blur-xl rounded-2xl" />
                <span className="relative z-10 group-hover:text-white">
                  {item.icon}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* 🔥 DIVIDER */}
        <div className="mt-10 flex justify-center">
          <div className="w-24 h-[2px] bg-gradient-to-r from-blue-400 to-transparent rounded-full opacity-70"></div>
        </div>

        {/* 🔥 BOTTOM */}
        <div className="mt-6 flex flex-col items-center text-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Pruthvi. All rights reserved.</p>

          <p className="text-xs opacity-70">
            Designed & Developed with ❤️ using React
          </p>
        </div>
      </div>
    </footer>
  );
}
