const express = require('express');
const router = express.Router();
const controller = require('./authController');

// routes are prefied with '/api/auth'
router.post('/login', controller.login);
router.post('/signup', controller.signup);
router.get ('/logout', controller.logout);





// export user routes
module.exports = router;
