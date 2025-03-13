require('dotenv').config();
const jwt = require('jsonwebtoken');

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

function authMiddleware(req, res, next) {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    console.log('Authorization header missing');
    return res.status(401).json({ error: 'Access denied' });
  }
  const token = authHeader.replace('Bearer ', '');
  if (!token) {
    console.log('Token missing');
    return res.status(401).json({ error: 'Access denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log('Invalid token', error);
    res.status(400).json({ error: 'Invalid token' });
  }
}

module.exports = authMiddleware;
