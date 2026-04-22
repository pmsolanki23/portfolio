// import { NavLink, Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import ThemeToggle from "../ui/ThemeToggle";

// export default function Navbar({ onLogoutClick }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { pathname } = useLocation();
//   const [showLogoutModal, setShowLogoutModal] = useState(false);

//   const isAdmin = pathname.startsWith("/admin");

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const adminItems = [
//     { name: "Dashboard", path: "/admin" },
//     { name: "Projects", path: "/admin/projects" },
//     { name: "Clients", path: "/admin/clients" },
//     { name: "Reviews", path: "/admin/reviews" },
//   ];

//   const items = isAdmin ? adminItems : navItems;

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -60 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.3 }}
//         className="fixed top-0 left-0 w-full z-50
//       bg-white/70 dark:bg-[#020617]/70 backdrop-blur-xl
//       border-b border-black/10 dark:border-white/10"
//       >
//         {/* CONTAINER */}
//         <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 py-3">
//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-2">
//             <div
//               className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg 
//           bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-400 
//           text-white font-semibold shadow-lg shadow-emerald-500/30"
//             >
//               PS
//             </div>

//             <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">
//               Pruthvi<span className="text-gray-400">.dev</span>
//             </span>
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-6">
//             {!isAdmin &&
//               navItems.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `px-3 py-1 text-sm font-medium transition ${
//                       isActive
//                         ? "text-emerald-400"
//                         : "text-gray-600 dark:text-gray-300 hover:text-emerald-400"
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               ))}

//             <ThemeToggle />
//           </div>

//           {/* MOBILE BUTTON */}
//           <button
//             className="md:hidden text-2xl text-gray-700 dark:text-white"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? "✕" : "☰"}
//           </button>
//         </div>

//         {/* OVERLAY */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               className="fixed inset-0 bg-black/40 z-40 md:hidden"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setMenuOpen(false)}
//             />
//           )}
//         </AnimatePresence>

//         {/* MOBILE MENU */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               initial={{ y: -10, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -10, opacity: 0 }}
//               className="md:hidden absolute top-full left-0 w-full z-50 px-4 pb-4"
//             >
//               <div
//                 className="mt-2 rounded-2xl p-5
//             bg-white/95 dark:bg-[#020617]/95
//             backdrop-blur-xl
//             border border-black/10 dark:border-white/10
//             shadow-xl"
//               >
//                 <div className="flex flex-col gap-4">
//                   {items.map((item) => (
//                     <NavLink
//                       key={item.name}
//                       to={item.path}
//                       onClick={() => setMenuOpen(false)}
//                       className={({ isActive }) =>
//                         `text-base font-medium transition ${
//                           isActive
//                             ? "text-emerald-400"
//                             : "text-gray-700 dark:text-gray-200 hover:text-emerald-400"
//                         }`
//                       }
//                     >
//                       {item.name}
//                     </NavLink>
//                   ))}

//                   {/* ADMIN LOGOUT */}
//                   {isAdmin && (
//                     <button
//                       onClick={() => {
//                         setMenuOpen(false);

//                         setTimeout(() => {
//                           setShowLogoutModal(true);
//                         }, 200);
//                       }}
//                       className="text-red-500 font-medium text-left"
//                     >
//                       Logout
//                     </button>
//                   )}

//                   <div className="pt-3 border-t border-gray-200 dark:border-white/10">
//                     <ThemeToggle />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>
//       <AnimatePresence>
//         {showLogoutModal && (
//           <motion.div
//             className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0, y: 40 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               className="
//           w-[90%] max-w-sm p-6 rounded-2xl text-center
//           bg-white dark:bg-[#0f172a]
//           border border-gray-200 dark:border-white/10
//           shadow-xl
//         "
//             >
//               <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
//                 Confirm Logout
//               </h2>

//               <p className="text-gray-500 dark:text-gray-400 mb-6">
//                 Are you sure you want to logout?
//               </p>

//               <div className="flex gap-4 justify-center">
//                 <button
//                   onClick={() => setShowLogoutModal(false)}
//                   className="px-4 py-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   onClick={() => {
//                     setShowLogoutModal(false);
//                     onLogoutClick && onLogoutClick();
//                   }}
//                   className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


// import { NavLink, Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import ThemeToggle from "../ui/ThemeToggle";

