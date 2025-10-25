import express from "express";
import { TourController } from "../controllers/tourController.js";

const router = express.Router();

// 🔐 Защищаем создание, обновление и удаление
router.post("/tour", TourController.create);
router.get("/tours", TourController.getAll);
router.get("/tour/:id", TourController.getById);
router.put("/tour/:id", TourController.update);
router.delete("/tour/:id", TourController.remove);

export default router;