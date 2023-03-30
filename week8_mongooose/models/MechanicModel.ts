import mongoose from "mongoose";
import slugify from "slugify";
import * as bcrypt from "bcrypt";

const MechanicSchema = new mongoose.Schema({
  fname: {
    type: String,
    trim: true,
    required: [true, "Please provide a first name"],
  },
  lname: {
    type: String,
    trim: true,
    required: [true, "Please provide a last name"],
  },
  email: {
    type: String,
    validate: {
      validator: function (v: string) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: (props: any) => `${props.value} is not a valid email address!`,
    },
    required: [true, "Please provide an email"],
    unique: true,
    lowercase: true,
  },
  role: {
    type: String,
    enum: ["mechanic", "mechanic-intern", "lead-mechanic"],
    default: "mechanic",
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: [8, "Password must be at least 8 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    select: false,
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    required: [true, "Please provide a car"],
  },
  slug: String,
});

MechanicSchema.pre("save", function (next) {
  this.slug = slugify(this.fname + this.lname, { lower: true });
  next();
});

MechanicSchema.pre(/^find/, function (next) {
  this.populate({
    path: "car",
    select: "-reviews -createdAt -__v",
  });
  next();
});

const MechanicModel = mongoose.model("Mechanic", MechanicSchema);

export default MechanicModel;
