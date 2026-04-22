// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { useEffect } from "react";

// export default function LogoStroke() {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   useEffect(() => {
//     const handleMouse = (e) => {
//       mouseX.set((e.clientX - window.innerWidth / 2) / 25);
//       mouseY.set((e.clientY - window.innerHeight / 2) / 25);
//     };
//     window.addEventListener("mousemove", handleMouse);
//     return () => window.removeEventListener("mousemove", handleMouse);
//   }, []);

//   const rotateX = useTransform(mouseY, [-20, 20], [10, -10]);
//   const rotateY = useTransform(mouseX, [-20, 20], [-10, 10]);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-white dark:bg-[#020617]">
      
//       {/* 🌌 Animated Background */}
//       <motion.div
//         className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"
//         animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
//         transition={{ repeat: Infinity, duration: 20 }}
//       />
//       <motion.div
//         className="absolute w-[500px] h-[500px] bg-emerald-400/20 blur-[140px] rounded-full"
//         animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
//         transition={{ repeat: Infinity, duration: 18 }}
//       />

//       {/* 💎 Logo Container */}
//       <motion.div
//         style={{ rotateX, rotateY }}
//         initial={{ scale: 0.7, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="perspective-[1000px]"
//       >
//         <motion.svg
//           width="240"
//           height="240"
//           viewBox="0 0 200 200"
//           fill="none"
//           className="drop-shadow-xl"
//         >
//           {/* Glow Pulse */}
//           <motion.circle
//             cx="100"
//             cy="100"
//             r="90"
//             stroke="url(#grad)"
//             strokeWidth="2"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: [0, 0.5, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />

//           {/* Floating Group */}
//           <motion.g
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 3 }}
//           >
//             {/* P */}
//             <motion.path
//               d="M50 150 V50 H90 Q130 50 130 80 Q130 110 90 110 H50"
//               stroke="url(#grad)"
//               strokeWidth="6"
//               strokeLinecap="round"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ duration: 1.5 }}
//             />

//             {/* S */}
//             <motion.path
//               d="M150 70 Q120 40 90 70 Q60 100 120 120 Q180 140 140 170 Q100 200 60 170"
//               stroke="url(#grad)"
//               strokeWidth="6"
//               strokeLinecap="round"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ duration: 2, delay: 0.3 }}
//             />
//           </motion.g>

//           {/* Animated Gradient */}
//           <defs>
//             <linearGradient id="grad" x1="0" y1="0" x2="200" y2="200">
//               <stop offset="0%">
//                 <animate attributeName="stop-color" values="#3b82f6;#22d3ee;#10b981;#3b82f6" dur="6s" repeatCount="indefinite"/>
//               </stop>
//               <stop offset="100%">
//                 <animate attributeName="stop-color" values="#10b981;#3b82f6;#22d3ee;#10b981" dur="6s" repeatCount="indefinite"/>
//               </stop>
//             </linearGradient>
//           </defs>
//         </motion.svg>
//       </motion.div>
//     </div>
//   );
// }




import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function LogoStroke() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const move = (e) => {
      x.set((e.clientX - window.innerWidth / 2) / 30);
      y.set((e.clientY - window.innerHeight / 2) / 30);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const rotateX = useTransform(y, [-15, 15], [8, -8]);
  const rotateY = useTransform(x, [-15, 15], [-8, 8]);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden 
                    bg-white dark:bg-[#020617] transition-colors duration-500">

      {/* 🌌 LIGHT MODE BG */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-300/20 blur-[120px] rounded-full 
                   dark:bg-cyan-400/10"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] bg-emerald-300/20 blur-[120px] rounded-full 
                   dark:bg-emerald-400/10"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* 💎 LOGO */}
      <motion.div style={{ rotateX, rotateY }}>
        <motion.svg
          width="240"
          height="240"
          viewBox="0 0 200 200"
          fill="none"
          className="
            drop-shadow-md 
            dark:drop-shadow-[0_0_40px_rgba(34,211,238,0.6)]
          "
        >

          {/* Glow Ring */}
          <motion.circle
            cx="100"
            cy="100"
            r="90"
            stroke="url(#grad)"
            strokeWidth="1.5"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="dark:opacity-100"
          />

          {/* Fake depth (strong in light, subtle in dark) */}
          <g className="opacity-20 dark:opacity-10" transform="translate(2,2)">
            <path
              d="M50 150 V50 H90 Q130 50 130 80 Q130 110 90 110 H50"
              stroke="#000"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M150 70 Q120 40 90 70 Q60 100 120 120 Q180 140 140 170 Q100 200 60 170"
              stroke="#000"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>

          {/* Float */}
          <motion.g
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* P */}
            <motion.path
              d="M50 150 V50 H90 Q130 50 130 80 Q130 110 90 110 H50"
              stroke="url(#grad)"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
            />

            {/* S */}
            <motion.path
              d="M150 70 Q120 40 90 70 Q60 100 120 120 Q180 140 140 170 Q100 200 60 170"
              stroke="url(#grad)"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
            />
          </motion.g>

          {/* Light sweep (only visible in dark) */}
          <motion.rect
            x="-200"
            y="0"
            width="200"
            height="200"
            fill="url(#shine)"
            className="opacity-0 dark:opacity-100"
            animate={{ x: ["-200", "200"] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>

            <linearGradient id="shine">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
}