// // import { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { FaEnvelope } from "react-icons/fa";
// // import toast from "react-hot-toast";
// // import API from "../../services/api";
// // import Pagination from "../../components/Pagination";
// // import ProjectForm from "../../components/admin/ProjectForm";
// // import { useNavigate } from "react-router-dom";

// // const FILTERS = ["All", "Requests", "Ongoing", "Completed"];

// // export default function Clients() {
// //   const [clients, setClients] = useState([]);
// //   const navigate = useNavigate();
// //   // 🔥 APPROVE (INSIDE COMPONENT)
// //   const approveProject = async (client) => {
// //     try {
// //       const formData = new FormData();

// //       formData.append("title", client.projectType || "Client Project");
// //       formData.append("description", client.message);

// //       // 🔥 IMPORTANT
// //       formData.append("clientId", client._id);

// //       await API.post("/projects", formData);

// //       await API.put(`/contact/${client._id}`, {
// //         approved: true,
// //       });

// //       await loadClients();

// //       toast.success("Approved 🚀");
// //       navigate("/admin/projects");
// //     } catch (err) {
// //       console.error(err);
// //       toast.error("Approve failed ❌");
// //     }
// //   };

// //   // 🔥 WITHDRAW (INSIDE COMPONENT)
// //   const withdrawProject = async (client) => {
// //     try {
// //       // 🔥 delete project linked to this client
// //       await API.delete(`/projects/by-client/${client._id}`);

// //       await API.put(`/contact/${client._id}`, {
// //         approved: false,
// //       });

// //       await loadClients();

// //       toast.success("Withdrawn");
// //     } catch (err) {
// //       console.error(err);
// //       toast.error("Failed ❌");
// //     }
// //   };
// //   const [filter, setFilter] = useState("Requests");
// //   const [loading, setLoading] = useState(true);

// //   const [selectedClient, setSelectedClient] = useState(null);
// //   const [showProjectForm, setShowProjectForm] = useState(false);

// //   const [currentPage, setCurrentPage] = useState(1);
// //   const perPage = 6;

// //   // 🔥 LOAD CLIENTS
// //   const loadClients = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await API.get("/contact");
// //       setClients(res.data || []);
// //     } catch {
// //       toast.error("Failed to load ❌");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     loadClients();
// //   }, []);

// //   // 🔥 FILTER
// //   const filteredClients = clients.filter((c) => {
// //     if (!c?.status) return false;
// //     if (filter === "All") return true; // 🔥 MAIN FIX

// //     if (filter === "Requests") return c.status === "lead";
// //     if (filter === "Ongoing") return c.status === "ongoing";
// //     if (filter === "Completed") return c.status === "completed";

// //     return false;
// //   });

// //   // 🔥 PAGINATION
// //   const totalPages = Math.max(1, Math.ceil(filteredClients.length / perPage));
// //   const start = (currentPage - 1) * perPage;
// //   const currentClients = filteredClients.slice(start, start + perPage);

// //   useEffect(() => {
// //     setCurrentPage(1);
// //   }, [filter]);

// //   // 🔥 UPDATE STATUS
// //   const updateStatus = async (id, status) => {
// //     try {
// //       await API.put(`/contact/${id}`, { status });

// //       setClients((prev) =>
// //         prev.map((c) => (c._id === id ? { ...c, status } : c)),
// //       );

// //       toast.success("Updated ✅");
// //     } catch {
// //       toast.error("Update failed ❌");
// //     }
// //   };

// //   return (
// //     <div className="space-y-10">
// //       {/* HEADER */}
// //       <div
// //         className="flex flex-col md:flex-row md:items-center justify-between gap-6
// //       p-5 rounded-2xl bg-white/70 dark:bg-white/[0.05]
// //       backdrop-blur-xl border"
// //       >
// //         <h2 className="text-3xl font-bold gradient-text">Clients Manager</h2>

// //         <div className="flex gap-2 flex-wrap">
// //           {FILTERS.map((f) => (
// //             <button
// //               key={f}
// //               onClick={() => setFilter(f)}
// //               className={`px-4 py-2 rounded-full text-sm ${
// //                 filter === f
// //                   ? "bg-gradient-to-r from-blue-400 to-emerald-400 text-black"
// //                   : "text-gray-500 hover:text-emerald-400"
// //               }`}
// //             >
// //               {f}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* LOADING */}
// //       {loading && (
// //         <p className="text-center text-gray-500 animate-pulse">
// //           Loading clients...
// //         </p>
// //       )}

// //       {/* EMPTY */}
// //       {!loading && filteredClients.length === 0 && (
// //         <div className="text-center py-20">
// //           <h2 className="text-xl font-bold text-gray-500">No data found 👤</h2>
// //         </div>
// //       )}

// //       {/* CLIENT LIST */}
// //       <div className="grid md:grid-cols-2 gap-6">
// //         {currentClients.map((c) => (
// //           <motion.div
// //             key={c._id}
// //             whileHover={{ y: -5 }}
// //             className="p-5 rounded-2xl bg-white/70 dark:bg-white/[0.04]
// //             backdrop-blur-xl border shadow hover:shadow-xl"
// //           >
// //             <h3 className="text-lg font-bold">{c.name}</h3>
// //             {filter === "All" && (
// //               <>
// //                 <p className="text-sm text-emerald-400">{c.email}</p>

// //                 <p className="mt-2 text-gray-600">{c.message}</p>

// //                 <span
// //                   className={`
// //       text-xs mt-2 inline-block px-2 py-1 rounded
// //       ${c.status === "lead" && "bg-yellow-200 text-yellow-700"}
// //       ${c.status === "ongoing" && "bg-blue-200 text-blue-700"}
// //       ${c.status === "completed" && "bg-green-200 text-green-700"}
// //     `}
// //                 >
// //                   {c.status}
// //                 </span>
// //               </>
// //             )}
// //             {/* REQUEST */}
// //             {filter === "Requests" && (
// //               <>
// //                 <p className="text-sm text-emerald-400">{c.email}</p>
// //                 <p className="mt-2 text-gray-600 line-clamp-2">{c.message}</p>
// //               </>
// //             )}

// //             {/* ONGOING */}
// //             {filter === "Ongoing" && (
// //               <p className="text-sm text-gray-500 mt-2">
// //                 Project: {c.projectType || "N/A"}
// //               </p>
// //             )}

// //             {/* COMPLETED */}
// //             {filter === "Completed" && (
// //               <>
// //                 <p className="text-sm text-emerald-400">{c.email}</p>

// //                 <p className="mt-2 font-semibold text-gray-700">
// //                   {c.projectType}
// //                 </p>

// //                 <p className="text-gray-500 text-sm mt-1">{c.message}</p>

// //                 {/* 🔥 APPROVAL UI */}
// //                 <div className="flex gap-2 mt-4">
// //                   {!c.approved ? (
// //                     <button
// //                       onClick={() => approveProject(c)}
// //                       className="px-4 py-2 rounded-full bg-green-400 text-black"
// //                     >
// //                       Approve
// //                     </button>
// //                   ) : (
// //                     <button
// //                       onClick={() => withdrawProject(c)}
// //                       className="px-4 py-2 rounded-full bg-yellow-400 text-black"
// //                     >
// //                       Withdraw
// //                     </button>
// //                   )}
// //                 </div>
// //               </>
// //             )}
// //             {/* ACTION */}
// //             <div className="flex gap-3 mt-4 flex-wrap">
// //               {/* 🔥 VIEW (lead OR All में lead) */}
// //               {(filter === "Requests" ||
// //                 (filter === "All" && c.status === "lead")) && (
// //                 <button
// //                   onClick={() => setSelectedClient(c)}
// //                   className="px-4 py-2 rounded-full border hover:text-emerald-400"
// //                 >
// //                   View
// //                 </button>
// //               )}

// //               {/* 🔥 ONGOING BUTTON (All में भी दिखे) */}
// //               {(filter === "Ongoing" ||
// //                 (filter === "All" && c.status === "ongoing")) && (
// //                 <button
// //                   onClick={() => {
// //                     setSelectedClient(c);
// //                     setShowProjectForm(true);
// //                   }}
// //                   className="px-4 py-2 rounded-full
// //        bg-gradient-to-r from-blue-400 to-emerald-400 text-black"
// //                 >
// //                   Mark as Complete
// //                 </button>
// //               )}

// //               {/* EMAIL */}
// //               <a
// //                 href={`mailto:${c.email || ""}`}
// //                 className="px-4 py-2 border rounded-full"
// //               >
// //                 <FaEnvelope />
// //               </a>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>

