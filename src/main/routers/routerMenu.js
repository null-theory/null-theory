import {Router} from 'express';
import menuController from "../controllers/MenuController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const routerMenu = Router();

routerMenu.get("/menu", menuController.listMenu);
routerMenu.get("/menu/:id", menuController.getFoodById);
routerMenu.delete("/menu/:id",authMiddleware, menuController.deleteFood);
routerMenu.post("/menu",authMiddleware, menuController.createFood);
routerMenu.put("/menu/:id",authMiddleware, menuController.updateFood);

export default routerMenu;