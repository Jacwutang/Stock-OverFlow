
const db  = require(__base + '/config/db');


// Define controller methods here
const getUser = (req, res) => {
  //Takes in an id from params or whatever
  console.log(" get request users");
  // db.users.create();
  res.send("success");
};





module.exports = {
  getUser
};
