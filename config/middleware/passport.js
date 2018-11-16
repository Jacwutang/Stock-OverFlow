const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const db  = require(__base + '/config/db');
const User = require(__base + '/components/users/userModel');

/* Define various passport strategies */

/* LocalStrategy --> username,password */
passport.use('local',new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
  },
  (username, password, done) => {
    //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
    db.users.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (User.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));



/* JWT strategy */
passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'your_jwt_secret'
    },
     (jwtPayload, cb) => {

        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return User.findOneById(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));

module.exports = passport;
