import {Router} from 'express';
import RoleController from '../controllers/RoleController.js';

const routerRole = Router();

routerRole.get("/role", RoleController.getAllRoles)
routerRole.get("/role/:id", RoleController.getRoleById)
routerRole.post("/role", RoleController.createRole)
routerRole.put("/role/:id", RoleController.updateRole)
routerRole.delete("/role/:id", RoleController.deleteRole)

export default routerRole;