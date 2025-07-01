import Post from "../models/post.js";

class PostService{
    async create(post){
        const createdPost = await Post.create(post);
        return createdPost;
    }
    async updatePost(id, postData){
            const { author, title, content, picture } = postData;
            const updatedPost = await Post.findByIdAndUpdate(
                id,
                { author, title, content, picture },
                { new: true, runValidators: true }
            );
            if (!updatedPost) {
                throw new Error('Post not found');
            }
            return updatedPost;
    }
    async deletePost(id) {
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
            throw new Error('Post not found');
        }
        return post;
    }
    async getAllPosts() {
        const posts = await Post.find();
        return posts;
    }
    async getById(id) {
        const post = await Post.findById(id);
        if (!post) {
            throw new Error('Post not found');
        }
        return post;
    }
}

export default new PostService();