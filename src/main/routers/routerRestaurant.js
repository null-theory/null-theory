import {Router} from "express";
import RestaurantController from "../controllers/RestaurantController.js";

const routerRestaurant = new Router();
routerRestaurant.get("/restaurant", RestaurantController.getAllRestaurants);
routerRestaurant.post("/restaurant",RestaurantController.createRestaurant);
routerRestaurant.put("/restaurant/:id", RestaurantController.updateRestaurant);
routerRestaurant.delete("/restaurant/:id", RestaurantController.deleteRestaurant);
routerRestaurant.get("/restaurant/:id", RestaurantController.getRestaurant);

export default routerRestaurant;