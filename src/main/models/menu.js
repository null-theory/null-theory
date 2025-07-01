import mongoose from "mongoose";

const menu = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    preparationTime: {type: Number, required: true},
    available: {type: Boolean, required: true},
    popular: {type: Boolean, required: true}
})
export default mongoose.model('Menu', menu);