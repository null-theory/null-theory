import {Router} from 'express';
import RoleController from '../controllers/RoleController.js';
import authMiddleware from "../middlewares/authMiddleware.js";

const routerRole = Router();

routerRole.get("/role",authMiddleware, RoleController.getAllRoles)
routerRole.get("/role/:id",authMiddleware, RoleController.getRoleById)
routerRole.post("/role",authMiddleware, RoleController.createRole)
routerRole.put("/role/:id",authMiddleware, RoleController.updateRole)
routerRole.delete("/role/:id",authMiddleware, RoleController.deleteRole)

export default routerRole;