const PostService = require('../services/PostService');

class PostController {
  static async createPost(req, res) {
    try {
      const { title, content } = req.body;
      const userId = req.user.id;
      const post = await PostService.createPost(title, content, userId);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getPosts(req, res) {
    try {
      const posts = await PostService.getPosts();
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getPostById(req, res) {
    try {
      const { id } = req.params;
      const post = await PostService.getPostById(id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updatePost(req, res) {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
      const post = await PostService.updatePost(id, title, content);
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deletePost(req, res) {
    try {
      const { id } = req.params;
      await PostService.deletePost(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = PostController;
