// routers/userRoutes.js
import express from "express";
import { UserController } from "../controllers/userController.js";

const router = express.Router();

router.post("/user", UserController.create);
router.get("/user", UserController.getAll);
router.get("/user/:id", UserController.getById);
router.put("/user/:id", UserController.update);
router.delete("/user/:id", UserController.remove);

export default router;