import {Router} from 'express';
import UserController from '../controllers/UserController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const routerUser = Router();
routerUser.post('/user', UserController.createUser);
routerUser.get('/user/:id',authMiddleware, UserController.getUserById);
routerUser.put('/user/:id',authMiddleware, UserController.updateUser);
routerUser.delete('/user/:id',authMiddleware, UserController.deleteUser);
routerUser.get('/user',authMiddleware, UserController.getUsers);

export default routerUser;