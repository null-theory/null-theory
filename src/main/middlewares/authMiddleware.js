import authMiddleware from "../middleware/authMiddleware.js";

router.put('/user/:id', authMiddleware, async (req, res) => {
    // только авторизованный пользователь может изменить
    const { id } = req.params;
    const { username, role } = req.body;

    // можно добавить проверку: может ли этот пользователь менять других
    if (req.user.role !== 'admin' && req.user.id !== id) {
        return res.status(403).json({ message: "Forbidden: insufficient rights" });
    }

    await updateUser(id, { username, role });
    res.status(200).json({ message: "User updated" });
});