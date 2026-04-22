import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="relative py-40 px-6 text-center overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 w-[400px] h-[400px] bg-blue-500/20 blur-[160px] rounded-full" />
        <div className="absolute right-1/4 bottom-0 w-[400px] h-[400px] bg-emerald-500/20 blur-[160px] rounded-full" />
      </div>

      {/* ✨ MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >

        {/* 🔥 BIG HEADING */}
        <h2 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight">

          Let’s create something{" "}

          <span className="
            bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400
            bg-[length:200%_200%]
            animate-gradient
            bg-clip-text text-transparent
          ">
            unforgettable
          </span>

        </h2>

        {/* 💬 SUBTEXT */}
        <p className="mt-8 text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          I help turn ideas into scalable digital products with clean architecture,
          smooth UX, and powerful performance.
        </p>

        {/* 🚀 BUTTON */}
        <div className="mt-14 flex justify-center">

          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="relative group"
          >

            {/* GLOW */}
            <div className="
              absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-blue-400 to-emerald-400
              transition duration-500
            "></div>

            <NavLink
              to="/contact"
              className="
                relative z-10 inline-flex items-center gap-3

                px-12 py-5 rounded-full text-base font-semibold

                bg-gradient-to-r from-blue-400 to-emerald-400
                text-white

                shadow-xl shadow-emerald-400/30

                transition-all duration-300
              "
            >
              Start a Project →
            </NavLink>

          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}