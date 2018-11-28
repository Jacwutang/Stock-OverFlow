
const db  = require(__base + '/config/db');


// Define controller methods here
const getCompanies = (req, res) => {

  console.log(" get request companies");
  console.log(req.user, "user obj");
  db.companies.create();

  res.send("companies created");
};

const createCompany = (req,res) => {
  console.log("create Company");
  const company = {
    name: "Wutang",
    symbol: "Wuuu",
    ceo: "Jack Wu",
    biography: "Born and raised.. west philly",
    location: "CA",
    founding_year: 2018,
    employees: 350
  }
  db.companies.insert(company);
}






module.exports = {
  getCompanies,
  createCompany

};
