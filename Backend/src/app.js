import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import cron from "node-cron";
import { autoDeleteContacts } from "./controllers/contact.controller.js";
import projectRoutes from "./routes/project.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import authRoutes from "./routes/auth.routes.js"
import reviewRoutes from "./routes/review.routes.js"
const app = express();

// 🔥 FIX __dirnamea
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
 
// 🔥 MIDDLEWARE
app.use(cors({
    origin: "https://portfolio-five-phi-tcfc4kibkx.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true

}));
app.options("*", cors());
app.use(express.json());
// ⏰ Run every day at 12:00 AM
cron.schedule("0 0 * * *", () => {
  autoDeleteContacts();
});
// 🔥 STATIC FILES (UPLOADS)
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// 🔥 ROUTES
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth",authRoutes)
app.use("/api/reviews", reviewRoutes);

app.use((err, req, res, next) => {
  console.error("🔥 GLOBAL ERROR:", err);

  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

// 🔥 TEST ROUTE
app.get("/", (req, res) => {
  res.send("API Running ");
});

export default app;