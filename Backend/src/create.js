import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const createAdmin = async () => {
  try {
    const hashedPassword = await bcrypt.hash("Pruvya@2310", 10);

    await Admin.create({
      email: "privateuses456@gmail.com",
      password: hashedPassword,
    });

    console.log("Admin created ✅");

    process.exit(); // exit after done
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();