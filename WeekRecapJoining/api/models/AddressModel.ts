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

// addressSchema.pre("find", function () {
//   this.populate({
//     path: 'persons',
//     options: { maxDepth: 1 }
//   });
// });

// addressSchema.pre("save", function () {
//   if (this.isNew || this.isModified("persons")) {
//     // If this is a new address or the persons field has been modified
//     // then update the corresponding persons' address field
//     const personsToUpdate = this.persons;
//     if (personsToUpdate && personsToUpdate.length > 0) {
//       PersonModel.updateMany(
//         { _id: { $in: personsToUpdate } },
//         { $set: { address: this._id } }
//       );
//     }
//   }
// });

// make a virtual field for persons that references the PersonModel
addressSchema.virtual("persons", {
  ref: "Person",
  localField: "_id",
  foreignField: "address",
  justOne: false,
});


const AddressModel = mongoose.model("Address", addressSchema);

export default AddressModel;
