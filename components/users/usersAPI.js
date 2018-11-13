const express = require('express');
const router = express.Router();
const controller = require('./usersController.js');

// routes are prefied with '/users'
router.get('/', controller.getUser);
router.post('/add', controller.saveUser);





// export user routes
module.exports = router;
