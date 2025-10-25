// routers/userRoutes.js
import express from "express";
import {
    handleCreateUser,
    handleGetUser,
    handleUpdateUser,
    handleDeleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/user", handleCreateUser);
router.get("/user/:id", handleGetUser);
router.put("/user/:id", handleUpdateUser);
router.delete("/user/:id", handleDeleteUser);

export default router;