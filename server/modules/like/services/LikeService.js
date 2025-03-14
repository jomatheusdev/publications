const Like = require('../models/LikeModel');

class LikeService {
  static async addLike(userId, postId) {
    return Like.create({ userId, postId });
  }

  static async removeLike(userId, postId) {
    const like = await Like.findOne({ where: { userId, postId } });
    if (!like) {
      throw new Error('Like not found');
    }
    return like.destroy();
  }

  static async getLikesByPost(postId) {
    return Like.findAll({ where: { postId } });
  }
}

module.exports = LikeService;
