// import mongoose from "mongoose";

// const projectSchema = new mongoose.Schema(
//   {
//     title: String,
//     description: String,
//     tech: [String],
//     github: String,
//     live: String,
//     image: String,
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Project", projectSchema);

import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    tech: [String],
    github: String,
    live: String,
    image: String,
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contact",
    },

    category: {
      type: String,
      enum: ["frontend", "fullstack"],
      default: "frontend",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);