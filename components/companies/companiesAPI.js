const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('./companiesController.js');

// routes are prefied with '/companies'
router.get('/', passport.authenticate('jwt', {session: false}) , controller.getCompanies);
router.post('/new', passport.authenticate('jwt', {session: false}) , controller.createCompany);



// passport.authenticate('jwt', {session: false})



// export user routes
module.exports = router;
