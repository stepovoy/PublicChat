const express   = require('express');
const router    = express.Router();
const sequelize = require('sequelize');
const PostModel = sequelize.import('Post', require('../db/models/post'));

let {isTextValid, isAlphaNumeric} = require('utils');

router.get('/', async (req, res, next) => {
    let posts = await PostModel.findAll();

    res.json({status: 200, res: posts});
});

router.post('/add', async (req, res, next) => {
    let {username, text} = req.body;

    if (! isTextValid(text) || ! isAlphaNumeric(username)) {
        throw new Error();
    }

    let user_id = await UserModel.upsert({username}, {});
    await PostModel.upsert({user_id, text}, {});

    res.json({status: 200, res: `New message ${text} by ${username} added`});
});

module.exports = router;