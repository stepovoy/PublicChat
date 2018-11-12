let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    res.json({out: 'Api works!'});
});

module.exports = router;