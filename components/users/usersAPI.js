const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('./usersController.js');

// routes are prefied with '/users'
router.get('/', controller.getUser);


// passport.authenticate('jwt', {session: false})



// export user routes
module.exports = router;