// //       {/* PAGINATION */}
// //       {filteredClients.length > perPage && (
// //         <Pagination
// //           currentPage={currentPage}
// //           totalPages={totalPages}
// //           onPageChange={setCurrentPage}
// //         />
// //       )}

// //       {/* REQUEST MODAL */}
// //       <AnimatePresence>
// //         {selectedClient && (
// //           <motion.div className="fixed inset-0 flex items-center justify-center z-50">
// //             <div
// //               className="absolute inset-0 bg-black/50"
// //               onClick={() => setSelectedClient(null)}
// //             />

// //             <motion.div className="bg-white p-6 rounded-xl z-10 w-[400px]">
// //               <h3 className="font-bold">{selectedClient.name}</h3>
// //               <p>{selectedClient.email}</p>
// //               <p>{selectedClient.message}</p>

// //               <button
// //                 onClick={() => {
// //                   updateStatus(selectedClient._id, "ongoing");
// //                   setSelectedClient(null);
// //                 }}
// //                 className="mt-4 px-4 py-2 bg-blue-400 text-white rounded"
// //               >
// //                 Move to Ongoing
// //               </button>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* PROJECT FORM */}
// //       {showProjectForm && (
// //         <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
// //           <div className="w-full max-w-xl">
// //             <ProjectForm
// //               selected={null}
// //               refresh={async () => {
// //                 if (selectedClient?._id) {
// //                   await updateStatus(selectedClient._id, "completed");
// //                 }

// //                 setShowProjectForm(false);
// //                 setSelectedClient(null);

// //                 // 🔥 AUTO SWITCH
// //                 setFilter("Completed");
// //               }}
// //             />
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // // // import { useEffect, useState } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { FaEnvelope } from "react-icons/fa";
// // // // import toast from "react-hot-toast";
// // // // import API from "../../services/api";
// // // // import Pagination from "../../components/Pagination";
// // // // import ProjectForm from "../../components/admin/ProjectForm";

// // // // const FILTERS = ["Requests", "Ongoing", "Completed"];

// // // // export default function Clients() {
// // // //   const [clients, setClients] = useState([]);
// // // //   const [filter, setFilter] = useState("Requests");
// // // //   const [loading, setLoading] = useState(true);

// // // //   const [selectedClient, setSelectedClient] = useState(null);
// // // //   const [showProjectForm, setShowProjectForm] = useState(false);

// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const perPage = 6;

// // // //   // 🔥 LOAD
// // // //   const loadClients = async () => {
// // // //     try {
// // // //       setLoading(true);
// // // //       const res = await API.get("/contact");
// // // //       setClients(res.data || []);
// // // //     } catch {
// // // //       toast.error("Failed to load ❌");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     loadClients();
// // // //   }, []);

// // // //   // 🔥 FILTER
// // // //   const filteredClients = clients.filter((c) => {
// // // //     if (!c?.status) return false;
// // // //     if (filter === "Requests") return c.status === "lead";
// // // //     if (filter === "Ongoing") return c.status === "ongoing";
// // // //     if (filter === "Completed") return c.status === "completed";
// // // //     return false;
// // // //   });

// // // //   // 🔥 PAGINATION
// // // //   const totalPages = Math.max(1, Math.ceil(filteredClients.length / perPage));
// // // //   const start = (currentPage - 1) * perPage;
// // // //   const currentClients = filteredClients.slice(start, start + perPage);

// // // //   useEffect(() => {
// // // //     setCurrentPage(1);
// // // //   }, [filter]);

// // // //   // 🔥 STATUS UPDATE
// // // //   const updateStatus = async (id, status) => {
// // // //     try {
// // // //       await API.put(`/contact/${id}`, { status });

// // // //       setClients((prev) =>
// // // //         prev.map((c) => (c._id === id ? { ...c, status } : c))
// // // //       );

// // // //       toast.success("Updated ✅");
// // // //     } catch {
// // // //       toast.error("Update failed ❌");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="space-y-10">

// // // //       {/* HEADER */}
// // // //       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6
// // // //       p-5 rounded-2xl bg-white/70 dark:bg-white/[0.05]
// // // //       backdrop-blur-xl border">

// // // //         <h2 className="text-3xl font-bold gradient-text">
// // // //           Clients Manager
// // // //         </h2>

// // // //         <div className="flex gap-2 flex-wrap">
// // // //           {FILTERS.map((f) => (
// // // //             <button
// // // //               key={f}
// // // //               onClick={() => setFilter(f)}
// // // //               className={`px-4 py-2 rounded-full text-sm ${
// // // //                 filter === f
// // // //                   ? "bg-gradient-to-r from-blue-400 to-emerald-400 text-black"
// // // //                   : "text-gray-500 hover:text-emerald-400"
// // // //               }`}
// // // //             >
// // // //               {f}
// // // //             </button>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* LOADING */}
// // // //       {loading && <p className="text-center">Loading...</p>}

// // // //       {/* LIST */}
// // // //       <div className="grid md:grid-cols-2 gap-6">
// // // //         {currentClients.map((c) => (
// // // //           <motion.div
// // // //             key={c._id}
// // // //             whileHover={{ y: -5 }}
// // // //             className="p-5 rounded-2xl bg-white/70 dark:bg-white/[0.04]
// // // //             backdrop-blur-xl border shadow hover:shadow-xl"
// // // //           >

// // // //             <h3 className="text-lg font-bold">{c.name}</h3>

// // // //             {/* REQUEST */}
// // // //             {filter === "Requests" && (
// // // //               <>
// // // //                 <p className="text-sm text-emerald-400">{c.email}</p>
// // // //                 <p className="mt-2 text-gray-600 line-clamp-2">
// // // //                   {c.message}
// // // //                 </p>
// // // //               </>
// // // //             )}

// // // //             {/* ONGOING */}
// // // //             {filter === "Ongoing" && (
// // // //               <p className="text-sm text-gray-500 mt-2">
// // // //                 Project: {c.projectType || "N/A"}
// // // //               </p>
// // // //             )}

// // // //             {/* ACTION */}
// // // //             <div className="flex gap-3 mt-4 flex-wrap">

// // // //               {/* ✅ VIEW ONLY FOR REQUEST */}
// // // //               {filter === "Requests" && (
// // // //                 <button
// // // //                   onClick={() => setSelectedClient(c)}
// // // //                   className="px-4 py-2 rounded-full border hover:text-emerald-400"
// // // //                 >
// // // //                   View
// // // //                 </button>
// // // //               )}

// // // //               {/* ✅ ONGOING → DIRECT COMPLETE */}
// // // //               {filter === "Ongoing" && (
// // // //                 <button
// // // //                   onClick={() => {
// // // //                     setSelectedClient(c);
// // // //                     setShowProjectForm(true);
// // // //                   }}
// // // //                   className="px-4 py-2 rounded-full
// // // //                   bg-gradient-to-r from-blue-400 to-emerald-400 text-black"
// // // //                 >
// // // //                   Mark as Complete
// // // //                 </button>
// // // //               )}

// // // //               {/* EMAIL */}
// // // //               <a
// // // //                 href={`mailto:${c.email || ""}`}
// // // //                 className="px-4 py-2 border rounded-full"
// // // //               >
// // // //                 <FaEnvelope />
// // // //               </a>

// // // //             </div>
// // // //           </motion.div>
// // // //         ))}
// // // //       </div>

// // // //       {/* PAGINATION */}
// // // //       {filteredClients.length > perPage && (
// // // //         <Pagination
// // // //           currentPage={currentPage}
// // // //           totalPages={totalPages}
// // // //           onPageChange={setCurrentPage}
// // // //         />
// // // //       )}

// // // //       {/* MODAL (ONLY REQUEST) */}
// // // //       <AnimatePresence>
// // // //         {selectedClient && filter === "Requests" && (
// // // //           <motion.div className="fixed inset-0 flex items-center justify-center z-50">

// // // //             <div
// // // //               className="absolute inset-0 bg-black/50"
// // // //               onClick={() => setSelectedClient(null)}
// // // //             />

// // // //             <motion.div className="bg-white p-6 rounded-xl z-10 w-[400px]">
// // // //               <h3 className="font-bold">{selectedClient.name}</h3>
// // // //               <p>{selectedClient.email}</p>
// // // //               <p>{selectedClient.message}</p>

// // // //               <button
// // // //                 onClick={() => {
// // // //                   updateStatus(selectedClient._id, "ongoing");
// // // //                   setSelectedClient(null);
// // // //                 }}
// // // //                 className="mt-4 px-4 py-2 bg-blue-400 text-white rounded"
// // // //               >
// // // //                 Move to Ongoing
// // // //               </button>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       {/* PROJECT FORM */}
// // // //       {showProjectForm && (
// // // //         <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
// // // //           <div className="w-full max-w-xl">