// export default function Navbar({ onLogoutClick }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const { pathname } = useLocation();
//   const isAdmin = pathname.startsWith("/admin");

//   // 🔥 SCROLL EFFECT
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // 🔗 NAV ITEMS
//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const adminItems = [
//     { name: "Dashboard", path: "/admin" },
//     { name: "Projects", path: "/admin/projects" },
//     { name: "Clients", path: "/admin/clients" },
//     { name: "Reviews", path: "/admin/reviews" },
//   ];

//   const items = isAdmin ? adminItems : navItems;

//   return (
//     <>
//       {/* 🔥 NAVBAR */}
//  <motion.nav
//   initial={{ y: -60 }}
//   animate={{ y: 0 }}
//   className="
//     sticky top-4 z-50
//      max-w-6xl mx-auto
//     px-6 py-3 rounded-2xl
//     backdrop-blur-2xl
//     bg-white/70 dark:bg-[#020617]/70
//     border border-black/10 dark:border-white/10
//     shadow-lg
//   "
// >
//         <div className="flex justify-between items-center px-4 sm:px-6">
          
//           {/* 🔥 LOGO */}
//           <Link to="/" className="flex items-center gap-2">
//             {/* <div className="
//               w-9 h-9 flex items-center justify-center rounded-xl
//               bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-400
//               text-white font-semibold
//               shadow-lg shadow-emerald-500/30
//             ">
//               PS
//             </div> */}

// <div className="flex items-center gap-3 group cursor-pointer">

//   {/* 🔥 LOGO */}
//   <motion.div
//     whileHover={{ scale: 1.06 }}
//     transition={{ type: "spring", stiffness: 300 }}
//     className="
//       relative w-10 h-10 flex items-center justify-center rounded-xl

//       bg-white dark:bg-[#020617]
//       border border-black/10 dark:border-white/10

//       shadow-sm dark:shadow-lg
//     "
//   >

//     {/* 💎 PS */}
//     <motion.span
//       initial={{ opacity: 0.8 }}
//       animate={{ opacity: 1 }}
//       whileHover={{ letterSpacing: "2px" }}
//       className="
//         text-sm font-semibold tracking-wide
//         text-gray-900 dark:text-white
//       "
//     >
//       PS
//     </motion.span>

//     {/* 🔥 ACCENT LINE (ANIMATED) */}
//     <motion.div
//       initial={{ width: "0%" }}
//       whileHover={{ width: "60%" }}
//       transition={{ duration: 0.4 }}
//       className="
//         absolute bottom-1 left-1/2 -translate-x-1/2
//         h-[2px] rounded-full

//         bg-gradient-to-r from-blue-400 to-emerald-400
//       "
//     />

//   </motion.div>

//   {/* 🔥 TEXT */}
//   <div className="flex flex-col leading-none">

//     <motion.span
//       whileHover={{ x: 2 }}
//       className="
//         font-semibold tracking-wide
//         text-gray-900 dark:text-white
//       "
//     >
//       Pruthvi
//     </motion.span>

//     <span className="
//       text-[10px] tracking-[0.3em]
//       text-gray-500 dark:text-gray-400
//     ">
//       DEVELOPER
//     </span>

//   </div>

// </div>

//             {/* <span className="font-semibold text-gray-800 dark:text-gray-200">
//               Pruthvi<span className="text-gray-400">.dev</span>
//             </span> */}
//           </Link>

//           {/* 💻 DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-6">
//             {!isAdmin &&
//               navItems.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `relative px-3 py-1 text-sm font-medium transition
//                     ${
//                       isActive
//                         ? "text-emerald-400"
//                         : "text-gray-600 dark:text-gray-300 hover:text-emerald-400"
//                     }`
//                   }
//                 >
//                   {item.name}

//                   {/* ACTIVE UNDERLINE */}
//                   <span
//                     className={`
//                     absolute left-0 -bottom-1 h-[2px] w-full rounded-full
//                     transition-all duration-300
//                     ${
//                       pathname === item.path
//                         ? "bg-gradient-to-r from-blue-400 to-emerald-400"
//                         : "bg-transparent"
//                     }
//                   `}
//                   />
//                 </NavLink>
//               ))}


//             <ThemeToggle />
//           </div>

//           {/* 📱 MOBILE BUTTON */}
//           <button
//             className="md:hidden -2 text-2xl text-gray-700 dark:text-white"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? "✕" : "☰"}
//           </button>
//         </div>

