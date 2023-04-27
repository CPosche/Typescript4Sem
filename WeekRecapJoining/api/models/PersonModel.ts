import mongoose from "mongoose";
import AddressModel from "./AddressModel";

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    max: 120,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: mongoose.Types.ObjectId,
    ref: "Address",
  },
  createdAt: {
    type: Date,
    default: new Date(),
    select: false,
  },
  updatedAt: {
    type: Date,
    default: new Date(),
    select: false,
  },
});

personSchema.pre("find", function () {
  this.populate("address");
});

personSchema.pre("save", async function () {
  await this.populate("address");
});


const PersonModel = mongoose.model("Person", personSchema);

export default PersonModel;
