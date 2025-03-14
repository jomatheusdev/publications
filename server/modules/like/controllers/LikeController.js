const LikeService = require('../services/LikeService');

class LikeController {
  static async addLike(req, res) {
    try {
      const { postId } = req.body;
      const userId = req.user.id;
      const like = await LikeService.addLike(userId, postId);
      res.status(201).json(like);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async removeLike(req, res) {
    try {
      const { postId } = req.body;
      const userId = req.user.id;
      await LikeService.removeLike(userId, postId);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = LikeController;
