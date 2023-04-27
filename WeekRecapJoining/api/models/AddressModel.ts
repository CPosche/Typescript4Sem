import mongoose, { VirtualType } from "mongoose";

const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: Number,
    required: true,
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
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

addressSchema.virtual("persons", {
  ref: "Person",
  localField: "_id",
  foreignField: "address",
  justOne: false,
});


const AddressModel = mongoose.model("Address", addressSchema);

export default AddressModel;
