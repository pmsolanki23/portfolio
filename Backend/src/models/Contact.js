import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    projectType: String,
    message: String,
    expiresAt: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["lead", "ongoing", "completed"],
      default: "lead",
    },

    approved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Contact", contactSchema);