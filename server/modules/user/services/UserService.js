require('dotenv').config();
const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserService {
  static async createUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return User.create({ username, password: hashedPassword });
  }

  static async authenticateUser(username, password) {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  }

  static async getAllUsers() {
    return User.findAll();
  }

  static async getUserById(id) {
    return User.findByPk(id);
  }
}

module.exports = UserService;
