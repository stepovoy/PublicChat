'use strict';
module.exports = (sequelize, DataTypes) => {
    const User     = sequelize.define('User', {
        user_id : DataTypes.INTEGER,
        username: DataTypes.STRING
    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};