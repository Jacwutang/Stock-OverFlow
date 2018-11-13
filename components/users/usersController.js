// const { Users } = require("../../config/db/repos");
const db  = require(__base + '/config/db');

// Define controller methods here
const getUser = (req, res) => {
  console.log(" get request users");
  db.users.create();
  res.send("success");
};

const saveUser = (req,res) => {
  console.log("post request users");
  db.users.add("Jack");
  res.send("success post");

}

module.exports = {
  getUser,
  saveUser
};
