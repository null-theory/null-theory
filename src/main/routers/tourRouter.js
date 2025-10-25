import express from "express";
import { TourController } from "../controllers/tourController.js";

const router = express.Router();

// 🔐 Защищаем создание, обновление и удаление
router.post("/", TourController.create);
router.get("/", TourController.getAll);
router.get("/:id", TourController.getById);
router.put("/:id", TourController.update);
router.delete("/:id", TourController.remove);

export default router;