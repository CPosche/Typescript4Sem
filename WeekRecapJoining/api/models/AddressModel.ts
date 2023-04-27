import mongoose from "mongoose";
import PersonModel from "./PersonModel";

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
});

// addressSchema.pre("find", function () {
//   // only populate the persons field if the query is not a populate query
//   if (!this._mongooseOptions.populate) {
//     this.populate("persons");
//   }
// });

addressSchema.pre("save", async function () {
  if (this.isNew || this.isModified("persons")) {
    // If this is a new address or the persons field has been modified
    // then update the corresponding persons' address field
    const personsToUpdate = this.persons;
    if (personsToUpdate && personsToUpdate.length > 0) {
      await PersonModel.updateMany(
        { _id: { $in: personsToUpdate } },
        { $set: { address: this._id } }
      );
    }
  }
  await this.populate("persons");
});

const AddressModel = mongoose.model("Address", addressSchema);

export default AddressModel;
