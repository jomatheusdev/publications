require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateToken(userId) {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
  console.log('Generated Token:', token);
}

const userId = 1;
generateToken(userId);
