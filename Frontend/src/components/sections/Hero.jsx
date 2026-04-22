import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

/* ROTATION */
function useRotate(speed = 0.3) {
  const ref = useRef(null);
  const angle = useRef(0);

  useEffect(() => {
    const animate = () => {
      if (ref.current) {
        angle.current += speed;
        ref.current.style.transform = `rotate(${angle.current}deg)`;
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [speed]);

  return ref;
}

/* ROLE */
function useRole(roles, delay = 2000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, delay);
    return () => clearInterval(i);
  }, [roles, delay]);

  return roles[index];
}

export default function Hero() {
  const rotateRef = useRotate(0.4);
  const role = useRole([
    "FULLSTACK DEVELOPER",
    "MERN DEVELOPER",
    "REACT DEVELOPER",
    "UI/UX DESIGNER",
  ]);

  return (
<section className="
  relative min-h-screen flex

  items-start md:items-center   /* 🔥 MAIN FIX */

  pt-24 md:pt-0                /* controlled spacing */

  px-6 md:px-16 
  max-w-7xl mx-auto
">
        {/* 🔥 STRONG BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-blue-400/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-emerald-400/30 blur-[140px] rounded-full" />
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT */}
        <div className="space-y-6">
          <p className="text-xs tracking-[0.4em] text-gray-500 dark:text-gray-400">
            HELLO, I'M
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Pruthvi{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Solanki
            </span>
          </h1>

          {/* ROLE */}
          <motion.h2
            key={role}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-semibold text-emerald-400"
          >
            {role}
          </motion.h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed text-lg">
            I build scalable, high-performance web apps with modern UI, clean
            architecture and smooth user experience.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-5 pt-4">
            <NavLink
              to="/projects"
              className="
                px-7 py-3 rounded-xl font-semibold

                bg-gradient-to-r from-blue-400 to-emerald-400
                text-white

                shadow-lg shadow-emerald-400/20
                hover:scale-105 hover:shadow-xl
                transition
              "
            >
              View Projects
            </NavLink>

            <NavLink
              to="/contact"
              className="
                px-7 py-3 rounded-xl font-medium

                bg-white/60 text-gray-800 border border-gray-200
                dark:bg-white/5 dark:text-gray-200 dark:border-white/10

                backdrop-blur-xl
                hover:scale-105 hover:shadow-lg
                transition
              "
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="relative w-[320px] md:w-[440px] aspect-square">
            {/* 🔥 BACK GLOW */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/30 to-emerald-400/30 blur-[120px] rounded-full scale-110"></div>

            {/* 🔥 FLOATING IMAGE */}
            <motion.img
              src="/illustration.png"
              alt="hero"
              className="relative z-10 w-full h-full object-contain p-8 drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* 🔥 ROTATING RING (VISIBLE + PREMIUM) */}

            {/* 🔥 INNER SOFT GLOW */}
            <div className="absolute inset-0 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
