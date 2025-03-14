const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Like = sequelize.define('Like', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  }
});

module.exports = Like;
