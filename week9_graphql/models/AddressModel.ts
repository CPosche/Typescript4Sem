import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: [true, "Please provide a street"],
        trim: true,
        maxLength: [40, "Street cannot be more than 40 characters"],
        minLength: [2, "Street cannot be less than 2 characters"],
    },
    city: {
        type: String,
        required: [true, "Please provide a city"],
        trim: true,
        maxLength: [40, "City cannot be more than 40 characters"],
        minLength: [2, "City cannot be less than 2 characters"],
    },
});

const AddressModel = mongoose.model("Address", AddressSchema);

export default AddressModel;