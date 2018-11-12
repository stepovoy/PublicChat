const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;

const indexRoutes  = require('./routes/index');
const postsRoutes  = require('./routes/posts');

app.listen(port, () => {
    console.log('App is on ' + port);
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', indexRoutes);
app.use('/posts', postsRoutes);

// error handler
app.use((err, req, res, next) => {
    res.status(500).json({err: '123'});
});

module.exports = app;
