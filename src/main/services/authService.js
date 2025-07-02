import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthService {
    async login(username, password) {
        // найти пользователя
        const user = await User.findOne({ username });
        if (!user) {
            throw new Error('User not found');
        }

        // сравнить пароли
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid password');
        }

        // создать JWT токен
        const token = jwt.sign(
            { id: user._id, roleId: user.roleId },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return { token }; // возвращаем объект с token
    }

    async register(username, password, roleId, restaurantId) {
        // проверить есть ли пользователь
        const candidate = await User.findOne({ username });
        if (candidate) {
            throw new Error('User already exists');
        }

        // хешируем пароль
        const hashedPassword = await bcrypt.hash(password, 10);

        // создаем пользователя
        const user = await User.create({
            username,
            password: hashedPassword,
            roleId,
            restaurantId
        });

        // сразу выдаем токен после регистрации
        const token = jwt.sign(
            { id: user._id, roleId: user.roleId },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return { user, token }; // возвращаем и user, и token
    }
}

export default new AuthService();
