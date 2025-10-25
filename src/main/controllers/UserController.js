// controllers/userController.js
import { UserService } from "../services/userService.js";

export const UserController = {
    async create(req, res) {
        try {
            const userId = await UserService.createUser(req.body);
            res.status(201).json({ userId });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getAll(req, res) {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },


    async getById(req, res) {
        try {
            const user = await UserService.getUser(req.params.id);
            if (!user) return res.status(404).json({ error: "User not found" });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async update(req, res) {
        try {
            await UserService.updateUser(req.params.id, req.body);
            res.status(200).json({ message: "User updated" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async remove(req, res) {
        try {
            await UserService.deleteUser(req.params.id);
            res.status(200).json({ message: "User deleted" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};