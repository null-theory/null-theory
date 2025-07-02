import { Router } from "express";
import PostController from "../controllers/PostController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const routerPost = Router();

// CREATE a new post
routerPost.post("/post",authMiddleware, PostController.create);

// READ all posts
routerPost.get("/post", PostController.getPosts);

// READ a single post by ID
routerPost.get("/post/:id", PostController.getPostById);

// UPDATE a post by ID
routerPost.put("/post/:id",authMiddleware, PostController.update);

// DELETE a post by ID
routerPost.delete("/post/:id",authMiddleware, PostController.delete);

export default routerPost;
