import mongoose from "mongoose";
import PersonModel from "./PersonModel";

const addressSchema = new mongoose.Schema(
  {
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
    persons: {
      type: [mongoose.Types.ObjectId],
      ref: "Person",
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
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

addressSchema.pre("find", function () {
  this.populate("persons");
});

addressSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("persons")) {
    // If this is a new address or the persons field has been modified
    // then update the corresponding persons' address field
    const personsToUpdate = this.persons;
    if (personsToUpdate && personsToUpdate.length > 0) {
      await PersonModel.updateMany(
        { _id: { $in: personsToUpdate } },
        { $set: { address: this._id } }
      );
    } else {
      next();
    }
  } else {
    next();
  }
  await this.populate("persons");
});

const AddressModel = mongoose.model("Address", addressSchema);

export default AddressModel;
