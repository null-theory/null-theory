import mongoose from "mongoose";

const Restaurant = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    isActive: {type: Boolean, required: true},
    createdAt: { type: Date, default: Date.now }
})
export default mongoose.model('Restaurant', Restaurant);