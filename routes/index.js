const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
    res.json({out: 'Api works!'});
});

module.exports = router;