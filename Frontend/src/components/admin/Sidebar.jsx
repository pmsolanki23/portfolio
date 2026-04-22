// import {
//   FaUser,
//   FaProjectDiagram,
//   FaTimes,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { MdReviews } from "react-icons/md";

// const menu = [
//   { name: "Dashboard", path: "/admin", icon: <FaUser /> },
//   { name: "Projects", path: "/admin/projects", icon: <FaProjectDiagram /> },
//   { name: "Clients", path: "/admin/clients", icon: <FaUser /> },
//   { name: "Reviews", path: "/admin/reviews", icon: <MdReviews /> },
// ];

// export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
//   const location = useLocation();
//   const [showLogout, setShowLogout] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("token");

//     toast.success("Logged out successfully 👋", {
//       style: {
//         background: "#0f172a",
//         color: "#fff",
//         border: "1px solid rgba(255,255,255,0.1)",
//       },
//     });

//     setTimeout(() => {
//       window.location.href = "/admin/login";
//     }, 1200);
//   };
//   return (
//     <>
//       {/* OVERLAY */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0  bg-black/50 z-30 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* SIDEBAR */}
//       <div
//   className={`
//     fixed md:fixed top-0 left-0
//     h-screen w-64 p-6 z-40
//     bg-white dark:bg-[#020617]
//     border-r border-white/10
//     transition-transform duration-300
//     ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
//     md:translate-x-0
//   `}
// >
//         {/* MOBILE HEADER */}
//         <div className="flex justify-between items-center  md:hidden">
//           <h2 className="text-xl font-bold">Admin</h2>
//           <button onClick={() => setSidebarOpen(false)}>
//             <FaTimes />
//           </button>
//         </div>

//         {/* DESKTOP TITLE */}
//         <h2 className=" text-2xl font-semibold mt-16 mb-10 text-center hidden md:block">
//           <span className="text-gray-700">Admin Panel</span>
//         </h2>

//         {/* MENU */}
//         <div className="flex flex-col gap-3">
//           {menu.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               onClick={() => setSidebarOpen(false)}
//               className={`flex items-center gap-3 p-3 rounded-xl transition ${
//                 location.pathname === item.path
//                   ? "bg-gradient-to-r from-blue-400 to-emerald-400 text-white"
//                   : "hover:bg-white/10"
//               }`}
//             >
//               {item.icon}
//               {item.name}
//             </Link>
//           ))}
//         </div>

//         {/* LOGOUT BUTTON */}
//         <button
//   onClick={() => setShowLogout(true)}
//   className="mt-10 flex items-center justify-center w-full gap-3 px-4 py-3 rounded-xl
//   bg-gradient-to-r from-red-500 to-rose-600
//   hover:from-red-600 hover:to-rose-700
//   text-white font-medium
//   shadow-md hover:shadow-xl
//   transition-all duration-300
//   active:scale-[0.98]"
// >
//   <FaSignOutAlt className="text-lg" />
//   Logout
// </button>
//       </div>

//       {/* 🔥 LOGOUT MODAL */}
//       {showLogout && (
//   <div className="fixed inset-0 z-50 flex items-center justify-center
//   bg-black/40 dark:bg-black/70 backdrop-blur-md">

//     <div className="w-[90%] max-w-sm p-6 rounded-2xl
//     bg-white/90 dark:bg-[#0f172a]/90
//     backdrop-blur-xl
//     border border-gray-200 dark:border-white/10
//     shadow-2xl transition-all">

//       {/* Icon */}
//       <div className="flex justify-center mb-4">
//         <div className="w-12 h-12 rounded-full flex items-center justify-center
//         bg-red-100 dark:bg-red-500/10">
//           <FaSignOutAlt className="text-red-500 text-xl" />
//         </div>
//       </div>

//       {/* Title */}
//       <h2 className="text-xl font-semibold text-center
//       text-gray-800 dark:text-white">
//         Confirm Logout
//       </h2>

//       {/* Subtitle */}
//       <p className="text-sm text-center mt-2 mb-6
//       text-gray-500 dark:text-gray-400">
//         Are you sure you want to logout from your admin panel?
//       </p>

//       {/* Buttons */}
//       <div className="flex gap-3">
        
//         {/* Cancel */}
//         <button
//           onClick={() => setShowLogout(false)}
//           className="flex-1 px-4 py-2.5 rounded-xl
//           bg-gray-100 dark:bg-white/10
//           text-gray-700 dark:text-gray-200
//           hover:bg-gray-200 dark:hover:bg-white/20
//           transition-all duration-200"
//         >
//           Cancel
//         </button>

