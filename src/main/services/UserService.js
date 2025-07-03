import User from '../models/user.js';
import bcrypt from "bcrypt";

class UserService {
    async getUsers() {
        const users = await User.find();
        return users;
    }
    async getUserById(id) {
        const user = await User.findById(id);
        if (!user) {
            throw new Error("user not found");
        }
        return user;
    }
    async createUser(userData) {
        const { username, password, roleId, restaurantId } = userData;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            password: hashedPassword,
            roleId,
            restaurantId
        });
        if (!user) {
            throw new Error("something went wrong");
        }
        return user;
    }
    async deleteUser(id) {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            throw new Error("user not found");
        }
        return {'message': 'user deleted successfully'};
    }
    async updateUser(id, userData) {
        const { username, roleId, restaurantId, password } = userData;
        let updateData = { username, roleId, restaurantId };
        if (password) {
            updateData.password = await bcrypt.hash(password, 10);
        }
        const user = await User.findByIdAndUpdate(id, updateData, { new: true });
        if (!user) {
            throw new Error("something went wrong");
        }
        return user;
    }

}
export default new UserService();