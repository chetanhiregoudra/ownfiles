const user = require('express').Router();

user.get('/',(req, res) => {
    res.json({message:'chetan!!!!!!!'});
});

module.exports = user;