//         {/* 🔥 OVERLAY */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               className="fixed inset-0 bg-black/40 z-40 md:hidden"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setMenuOpen(false)}
//             />
//           )}
//         </AnimatePresence>

//         {/* 📱 MOBILE MENU */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               initial={{ y: -10, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -10, opacity: 0 }}
//               className="md:hidden absolute top-full left-0 w-full z-50 px-4 pb-4"
//             >
//               <div className="
//                 mt-2 rounded-2xl p-5
//                 bg-white/90 dark:bg-[#020617]/90
//                 backdrop-blur-2xl
//                 border border-black/10 dark:border-white/10
//                 shadow-2xl
//               ">
//                 <div className="flex flex-col gap-4">

//                   {items.map((item) => (
//                     <NavLink
//                       key={item.name}
//                       to={item.path}
//                       onClick={() => setMenuOpen(false)}
//                       className={({ isActive }) =>
//                         `text-base font-medium transition
//                         ${
//                           isActive
//                             ? "text-emerald-400"
//                             : "text-gray-700 dark:text-gray-200 hover:text-emerald-400"
//                         }`
//                       }
//                     >
//                       {item.name}
//                     </NavLink>
//                   ))}

//                   {/* 🔥 LOGOUT */}
//                   {isAdmin && (
//                     <button
//                       onClick={() => {
//                         setMenuOpen(false);
//                         setTimeout(() => {
//                           setShowLogoutModal(true);
//                         }, 150);
//                       }}
//                       className="text-red-500 font-medium text-left"
//                     >
//                       Logout
//                     </button>
//                   )}

//                   <div className="pt-3 border-t border-gray-200 dark:border-white/10">
//                     <ThemeToggle />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>

//       {/* 🔥 LOGOUT MODAL */}
//       <AnimatePresence>
//         {showLogoutModal && (
//           <motion.div
//             className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0, y: 40 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               className="
//               w-[90%] max-w-sm p-6 rounded-2xl text-center
//               bg-white dark:bg-[#0f172a]
//               border border-gray-200 dark:border-white/10
//               shadow-xl
//             "
//             >
//               <h2 className="text-xl font-bold mb-4">
//                 Confirm Logout
//               </h2>

//               <p className="text-gray-500 mb-6">
//                 Are you sure you want to logout?
//               </p>

//               <div className="flex gap-4 justify-center">
//                 <button
//                   onClick={() => setShowLogoutModal(false)}
//                   className="px-4 py-2 rounded-lg bg-gray-500 text-white"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   onClick={() => {
//                     setShowLogoutModal(false);
//                     onLogoutClick && onLogoutClick();
//                   }}
//                   className="px-4 py-2 rounded-lg bg-red-500 text-white"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";
import { FaSignOutAlt } from "react-icons/fa";

