const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('./stocksController.js');

// routes are prefied with '/stocks'
router.get('/users', passport.authenticate('jwt', {session: false}) , controller.getStocks);
router.post('/:symbol/buy', passport.authenticate('jwt', {session: false}) , controller.buyStocks);
router.post('/:symbol/sell', passport.authenticate('jwt', {session: false}) , controller.sellStocks);


// passport.authenticate('jwt', {session: false})



// export user routes
module.exports = router;
