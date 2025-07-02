import UserService from '../services/UserService.js';

class UserController {
    async getUsers(req, res) {
        try {
            const user = await UserService.getUsers();
            res.status(200).json(user);
        }catch (error) {
            return res.status(500).send({})
        }
    }
    async getUserById(req, res) {
        try {
            const user = await UserService.getUserById(req.params.id);
            res.status(200).json(user);
        }catch (error) {
            return res.status(500).send({})
        }
    }
    async createUser(req, res) {
        try {
            const user = await UserService.createUser(req.body);
            res.status(200).json(user);
        }catch (error) {
            return res.status(500).send({})
        }
    }
    async updateUser(req, res) {
        try {
            const user = await UserService.updateUser(req.params.id, req.body);
            res.status(200).json(user);
        }catch (error) {
            return res.status(500).send({})
        }
    }
    async deleteUser(req, res) {
        try {
            const user = await UserService.deleteUser(req.params.id);
            res.status(200).json(user);
        }catch (error) {
            return res.status(500).send({})
        }
    }
}

export default new UserController();