import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";

export const ensureAdmin = async () => {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD?.trim();

  if (!email || !password) {
    console.warn("ADMIN_EMAIL and ADMIN_PASSWORD are not set; skipping admin bootstrap");
    return;
  }

  const existing = await Admin.findOne({ email });

  if (existing) {
    // 🔥 Verify stored password still matches — if not, re-hash and update
    const isMatch = await bcrypt.compare(password, existing.password);
    if (!isMatch) {
      const hashedPassword = await bcrypt.hash(password, 12);
      await Admin.findOneAndUpdate({ email }, { password: hashedPassword });
      console.log("Admin password updated");
    } else {
      console.log("Admin account is ready");
    }
    return;
  }

  // 🔥 Create fresh admin
  const hashedPassword = await bcrypt.hash(password, 12);
  await Admin.create({ email, password: hashedPassword });
  console.log("Admin account created");
};
