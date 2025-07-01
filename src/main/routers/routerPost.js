import { Router } from "express";
import PostController from "../controllers/PostController.js";

const routerPost = Router();

// CREATE a new post
routerPost.post("/post", PostController.create);

// READ all posts
routerPost.get("/post", PostController.getPosts);

// READ a single post by ID
routerPost.get("/post/:id", PostController.getPostById);

// UPDATE a post by ID
routerPost.put("/post/:id", PostController.update);

// DELETE a post by ID
routerPost.delete("/post/:id", PostController.delete);

export default routerPost;
