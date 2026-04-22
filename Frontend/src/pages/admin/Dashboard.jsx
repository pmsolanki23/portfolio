// import { useEffect, useState } from "react";
// import { getProjects, getReviews } from "../../services/api";
// import API from "../../services/api";
// import { FaProjectDiagram, FaEnvelope, FaComments } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const [projects, setProjects] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
// const navigate = useNavigate();
//   useEffect(() => {
//     const load = async () => {
//       try {
//         setLoading(true);

//         const [pRes, mRes, rRes] = await Promise.all([
//           getProjects(),
//           API.get("/contact"),
//           getReviews(),
//         ]);

//         setProjects(pRes.data);
//         setMessages(mRes.data);
//         setReviews(rRes.data);
//       } catch (err) {
//         console.error("Dashboard error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, []);

//   const cardClass = `
//     p-6 rounded-2xl

//     bg-white dark:bg-white/5
//     backdrop-blur-xl

//     border border-gray-200 dark:border-white/10

//     shadow-md dark:shadow-none
//     hover:shadow-xl

//     transition duration-300
//   `;

//   return (
//     <div className="p-4">

//       {/* 🔥 HEADER */}
//      <div className="
// flex flex-col md:flex-row md:items-center justify-between gap-6

// p-5 mb-4 rounded-2xl

// bg-white dark:bg-white/5
// backdrop-blur-xl

// border border-gray-200 dark:border-white/10
// shadow-sm dark:shadow-none
// ">

//   {/* LEFT */}
//   <div>
//     <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
//       Admin Panel
//     </p>

//     <h1 className="text-3xl md:text-4xl font-bold gradient-text mt-1">
//       Dashboard
//     </h1>

//     <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
//       Overview of your portfolio activity
//     </p>
//   </div>

//   {/* RIGHT (optional future actions) */}
//   <div className="flex gap-2">
//     {/* future buttons */}
//   </div>

// </div>

//       {/* 🔥 LOADING */}
//       {loading && (
//         <p className="text-center text-gray-500 animate-pulse">
//           Loading dashboard...
//         </p>
//       )}

//       {!loading && (
//         <>
//           {/* 💎 STATS */}
//           <div className="grid md:grid-cols-3 gap-6 mb-10">

//             {/* PROJECTS */}
//             <motion.div className={cardClass} whileHover={{ scale: 1.03 }}>
//               <FaProjectDiagram className="text-xl mb-3 text-emerald-500" />
//               <p className="text-gray-500 text-sm">Total</p>
//               <h2 className="text-3xl font-bold gradient-text">
//                 {projects.length}
//               </h2>
//               <p className="text-gray-500 text-sm">Projects</p>
//             </motion.div>

//             {/* MESSAGES */}
//             <motion.div className={cardClass} whileHover={{ scale: 1.03 }}>
//               <FaEnvelope className="text-xl mb-3 text-blue-500" />
//               <p className="text-gray-500 text-sm">Total</p>
//               <h2 className="text-3xl font-bold gradient-text">
//                 {messages.length}
//               </h2>
//               <p className="text-gray-500 text-sm">Messages</p>
//             </motion.div>

//             {/* REVIEWS */}
//             <motion.div className={cardClass} whileHover={{ scale: 1.03 }}>
//               <FaComments className="text-xl mb-3 text-yellow-500" />
//               <p className="text-gray-500 text-sm">Total</p>
//               <h2 className="text-3xl font-bold gradient-text">
//                 {reviews.length}
//               </h2>
//               <p className="text-gray-500 text-sm">Reviews</p>
//             </motion.div>

//           </div>

//           {/* 🔥 LOWER */}
//           <div className="grid md:grid-cols-2 gap-6">

//             {/* ⚡ QUICK ACTIONS */}
//             <motion.div className={cardClass} whileHover={{ scale: 1.02 }}>
//               <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
//                 Quick Actions
//               </h2>

//               <button
//   onClick={() => navigate("/admin/projects")}
//   className="
//     w-full py-3 mb-4 rounded-xl font-semibold text-black

//     bg-gradient-to-r from-blue-400 to-emerald-400

//     hover:scale-[1.03]
//     hover:shadow-lg
//     transition
//   "
// >
//   + Add Project
// </button>

// <button
//   onClick={() => navigate("/admin/clients")}
//   className="
//     w-full py-3 rounded-xl

//     bg-gray-100 dark:bg-white/10
//     text-gray-700 dark:text-gray-300

//     hover:bg-gray-200 dark:hover:bg-white/20
//     transition
//   "
// >
//   View Messages
// </button>
//             </motion.div>

//             {/* 📊 ACTIVITY */}
//             <motion.div className={cardClass} whileHover={{ scale: 1.02 }}>
//               <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
//                 Activity
//               </h2>

//               <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
//                 <li>• {projects.length} total projects</li>
//                 <li>• {messages.length} messages received</li>
//                 <li>• {reviews.length} reviews submitted</li>
//               </ul>
//             </motion.div>

//           </div>
//         </>
//       )}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaEnvelope,
  FaUsers,
  FaCommentDots,
} from "react-icons/fa";

