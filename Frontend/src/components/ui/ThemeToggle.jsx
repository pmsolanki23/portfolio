import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null); // 🔥 important

  // 🔥 INIT THEME (no flicker)
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      // system detect
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(systemDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", systemDark);
    }
  }, []);

  // 🔥 TOGGLE
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!theme) return null; // prevent flicker

//   return (
//     <div
//       onClick={toggleTheme}
//       className="
//         relative w-16 h-9 flex items-center 
//         rounded-full cursor-pointer p-1

//         bg-white/20 dark:bg-white/10
//         backdrop-blur-md border border-white/20

//         transition
//       "
//     >
//       {/* ICONS */}
//       <div className="absolute inset-0 flex justify-between items-center px-2 text-xs pointer-events-none">
//         <FaSun className="text-yellow-400" />
//         <FaMoon className="text-emerald-400" />
//       </div>

//       {/* TOGGLE BALL */}
//       <motion.div
//         layout
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         className="
//           w-7 h-7 rounded-full flex items-center justify-center

//           bg-white dark:bg-black
//           shadow-md dark:shadow-[0_0_10px_rgba(16,185,129,0.5)]
//         "
//         animate={{ x: theme === "dark" ? 28 : 0 }}
//       >
//         {theme === "dark" ? <FaMoon size={12} /> : <FaSun size={12} />}
//       </motion.div>
//     </div>
//   );
// }
return (
  <div
    onClick={toggleTheme}
    className="
      relative w-16 h-9 flex items-center
      rounded-full cursor-pointer p-1

      bg-gradient-to-r from-white/10 to-white/5
      dark:from-white/10 dark:to-black/20

      backdrop-blur-xl
      border border-white/20

      shadow-[0_8px_30px_rgba(0,0,0,0.25)]

      transition-all duration-300
      hover:scale-105
    "
  >
    {/* BACK ICONS */}
    <div className="absolute inset-0 flex justify-between items-center px-2 text-xs pointer-events-none opacity-70">
      <FaSun className="text-yellow-400 drop-shadow" />
      <FaMoon className="text-emerald-400 drop-shadow" />
    </div>

    {/* GLOW TRACK */}
    <div className="
      absolute inset-0 rounded-full
      bg-gradient-to-r from-blue-500/20 to-emerald-500/20
      blur-md opacity-60
    "/>

    {/* BALL */}
    <motion.div
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      animate={{ x: theme === "dark" ? 28 : 0 }}
      className="
        w-7 h-7 rounded-full flex items-center justify-center

        bg-white/90 dark:bg-black/80
        backdrop-blur-xl

        shadow-lg
        border border-white/20

        z-10
      "
    >
      {theme === "dark" ? (
        <FaMoon size={12} className="text-emerald-400" />
      ) : (
        <FaSun size={12} className="text-yellow-400" />
      )}
    </motion.div>
  </div>
);
}