// // // //             <ProjectForm
// // // //               selected={null}
// // // //               refresh={() => {
// // // //                 if (selectedClient?._id) {
// // // //                   updateStatus(selectedClient._id, "completed");
// // // //                 }
// // // //                 setShowProjectForm(false);
// // // //                 setSelectedClient(null);
// // // //               }}
// // // //             />

// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //     </div>
// // // //   );
// // // // }

// // // // import { useEffect, useState } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { FaEnvelope } from "react-icons/fa";
// // // // import toast from "react-hot-toast";
// // // // import API from "../../services/api";
// // // // import { useNavigate } from "react-router-dom";

// // // // const FILTERS = ["All", "Requests", "Ongoing", "Completed"];

// // // // export default function Clients() {
// // // //   const [clients, setClients] = useState([]);
// // // //   const [filter, setFilter] = useState("All");
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [selectedClient, setSelectedClient] = useState(null);

// // // //   const navigate = useNavigate();

// // // //   // 🔥 LOAD
// // // //   const loadClients = async () => {
// // // //     try {
// // // //       setLoading(true);
// // // //       const res = await API.get("/contact");
// // // //       setClients(res.data || []);
// // // //     } catch {
// // // //       toast.error("Failed to load ❌");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     loadClients();
// // // //   }, []);

// // // //   // 🔥 FILTER
// // // //   const filteredClients = clients.filter((c) => {
// // // //     if (!c?.status) return false;

// // // //     if (filter === "All") return true;
// // // //     if (filter === "Requests") return c.status === "lead";
// // // //     if (filter === "Ongoing") return c.status === "ongoing";
// // // //     if (filter === "Completed") return c.status === "completed";

// // // //     return false;
// // // //   });

// // // //   // 🔥 STATUS UPDATE
// // // //   const updateStatus = async (id, status) => {
// // // //     try {
// // // //       await API.put(`/contact/${id}`, { status });

// // // //       setClients((prev) =>
// // // //         prev.map((c) => (c._id === id ? { ...c, status } : c)),
// // // //       );

// // // //       toast.success("Updated ✅");
// // // //     } catch {
// // // //       toast.error("Update failed ❌");
// // // //     }
// // // //   };

// // // //   const deleteClient = async (id) => {
// // // //     try {
// // // //       await API.delete(`/contact/${id}`);

// // // //       setClients((prev) => prev.filter((c) => c._id !== id));

// // // //       toast.success("Deleted 🗑️");
// // // //     } catch {
// // // //       toast.error("Delete failed ❌");
// // // //     }
// // // //   };
// // // //   return (
// // // //     <div className="space-y-10">
// // // //       {/* 🔥 HEADER */}
// // // //       <div
// // // //         className="
// // // //        flex flex-col md:flex-row md:items-center justify-between gap-6
// // // //        p-5 rounded-2xl
// // // //        bg-white dark:bg-white/5 backdrop-blur-xl
// // // //        border border-gray-200 dark:border-white/10
// // // //        shadow-sm
// // // //        "
// // // //       >
// // // //         <div>
// // // //           <p className="text-[10px] tracking-[0.35em] uppercase text-gray-500">
// // // //             Admin Panel
// // // //           </p>{" "}
// // // //           <h2 className="text-3xl font-bold gradient-text mt-1">
// // // //             {" "}
// // // //             Clients Manager
// // // //           </h2>
// // // //           <p className="text-sm text-gray-500 mt-1">
// // // //             Manage all your client interactions efficiently
// // // //           </p>
// // // //         </div>

// // // //         {/* FILTER */}
// // // //         <div
// // // //           className="flex items-center gap-1 p-1.5 rounded-full
// // // //        bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10"
// // // //         >
// // // //           {FILTERS.map((f) => (
// // // //             <button
// // // //               key={f}
// // // //               onClick={() => setFilter(f)}
// // // //               className={`
// // // //                px-3 py-1.5 rounded-full text-xs font-medium transition
// // // //                 ${
// // // //                   filter === f
// // // //                     ? "bg-gradient-to-r from-blue-400 to-emerald-400 text-[#020617]"
// // // //                     : "text-gray-600 hover:text-emerald-400"
// // // //                 }
// // // //                `}
// // // //             >
// // // //               {f}
// // // //             </button>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* 🔥 LOADING */}
// // // //       {loading && (
// // // //         <p className="text-center text-gray-500 animate-pulse">
// // // //           Loading clients...
// // // //         </p>
// // // //       )}

// // // //       {/* 🔥 LIST (1 CARD PER ROW) */}
// // // //       <div className="flex flex-col gap-6">
// // // //         {filteredClients.map((c) => (
// // // //           <motion.div
// // // //             key={c._id}
// // // //             whileHover={{ y: -3 }}
// // // //             className="
// // // //     group relative p-6 rounded-2xl

// // // //     bg-white/80 dark:bg-[#020617]/80
// // // //     backdrop-blur-xl

// // // //     border border-gray-200 dark:border-white/10

// // // //     shadow-[0_8px_30px_rgba(0,0,0,0.06)]
// // // //     dark:shadow-[0_10px_40px_rgba(0,0,0,0.7)]

// // // //     transition-all duration-300
// // // //   "
// // // //           >
// // // //             {/* 🔥 HOVER GLOW */}
// // // //             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
// // // //               <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-blue-400/5 blur-2xl" />
// // // //             </div>

// // // //             <div className="relative z-10">
// // // //               {/* 🔥 TOP */}
// // // //               <div className="flex justify-between items-start gap-4">
// // // //                 {/* LEFT */}
// // // //                 <div>
// // // //                   <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
// // // //                     {c.name}
// // // //                   </h3>

// // // //                   <p className="text-sm text-emerald-500 mt-1">{c.email}</p>

// // // //                   <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
// // // //                     {c.message}
// // // //                   </p>
// // // //                 </div>

// // // //                 {/* 🔥 STATUS BADGE */}
// // // //                 <span
// // // //                   className={`
// // // //           text-xs px-3 py-1 rounded-full font-medium capitalize

// // // //           ${c.status === "lead" && "bg-yellow-100 text-yellow-700 dark:bg-yellow-400/10 dark:text-yellow-400"}
// // // //           ${c.status === "ongoing" && "bg-blue-100 text-blue-700 dark:bg-blue-400/10 dark:text-blue-400"}
// // // //           ${c.status === "completed" && "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400"}
// // // //         `}
// // // //                 >
// // // //                   {c.status}
// // // //                 </span>
// // // //               </div>

// // // //               {/* 🔥 BOTTOM */}
// // // //               <div className="flex items-center justify-between mt-6">
// // // //                 {/* LEFT ACTIONS */}
// // // //                 <div className="flex items-center gap-3 flex-wrap">
// // // //                   {/* VIEW */}
// // // //                   {c.status === "lead" && (
// // // //                     <button
// // // //                       onClick={() => setSelectedClient(c)}
// // // //                       className="
// // // //               px-4 py-2 rounded-full text-sm

// // // //               border border-gray-300 dark:border-white/10

// // // //               hover:border-emerald-400
// // // //               hover:text-emerald-400

// // // //               transition-all duration-300
// // // //             "
// // // //                     >
// // // //                       View
// // // //                     </button>
// // // //                   )}

// // // //                   {/* COMPLETE */}
// // // //                   {c.status === "ongoing" && (
// // // //                     <button
// // // //                       onClick={() => updateStatus(c._id, "completed")}
// // // //                       className="
// // // //               px-5 py-2 rounded-full text-sm font-medium

// // // //               bg-gradient-to-r from-blue-400 to-emerald-400
// // // //               text-[#020617]

// // // //               hover:scale-[1.03]

// // // //               shadow-md hover:shadow-[0_8px_30px_rgba(16,185,129,0.3)]

// // // //               transition-all duration-300
// // // //             "
// // // //                     >
// // // //                       Mark as Complete
// // // //                     </button>
// // // //                   )}

// // // //                   {/* DELETE */}
// // // //                   {(c.status === "lead" || c.status === "ongoing") && (
// // // //                     <button
// // // //                       onClick={() => setDeleteId(c._id)}
// // // //                       className="
// // // //     group relative px-4 py-2 rounded-full text-sm font-medium overflow-hidden

// // // //     border border-red-400/40 text-red-500

