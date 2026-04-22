// import { useState, useEffect } from "react";
// import API from "../../services/api.js";
// import {
//   FaSave,
//   FaPlus,
//   FaHeading,
//   FaAlignLeft,
//   FaCode,
//   FaGithub,
//   FaExternalLinkAlt,
//   FaImage,
// } from "react-icons/fa";

// export default function ProjectForm({ selected, refresh }) {
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     tech: "",
//     github: "",
//     live: "",
//     category:"",
//   });

//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (selected) {
//       setForm({
//         ...selected,
//         tech: selected.tech ? selected.tech.join(",") : "",
//         category:selected.category || "",
//       });
//     }
//   }, [selected]);

//   const handleSubmit = async () => {
//     if (loading) return;
//     setLoading(true);

//     try {
//       const formData = new FormData();

//       Object.keys(form).forEach((key) => {
//         formData.append(key, form[key]);
//       });

//       if (image) formData.append("image", image);

//       if (selected) {
//         await API.put(`/projects/${selected._id}`, formData);
//       } else {
//         await API.post("/projects", formData);
//       }

//       setForm({
//         title: "",
//         description: "",
//         tech: "",
//         github: "",
//         live: "",
//         category:"",
//       });

//       setImage(null);
//       refresh();
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fields = [
//     { name: "title", icon: <FaHeading /> },
//     { name: "description", icon: <FaAlignLeft /> },
//     { name: "tech", icon: <FaCode /> },
//     { name: "github", icon: <FaGithub /> },
//     { name: "live", icon: <FaExternalLinkAlt /> },
//   ];

//   return (
//     <div
//       className="
//       mt-4 p-6 rounded-2xl flex flex-col gap-5

//       bg-white dark:bg-[#0b1220]
//       border border-gray-200 dark:border-white/10
//       shadow-xl backdrop-blur-xl
//     "
//     >
//       <h2 className="text-3xl font-bold gradient-text">
//         {selected ? "Update Project" : "Add Project"}
//       </h2>

//       {fields.map((field) => (
//         <div key={field.name} className="relative">
//           <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//             {field.icon}
//           </div>

//           <input
//             placeholder={field.name}
//             value={form[field.name]}
//             onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
//             className="
//               w-full p-3 pl-10 rounded-lg

//               bg-white border border-gray-300 text-black
//               dark:bg-white/10 dark:border-white/10 dark:text-white

//               placeholder:text-gray-400
//               focus:ring-2 focus:ring-emerald-400/50
//               transition
//             "
//           />
//         </div>
//       ))}
// <select
//   value={form.category}
//   onChange={(e) =>
//     setForm({ ...form, category: e.target.value })
//   }
//   className="
//     w-full px-4 py-3 rounded-xl text-sm

//     bg-white text-gray-800
//     border border-gray-300

//     dark:bg-[#0b1220] dark:text-white
//     dark:border-white/10

//     focus:outline-none
//     focus:ring-2 focus:ring-emerald-400/50

//     hover:border-emerald-400
//     transition
//   "
// >
//   <option value="" disabled className="text-gray-400">
//     Select category
//   </option>

//   <option value="frontend">Frontend</option>
//   <option value="fullstack">Full Stack</option>
// </select>
//       {/* FILE */}
//       <div className="relative">
//         <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//           <FaImage />
//         </div>

//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="
//           w-full p-2 pl-10 rounded-lg

//           bg-white border border-gray-300
//           dark:bg-white/10 dark:border-white/10 dark:text-white

//           text-gray-700 dark:text-gray-300

//           file:mr-4 file:py-2 file:px-4
//           file:rounded-lg file:border-0
//           file:font-semibold

//           file:bg-gradient-to-r file:from-[#7aa2ff] file:via-[#6ee7b7] file:to-[#4ade80]
//           file:text-[#020617]

//           hover:file:scale-105
//           file:transition file:duration-300
//   "
//         />
//       </div>

//       {/* BUTTON */}
//       <button
//         onClick={handleSubmit}
//         disabled={loading || !form.title || !form.description}
//         className="
//           flex items-center justify-center gap-2
//           bg-gradient-to-r from-blue-400 to-emerald-400
//           text-[#020617]
//           py-3 rounded-xl font-semibold
//           hover:scale-[1.03] transition
//           disabled:opacity-50
//         "
//       >
//         {loading ? (
//           "Saving..."
//         ) : selected ? (
//           <>
//             <FaSave /> Update
//           </>
//         ) : (
//           <>
//             <FaPlus /> Add
//           </>
//         )}
//       </button>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import API from "../../services/api.js";
import {
  FaSave,
  FaPlus,
  FaHeading,
  FaAlignLeft,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaImage,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function ProjectForm({ selected, refresh }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    tech: "",
    github: "",
    live: "",
    category: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  if (selected) {
    setForm({
      title: selected.title || "",
      description: selected.description || "",
      tech: selected.tech ? selected.tech.join(",") : "",
      github: selected.github || "",
      live: selected.live || "",
      category: selected.category || "",
    });
  }
}, [selected]);

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      if (image) formData.append("image", image);

      if (selected) {
        await API.put(`/projects/${selected._id}`, formData);
      } else {
        await API.post("/projects", formData);
      }

      setForm({
        title: "",
        description: "",
        tech: "",
        github: "",
        live: "",
        category: "",
      });

      setImage(null);
      refresh();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: "title", icon: <FaHeading /> },
    { name: "description", icon: <FaAlignLeft /> },
    { name: "tech", icon: <FaCode /> },
    { name: "github", icon: <FaGithub /> },
    { name: "live", icon: <FaExternalLinkAlt /> },
  ];

  return (
    <div
      className="
      relative mt-4 p-6 rounded-2xl flex flex-col gap-5

      bg-white dark:bg-[#0b1220]
      border border-gray-200 dark:border-white/10

      shadow-lg dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)]

      backdrop-blur-xl transition
    "
    >
      {/* ❌ CROSS BUTTON */}
      <button
        onClick={refresh}
        className="
        absolute top-4 right-4

        w-9 h-9 flex items-center justify-center rounded-full

        bg-gray-100 dark:bg-white/10
        text-gray-600 dark:text-gray-300

        hover:bg-red-500 hover:text-white
        transition
      "
      >
        <IoClose size={18} />
      </button>

      {/* TITLE */}
      <h2 className="text-2xl font-bold gradient-text">
        {selected ? "Update Project" : "Add Project"}
      </h2>

      {/* INPUTS */}
      {fields.map((field) => (
        <div key={field.name} className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {field.icon}
          </div>

          <input
            placeholder={field.name}
            value={form[field.name] || ""}
            onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
            className="
              w-full px-4 py-3 pl-10 rounded-xl text-sm

              bg-white text-gray-800
              border border-gray-300

              dark:bg-[#020617] dark:text-white
              dark:border-white/10

              placeholder:text-gray-400

              focus:outline-none
              focus:ring-2 focus:ring-emerald-400/50

              hover:border-emerald-400
              transition
            "
          />
        </div>
      ))}

      {/* CATEGORY */}
      <select
        value={form.category || ""}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="
          w-full px-4 py-3 rounded-xl text-sm

          bg-white text-gray-800
          border border-gray-300

          dark:bg-[#020617] dark:text-white
          dark:border-white/10

          focus:outline-none
          focus:ring-2 focus:ring-emerald-400/50

          hover:border-emerald-400
          transition
        "
      >
        <option value="" disabled>
          Select category
        </option>
        <option value="frontend">Frontend</option>
        <option value="fullstack">Full Stack</option>
      </select>

      {/* FILE */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <FaImage />
        </div>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="
          w-full px-4 py-2 pl-10 rounded-xl text-sm

          bg-white border border-gray-300
          dark:bg-[#020617] dark:border-white/10 dark:text-white

          file:mr-4 file:py-2 file:px-4
          file:rounded-lg file:border-0
          file:font-semibold

          file:bg-gradient-to-r file:from-blue-400 file:to-emerald-400
          file:text-[#020617]

          hover:file:scale-105
          file:transition
        "
        />
      </div>

      {/* BUTTON */}
      <button
        onClick={handleSubmit}
        disabled={loading || !form.title || !form.description}
        className="
          flex items-center justify-center gap-2
          py-3 rounded-xl font-semibold

          bg-gradient-to-r from-blue-500 to-emerald-500
          text-white

          hover:scale-[1.03] hover:shadow-lg
          transition

          disabled:opacity-50
        "
      >
        {loading ? (
          "Saving..."
        ) : selected ? (
          <>
            <FaSave /> Update
          </>
        ) : (
          <>
            <FaPlus /> Add
          </>
        )}
      </button>
    </div>
  );
}
