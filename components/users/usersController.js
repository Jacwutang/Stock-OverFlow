// const user = require("./user");
const { Users } = require("../../config/db/repos");
// require(appRoot + '/config/db/repos');

// Define controller methods here
const getUser = (req, res) => {
  console.log(" get request users");
  Users.create();
  //Creates users table;
  res.send("SUCCESS Users");
};

module.exports = {
  getUser
};
