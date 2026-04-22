// // import Project from "../models/Project.js";

// // export const createProject = async (req, res) => {
// //   try {
// //     const { title, description, tech, github, live } = req.body;

// //     const project = await Project.create({
// //       title,
// //       description,
// //       tech: Array.isArray(tech)
// //         ? tech
// //         : tech
// //         ? tech.split(",")
// //         : [],
// //       github,
// //       live,
// //       image: req.file ? `/uploads/${req.file.filename}` : "",
// //     });

// //     res.json(project);
// //   } catch (error) {
// //     res.status(500).json({ message: "Error creating project" });
// //   }
// // };

// // export const updateProject = async (req, res) => {
// //   try {
// //     const { title, description, tech, github, live } = req.body;

// //     const updatedData = {
// //       title,
// //       description,
// //       tech: Array.isArray(tech)
// //         ? tech
// //         : tech
// //         ? tech.split(",")
// //         : [],
// //       github,
// //       live,
// //     };

// //     if (req.file) {
// //       updatedData.image = `/uploads/${req.file.filename}`;
// //     }

// //     const project = await Project.findByIdAndUpdate(
// //       req.params.id,
// //       updatedData,
// //       { new: true }
// //     );

// //     res.json(project);
// //   } catch (error) {
// //     res.status(500).json({ message: "Update error" });
// //   }
// // };

// // export const deleteProject = async (req, res) => {
// //   await Project.findByIdAndDelete(req.params.id);
// //   res.json({ success: true });
// // };  

// // export const getProjects = async (req, res) => {
// //   try {
// //     const projects = await Project.find();
// //     res.json(projects);
// //   } catch (error) {
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // };



// import Project from "../models/Project.js";
// import Contact from "../models/Contact.js";

// // 🔥 CREATE
// export const createProject = async (req, res) => {
//   try {
//     const { title, description, tech, github, live, category,clientId } = req.body;

//     const project = await Project.create({
//       title,
//       description,
//       tech: Array.isArray(tech)
//         ? tech
//         : tech
//         ? tech.split(",")
//         : [],
//       github,
//       live,
//       category: category || "frontend",
      
//       image: req.file ? `/uploads/${req.file.filename}` : "",
//       clientId,
//     });

//     res.json(project);
//   } catch {
//     res.status(500).json({ message: "Error creating project" });
//   }
// };

// // 🔥 UPDATE
// export const updateProject = async (req, res) => {
//   try {
//     const { title, description, tech, github, live, category } = req.body;

//     const updatedData = {
//       title,
//       description,
//       tech: Array.isArray(tech)
//         ? tech
//         : tech
//         ? tech.split(",")
//         : [],
//       github,
//       live,
//       category: category || "frontend",
//     };

//     if (req.file) {
//       updatedData.image = `/uploads/${req.file.filename}`;
//     }

//     const project = await Project.findByIdAndUpdate(
//       req.params.id,
//       updatedData,
//       { new: true }
//     );

//     res.json(project);
//   } catch {
//     res.status(500).json({ message: "Update error" });
//   }
// };

// // 🔥 DELETE
// export const deleteProject = async (req, res) => {
//   try {
//     const project = await Project.findByIdAndDelete(req.params.id); // 🔥 FIX

//     if (project?.clientId) {
//       await Contact.findByIdAndUpdate(project.clientId, {
//         approved: false,
//       });
//     }

//     res.json({ success: true });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Delete error" });
//   }
// };
// // 🔥 GET
// export const getProjects = async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.json(projects);
//   } catch {
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// export const deleteProjectByClient = async (req, res) => {
//   try {
//     const { clientId } = req.params;

//     const project = await Project.findOneAndDelete({ clientId });

//     if (project) {
//       await Contact.findByIdAndUpdate(clientId, {
//         approved: false,
//       });
//     }

//     res.json({ success: true });

//   } catch {
//     res.status(500).json({ message: "Error" });
//   }
// };


// import Project from "../models/Project.js";
// import Contact from "../models/Contact.js";


// // 🔥 CREATE
// export const createProject = async (req, res) => {

//     const { title, description, tech, github, live, category, clientId } = req.body;

//     const project = await Project.create({
//       title,
//       description,
//       tech: tech ? tech.split(",") : [], // 🔥 FIX SAFE
//       github,
//       live,
//       category: category || "frontend",
//       image: req.file?.path || "", // safe
//       clientId: clientId || null,
//     });

//     res.json(project);

 
// };

