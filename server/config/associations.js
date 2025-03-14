const User = require('../modules/user/models/UserModel');
const Post = require('../modules/post/models/PostModel');
const Like = require('../modules/like/models/LikeModel');

function setupAssociations() {
  // Um usuário pode ter muitos posts
  User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
  // Um post pertence a um usuário
  Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });

  // Relação muitos-para-muitos: Um usuário pode curtir muitos posts
  User.belongsToMany(Post, { through: Like, foreignKey: 'userId', as: 'likedPosts' });
  // Relação muitos-para-muitos: Um post pode ser curtido por muitos usuários
  Post.belongsToMany(User, { through: Like, foreignKey: 'postId', as: 'likedByUsers' });
}

module.exports = setupAssociations;
