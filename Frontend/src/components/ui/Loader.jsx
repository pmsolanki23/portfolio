
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#020617] overflow-hidden">

      {/* 🌌 BACKGROUND GRADIENT BLOBS */}
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[140px] rounded-full top-[-100px] left-[-100px]"
      />
      <motion.div
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute w-[500px] h-[500px] bg-emerald-400 opacity-20 blur-[140px] rounded-full bottom-[-100px] right-[-100px]"
      />

      {/* 💎 GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 80 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          relative flex flex-col items-center gap-8
          px-14 py-16 rounded-[2rem]

          bg-white/5 backdrop-blur-2xl
          border border-white/10

          shadow-[0_0_60px_rgba(16,185,129,0.25)]
        "
      >

        {/* 🔥 FLOATING LOGO */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <h1
            className="
              text-7xl font-extrabold tracking-widest

              bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400
              text-transparent bg-clip-text

              drop-shadow-[0_0_30px_rgba(16,185,129,0.7)]
            "
          >
            {/* Pruthvi */}
            PS
          </h1>
        </motion.div>

        {/* ✨ LOADING TEXT */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-300 tracking-[0.3em] text-xs"
        >
          INITIALIZING PORTFOLIO
        </motion.p>

        {/* 🚀 PROGRESS BAR */}
        <div className="relative w-64 h-[4px] bg-white/10 rounded-full overflow-hidden">

          {/* moving glow */}
          <motion.div
            className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-blue-400 to-emerald-400 blur-sm"
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
          />

          {/* base line */}
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-emerald-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
          />
        </div>

      </motion.div>
    </div>
  );
}