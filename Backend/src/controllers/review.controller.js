import Review from "../models/Review.js";

// 🔥 CREATE (DEFAULT = pending)
export const createReview = async (req, res) => {
  try {
    const { name, rating, text } = req.body;

    const review = await Review.create({
      name,
      rating,
      text,
      status: "pending", // ✅ IMPORTANT
    });

    res.json(review);
  } catch (err) {
    res.status(500).json({ message: "Failed to create review" });
  }
};

// 🔥 GET ALL (ADMIN)
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
};

// 🔥 GET APPROVED (PUBLIC)
export const getApprovedReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ status: "approved" }).sort({
      createdAt: -1,
    });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch approved reviews" });
  }
};

// 🔥 UPDATE STATUS (APPROVE / WITHDRAW)
export const updateReviewStatus = async (req, res) => {
  try {
    const { status } = req.body;

    // ✅ VALIDATION
    if (!["approved", "pending"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { status },
      { returnDocument: "after" }
    );

    res.json(review);
  } catch (err) {
    res.status(500).json({ message: "Failed to update review" });
  }
};

// 🔥 DELETE
export const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete review" });
  }
};