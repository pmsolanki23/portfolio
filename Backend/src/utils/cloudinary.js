import { v2 as cloudinary } from "cloudinary";

export const deleteFromCloudinary = async (imageUrl) => {
  try {
    if (!imageUrl) return;

    // 🔥 extract public_id properly
    const parts = imageUrl.split("/");
    const fileName = parts.pop(); // abc123.png
    const publicId = fileName.split(".")[0];

    const folder = "projects"; // same as upload

    await cloudinary.uploader.destroy(`${folder}/${publicId}`);

    console.log("✅ Cloudinary image deleted");

  } catch (err) {
    console.log("❌ Cloudinary delete error:", err.message);
  }
};