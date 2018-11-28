"use strict";
const Users = require("./users");
const Companies = require('./companies');
const Stocks = require("./stocks");
const WatchLists = require("./watchlists");

// Renaming and exporting all repository classes:

module.exports = {
  Users,
  Companies,
  Stocks,
  WatchLists
};
