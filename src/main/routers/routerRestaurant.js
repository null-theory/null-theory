import {Router} from "express";
import RestaurantController from "../controllers/RestaurantController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const routerRestaurant = new Router();
routerRestaurant.get("/restaurant", RestaurantController.getAllRestaurants);
routerRestaurant.post("/restaurant",authMiddleware,RestaurantController.createRestaurant);
routerRestaurant.put("/restaurant/:id",authMiddleware, RestaurantController.updateRestaurant);
routerRestaurant.delete("/restaurant/:id",authMiddleware, RestaurantController.deleteRestaurant);
routerRestaurant.get("/restaurant/:id", RestaurantController.getRestaurant);

export default routerRestaurant;