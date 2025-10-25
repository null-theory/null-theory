// controllers/userController.js
import {
    createUser,
    getUser,
    updateUser,
    deleteUser,
} from "../services/userService.js";

export async function handleCreateUser(req, res) {
    try {
        const userId = await createUser(req.body);
        res.status(201).json({ userId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function handleGetUser(req, res) {
    try {
        const user = await getUser(req.params.id);
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function handleUpdateUser(req, res) {
    try {
        await updateUser(req.params.id, req.body);
        res.json({ message: "User updated" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function handleDeleteUser(req, res) {
    try {
        await deleteUser(req.params.id);
        res.json({ message: "User deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}