export default function Navbar({ onLogoutClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const adminItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Projects", path: "/admin/projects" },
    { name: "Clients", path: "/admin/clients" },
    { name: "Reviews", path: "/admin/reviews" },
  ];

  const items = isAdmin ? adminItems : navItems;

  return (
    <>
      {/* 🔥 FIXED WRAPPER */}
      <motion.div
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        className="
          fixed top-0 left-0 w-full z-50
          flex justify-center
          pointer-events-none
        "
      >
        <div className="w-full max-w-6xl px-4 mt-4 pointer-events-auto">

          {/* 🔥 NAVBAR */}
          <motion.nav
            className={`
              px-6 py-3 rounded-2xl
              backdrop-blur-2xl
              border border-black/10 dark:border-white/10
              transition-all duration-300

              ${
                scrolled
                  ? "bg-white/80 dark:bg-[#020617]/80 shadow-xl"
                  : "bg-white/60 dark:bg-[#020617]/60 shadow-md"
              }
            `}
          >
            <div className="flex justify-between items-center">

              {/* 🔥 LOGO */}
              <Link to="/" className="flex items-center gap-3">

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="
                    relative w-10 h-10 flex items-center justify-center rounded-xl
                    bg-white dark:bg-[#020617]
                    border border-black/10 dark:border-white/10
                  "
                >
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    PS
                  </span>

                  <motion.div
                    initial={{ width: "0%" }}
                    whileHover={{ width: "60%" }}
                    className="
                      absolute bottom-1 left-1/2 -translate-x-1/2
                      h-[2px] rounded-full
                      bg-gradient-to-r from-blue-400 to-emerald-400
                    "
                  />
                </motion.div>

                <div className="flex flex-col leading-none">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Pruthvi
                  </span>
                  <span className="text-[10px] tracking-[0.3em] mt-1 text-gray-500 dark:text-gray-400">
                    DEVELOPER
                  </span>
                </div>

              </Link>

              {/* 💻 DESKTOP */}
              <div className="hidden md:flex items-center gap-6">
                {!isAdmin &&
                  navItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) =>
                        `relative text-sm font-medium transition
                        ${
                          isActive
                            ? "text-emerald-400"
                            : "text-gray-600 dark:text-gray-300 hover:text-emerald-400"
                        }`
                      }
                    >
                      {item.name}

                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full ${
                          pathname === item.path
                            ? "bg-gradient-to-r from-blue-400 to-emerald-400"
                            : ""
                        }`}
                      />
                    </NavLink>
                  ))}

                <ThemeToggle />
              </div>

              {/* 📱 MOBILE BTN */}
              <button
                className="md:hidden text-2xl text-gray-700 dark:text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>

            {/* 📱 MOBILE MENU */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  className="md:hidden mt-4 p-4 rounded-2xl bg-white/90 dark:bg-[#020617]/90 backdrop-blur-xl border border-black/10 dark:border-white/10"
                >
                  <div className="flex flex-col gap-4">

                    {items.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="text-gray-700 dark:text-gray-200"
                      >
                        {item.name}
                      </NavLink>
                    ))}

                    {isAdmin && (
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          setTimeout(() => setShowLogoutModal(true), 150);
                        }}
                        className="text-red-500 text-left"
                      >
                        Logout
                      </button>
                    )}

                    <ThemeToggle />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        </div>
      </motion.div>

      {/* 🔥 LOGOUT MODAL */}
      <AnimatePresence>
  {showLogoutModal && (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* 🔥 BACKDROP */}
      <motion.div
        onClick={() => setShowLogoutModal(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* 🔥 MODAL */}
      <motion.div
        initial={{ scale: 0.75, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.75, y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        className="
          relative z-10 w-full max-w-sm p-6 sm:p-7 rounded-3xl text-center

          bg-white/70 dark:bg-[#020617]/80
          backdrop-blur-2xl

          border border-white/20 dark:border-white/10

          shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        "
      >
        {/* 🔴 ICON */}
        <div className="flex justify-center mb-5">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="
              w-14 h-14 flex items-center justify-center rounded-full

              bg-gradient-to-tr from-red-500/20 to-rose-500/20
              border border-red-400/30
            "
          >
            <FaSignOutAlt className="text-red-500 text-lg" />
          </motion.div>
        </div>

        {/* 🔥 TEXT */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
          Confirm Logout
        </h2>

        <p className="text-sm text-gray-500 mt-2 mb-6 leading-relaxed">
          You are about to log out of your session.
          <br />
          Do you want to continue?
        </p>

        {/* 🔥 ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* CANCEL */}
          <button
            onClick={() => setShowLogoutModal(false)}
            className="
              flex-1 px-4 py-2.5 rounded-xl font-medium

              bg-gray-100 dark:bg-white/10
              text-gray-700 dark:text-gray-300

              hover:bg-gray-200 dark:hover:bg-white/20

              transition-all duration-200
            "
          >
            Stay Logged In
          </button>

          {/* LOGOUT */}
          <button
            onClick={() => {
              setShowLogoutModal(false);
              onLogoutClick && onLogoutClick();
            }}
            className="
              group relative flex-1 px-4 py-2.5 rounded-xl font-medium overflow-hidden

              text-white

              transition-all duration-300
              hover:scale-[1.05]
            "
          >
            {/* BG */}
            <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-600" />

            {/* GLOW */}
            <span className="
              absolute inset-0 opacity-0 group-hover:opacity-40
              bg-red-500 blur-xl transition duration-500
            " />

            {/* TEXT */}
            <span className="relative z-10">
              Logout
            </span>
          </button>
        </div>

        {/* ❌ CLOSE BUTTON */}
        <button
          onClick={() => setShowLogoutModal(false)}
          className="
            absolute top-3 right-3 text-gray-400 hover:text-red-400
            transition
          "
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}