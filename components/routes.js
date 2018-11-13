const express = require("express");
const router = express.Router();
const { passport } = require('../config/middleware');
const users = require("./users");
const auth = require("./auth");
/* prefix /api */

/* JWT required to access resource */
router.use("/users",  users.API);
// passport.authenticate('jwt', {session: false}),

/*  Non-JWT requirement */
router.use("/auth", auth.API);

module.exports = router;
