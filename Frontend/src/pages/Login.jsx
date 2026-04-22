// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import API from "../services/api";

// export default function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await API.post("/auth/login", form);

//       localStorage.setItem("token", res.data.token);
//       toast.success("Login Successful 🔐");

//       navigate("/admin");
//     } catch {
//       toast.error("Invalid Credentials ❌");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-6">
//       {/* 🌌 BACKGROUND */}
//       <div className="fixed inset-0 -z-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.15),transparent_40%)]" />
//       </div>

//       {/* 💎 LOGIN CARD */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="
//           w-full max-w-md p-10 rounded-2xl transition-all

//           bg-white/10 dark:bg-white/5
//           backdrop-blur-2xl

//           border border-white/10 dark:border-white/10

//           shadow-xl
//         "
//       >
//         {/* TITLE */}
//         <h2 className="text-3xl font-bold text-center mb-2 gradient-text">
//           Admin Login
//         </h2>

//         <p className="text-center text-gray-400 mb-8 text-sm">
//           Secure access to dashboard
//         </p>

//         {/* FORM */}
//         <form onSubmit={handleLogin} className="flex flex-col gap-5">
//           {/* EMAIL */}
//           <div className="relative">
//             <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="input-premium pl-12"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//             />
//           </div>
//           {/* PASSWORD */}
//           <div className="relative">
//             <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="input-premium pl-12"
//               value={form.password}
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//             />
//           </div>

//           {/* BUTTON */}
//           <button className="btn-premium mt-4">Login</button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }

import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa";
import API from "../services/api";
import Navbar from "../components/layout/Navbar";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      toast.success("Login Successful 🔐");

      navigate("/admin");
    } catch {
      toast.error("Invalid Credentials ❌");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-6">
        {/* 🌌 BACKGROUND */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.15),transparent_40%)]" />
        </div>

        {/* 🔥 MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-6xl">
          {/* 🧠 LEFT SIDE (NEW ADD) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block space-y-6"
          >
            <p className="text-xs tracking-[0.4em] text-gray-500">
              SECURE ACCESS
            </p>

            <h1 className="text-5xl font-extrabold leading-tight">
              Admin{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>

            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              Manage your projects, content, and system settings securely.
            </p>

            {/* 🔥 DECOR DOT */}
            <div className="w-3 h-3 bg-emerald-400 rounded-full blur-sm shadow-lg shadow-emerald-400/50" />
          </motion.div>

          {/* 💎 RIGHT SIDE (LOGIN CARD - SAME UI) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="
            w-full max-w-md mx-auto p-10 rounded-2xl
            
            bg-white/10 dark:bg-white/5
            backdrop-blur-2xl 
            
            border border-white/10
            shadow-xl
          "
          >
            {/* TITLE */}
            <h2 className="text-3xl font-bold text-center mb-2 gradient-text">
              Welcome back
            </h2>

            <p className="text-center text-gray-400 mb-8 text-sm">
              Enter your credentials to continue
            </p>

            {/* FORM */}
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              {/* EMAIL */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                <input
                  type="email"
                  placeholder="Email"
                  className="input-premium pl-12"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                <input
                  type="password"
                  placeholder="Password"
                  className="input-premium pl-12"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>

              {/* BUTTON */}
              <button className="btn-premium mt-4">Login →</button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}
