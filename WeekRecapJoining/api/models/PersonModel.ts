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

// personSchema.pre("save", function () {
//   if (this.isNew || this.isModified("address")) {
//     // If this is a new person or the address field has been modified
//     // then update the corresponding address' persons field
//     const addressToUpdate = this.address;
//     if (addressToUpdate) {
//       AddressModel.findByIdAndUpdate(addressToUpdate, {
//         $addToSet: { persons: this._id },
//       });
//     }
//   }
// });

const PersonModel = mongoose.model("Person", personSchema);

export default PersonModel;