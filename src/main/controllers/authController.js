// controllers/authController.js
import authService from '../services/authService.js';

class AuthController {
    async register(req, res) {
        const { email, password, roleId, restaurantId } = req.body;
        try {
            const result = await authService.register(email, password, roleId, restaurantId);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async login(req, res) {
        const { idToken } = req.body; // получаем от клиента
        try {
            const userData = await authService.login(idToken);
            res.status(200).json(userData);
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }
}

export default new AuthController();