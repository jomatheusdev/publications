const User = require('../modules/user/models/UserModel');
const Post = require('../modules/post/models/PostModel');

function setupAssociations() {
  User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
  Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });
}

module.exports = setupAssociations;
