import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ProjectForm from "../components/admin/ProjectForm";
import ProjectList from "../components/admin/ProjectList";
import Messages from "../components/admin/Messages";

import { getProjects } from "../services/api";
import {
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";


const menu = [
  { name: "Dashboard", icon: <FaUser /> },
  { name: "Projects", icon: <FaProjectDiagram /> },
  { name: "Clients", icon: <FaUser /> },
  { name: "Reviews", icon: <FaCode /> },
  { name: "Messages", icon: <FaEnvelope /> },
];

export default function Admin() {
  const [active, setActive] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className=" flex min-h-screen relative bg-white dark:bg-[#020617]">
      {/* MOBILE HEADER */}
      <div className="fixed top-0 left-0 w-full z-40 md:hidden flex justify-between items-center px-4 py-3 bg-white dark:bg-[#0f172a] text-gray-800 dark:text-gray-200 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-white/10">
        <h2 className="font-bold">Admin </h2>

        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* SIDEBAR */}
      <div
        className={`
        fixed md:static top-0 left-0 h-screen w-64 p-6 z-40 
        transition-transform duration-300

bg-white dark:bg-[#0f172a]
text-gray-800 dark:text-gray-200
        border-r border-gray-200 dark:border-white/10

        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0
      `}
      >
        <h2 className="text-2xl font-bold mb-10 text-center gradient-text">
          Admin Panel
        </h2>

        {/* MENU */}
        <div className="flex flex-col gap-3">
          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                setSidebarOpen(false);
              }}
              className={`
              flex items-center gap-3 p-3 rounded-xl transition

              ${
                active === item.name
                  ? "bg-gradient-to-r from-blue-400 to-emerald-400 text-white shadow-lg"
                  : "hover:bg-gray-200 dark:hover:bg-white/10"
              }
            `}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="mt-10 flex items-center gap-3 p-3 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6">
        {/* DASHBOARD */}
        {active === "Dashboard" && (
          <>
            <h1 className="text-3xl font-bold mb-8 gradient-text">Dashboard</h1>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Total Projects", value: projects.length },
                { label: "Clients", value: 0 },
                { label: "Reviews", value: 0 },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="
                  p-6 rounded-2xl
             bg-white dark:bg-[#0f172a] 
text-gray-800 dark:text-gray-200
border border-gray-200 dark:border-white/10
                  shadow-md hover:shadow-xl
                  transition
                "
                >
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {card.label}
                  </p>
                  <h2 className="text-3xl font-bold mt-2">{card.value}</h2>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* PROJECTS */}
        {active === "Projects" && (
          <>
            <ProjectForm refresh={fetchProjects} />
            <div className="mt-10">
              <ProjectList
                projects={projects}
                refresh={fetchProjects}
                setSelected={() => {}}
              />
            </div>
          </>
        )}

        {/* CLIENTS */}
        {active === "Clients" && (
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0f172a] text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10">
            <h1 className="text-2xl font-bold mb-4">Clients 👥</h1>
          </div>
        )}

        {/* REVIEWS */}
        {active === "Reviews" && (
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0f172a] text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10">
            <h1 className="text-2xl font-bold mb-4">Reviews ⭐</h1>
          </div>
        )}

        {/* MESSAGES */}
        {active === "Messages" && <Messages />}
      </div>
    </div>
  );
}
