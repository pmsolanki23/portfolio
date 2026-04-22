// import multer from "multer";
// import path from "path";

// // 📁 storage config
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// // 🎯 file filter
// const fileFilter = (req, file, cb) => {
//   const allowed = ["image/jpeg", "image/png", "image/jpg"];

//   if (allowed.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only images allowed"), false);
//   }
// };

// const upload = multer({ storage, fileFilter });

// export default upload;



// import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import { v2 as cloudinary } from "cloudinary";

// // 🔥 CLOUDINARY CONFIG
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // 🔥 STORAGE (CLOUDINARY)
// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "projects", // 📁 folder in cloudinary
//     allowed_formats: ["jpg", "png", "jpeg"],
//     transformation: [{ width: 800, crop: "scale" }], // optional resize
//   },
// });

// // 🎯 FILE FILTER (same as before)
// const fileFilter = (req, file, cb) => {
//   const allowed = ["image/jpeg", "image/png", "image/jpg"];

//   if (allowed.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only images allowed"), false);
//   }
// };

// // 🔥 MULTER INSTANCE
// const upload = multer({ storage, fileFilter });

// export default upload;


import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

// 🔥 CONFIG
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 🔥 FIXED STORAGE
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: "projects",
      resource_type: "image",
      public_id: Date.now() + "-" + file.originalname,
    };
  },
});

// 🔥 UPLOAD
const upload = multer({ storage });

export default upload;