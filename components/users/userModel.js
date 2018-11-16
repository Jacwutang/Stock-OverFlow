const bcrypt = require('bcrypt');
const saltRounds = 10;

class User {
  constructor(username = null ,password = null) {
    this.username = username;
    this.password = password;
  }

  static validPassword(password) {
    return bcrypt.compare(password, hash);
    // return true or false
  }

  static generateHash(password) {

    return bcrypt.hash(password, saltRounds);
    // return the hash+salted string
  }

}

module.exports = User;
