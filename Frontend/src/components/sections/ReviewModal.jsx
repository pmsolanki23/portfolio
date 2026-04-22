import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaUser, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import { addReview } from "../../services/api";

export default function ReviewModal({ onClose }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    if (!name.trim() || !rating || !text.trim()) {
      return toast.error("Please fill all fields ⚠️");
    }

    try {
      await addReview({ name, rating, text });

      toast.success("Review submitted for approval ✅");
      onClose();
    } catch {
      toast.error("Failed to submit review");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-xl"
      />

      {/* MODAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="
          relative z-10 w-[92%] max-w-md p-8 rounded-3xl

          bg-white/10 dark:bg-white/5
          backdrop-blur-3xl

          border border-white/20 dark:border-white/10

          shadow-[0_30px_80px_rgba(0,0,0,0.6)]
        "
      >
        {/* 🔥 TOP GLOW */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[320px] h-[160px] bg-gradient-to-r from-blue-400/30 to-emerald-400/30 blur-[110px]" />

        {/* ❌ CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 p-2 rounded-full
            bg-white/10 hover:bg-white/20
            transition
          "
        >
          <FaTimes size={14} />
        </button>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center mb-2">
          Share your <span className="gradient-text">Experience</span>
        </h2>

        <p className="text-center text-gray-400 text-sm mb-6">
          Your feedback helps improve future projects
        </p>

        {/* ⭐ STARS */}
        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={30}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className={`
                cursor-pointer transition duration-200

                ${
                  (hover || rating) >= star
                    ? "text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.9)] scale-110"
                    : "text-gray-500"
                }
              `}
            />
          ))}
        </div>

        {/* NAME */}
        <div className="relative mb-4 group">
          <FaUser className="absolute left-3 top-3 text-gray-400 group-focus-within:text-emerald-400" />

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full pl-10 pr-4 py-3 rounded-xl outline-none

              bg-white/5 border border-white/10
              text-white placeholder-gray-400

              focus:border-emerald-400
              focus:ring-2 focus:ring-emerald-400/30

              transition
            "
          />
        </div>

        {/* REVIEW */}
        <textarea
          rows="4"
          placeholder="Write your experience..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="
            w-full p-4 rounded-xl outline-none

            bg-white/5 border border-white/10
            text-white placeholder-gray-400

            focus:border-emerald-400
            focus:ring-2 focus:ring-emerald-400/30

            transition
            mb-6 resize-none
          "
        />

        {/* SUBMIT */}
        <button
          onClick={handleSubmit}
          className="
            w-full py-3 rounded-xl font-semibold text-black

            bg-gradient-to-r from-blue-400 to-emerald-400

            hover:scale-[1.02]
            hover:shadow-[0_15px_50px_rgba(52,211,153,0.5)]

            transition
          "
        >
          Submit Review →
        </button>
      </motion.div>
    </div>
  );
}
