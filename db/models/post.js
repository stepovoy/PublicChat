'use strict';
module.exports = (sequelize, DataTypes) => {
    const Post     = sequelize.define('Post', {
        post_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        text   : DataTypes.STRING
    }, {});
    Post.associate = function (models) {
        // associations can be defined here
        Post.belongsTo(models.User, {foreignKey: 'user_id'});

    };
    return Post;
};