import { getProjects, getReviews } from "../../services/api";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

/* COUNT ANIMATION */
const useCountUp = (end, duration = 800) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return count;
};

/* CARD */
const StatCard = ({ item, delay }) => {
  const count = useCountUp(item.value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5, scale: 1.03 }}
      className="
group relative p-6 rounded-2xl

bg-white dark:bg-[#020617]

border border-transparent
bg-clip-padding

before:absolute before:inset-0 before:rounded-2xl
before:border before:border-white/20
before:pointer-events-none

shadow-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.7)]

overflow-hidden
"
    >
      <div className="flex justify-between mb-4 items-center">
        <div className="text-emerald-400 text-xl">{item.icon}</div>
        <span className="text-xs text-gray-400">Total</span>
      </div>

      <h2 className="text-3xl font-semibold">{count}</h2>
      <p className="text-sm text-gray-500">{item.title}</p>
    </motion.div>
  );
};

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAllActivity, setShowAllActivity] = useState(false); // ✅ FIX

  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const [pRes, cRes, rRes] = await Promise.all([
          getProjects(),
          API.get("/contact"),
          getReviews(),
        ]);

        setProjects(pRes.data);
        setContacts(cRes.data);
        setReviews(rRes.data);
      } catch (err) {
        console.error("Dashboard error:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  /* FILTER */
  const requests = contacts.filter((c) => c.status === "lead");
  const clients = contacts.filter((c) => c.status !== "lead");

  /* ACTIVITY DATA */
  const activityData = [
    { text: `${projects.length} total projects created` },
    { text: `${requests.length} new client requests` },
    { text: `${clients.length} active clients` },
    { text: `${reviews.length} reviews received` },
  ];

  const visibleActivity = showAllActivity
    ? activityData
    : activityData.slice(0, 3);

  /* STATS */
  const stats = [
    {
      title: "Projects",
      value: projects.length,
      icon: <FaProjectDiagram />,
    },
    {
      title: "Requests",
      value: requests.length,
      icon: <FaEnvelope />,
    },
    {
      title: "Clients",
      value: clients.length,
      icon: <FaUsers />,
    },
    {
      title: "Reviews",
      value: reviews.length,
      icon: <FaCommentDots />,
    },
  ];

  return (
    <div className="p-4 space-y-10">
      {/* HEADER */}
      {/* 🔥 HEADER */}
      <div
        className="
 flex flex-col md:flex-row md:items-center justify-between gap-6

 p-5 mb-4 rounded-2xl

 bg-white dark:bg-white/5
 backdrop-blur-xl

 border border-gray-200 dark:border-white/10
 shadow-sm dark:shadow-none
 "
      >
        {/* LEFT */}{" "}
        <div>
          {" "}
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
            Admin Panel{" "}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mt-1">
            Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
            {" "}
            Overview of your portfolio activity{" "}
          </p>{" "}
        </div>
        {/* RIGHT (optional future actions) */}
        <div className="flex gap-2">{/* future buttons */}</div>
      </div>
      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-500 animate-pulse">
          Loading dashboard...
        </p>
      )}

      {!loading && (
        <>
          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, i) => (
              <StatCard key={i} item={item} delay={i * 0.1} />
            ))}
          </div>

          {/* LOWER */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* QUICK */}
            <motion.div
              className="
group relative p-6 rounded-2xl
 dark:bg-[#020617]

border border-black/10 dark:border-white/10

shadow-md dark:shadow-[0_10px_40px_rgba(0,0,0,0.7)]

transition-all duration-300
"
            >
              <h2 className="mb-4 font-semibold">Quick Actions</h2>

              <button
                onClick={() => navigate("/admin/projects")}
                className="w-full py-3 mb-3 rounded-xl bg-gradient-to-r from-blue-400 to-emerald-400 text-black"
              >
                + Add Project
              </button>

              <button
                onClick={() => navigate("/admin/clients")}
                className="w-full py-3 rounded-xl bg-gray-200 dark:bg-white/10"
              >
                View Requests
              </button>
            </motion.div>

            {/* 🔥 YOUR ACTIVITY UI */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="
group relative p-6 rounded-2xl

bg-white dark:bg-[#020617]

border border-black/10 dark:border-white/10

shadow-md dark:shadow-[0_10px_40px_rgba(0,0,0,0.7)]

overflow-hidden
"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute inset-0 bg-emerald-400/5 blur-2xl" />
              </div>

              <div className="relative z-10">
                <h3 className="mb-5 font-medium">Activity</h3>

                <div className="space-y-3 text-sm text-gray-500">
                  {visibleActivity.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p className="hover:text-emerald-400">{item.text}</p>
                    </motion.div>
                  ))}
                </div>

                {/* VIEW MORE */}
                {activityData.length > 3 && (
                  <div className="mt-5 text-center">
                    <button
                      onClick={() => setShowAllActivity(!showAllActivity)}
                      className="text-xs px-3 py-1 rounded-full border border-emerald-400/30 hover:bg-emerald-400/10"
                    >
                      {showAllActivity ? "Show Less" : "View More Activity"}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}
