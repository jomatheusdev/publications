const Post = require('../models/PostModel');

class PostService {
  static async createPost(title, content, userId) {
    return Post.create({ title, content, userId });
  }

  static async getPosts() {
    return Post.findAll();
  }

  static async getPostById(id) {
    return Post.findByPk(id);
  }

  static async updatePost(id, title, content) {
    const post = await Post.findByPk(id);
    if (!post) {
      throw new Error('Post not found');
    }
    post.title = title;
    post.content = content;
    return post.save();
  }

  static async deletePost(id) {
    const post = await Post.findByPk(id);
    if (!post) {
      throw new Error('Post not found');
    }
    return post.destroy();
  }
}

module.exports = PostService;