// // // //     transition-all duration-300
// // // //     hover:scale-[1.05]
// // // //   "
// // // //                     >
// // // //                       {/* 🔴 HOVER BG */}
// // // //                       <span
// // // //                         className="
// // // //     absolute inset-0 opacity-0 group-hover:opacity-100
// // // //     bg-gradient-to-r from-red-500 to-rose-600
// // // //     transition duration-300
// // // //   "
// // // //                       />

// // // //                       {/* 🔴 TEXT */}
// // // //                       <span
// // // //                         className="
// // // //     relative z-10 transition-all duration-300
// // // //     group-hover:text-white
// // // //   "
// // // //                       >
// // // //                         Delete
// // // //                       </span>
// // // //                     </button>
// // // //                   )}
// // // //                 </div>

// // // //                 {/* RIGHT EMAIL */}
// // // //                 <a
// // // //                   href={`mailto:${c.email}`}
// // // //                   className="
// // // //           flex items-center justify-center

// // // //           w-10 h-10 rounded-full

// // // //           border border-gray-300 dark:border-white/10

// // // //           hover:border-emerald-400
// // // //           hover:text-emerald-400

// // // //           transition-all duration-300
// // // //         "
// // // //                 >
// // // //                   <FaEnvelope />
// // // //                 </a>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>
// // // //         ))}
// // // //       </div>

// // // //       {/* 🔥 MODAL */}
// // // //       <AnimatePresence>
// // // //         {selectedClient && (
// // // //           <motion.div className="fixed inset-0 flex items-center justify-center z-50">
// // // //             {/* BACKDROP */}
// // // //             <div
// // // //               className="absolute inset-0 bg-black/40 backdrop-blur-sm"
// // // //               onClick={() => setSelectedClient(null)}
// // // //             />

// // // //             {/* MODAL */}
// // // //             <motion.div
// // // //               initial={{ scale: 0.9, opacity: 0 }}
// // // //               animate={{ scale: 1, opacity: 1 }}
// // // //               exit={{ scale: 0.9, opacity: 0 }}
// // // //               className="
// // // //                 relative z-10 w-[400px] p-6 rounded-2xl

// // // //                 bg-white dark:bg-[#020617]

// // // //                 border border-black/10 dark:border-white/10

// // // //                 shadow-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.8)]
// // // //               "
// // // //             >
// // // //               <h3 className="font-bold text-lg">{selectedClient.name}</h3>
// // // //               <p className="text-sm text-emerald-400">{selectedClient.email}</p>

// // // //               <p className="mt-3 text-gray-600 dark:text-gray-400">
// // // //                 {selectedClient.message}
// // // //               </p>

// // // //               <button
// // // //                 onClick={() => {
// // // //                   updateStatus(selectedClient._id, "ongoing");
// // // //                   setSelectedClient(null);
// // // //                 }}
// // // //                 className="
// // // //                   mt-5 px-4 py-2 rounded-full
// // // //                   bg-gradient-to-r from-blue-400 to-emerald-400 text-black
// // // //                 "
// // // //               >
// // // //                 Move to Ongoing
// // // //               </button>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </div>
// // // //   );
// // // // }

// // import { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { FaEnvelope } from "react-icons/fa";
// // import toast from "react-hot-toast";
// // import API from "../../services/api";

// // const FILTERS = ["All", "Requests", "Ongoing", "Completed"];

// // export default function Clients() {
// //   const [clients, setClients] = useState([]);
// //   const [filter, setFilter] = useState("All");
// //   const [loading, setLoading] = useState(true);
// //   const [selectedClient, setSelectedClient] = useState(null);
// //   const [deleteId, setDeleteId] = useState(null);

// //   // 🔥 LOAD CLIENTS
// //   const loadClients = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await API.get("/contact");
// //       setClients(res.data || []);
// //     } catch {
// //       toast.error("Failed to load ❌");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     loadClients();
// //   }, []);

// //   // 🔥 FILTER
// //   const filteredClients = clients.filter((c) => {
// //     if (!c?.status) return false;

// //     if (filter === "All") return true;
// //     if (filter === "Requests") return c.status === "lead";
// //     if (filter === "Ongoing") return c.status === "ongoing";
// //     if (filter === "Completed") return c.status === "completed";

// //     return false;
// //   });

// //   // 🔥 UPDATE STATUS
// //   const updateStatus = async (id, status) => {
// //     try {
// //       await API.put(`/contact/${id}`, { status });

// //       setClients((prev) =>
// //         prev.map((c) => (c._id === id ? { ...c, status } : c))
// //       );

// //       toast.success("Updated ✅");
// //     } catch {
// //       toast.error("Update failed ❌");
// //     }
// //   };

// //   // 🔥 DELETE
// //   const confirmDelete = async () => {
// //     try {
// //       await API.delete(`/contact/${deleteId}`);

// //       setClients((prev) => prev.filter((c) => c._id !== deleteId));

// //       toast.success("Deleted 🗑️");
// //       setDeleteId(null);
// //     } catch {
// //       toast.error("Delete failed ❌");
// //     }
// //   };

// //   return (
// //     <div className="space-y-8">
// //       {/* 🔥 HEADER */}
// //       <div className="
// //         flex flex-col lg:flex-row lg:items-center justify-between gap-6
// //         p-5 rounded-2xl
// //         bg-white dark:bg-white/5 backdrop-blur-xl
// //         border border-gray-200 dark:border-white/10
// //       ">
// //         <div>
// //           <p className="text-[10px] tracking-[0.35em] uppercase text-gray-500">
// //             Admin Panel
// //           </p>

// //           <h2 className="text-2xl sm:text-3xl font-bold gradient-text mt-1">
// //             Clients Manager
// //           </h2>

// //           <p className="text-xs sm:text-sm text-gray-500 mt-1">
// //             Manage all your client interactions efficiently
// //           </p>
// //         </div>

// //         {/* FILTER */}
// //         <div className="
// //           flex gap-2 p-1.5 rounded-full
// //           bg-gray-100 dark:bg-white/5
// //           border border-gray-200 dark:border-white/10
// //           overflow-x-auto no-scrollbar
// //         ">
// //           {FILTERS.map((f) => (
// //             <button
// //               key={f}
// //               onClick={() => setFilter(f)}
// //               className={`
// //                 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition
// //                 ${
// //                   filter === f
// //                     ? "bg-gradient-to-r from-blue-400 to-emerald-400 text-[#020617]"
// //                     : "text-gray-600 hover:text-emerald-400"
// //                 }
// //               `}
// //             >
// //               {f}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* 🔥 LOADING */}
// //       {loading && (
// //         <p className="text-center text-gray-500 animate-pulse">
// //           Loading clients...
// //         </p>
// //       )}

// //       {/* 🔥 CLIENT LIST */}
// //       <div className="flex flex-col gap-4 sm:gap-6">
// //         {filteredClients.map((c) => (
// //           <motion.div
// //             key={c._id}
// //             whileHover={{ y: -3 }}
// //             className="
// //               group relative p-5 sm:p-6 rounded-2xl
// //               bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl
// //               border border-gray-200 dark:border-white/10
// //               shadow-sm dark:shadow-[0_10px_40px_rgba(0,0,0,0.7)]
// //               transition-all duration-300
// //             "
// //           >
// //             {/* HOVER GLOW */}
// //             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
// //               <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-blue-400/5 blur-2xl" />
// //             </div>

// //             <div className="relative z-10">
// //               {/* TOP */}
// //               <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
// //                 <div>
// //                   <h3 className="text-lg font-semibold dark:text-white">
// //                     {c.name}
// //                   </h3>

// //                   <p className="text-sm text-emerald-500 mt-1 break-all">
// //                     {c.email}
// //                   </p>

// //                   <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 break-words">
// //                     {c.message}
// //                   </p>
// //                 </div>

// //                 {/* STATUS */}
// //                 <span className={`
// //                   text-xs px-3 py-1 rounded-full font-medium capitalize self-start
// //                   ${c.status === "lead" && "bg-yellow-100 text-yellow-700 dark:bg-yellow-400/10 dark:text-yellow-400"}
// //                   ${c.status === "ongoing" && "bg-blue-100 text-blue-700 dark:bg-blue-400/10 dark:text-blue-400"}
// //                   ${c.status === "completed" && "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400"}
// //                 `}>
// //                   {c.status}
// //                 </span>
// //               </div>

// //               {/* ACTIONS */}
// //               <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 gap-4">

// //                 {/* LEFT */}
// //                 <div className="flex flex-wrap gap-2">
// //                   {c.status === "lead" && (
// //                     <button
// //                       onClick={() => setSelectedClient(c)}
// //                       className="px-4 py-2 rounded-full text-sm border border-gray-300 dark:border-white/10 hover:text-emerald-400 hover:border-emerald-400 transition"
// //                     >
// //                       View
// //                     </button>
// //                   )}

