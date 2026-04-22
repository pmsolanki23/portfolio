// models/About.js
import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  name: String,
  bio: String,
  image: String,
  experience: String,
});

export default mongoose.model("About", aboutSchema);