let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    res.json({out: 'Hello World!'});
});

router.post('/', (req, res, next) => {
    res.json({out: 'Got a POST request'});
});

module.exports = router;