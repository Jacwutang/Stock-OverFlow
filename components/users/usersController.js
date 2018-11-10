const user = require('./user');


// Define controller methods here
const getUser = (req,res) => {
  console.log(" get request users");
  res.send("SUCCESS Users");
}

module.exports = {
  getUser
}
