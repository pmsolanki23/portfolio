import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: String,
    rating: Number,
    text: String,

    status: {
      type: String,
      enum: ["pending", "approved", "withdrawn"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);