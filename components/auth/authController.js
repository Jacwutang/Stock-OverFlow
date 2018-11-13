const jwt = require('jsonwebtoken');
const passport = require('passport');


const login = (req, res, next) => {
  // session:false so that user is not saved in 'session'. When '/login' route is hit, use passport to authenticate.
  passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user   : user
            });
        }
       //Middleware 'login'
       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }

           // generate a signed son web token with the contents of user object and return it in the response
           const token = jwt.sign(user, 'your_jwt_secret');
           return res.json({user, token});
        });
    })(req, res);


};

const signup  = (req,res) => {
  console.log("post request users");
  /*
  1) Create user. Save DB
  2) login user using passport
  */

}

const logout = (req,res) => {
/*
1) Passport js logout
*/
}

module.exports = {
  login,
  signup,
  logout
};
