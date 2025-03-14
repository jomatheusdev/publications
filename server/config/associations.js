const User = require('../modules/user/models/UserModel');
const Post = require('../modules/post/models/PostModel');
const Like = require('../modules/like/models/LikeModel');

function setupAssociations() {
  User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
  Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });

  User.belongsToMany(Post, { through: Like, foreignKey: 'userId', as: 'likedPosts' });
  Post.belongsToMany(User, { through: Like, foreignKey: 'postId', as: 'likedByUsers' });
}

module.exports = setupAssociations;
