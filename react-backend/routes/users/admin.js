const admin = require('express').Router();

admin.get('/',(req,res) => {
    res.json({message:'admin'});
});

module.exports = admin;