import authService from '../services/authService.js';

class AuthController {
    async login(req, res, next) {
        try {
            const { username, password } = req.body;
            const token = await authService.login(username, password);
            res.json({ token });
        } catch (e) {
            next(e);
        }
    }

    async register(req, res, next) {
        try {
            const { username, password, roleId, restaurantId } = req.body;
            const user = await authService.register(username, password, roleId, restaurantId);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }
}

export default new AuthController();
