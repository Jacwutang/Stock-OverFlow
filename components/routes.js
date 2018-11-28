const express = require("express");
const router = express.Router();
const { passport } = require('../config/middleware');
const users = require("./users");
const stocks = require("./stocks");
const auth = require("./auth");
const companies = require("./companies");
/* prefix /api */

/* JWT required to access resource */
router.use("/users",users.API);
// passport.authenticate('jwt', {session: false}),
router.use("/stocks", stocks.API);
router.use("/companies", companies.API);



/*  Non-JWT requirement */
router.use("/auth", auth.API);

module.exports = router;
