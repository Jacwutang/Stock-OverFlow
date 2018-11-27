const promise = require("bluebird");
const repos = require("./repos");
const initOptions = {
  // custom promise library. Better error handling + performance than ES6 promises
  promiseLib: promise,
  // Extending the database protocol with our custom repositories;
  // API: http://vitaly-t.github.io/pg-promise/global.html#event:extend
  extend(obj, dc) {
    // Database Context (dc) is mainly useful when extending multiple databases
    // with different access API-s.

    obj.users = new repos.Users(obj, pgp);
    obj.stocks = new repos.Stocks(obj,pgp);
    obj.watchlists = new repos.WatchLists(obj,pgp);
  }
};
const pgp = require("pg-promise")(initOptions);

// No need for username/password if connecting locally
// Define cn params
const cn = {
  host: "localhost",
  port: 5432,
  database: "stock_overflow_dev"
};

// Create DB instance
const db = pgp(process.env.DATABASE_URL || cn);

//Initialize diagnostics
db
  .connect()
  .then(obj => {
    console.log("success");
    obj.done();
  })
  .catch(err => {
    console.log("error connecting", err.message);
  });

module.exports = db;
