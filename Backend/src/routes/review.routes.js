import express from "express";
import {
  createReview,
  getAllReviews,
  getApprovedReviews,
  updateReviewStatus,
  deleteReview,
} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", createReview);
router.get("/", getAllReviews); // admin
router.get("/approved", getApprovedReviews);

router.put("/:id", updateReviewStatus);
router.delete("/:id", deleteReview);

export default router;