// //                   {c.status === "ongoing" && (
// //                     <button
// //                       onClick={() => updateStatus(c._id, "completed")}
// //                       className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-400 to-emerald-400 text-[#020617] hover:scale-[1.03] transition"
// //                     >
// //                       Complete
// //                     </button>
// //                   )}

// //                   {(c.status === "lead" || c.status === "ongoing") && (
// //                     <button
// //                       onClick={() => setDeleteId(c._id)}
// //                       className="group relative px-4 py-2 rounded-full text-sm font-medium overflow-hidden border border-red-400/40 text-red-500 transition hover:scale-[1.05]"
// //                     >
// //                       <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-red-500 to-rose-600 transition" />
// //                       <span className="relative z-10 group-hover:text-white">
// //                         Delete
// //                       </span>
// //                     </button>
// //                   )}
// //                 </div>

// //                 {/* RIGHT */}
// //                 <a
// //                   href={`mailto:${c.email}`}
// //                   className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 dark:border-white/10 hover:text-emerald-400 hover:border-emerald-400 transition"
// //                 >
// //                   <FaEnvelope />
// //                 </a>
// //               </div>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>

// //       {/* 🔥 VIEW MODAL */}
// //       <AnimatePresence>
// //         {selectedClient && (
// //           <motion.div className="fixed inset-0 flex items-center justify-center z-50">
// //             <div
// //               className="absolute inset-0 bg-black/40 backdrop-blur-sm"
// //               onClick={() => setSelectedClient(null)}
// //             />

// //             <motion.div
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.9, opacity: 0 }}
// //               className="relative z-10 w-[90%] max-w-md p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#020617] border border-black/10 dark:border-white/10"
// //             >
// //               <h3 className="font-bold text-lg">{selectedClient.name}</h3>
// //               <p className="text-sm text-emerald-400">
// //                 {selectedClient.email}
// //               </p>

// //               <p className="mt-3 text-gray-600 dark:text-gray-400">
// //                 {selectedClient.message}
// //               </p>

// //               <button
// //                 onClick={() => {
// //                   updateStatus(selectedClient._id, "ongoing");
// //                   setSelectedClient(null);
// //                 }}
// //                 className="mt-5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 text-black"
// //               >
// //                 Move to Ongoing
// //               </button>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* 🔥 DELETE MODAL */}
// //       <AnimatePresence>
// //         {deleteId && (
// //           <motion.div className="fixed inset-0 flex items-center justify-center z-50">
// //             <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

// //             <motion.div className="relative z-10 w-[90%] max-w-sm p-6 rounded-2xl bg-white dark:bg-[#020617] border border-black/10 dark:border-white/10">
// //               <h3 className="font-semibold text-lg text-center">
// //                 Confirm Delete
// //               </h3>

// //               <p className="text-sm text-gray-500 text-center mt-2 mb-6">
// //                 This action cannot be undone.
// //               </p>

// //               <div className="flex gap-3">
// //                 <button
// //                   onClick={() => setDeleteId(null)}
// //                   className="flex-1 py-2 rounded-lg bg-gray-200 dark:bg-white/10"
// //                 >
// //                   Cancel
// //                 </button>

// //                 <button
// //                   onClick={confirmDelete}
// //                   className="flex-1 py-2 rounded-lg bg-red-500 text-white"
// //                 >
// //                   Delete
// //                 </button>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // }

// // // import { useEffect, useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { FaEnvelope } from "react-icons/fa";
// // // import toast from "react-hot-toast";
// // // import API from "../../services/api";
// // // import Pagination from "../../components/Pagination";
// // // import ProjectForm from "../../components/admin/ProjectForm";

// // // const FILTERS = ["All", "Requests", "Ongoing", "Completed"];

// // // export default function Clients() {
// // //   const [clients, setClients] = useState([]);
// // //   const [filter, setFilter] = useState("All");
// // //   const [loading, setLoading] = useState(true);
// // //   const [showProjectForm, setShowProjectForm] = useState(false);
// // //   const [selectedClient, setSelectedClient] = useState(null);
// // //   const [deleteId, setDeleteId] = useState(null);

// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const perPage = 6;

// // //   // 🔥 LOAD
// // //   const loadClients = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const res = await API.get("/contact");
// // //       setClients(res.data || []);
// // //     } catch {
// // //       toast.error("Failed ❌");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     loadClients();
// // //   }, []);

// // //   // 🔥 FILTER
// // //   const filteredClients = clients.filter((c) => {
// // //     if (!c?.status) return false;
// // //     if (filter === "All") return true;
// // //     if (filter === "Requests") return c.status === "lead";
// // //     if (filter === "Ongoing") return c.status === "ongoing";
// // //     if (filter === "Completed") return c.status === "completed";
// // //     return false;
// // //   });

// // //   // 🔥 PAGINATION
// // //   const totalPages = Math.max(1, Math.ceil(filteredClients.length / perPage));
// // //   const start = (currentPage - 1) * perPage;
// // //   const currentClients = filteredClients.slice(start, start + perPage);

// // //   useEffect(() => {
// // //     setCurrentPage(1);
// // //   }, [filter]);

// // //   // 🔥 UPDATE STATUS
// // //   const updateStatus = async (id, status) => {
// // //     try {
// // //       await API.put(`/contact/${id}`, { status });
// // //       loadClients();
// // //       toast.success("Updated ✅");
// // //     } catch {
// // //       toast.error("Failed ❌");
// // //     }
// // //   };

// // //   // 🔥 DELETE
// // //   const confirmDelete = async () => {
// // //     try {
// // //       await API.delete(`/contact/${deleteId}`);
// // //       setDeleteId(null);
// // //       loadClients();
// // //       toast.success("Deleted 🗑️");
// // //     } catch {
// // //       toast.error("Delete failed ❌");
// // //     }
// // //   };

// // //   // 🔥 APPROVE
// // //   const approveProject = async (client) => {
// // //     try {
// // //       const formData = new FormData();
// // //       formData.append("title", client.projectType || "Client Project");
// // //       formData.append("description", client.message);
// // //       formData.append("clientId", client._id);

// // //       await API.post("/projects", formData);
// // //       await API.put(`/contact/${client._id}`, { approved: true });

// // //       loadClients();
// // //       toast.success("Approved 🚀");
// // //     } catch {
// // //       toast.error("Approve failed ❌");
// // //     }
// // //   };

// // //   // 🔥 WITHDRAW
// // //   const withdrawProject = async (client) => {
// // //     try {
// // //       await API.delete(`/projects/by-client/${client._id}`);
// // //       await API.put(`/contact/${client._id}`, { approved: false });

// // //       loadClients();
// // //       toast.success("Withdrawn");
// // //     } catch {
// // //       toast.error("Failed ❌");
// // //     }
// // //   };

// // //   return (
// // //     <div className="space-y-10">

// // //        <div className="
// // //          flex flex-col lg:flex-row lg:items-center justify-between gap-6
// // //          p-5 rounded-2xl
// // //          bg-white dark:bg-white/5 backdrop-blur-xl
// // //          border border-gray-200 dark:border-white/10
// // //        ">
// // //          <div>
// // //            <p className="text-[10px] tracking-[0.35em] uppercase text-gray-500">
// // //              Admin Panel
// // //            </p>

// // //            <h2 className="text-2xl sm:text-3xl font-bold gradient-text mt-1">
// // //              Clients Manager
// // //            </h2>

// // //            <p className="text-xs sm:text-sm text-gray-500 mt-1">
// // //              Manage all your client interactions efficiently
// // //            </p>
// // //          </div>

// // //          {/* FILTER */}
// // //          <div className="
// // //            flex gap-2 p-1.5 rounded-full
// // //            bg-gray-100 dark:bg-white/5
// // //            border border-gray-200 dark:border-white/10
// // //            overflow-x-auto no-scrollbar
// // //          ">
// // //            {FILTERS.map((f) => (
// // //              <button
// // //                key={f}
// // //                onClick={() => setFilter(f)}
// // //               className={`
// // //                 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition
// // //                 ${
// // //                   filter === f
// // //                     ? "bg-gradient-to-r from-blue-400 to-emerald-400 text-[#020617]"
// // //                     : "text-gray-600 hover:text-emerald-400"
// // //                 }
// // //               `}
// // //             >
// // //               {f}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </div>

