import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },

}, {timestamps: true})

export default mongoose?.models?.Contact || mongoose.model("Contact", ContactSchema)