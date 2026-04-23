import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import cron from "node-cron";
import { autoDeleteContacts } from "./controllers/contact.controller.js";
import projectRoutes from "./routes/project.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import authRoutes from "./routes/auth.routes.js";
import reviewRoutes from "./routes/review.routes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allowedOrigins = new Set(
  [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://portfolio-rhzr.onrender.com",
    process.env.FRONTEND_URL,
    ...(process.env.FRONTEND_URLS || "")
      .split(",")
      .map((origin) => origin.trim())
      .filter(Boolean),
  ].filter(Boolean),
);

const corsOptions = {
  origin(origin, callback) {
    if (!origin) {
      return callback(null, true);
    }

    const isAllowedVercelPreview =
      /^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(origin);

    if (allowedOrigins.has(origin) || isAllowedVercelPreview) {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));
app.use(express.json());

cron.schedule("0 0 * * *", () => {
  autoDeleteContacts();
});

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.get("/api/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/reviews", reviewRoutes);

app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);

  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

app.get("/", (req, res) => {
  res.send("API Running");
});

export default app;
