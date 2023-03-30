import mongoose from "mongoose";
import Review from "./ReviewModel";

const carSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: [true, "A car must have a model"],
      trim: true,
      maxlength: [40, "A car model must have less or equal than 40 characters"],
      minlength: [2, "A car model must have more or equal than 2 characters"],
    },
    year: {
      type: Number,
      required: [true, "A car must have a year"],
    },
    price: {
      type: Number,
      required: [true, "A car must have a price"],
      min: [0, "A car price must be greater than 0"],
    },
    color: {
      type: String,
      required: [true, "A car must have a color"],
      trim: true,
      enum: {
        values: ["red", "blue", "green", "black", "yellow", "white"],
        message: "Color is either: red, blue, green, black, yellow, white",
      },
      maxlength: [40, "A car color must have less or equal than 40 characters"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    // reviews: Array,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// carSchema.pre("save", async function (next) {
//   const reviewPromises = this.reviews.map((id) => Review.findById(id));
//   this.reviews = await Promise.all(reviewPromises);
//   next();
// });

carSchema.virtual("discount").get(function () {
  return this.price * 0.25;
});

const Car = mongoose.model("Car", carSchema);
export default Car;
