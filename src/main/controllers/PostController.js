import PostService from "../services/PostService.js";

class PostController{
    async create(req, res){
        try {
            const post = await PostService.create(req.body);
            res.status(201).json(post);
        } catch (err) {
            res.status(500).json({ error: 'Failed to create post', details: err.message });
        }
    }
    async update(req, res){
        try {
            const post = await PostService.updatePost(req.params.id ,req.body);
            res.json(post);
        } catch (err) {
            res.status(500).json({ error: 'Failed to update post', details: err.message });
        }
    }
    async delete(req, res) {
        try {
            const post = await PostService.deletePost(req.params.id);
            res.json({ message: 'Post deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: 'Failed to delete post', details: err.message });
        }
    }
    async getPosts(req, res) {
        try {
            const posts = await PostService.getAllPosts();
            res.json(posts);
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch posts', details: err.message });
        }
    }
    async getPostById(req, res) {
        try {
            const post = await PostService.getById(req.params.id);
            res.json(post);
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch post', details: err.message });
        }
    }
}
export default new PostController();