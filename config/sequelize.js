const fs = require('fs-extra');

module.exports = {
    development: {
        username            : 'database_dev',
        password            : 'password',
        database            : 'database_dev',
        host                : '127.0.0.1',
        dialect             : 'mysql',
        migrationStorage    : "json",
        migrationStoragePath: "config/sequelizeMetaDev.json",
        seederStorage       : "json",
        seederStoragePath   : "config/sequelizeDataDev.json"
    },
    test       : {
        username            : 'database_test',
        password            : null,
        database            : 'database_test',
        host                : '127.0.0.1',
        dialect             : 'mysql',
        migrationStorage    : "json",
        migrationStoragePath: "config/sequelizeMetaTest.json",
        seederStorage       : "json",
        seederStoragePath   : "config/sequelizeDataTest.json"
    },
    production : {
        username            : process.env.DB_USERNAME,
        password            : process.env.DB_PASSWORD,
        database            : process.env.DB_NAME,
        host                : process.env.DB_HOSTNAME,
        dialect             : 'mysql',
        dialectOptions      : {
            ssl: {
//                ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
            }
        },
        migrationStorage    : "json",
        migrationStoragePath: "config/sequelizeMeta.json",
        seederStorage       : "json",
        seederStoragePath   : "config/sequelizeData.json"
    }
};
