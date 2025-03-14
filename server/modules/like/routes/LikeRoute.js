const express = require('express');
const LikeController = require('../controllers/LikeController');
const authMiddleware = require('../../user/middleware/AuthMiddleware');

const router = express.Router();

/**
 * @swagger
 * /likes:
 *   post:
 *     summary: Add a like to a post
 *     tags: [Likes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               postId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Like added successfully
 *       400:
 *         description: Bad request
 */
router.post('/', authMiddleware, LikeController.addLike);

/**
 * @swagger
 * /likes:
 *   delete:
 *     summary: Remove a like from a post
 *     tags: [Likes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               postId:
 *                 type: integer
 *     responses:
 *       204:
 *         description: Like removed successfully
 *       400:
 *         description: Bad request
 */
router.delete('/', authMiddleware, LikeController.removeLike);

module.exports = router;