// // // {/* LIST */}
// // // <div className="flex flex-col gap-6">
// // //   {currentClients.map((c) => (
// // //     <motion.div
// // //       key={c._id}
// // //       whileHover={{ y: -5 }}
// // //       className="
// // //         p-6 rounded-2xl

// // //         bg-white dark:bg-[#020617]
// // //         backdrop-blur-xl

// // //         border border-gray-200 dark:border-white/10

// // //         shadow-md hover:shadow-xl
// // //         transition-all duration-300
// // //       "
// // //     >

// // //       {/* TOP */}
// // //       <div className="flex justify-between items-start">
// // //         <div>
// // //           <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
// // //             {c.name}
// // //           </h3>

// // //           <p className="text-sm text-emerald-500">
// // //             {c.email}
// // //           </p>

// // //           <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
// // //             {c.message}
// // //           </p>
// // //         </div>

// // //         {/* STATUS */}
// // //         <span className={`
// // //           text-xs px-3 py-1 rounded-full capitalize

// // //           ${c.status === "lead" && "bg-yellow-400/20 text-yellow-500"}
// // //           ${c.status === "ongoing" && "bg-blue-400/20 text-blue-500"}
// // //           ${c.status === "completed" && "bg-emerald-400/20 text-emerald-500"}
// // //         `}>
// // //           {c.status}
// // //         </span>
// // //       </div>

// // //       {/* ACTIONS */}
// // //       <div className="flex items-center gap-3 mt-5">

// // //   {/* VIEW */}
// // //   {c.status === "lead" && (
// // //     <button
// // //       onClick={() => setSelectedClient(c)}
// // //       className="
// // //         px-5 py-2 rounded-full text-sm font-medium

// // //         border border-gray-300 dark:border-white/10
// // //         text-gray-700 dark:text-gray-200

// // //         hover:bg-gray-100 dark:hover:bg-white/10
// // //         transition
// // //       "
// // //     >
// // //       View
// // //     </button>
// // //   )}

// // //   {/* DELETE */}
// // //   {(c.status === "lead" || c.status === "ongoing") && (
// // //     <button
// // //       onClick={() => setDeleteId(c._id)}
// // //       className="
// // //         px-5 py-2 rounded-full text-sm font-medium

// // //         border border-red-400/30 text-red-400

// // //         hover:bg-red-500/10
// // //         transition
// // //       "
// // //     >
// // //       Delete
// // //     </button>
// // //   )}

// // //   {/* COMPLETE */}
// // //   {c.status === "ongoing" && (
// // //     <button
// // //       // onClick={() => updateStatus(c._id, "completed")}
// // // onClick={() => {
// // //   setSelectedClient(c);
// // //   setShowProjectForm(true);
// // // }}
// // //       className="
// // //         px-5 py-2 rounded-full text-sm font-medium

// // //         bg-gradient-to-r from-blue-400 to-emerald-400
// // //         text-[#020617]

// // //         hover:scale-[1.05]
// // //         transition
// // //       "
// // //     >
// // //       Mark as Complete
// // //     </button>
// // //   )}

// // //   {/* 🔥 APPROVE / WITHDRAW (FIXED) */}
// // //   {c.status === "completed" &&
// // //     (!c.approved ? (
// // //       <button
// // //         onClick={() => approveProject(c)}
// // //         className="
// // //           px-5 py-2 rounded-full text-sm font-medium

// // //           bg-gradient-to-r from-emerald-400 to-green-500
// // //           text-[#020617]

// // //           hover:scale-[1.05]
// // //           transition
// // //         "
// // //       >
// // //         Approve
// // //       </button>
// // //     ) : (
// // //       <button
// // //         onClick={() => withdrawProject(c)}
// // //         className="
// // //           px-5 py-2 rounded-full text-sm font-medium

// // //           bg-yellow-400 text-black

// // //           hover:scale-[1.05]
// // //           transition
// // //         "
// // //       >
// // //         Withdraw
// // //       </button>
// // //     ))}

// // //   {/* EMAIL */}
// // //   <a
// // //     href={`mailto:${c.email}`}
// // //     className="
// // //       ml-auto

// // //       w-10 h-10 flex items-center justify-center rounded-full

// // //       border border-gray-300 dark:border-white/10
// // //       text-gray-600 dark:text-gray-300

// // //       hover:bg-gray-100 dark:hover:bg-white/10
// // //       transition
// // //     "
// // //   >
// // //     <FaEnvelope />
// // //   </a>

// // // </div>

// // //     </motion.div>
// // //   ))}
// // // </div>

// // //       {/* PAGINATION */}
// // //       {filteredClients.length > perPage && (
// // //         <Pagination
// // //           currentPage={currentPage}
// // //           totalPages={totalPages}
// // //           onPageChange={setCurrentPage}
// // //         />
// // //       )}

// // //       {/* VIEW MODAL */}
// // // <AnimatePresence>
// // //   {selectedClient && (
// // //     <motion.div
// // //       className="fixed inset-0 z-50 flex items-center justify-center"
// // //     >
// // //       <div
// // //         className="absolute inset-0 bg-black/60 backdrop-blur-sm"
// // //         onClick={() => setSelectedClient(null)}
// // //       />

// // //       <motion.div
// // //         initial={{ scale: 0.9, opacity: 0 }}
// // //         animate={{ scale: 1, opacity: 1 }}
// // //         className="
// // //           relative z-10 w-[90%] max-w-md p-6 rounded-2xl

// // //           bg-white dark:bg-[#020617]

// // //           border border-gray-200 dark:border-white/10
// // //           shadow-xl
// // //         "
// // //       >
// // //         <h3 className="text-lg font-bold">
// // //           {selectedClient.name}
// // //         </h3>

// // //         <p className="text-sm text-gray-500 mt-1">
// // //           {selectedClient.email}
// // //         </p>

// // //         <p className="mt-4 text-gray-700 dark:text-gray-300">
// // //           {selectedClient.message}
// // //         </p>

// // //         <button
// // //           onClick={() => {
// // //             updateStatus(selectedClient._id, "ongoing");
// // //             setSelectedClient(null);
// // //           }}
// // //           className="
// // //             mt-5 w-full py-2 rounded-xl

// // //             bg-gradient-to-r from-blue-400 to-emerald-400
// // //             text-[#020617]
// // //           "
// // //         >
// // //           Move to Ongoing
// // //         </button>
// // //       </motion.div>
// // //     </motion.div>
// // //   )}
// // // </AnimatePresence>
// // //       {/* DELETE MODAL */}
// // //      <AnimatePresence>
// // //   {deleteId && (
// // //     <motion.div className="fixed inset-0 z-50 flex items-center justify-center">
// // //       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

// // //       <motion.div
// // //         initial={{ scale: 0.9 }}
// // //         animate={{ scale: 1 }}
// // //         className="
// // //           relative z-10 w-[300px] p-6 rounded-2xl

// // //           bg-white dark:bg-[#020617]

// // //           border border-gray-200 dark:border-white/10
// // //           shadow-xl
// // //         "
// // //       >
// // //         <h3 className="text-center font-semibold">
// // //           Confirm Delete
// // //         </h3>

// // //         <div className="flex gap-3 mt-5">
// // //           <button
// // //             onClick={() => setDeleteId(null)}
// // //             className="flex-1 py-2 rounded-xl bg-gray-200 dark:bg-white/10"
// // //           >
// // //             Cancel
// // //           </button>

// // //           <button
// // //             onClick={confirmDelete}
// // //             className="flex-1 py-2 rounded-xl bg-red-500 text-white"
// // //           >
// // //             Delete
// // //           </button>
// // //         </div>
// // //       </motion.div>
// // //     </motion.div>
// // //   )}
// // // </AnimatePresence>

// // // <AnimatePresence>
// // //   {showProjectForm && selectedClient && (
// // //     <motion.div
// // //       className="fixed inset-0 z-[999] flex items-center justify-center"
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //     >
// // //       {/* BG */}
// // //       <div
// // //         className="absolute inset-0 bg-black/70 backdrop-blur-md"
// // //         onClick={() => {
// // //           setShowProjectForm(false);
// // //           setSelectedClient(null);
// // //         }}
// // //       />

// // //       {/* MODAL */}
// // //       <motion.div
// // //         initial={{ scale: 0.9 }}
// // //         animate={{ scale: 1 }}
// // //         className="
// // //           relative z-10 w-full max-w-xl p-6 rounded-2xl

// // //           bg-white dark:bg-[#020617]

// // //           border border-gray-200 dark:border-white/10
// // //           shadow-2xl
// // //         "
// // //       >