// // 🔥 UPDATE
// export const updateProject = async (req, res) => {
//   try {

//     const { title, description, tech, github, live, category } = req.body;

//     const updatedData = {
//       title,
//       description,
//       tech: tech ? tech.split(",") : [],
//       github,
//       live,
//       category: category || "frontend",
//     };

//     // 🔥 only update image if new one exists
//     if (req.file && req.file.path) {
//       updatedData.image = req.file.path;
//     }

//     const project = await Project.findByIdAndUpdate(
//       req.params.id,
//       updatedData,
//       { returnDocument: "after" }
//     );

//     res.json(project);

//   } catch (err) {
//     console.error("UPDATE ERROR 👉", err.message);
//     console.dir(err, { depth: null });

//     res.status(500).json({
//       message: err.message || "Update error",
//     });
//   }
// };

// // 🔥 DELETE
// export const deleteProject = async (req, res) => {
//   try {
//     const project = await Project.findByIdAndDelete(req.params.id);

//     if (project?.clientId) {
//       await Contact.findByIdAndUpdate(project.clientId, {
//         approved: false,
//       });
//     }

//     res.json({ success: true });

//   } catch (err) {
//     console.error("DELETE ERROR 👉", err);
//     res.status(500).json({ message: "Delete error" });
//   }
// };

// // 🔥 GET
// export const getProjects = async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.json(projects);
//   } catch (err) {
//     console.error("GET ERROR 👉", err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // 🔥 DELETE BY CLIENT
// export const deleteProjectByClient = async (req, res) => {
//   try {
//     const { clientId } = req.params;

//     const project = await Project.findOneAndDelete({ clientId });

//     if (project) {
//       await Contact.findByIdAndUpdate(clientId, {
//         approved: false,
//       });
//     }

//     res.json({ success: true });

//   } catch (err) {
//     console.error("DELETE BY CLIENT ERROR 👉", err);
//     res.status(500).json({ message: "Error" });
//   }
// };

import Project from "../models/Project.js";
import Contact from "../models/Contact.js";
import { deleteFromCloudinary } from "../utils/cloudinary.js";

// 🔥 CREATE
export const createProject = async (req, res) => {
  const { title, description, tech, github, live, category, clientId } = req.body;

  const project = await Project.create({
    title,
    description,
    tech: tech ? tech.split(",") : [],
    github,
    live,
    category: category || "frontend",
    image: req.file?.path || "",
    clientId: clientId || null,
  });

  res.json(project);
};

// 🔥 UPDATE
export const updateProject = async (req, res) => {
  try {
    const { title, description, tech, github, live, category } = req.body;

    const updatedData = {
      title,
      description,
      tech: tech ? tech.split(",") : [],
      github,
      live,
      category: category || "frontend",
    };

    // 🔥 image replace + delete old
    if (req.file?.path) {
      const old = await Project.findById(req.params.id);
      if (old?.image) {
        await deleteFromCloudinary(old.image);
      }
      updatedData.image = req.file.path;
    }

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { returnDocument: "after" }
    );

    res.json(project);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Update error" });
  }
};

// 🔥 SOFT DELETE
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    // 🔥 DELETE IMAGE FROM CLOUDINARY
    if (project?.image) {
      await deleteFromCloudinary(project.image);
    }

    // 🔥 SOFT DELETE
    await Project.findByIdAndUpdate(req.params.id, {
      isDeleted: true,
    });

    res.json({ success: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Delete error" });
  }
};

// 🔥 HARD DELETE (optional)
export const permanentDelete = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (project?.image) {
      await deleteFromCloudinary(project.image);
    }

    await Project.findByIdAndDelete(req.params.id);

    res.json({ success: true });

  } catch {
    res.status(500).json({ message: "Error" });
  }
};

// 🔥 GET (exclude deleted)
export const getProjects = async (req, res) => {
  const projects = await Project.find({ isDeleted: false });
  res.json(projects);
};

// 🔥 TRASH
export const getTrash = async (req, res) => {
  const projects = await Project.find({ isDeleted: true });
  res.json(projects);
};

// 🔥 RESTORE
export const restoreProject = async (req, res) => {
  await Project.findByIdAndUpdate(req.params.id, {
    isDeleted: false,
  });
  res.json({ success: true });
};

// 🔥 STATUS UPDATE
export const updateStatus = async (req, res) => {
  const { status } = req.body;

  const project = await Project.findByIdAndUpdate(
    req.params.id,
    { status },
    { returnDocument: "after" }
  );

  res.json(project);
};