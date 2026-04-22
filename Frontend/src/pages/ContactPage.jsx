
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import API from "../services/api";

import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaBriefcase,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);

const projectOptions = [
  "Landing Page",
  "Business Website",
  "Web Application",
  "Dashboard / Admin Panel",
  "E-commerce Store",
];
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.projectType || !form.message) {
      return toast.error("All fields are required ⚠️");
    }

    try {
      setLoading(true);
      await API.post("/contact", form);
      setSuccess(true);
      toast.success("Request Sent ");

      setForm({
        name: "",
        email: "",
        projectType: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  // ✅ SUCCESS
  if (success) {
    return (
      <section className="py-40 text-center">
        <h2 className="text-4xl font-bold gradient-text mb-4">
          🎉 Message Sent!
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          I’ll get back to you within 24 hours.
        </p>

        <button
          onClick={() => setSuccess(false)}
          className="mt-6 btn-premium"
        >
          Send Another
        </button>
      </section>
    );
  }

  return (
    <section className="py-28 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">

        {/* 🔥 LEFT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-bold leading-tight mb-4">
            Let’s Build{" "}
            <span className="gradient-text">Something Great</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
            Got an idea or project in mind? Let’s turn it into a
            powerful digital product.
          </p>

          <a
            href="https://wa.me/9737272866"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 rounded-xl w-fit
            bg-green-500 text-white hover:bg-green-600
            shadow-md hover:shadow-lg transition"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>
        </div>

        {/* 🔥 FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            p-8 rounded-3xl

            bg-white/80 border border-gray-200 shadow-xl
            dark:bg-white/5 dark:border-white/10

            backdrop-blur-xl
          "
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              Start a <span className="gradient-text">Project</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Share your requirements — let’s build something amazing.
            </p>
          </div>

          <div className="flex flex-col gap-5">

            {/* NAME */}
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="input-premium pl-12"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="input-premium pl-12"
              />
            </div>

            {/* 🔥 CUSTOM DROPDOWN */}
            {/* <div className="relative">
              <FaBriefcase className="absolute left-4 top-4 text-gray-400" />

              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="input-premium pl-12 text-left flex justify-between items-center"
              >
                {form.projectType || "Project Type"}
                <span className={`transition ${open ? "rotate-180" : ""}`}>
                  ⌄
                </span>
              </button>

              {open && (
                <div
                  className="
                  absolute top-full mt-2 w-full z-50 rounded-xl overflow-hidden

                  bg-white border border-gray-200 shadow-lg
                  dark:bg-[#0f172a] dark:border-white/10
                "
                >
                  {projectOptions.map((item) => (
                    <div
                      key={item}
                      onClick={() => {
                        setForm({ ...form, projectType: item });
                        setOpen(false);
                      }}
                      className="
                        px-4 py-3 cursor-pointer

                        hover:bg-gray-100
                        dark:hover:bg-white/10

                        text-gray-800 dark:text-white
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div> */}
      <div className="relative">
  <FaBriefcase className="absolute left-4 top-4 text-gray-400" />

  {/* BUTTON */}
  <button
    type="button"
    onClick={() => setOpen(!open)}
    className="
      input-premium pl-12 text-left flex justify-between items-center
      w-full
    "
  >
    <span className={form.projectType ? "" : "text-gray-400"}>
      {form.projectType || "Select Project Type"}
    </span>

    <span className={`transition ${open ? "rotate-180" : ""}`}>
      ⌄
    </span>
  </button>

  {/* DROPDOWN */}
  {open && (
    <div
      className="
        absolute top-full mt-2 w-full z-50 rounded-xl overflow-hidden

        bg-white dark:bg-[#020617]
        border border-gray-200 dark:border-white/10

        shadow-lg
      "
    >
      {projectOptions.map((item, i) => (
        <button
          key={item}
          type="button"
          tabIndex={0}
          onClick={() => {
            setForm({ ...form, projectType: item });
            setOpen(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setForm({ ...form, projectType: item });
              setOpen(false);
            }
          }}
          className="
            w-full text-left px-4 py-3 text-sm

            text-gray-800 dark:text-white

            hover:bg-gray-100
            dark:hover:bg-white/10

            focus:bg-gray-200
            dark:focus:bg-white/10

            focus:outline-none
            transition
          "
        >
          {item}
        </button>
      ))}
    </div>
  )}
</div>

            {/* MESSAGE */}
            <div className="relative">
              <FaCommentDots className="absolute left-4 top-4 text-gray-400" />
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="input-premium pl-12"
              />
            </div>

            {/* BUTTON */}
            <button
              disabled={loading}
              className="btn-premium flex justify-center items-center gap-2"
            >
              {loading ? "Sending..." : "Start Project →"}
            </button>

          </div>
        </motion.form>
      </div>
    </section>
  );
}


// import { useState } from "react";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";
// import API from "../services/api";
// import { useRef, useEffect } from "react";
// import {
//   FaUser,
//   FaEnvelope,
//   FaCommentDots,
//   FaBriefcase,
//   FaWhatsapp,
// } from "react-icons/fa";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     projectType: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [open, setOpen] = useState(false);

// const projectOptions = [
//   "Landing Page",
//   "Business Website",
//   "Web Application",
//   "Dashboard / Admin Panel",
//   "E-commerce Store",
// ];
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.projectType || !form.message) {
//       return toast.error("All fields are required ⚠️");
//     }

//     try {
//       setLoading(true);
//       await API.post("/contact", form);
//       setSuccess(true);
//       toast.success("Request Sent ");

//       setForm({
//         name: "",
//         email: "",
//         projectType: "",
//         message: "",
//       });
//     } catch {
//       toast.error("Something went wrong ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ SUCCESS
//   if (success) {
//     return (
//       <section className="py-40 text-center">
//         <h2 className="text-4xl font-bold gradient-text mb-4">
//           🎉 Message Sent!
//         </h2>
//         <p className="text-gray-500 dark:text-gray-400">
//           I’ll get back to you within 24 hours.
//         </p>

//         <button
//           onClick={() => setSuccess(false)}
//           className="mt-6 btn-premium"
//         >
//           Send Another
//         </button>
//       </section>
//     );
//   }
// const dropdownRef = useRef();

// useEffect(() => {
//   const handleClickOutside = (e) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//       setOpen(false);
//     }
//   };

//   document.addEventListener("mousedown", handleClickOutside);
//   return () =>
//     document.removeEventListener("mousedown", handleClickOutside);
// }, []);
//   return (
//     <section className="py-28 px-6 flex justify-center">
//       <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">

//         {/* 🔥 LEFT */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-5xl font-bold leading-tight mb-4">
//             Let’s Build{" "}
//             <span className="gradient-text">Something Great</span>
//           </h2>

//           <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
//             Got an idea or project in mind? Let’s turn it into a
//             powerful digital product.
//           </p>

//           <a
//             href="https://wa.me/9737272866"
//             target="_blank"
//             className="flex items-center gap-3 px-6 py-3 rounded-xl w-fit
//             bg-green-500 text-white hover:bg-green-600
//             shadow-md hover:shadow-lg transition"
//           >
//             <FaWhatsapp />
//             Chat on WhatsApp
//           </a>
//         </div>

//         {/* 🔥 FORM */}
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="
//             p-8 rounded-3xl

//             bg-white/80 border border-gray-200 shadow-xl
//             dark:bg-white/5 dark:border-white/10

//             backdrop-blur-xl
//           "
//         >
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold">
//               Start a <span className="gradient-text">Project</span>
//             </h2>
//             <p className="text-gray-500 dark:text-gray-400 mt-2">
//               Share your requirements — let’s build something amazing.
//             </p>
//           </div>

//           <div className="flex flex-col gap-5">

//             {/* NAME */}
//             <div className="relative">
//               <FaUser className="absolute left-4 top-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={form.name}
//                 onChange={(e) =>
//                   setForm({ ...form, name: e.target.value })
//                 }
//                 className="input-premium pl-12"
//               />
//             </div>

//             {/* EMAIL */}
//             <div className="relative">
//               <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 value={form.email}
//                 onChange={(e) =>
//                   setForm({ ...form, email: e.target.value })
//                 }
//                 className="input-premium pl-12"
//               />
//             </div>

//             {/* 🔥 CUSTOM DROPDOWN */}
//             {/* <div className="relative">
//               <FaBriefcase className="absolute left-4 top-4 text-gray-400" />

//               <button
//                 type="button"
//                 onClick={() => setOpen(!open)}
//                 className="input-premium pl-12 text-left flex justify-between items-center"
//               >
//                 {form.projectType || "Project Type"}
//                 <span className={`transition ${open ? "rotate-180" : ""}`}>
//                   ⌄
//                 </span>
//               </button>

//               {open && (
//                 <div
//                   className="
//                   absolute top-full mt-2 w-full z-50 rounded-xl overflow-hidden

//                   bg-white border border-gray-200 shadow-lg
//                   dark:bg-[#0f172a] dark:border-white/10
//                 "
//                 >
//                   {projectOptions.map((item) => (
//                     <div
//                       key={item}
//                       onClick={() => {
//                         setForm({ ...form, projectType: item });
//                         setOpen(false);
//                       }}
//                       className="
//                         px-4 py-3 cursor-pointer

//                         hover:bg-gray-100
//                         dark:hover:bg-white/10

//                         text-gray-800 dark:text-white
//                       "
//                     >
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div> */}
//       <div className="relative">
//   <FaBriefcase className="absolute left-4 top-4 text-gray-400" />

//   {/* BUTTON */}
//   <button
//     type="button"
//     onClick={() => setOpen(!open)}
//     className="
//       input-premium pl-12 text-left flex justify-between items-center
//       w-full
//     "
//   >
//     <span className={form.projectType ? "" : "text-gray-400"}>
//       {form.projectType || "Select Project Type"}
//     </span>

//     <span className={`transition ${open ? "rotate-180" : ""}`}>
//       ⌄
//     </span>
//   </button>

//   {/* DROPDOWN */}
//   {open && (
//     <div
//       className="
//         absolute top-full mt-2 w-full z-50 rounded-xl overflow-hidden

//         bg-white dark:bg-[#020617]
//         border border-gray-200 dark:border-white/10

//         shadow-lg
//       "
//     >
//       {projectOptions.map((item, i) => (
//         <button
//           key={item}
//           type="button"
//           tabIndex={0}
//           onClick={() => {
//             setForm({ ...form, projectType: item });
//             setOpen(false);
//           }}
//           onKeyDown={(e) => {
//             if (e.key === "Enter" || e.key === " ") {
//               setForm({ ...form, projectType: item });
//               setOpen(false);
//             }
//           }}
//           className="
//             w-full text-left px-4 py-3 text-sm

//             text-gray-800 dark:text-white

//             hover:bg-gray-100
//             dark:hover:bg-white/10

//             focus:bg-gray-200
//             dark:focus:bg-white/10

//             focus:outline-none
//             transition
//           "
//         >
//           {item}
//         </button>
//       ))}
//     </div>
//   )}
// </div>

//             {/* MESSAGE */}
//             <div className="relative">
//               <FaCommentDots className="absolute left-4 top-4 text-gray-400" />
//               <textarea
//                 rows="4"
//                 placeholder="Tell me about your project..."
//                 value={form.message}
//                 onChange={(e) =>
//                   setForm({ ...form, message: e.target.value })
//                 }
//                 className="input-premium pl-12"
//               />
//             </div>

//             {/* BUTTON */}
//             <button
//               disabled={loading}
//               className="btn-premium flex justify-center items-center gap-2"
//             >
//               {loading ? "Sending..." : "Start Project →"}
//             </button>

//           </div>
//         </motion.form>
//       </div>
//     </section>
//   );
// }