// // //         {/* HEADER */}
// // //         <div className="flex justify-between items-center mb-4">
// // //           <h3 className="font-semibold text-lg">
// // //             Add Project 🚀
// // //           </h3>

// // //           <button
// // //             onClick={() => {
// // //               setShowProjectForm(false);
// // //               setSelectedClient(null);
// // //             }}
// // //             className="
// // //               w-8 h-8 flex items-center justify-center
// // //               rounded-full
// // //               bg-gray-100 dark:bg-white/10
// // //             "
// // //           >
// // //             ✕
// // //           </button>
// // //         </div>

// // //         {/* FORM */}
// // //         <ProjectForm
// // //           selected={{
// // //             title: selectedClient.projectType || "",
// // //             description: selectedClient.message || "",
// // //             clientId: selectedClient._id,
// // //           }}
// // //           refresh={async () => {
// // //             // 🔥 STEP 1: status update AFTER form submit
// // //             await updateStatus(selectedClient._id, "completed");

// // //             // 🔥 STEP 2: close modal
// // //             setShowProjectForm(false);
// // //             setSelectedClient(null);

// // //             toast.success("Project Added & Completed 🚀");
// // //           }}
// // //         />

// // //       </motion.div>
// // //     </motion.div>
// // //   )}
// // // </AnimatePresence>
// // //     </div>

// // //   );
// // // }

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaEnvelope } from "react-icons/fa";
// import toast from "react-hot-toast";
// import API from "../../services/api";
// import Pagination from "../../components/Pagination";
// import ProjectForm from "../../components/admin/ProjectForm";
// import { useNavigate } from "react-router-dom";

// const FILTERS = ["All", "Requests", "Ongoing", "Completed"];

// export default function Clients() {
//   const [clients, setClients] = useState([]);
//   const [filter, setFilter] = useState("All");
//   const [loading, setLoading] = useState(true);

//   const [selectedClient, setSelectedClient] = useState(null);
//   const [showProjectForm, setShowProjectForm] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);

//   const [currentPage, setCurrentPage] = useState(1);
//   const perPage = 6;

//   const navigate = useNavigate();

//   // 🔥 LOAD
//   const loadClients = async () => {
//     try {
//       setLoading(true);
//       const res = await API.get("/contact");
//       setClients(res.data || []);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadClients();
//   }, []);

//   // 🔥 FILTER
//   const filteredClients = clients.filter((c) => {
//     if (!c?.status) return false;
//     if (filter === "All") return true;
//     if (filter === "Requests") return c.status === "lead";
//     if (filter === "Ongoing") return c.status === "ongoing";
//     if (filter === "Completed") return c.status === "completed";
//     return false;
//   });

//   // 🔥 PAGINATION
//   const totalPages = Math.max(1, Math.ceil(filteredClients.length / perPage));
//   const start = (currentPage - 1) * perPage;
//   const currentClients = filteredClients.slice(start, start + perPage);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [filter]);

//   // 🔥 UPDATE STATUS
//   const updateStatus = async (id, status) => {
//     try {
//       await API.put(`/contact/${id}`, { status });
//       await loadClients();
//       toast.success("Updated ✅");
//     } catch {
//       toast.error("Update failed ❌");
//     }
//   };

//   // 🔥 DELETE CLIENT
//   const deleteClient = async (id) => {
//     try {
//       await API.delete(`/contact/${id}`);
//       toast.success("Deleted 🗑️");
//       loadClients();
//     } catch {
//       toast.error("Delete failed ❌");
//     }
//   };

//   // 🔥 APPROVE
//   const approveProject = async (client) => {
//     try {
//       if (!client?._id) {
//         toast.error("Client ID missing ❌");
//         return;
//       }

//       const formData = new FormData();
//       formData.append("title", client.projectType || "Client Project");
//       formData.append("description", client.message);
//       formData.append("clientId", client._id);

//       await API.post("/projects", formData);
//       await API.put(`/contact/${client._id}`, { approved: true });

//       toast.success("Approved 🚀");
//       loadClients();
//       navigate("/admin/projects");
//     } catch (err) {
//       console.error(err);
//       toast.error("Approve failed ❌");
//     }
//   };

//   // 🔥 WITHDRAW
//   const withdrawProject = async (client) => {
//     try {
//       await API.delete(`/projects/by-client/${client._id}`);
//       await API.put(`/contact/${client._id}`, { approved: false });

//       toast.success("Withdrawn");
//       loadClients();
//     } catch (err) {
//       console.error(err);
//       toast.error("Withdraw failed ❌");
//     }
//   };

//   return (
//     <div className="space-y-10 min-h-screenbg-[#f8fafc] dark:bg-[#020617] text-black  dark:text-white transition">
//       {/* HEADER */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
//         {/* Left Section */}
//         <div>
//           <p className="text-[10px] tracking-[0.35em] uppercase text-gray-500">
//             Admin Panel
//           </p>

//           <h2 className="text-3xl font-bold gradient-text mt-1">
//             Clients Manager
//           </h2>

//           <p className="text-xs sm:text-sm text-gray-500 mt-1">
//             Manage all your client interactions efficiently
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="flex gap-2 flex-wrap">
//           {FILTERS.map((f) => (
//             <button
//               key={f}
//               onClick={() => setFilter(f)}
//               className={`px-4 py-2 rounded-full text-sm transition ${
//                 filter === f
//                   ? "bg-gradient-to-r from-blue-400 to-emerald-400 text-black"
//                   : "text-gray-400 hover:text-white border border-white/10"
//               }`}
//             >
//               {f}
//             </button>
//           ))}
//         </div>
//       </div>
//       {/* LOADING */}
//       {loading && <p className="text-center text-gray-400">Loading...</p>}

//       {/* CLIENT LIST */}
//       <div className="grid md:grid-cols-2 gap-6">
//         {currentClients.map((c) => (
//           <motion.div
//             key={c._id}
//             whileHover={{ y: -5 }}
//             className="
//     relative p-6 rounded-2xl

// bg-white dark:bg-[#0b1220]

// border border-gray-200 dark:border-white/10

// shadow-sm hover:shadow-md
// dark:shadow-xl

// transition
//   "
//           >
//             {/* STATUS TOP RIGHT */}
//             <span
//               className={`
//       absolute top-4 right-4
//       text-xs px-3 py-1 rounded-full capitalize

//       ${c.status === "lead" && "bg-yellow-400/20 text-yellow-600 dark:text-yellow-400"}
//       ${c.status === "ongoing" && "bg-blue-400/20 text-blue-600 dark:text-blue-400"}
//       ${c.status === "completed" && "bg-emerald-400/20 text-emerald-600 dark:text-emerald-400"}
//     `}
//             >
//               {c.status}
//             </span>

//             {/* NAME */}
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//               {c.name}
//             </h3>

//             {/* EMAIL */}
//             <p className="text-sm text-emerald-500 break-all mt-1">{c.email}</p>

//             {/* MESSAGE */}
//             <p className="mt-2 text-gray-700 dark:text-gray-400">{c.message}</p>

//             {/* ACTIONS */}
//             <div className="flex justify-between items-end mt-5">
//               {/* LEFT BUTTONS */}
//               <div className="flex gap-2 flex-wrap">
//                 {/* VIEW */}
//                 {c.status === "lead" && (
//                   <button
//                     onClick={() => setSelectedClient(c)}
//                     className="
//             px-4 py-2 rounded-full text-sm
//             border border-gray-300 dark:border-white/10
//             text-gray-700 dark:text-gray-200
//             hover:bg-gray-100 dark:hover:bg-white/10
//           "
//                   >
//                     View
//                   </button>
//                 )}

//                 {/* COMPLETE */}
//                 {c.status === "ongoing" && (
//                   <button
//                     onClick={() => {
//                       setSelectedClient(c);
//                       setShowProjectForm(true);
//                     }}
//                     className="
//             px-4 py-2 rounded-full text-sm
//             bg-gradient-to-r from-blue-400 to-emerald-400
//             text-black
//           "
//                   >
//                     Complete
//                   </button>
//                 )}

//                 {/* DELETE */}
//                 <button
//                   onClick={() => deleteClient(c._id)}
//                   className="
//           px-4 py-2 rounded-full text-sm
//           border border-red-400 text-red-400
//           hover:bg-red-500/10
//         "
//                 >
//                   Delete
//                 </button>

//                 {/* APPROVE / WITHDRAW */}
//                 {c.status === "completed" &&
//                   (!c.approved ? (
//                     <button
//                       onClick={() => approveProject(c)}
//                       className="px-4 py-2 rounded-full text-sm bg-green-400 text-black"
//                     >
//                       Approve
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => withdrawProject(c)}
//                       className="px-4 py-2 rounded-full text-sm bg-yellow-400 text-black"
//                     >
//                       Withdraw
//                     </button>
//                   ))}
//               </div>

