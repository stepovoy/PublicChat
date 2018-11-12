'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Posts', [
            {
                user_id: 1,
                text   : 'Sample text111',
            },
            {
                user_id: 2,
                text   : 'Sample text2222',
            },
            {
                user_id: 1,
                text   : 'Sample text333333',
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Posts', null, {});
    }
};