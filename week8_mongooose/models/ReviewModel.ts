import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, "Review can not be empty!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "Rating can not be empty!"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ReviewModel = mongoose.model("Review", reviewSchema);

export default ReviewModel;
