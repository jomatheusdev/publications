const UserService = require('../services/UserService');

class UserController {
  static async register(req, res) {
    try {
      const { username, password } = req.body;
      const user = await UserService.createUser(username, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const token = await UserService.authenticateUser(username, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserController;
