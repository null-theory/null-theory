import mongoose from "mongoose";

const User = new mongoose.Schema({
    username: {type: String, required: true},
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    }
})
export default mongoose.model('User', User);