//         {/* Logout */}
//         <button
//           onClick={handleLogout}
//           className="flex-1 px-4 py-2.5 rounded-xl
//           bg-gradient-to-r from-red-500 to-rose-600
//           hover:from-red-600 hover:to-rose-700
//           text-white font-medium
//           shadow-md hover:shadow-lg
//           transition-all duration-300"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   </div>
// )}
//     </>
//   );
// }
import {
  FaUser,
  FaProjectDiagram,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <FaUser /> },
  { name: "Projects", path: "/admin/projects", icon: <FaProjectDiagram /> },
  { name: "Clients", path: "/admin/clients", icon: <FaUser /> },
  { name: "Reviews", path: "/admin/reviews", icon: <MdReviews /> },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out 👋");

    setTimeout(() => {
      window.location.href = "/admin/login";
    }, 800);
  };

  return (
    <>
      {/* 🔥 OVERLAY (MOBILE) */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* 🔥 SIDEBAR */}
      <aside
        className={`
          fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] z-40

          flex flex-col

          bg-white/80 dark:bg-[#020617]/80
          backdrop-blur-2xl

          border-r border-gray-200 dark:border-white/10

          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* 🔝 TOP SECTION */}
        <div className="p-5 flex-1 overflow-y-auto">
          {/* MOBILE HEADER */}
          <div className="flex justify-between items-center md:hidden mb-6">
            <h2 className="text-lg font-semibold">Admin</h2>
            <button onClick={() => setSidebarOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* LOGO */}
          <div className="hidden md:block mb-10 text-center">
            <h2 className="text-2xl font-semibold gradient-text">
              Admin Panel
            </h2>
          </div>

          {/* MENU */}
          <nav className="flex flex-col gap-2">
            {menu.map((item, i) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={i}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl
                      transition-all duration-300

                      ${
                        active
                          ? "bg-gradient-to-r from-blue-400 to-emerald-400 text-[#020617] shadow-md"
                          : "text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5"
                      }
                    `}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium">
                      {item.name}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* 🔻 BOTTOM LOGOUT */}
        <div className="p-5 border-t border-gray-200 dark:border-white/10">
          <button
            onClick={() => setShowLogout(true)}
            className="
              group relative w-full flex items-center justify-center gap-3 
              px-5 py-3 rounded-full font-medium overflow-hidden

              border border-red-400/30 text-red-400
              backdrop-blur-xl

              transition-all duration-300
              hover:scale-[1.04]
            "
          >
            {/* HOVER BG */}
            <span className="
              absolute inset-0 opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-red-500 to-pink-500
              transition duration-300
            " />

            {/* GLOW */}
            <span className="
              hidden dark:block absolute inset-0
              opacity-0 group-hover:opacity-30
              bg-red-500 blur-2xl
              transition duration-500
            " />

            {/* CONTENT */}
            <span className="relative z-10 flex items-center gap-2">
              <FaSignOutAlt className="text-sm transition group-hover:scale-110 group-hover:text-white" />
              <span className="transition group-hover:text-white">
                Logout
              </span>
            </span>
          </button>
        </div>
      </aside>

      {/* 🔥 LOGOUT MODAL */}
      <AnimatePresence>
  {showLogout && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* 🔥 BACKDROP */}
      <motion.div
        onClick={() => setShowLogout(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* 🔥 MODAL */}
      <motion.div
        initial={{ scale: 0.8, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 40, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="
          relative z-10 w-full max-w-sm p-6 sm:p-7 rounded-3xl

          bg-white/70 dark:bg-[#020617]/80
          backdrop-blur-2xl

          border border-white/20 dark:border-white/10

          shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        "
      >
        {/* 🔴 ICON with pulse */}
        <div className="flex justify-center mb-5">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="
              w-14 h-14 rounded-full flex items-center justify-center

              bg-gradient-to-tr from-red-500/20 to-rose-500/20
              border border-red-400/30
            "
          >
            <FaSignOutAlt className="text-red-500 text-lg" />
          </motion.div>
        </div>

        {/* 🔥 TEXT */}
        <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-800 dark:text-white">
          Confirm Logout
        </h2>

        <p className="text-sm text-center text-gray-500 mt-2 mb-6 leading-relaxed">
          You’ll be signed out of your account.
          <br />
          Please confirm to continue.
        </p>

        {/* 🔥 ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* CANCEL */}
          <button
            onClick={() => setShowLogout(false)}
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
            onClick={handleLogout}
            className="
              group relative flex-1 px-4 py-2.5 rounded-xl font-medium overflow-hidden

              text-white

              transition-all duration-300
              hover:scale-[1.05]
            "
          >
            {/* 🔥 BG */}
            <span className="
              absolute inset-0 bg-gradient-to-r from-red-500 to-rose-600
            " />

            {/* 🔥 GLOW */}
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

        {/* 🔥 CLOSE (top-right optional) */}
        <button
          onClick={() => setShowLogout(false)}
          className="
            absolute top-3 right-3 text-gray-400 hover:text-red-400
            transition text-sm
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