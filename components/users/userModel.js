const bcrypt = require('bcrypt');
const saltRounds = 10;


class User {
  constructor(username = null ,password = null) {
    this.username = username;
    this.password = password;
  }

  static validPassword(password, hash) {
    return bcrypt.compare(password, hash);
  }

  static generateHash(password) {
    return bcrypt.hash(password, saltRounds);
  }

}

module.exports = User;
