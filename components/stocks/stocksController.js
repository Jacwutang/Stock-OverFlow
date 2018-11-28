
const db  = require(__base + '/config/db');


// Define controller methods here
const getStocks = (req, res) => {

  console.log(" get request stocks");
  console.log(req.user, "user obj");
  db.stocks.create();

  res.send();
};

const buyStocks = (req,res) => {
  console.log("buy stocks");

  const stock = {
    user_id: req.user.id,
    company_id: 1,
    shares: 1
  };
  db.stocks.insert(stock);
}

const sellStocks = (req,res) => {
    console.log("sell stocks");
}





module.exports = {
  getStocks,
  buyStocks,
  sellStocks
};
