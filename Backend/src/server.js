import "./config/env.js"
import app from "./app.js";
import { connectDB } from "./config/db.js";

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("CLOUD NAME 👉", process.env.CLOUDINARY_CLOUD_NAME);
  console.log("CLOUD 👉", process.env.CLOUDINARY_CLOUD_NAME);
console.log("KEY 👉", process.env.CLOUDINARY_API_KEY);
console.log("SECRET 👉", process.env.CLOUDINARY_API_SECRET);
});