//               {/* MAIL RIGHT BOTTOM */}
//               <a
//                 href={`mailto:${c.email}`}
//                 className="
//         w-10 h-10 flex items-center justify-center rounded-full

//         border border-gray-300 dark:border-white/10

// text-gray-700 dark:text-gray-400
//         hover:bg-gray-100 dark:hover:bg-white/10
//         transition
//       "
//               >
//                 <FaEnvelope />
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* PAGINATION */}
//       {filteredClients.length > perPage && (
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={setCurrentPage}
//         />
//       )}

//       {/* VIEW MODAL */}
//       <AnimatePresence>
//         {selectedClient && !showProjectForm && (
//           <motion.div className="fixed inset-0 flex items-center justify-center z-50">
//             <div
//               className="absolute inset-0 bg-black/60"
//               onClick={() => setSelectedClient(null)}
//             />

//             <div className="bg-[#0b1220] p-6 rounded-xl border border-white/10 z-10 w-[400px]">
//               <h3 className="font-bold">{selectedClient.name}</h3>
//               <p>{selectedClient.email}</p>
//               <p>{selectedClient.message}</p>

//               <button
//                 onClick={() => {
//                   updateStatus(selectedClient._id, "ongoing");
//                   setSelectedClient(null);
//                 }}
//                 className="mt-4 px-4 py-2 bg-blue-400 text-black rounded"
//               >
//                 Move to Ongoing
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* PROJECT FORM */}
//       {showProjectForm && selectedClient && (
//         <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
//           <div className="w-full max-w-xl">
//             <ProjectForm
//               selected={selectedClient}
//               refresh={async () => {
//                 await updateStatus(selectedClient._id, "completed");

//                 setShowProjectForm(false);
//                 setSelectedClient(null);
//                 setFilter("Completed");
//                 loadClients();
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";
import API from "../../services/api";
import Pagination from "../../components/Pagination";
import ProjectForm from "../../components/admin/ProjectForm";
import { useNavigate } from "react-router-dom";

const FILTERS = ["All", "Requests", "Ongoing", "Completed"];

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const [selectedClient, setSelectedClient] = useState(null);
  const [showProjectForm, setShowProjectForm] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  const navigate = useNavigate();

  // 🔥 LOAD
  const loadClients = async () => {
    try {
      setLoading(true);
      const res = await API.get("/contact");
      setClients(res.data || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClients();
  }, []);

  // 🔥 FILTER
  const filteredClients = clients.filter((c) => {
    if (!c?.status) return false;
    if (filter === "All") return true;
    if (filter === "Requests") return c.status === "lead";
    if (filter === "Ongoing") return c.status === "ongoing";
    if (filter === "Completed") return c.status === "completed";
    return false;
  });

  // 🔥 PAGINATION
  const totalPages = Math.max(1, Math.ceil(filteredClients.length / perPage));
  const start = (currentPage - 1) * perPage;
  const currentClients = filteredClients.slice(start, start + perPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // 🔥 UPDATE STATUS
  const updateStatus = async (id, status) => {
    try {
      await API.put(`/contact/${id}`, { status });
      await loadClients();
      toast.success("Updated ✅");
    } catch {
      toast.error("Update failed ❌");
    }
  };

  // 🔥 DELETE CLIENT
  const deleteClient = async (id) => {
    try {
      await API.delete(`/contact/${id}`);
      toast.success("Deleted 🗑️");
      loadClients();
    } catch {
      toast.error("Delete failed ❌");
    }
  };

  // 🔥 APPROVE
  const approveProject = async (client) => {
    try {
      if (!client?._id) {
        toast.error("Client ID missing ❌");
        return;
      }

      const formData = new FormData();
      formData.append("title", client.projectType || "Client Project");
      formData.append("description", client.message);
      formData.append("clientId", client._id);

      await API.post("/projects", formData);
      await API.put(`/contact/${client._id}`, { approved: true });

      toast.success("Approved 🚀");
      loadClients();
      navigate("/admin/projects");
    } catch (err) {
      console.error(err);
      toast.error("Approve failed ❌");
    }
  };

  // 🔥 WITHDRAW
  const withdrawProject = async (client) => {
    try {
      await API.delete(`/projects/by-client/${client._id}`);
      await API.put(`/contact/${client._id}`, { approved: false });

      toast.success("Withdrawn");
      loadClients();
    } catch (err) {
      console.error(err);
      toast.error("Withdraw failed ❌");
    }
  };

  return (
    <div className="space-y-10 min-h-screen bg-[#f8fafc] dark:bg-[#020617] text-gray-900 dark:text-white transition">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 rounded-2xl bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-sm">
        
        <div>
          <p className="text-[10px] tracking-[0.35em] uppercase text-gray-500">
            Admin Panel
          </p>

          <h2 className="text-3xl font-bold gradient-text mt-1">
            Clients Manager
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Manage all your client interactions efficiently
          </p>
        </div>

        {/* FILTER */}
        <div className="flex gap-2 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === f
                  ? "bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow"
                  : "text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-white/10 hover:text-black dark:hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-400">Loading...</p>
      )}

      {/* CLIENT LIST */}
      <div className="grid md:grid-cols-2 gap-6">
        {currentClients.map((c) => (
          <motion.div
            key={c._id}
            whileHover={{ y: -4, scale: 1.01 }}
            className="relative p-6 rounded-2xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-300"
          >

            {/* STATUS */}
            <span className={`
              absolute top-4 right-4 text-xs px-3 py-1 rounded-full capitalize
              ${c.status === "lead" && "bg-yellow-100 text-yellow-700 dark:bg-yellow-400/20 dark:text-yellow-400"}
              ${c.status === "ongoing" && "bg-blue-100 text-blue-700 dark:bg-blue-400/20 dark:text-blue-400"}
              ${c.status === "completed" && "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-400"}
            `}>
              {c.status}
            </span>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {c.name}
            </h3>

            <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">
              {c.email}
            </p>

            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {c.message}
            </p>

            {/* ACTIONS */}
            <div className="flex justify-between items-end mt-5">

              <div className="flex gap-2 flex-wrap">

                {c.status === "lead" && (
                  <button
                    onClick={() => setSelectedClient(c)}
                    className="px-4 py-2 rounded-full text-sm border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-white/10 dark:text-gray-200 dark:hover:bg-white/10"
                  >
                    View
                  </button>
                )}

                {c.status === "ongoing" && (
                  <button
                    onClick={() => {
                      setSelectedClient(c);
                      setShowProjectForm(true);
                    }}
                    className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow"
                  >
                    Complete
                  </button>
                )}

                <button
                  onClick={() => deleteClient(c._id)}
                  className="px-4 py-2 rounded-full text-sm border border-red-400 text-red-500 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-500/10"
                >
                  Delete
                </button>

                {c.status === "completed" &&
                  (!c.approved ? (
                    <button
                      onClick={() => approveProject(c)}
                      className="px-4 py-2 rounded-full text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow"
                    >
                      Approve
                    </button>
                  ) : (
                    <button
                      onClick={() => withdrawProject(c)}
                      className="px-4 py-2 rounded-full text-sm bg-yellow-400 text-black"
                    >
                      Withdraw
                    </button>
                  ))}
              </div>

              <a
                href={`mailto:${c.email}`}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 hover:scale-105 transition"
              >
                <FaEnvelope />
              </a>

            </div>
          </motion.div>
        ))}
      </div>

      {/* PAGINATION */}
      {filteredClients.length > perPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {/* VIEW MODAL */}
      <AnimatePresence>
        {selectedClient && !showProjectForm && (
          <motion.div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setSelectedClient(null)}
            />

            <div className="bg-white dark:bg-[#0b1220] p-6 rounded-xl border border-gray-200 dark:border-white/10 z-10 w-[400px]">
              <h3 className="font-bold">{selectedClient.name}</h3>
              <p>{selectedClient.email}</p>
              <p>{selectedClient.message}</p>

              <button
                onClick={() => {
                  updateStatus(selectedClient._id, "ongoing");
                  setSelectedClient(null);
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Move to Ongoing
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PROJECT FORM */}
      {showProjectForm && selectedClient && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="w-full max-w-xl">
            <ProjectForm
              selected={selectedClient}
              refresh={async () => {
                await updateStatus(selectedClient._id, "completed");

                setShowProjectForm(false);
                setSelectedClient(null);
                setFilter("Completed");
                loadClients();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}