const router = require('express').Router();
const user = require('./users/user');
const admin = require('./users/admin');


router.use('/user', user);
router.use('/admin', admin);


module.exports = router;

