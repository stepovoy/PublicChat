'use strict';
module.exports = {
    up  : (queryInterface, Sequelize) => {
        return queryInterface.createTable('Posts', {
            post_id  : {
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true,
                type         : Sequelize.INTEGER
            },
            user_id  : {
                allowNull: false,
                type     : Sequelize.INTEGER
            },
            text     : {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull   : false,
                defaultValue: Sequelize.fn('NOW'),
                type        : Sequelize.DATE
            },
            updatedAt: {
                allowNull   : false,
                defaultValue: Sequelize.fn('NOW'),
                type        : Sequelize.DATE
            }
        }, {
            timestamps: true,
            updatedAt : 'updateTimestamp'
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Posts');
    }
};