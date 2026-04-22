import express from "express";
import upload from "../middleware/upload.js";
import {
  createProject,
  deleteProject,
  // deleteProjectByClient,
  getProjects,
  getTrash,
  permanentDelete,
  restoreProject,
  updateProject,
  updateStatus,
} from "../controllers/project.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getProjects);
router.get("/trash", protect, getTrash);

router.post("/",protect, upload.single("image"), createProject);
router.put("/:id",protect, upload.single("image"), updateProject);

router.put("/:id/status", protect, updateStatus);

// router.delete("/by-client/:clientId", protect, deleteProjectByClient); // 🔥 FIRST
router.delete("/:id", protect, deleteProject);
router.delete("/:id/permanent", protect, permanentDelete);

router.put("/:id/restore", protect, restoreProject);


export default router;