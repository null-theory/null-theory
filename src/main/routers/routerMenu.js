import {Router} from 'express';
import menuController from "../controllers/MenuController.js";

const routerMenu = Router();

routerMenu.get("/menu", menuController.listMenu);
routerMenu.get("/menu/:id", menuController.getFoodById);
routerMenu.delete("/menu/:id", menuController.deleteFood);
routerMenu.post("/menu", menuController.createFood);
routerMenu.put("/menu/:id", menuController.updateFood);

export default routerMenu;