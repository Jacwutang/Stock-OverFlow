"use strict";

const schema = require("../schemas").companies;

const cs = {}; // Reusable ColumnSet objects.

/*
 This repository mixes hard-coded and dynamic SQL, primarily to show a diverse example of using both.
 */

class CompaniesRepository {
  constructor(db, pgp) {
    this.db = db;
    this.pgp = pgp;

    // set-up all ColumnSet objects, if needed:
    createColumnsets(pgp);
  }

  // Creates the table;
  create() {
      return this.db.none(schema.create);
  }

  //Insert a company record
  insert(company) {
      const{name, symbol, ceo, biography,location,founding_year,employees} = company;
      return this.db.one(schema.insert, [name, symbol, ceo, biography,location,founding_year,employees]);;
  }

   // Removes all records from the table;
  empty() {
        return this.db.none(schema.empty);
  }

  findById(id) {
        return this.db.oneOrNone(
          'SELECT * FROM companies WHERE id = $1', +id
        );
   }
 }

//////////////////////////////////////////////////////////
// Example of statically initializing ColumnSet objects:

// Visual helper
function createColumnsets(pgp) {
  // create all ColumnSet objects only once:
  if (!cs.insert) {
    // Type TableName is useful when schema isn't default "public" ,
    // otherwise you can just pass in a string for the table name.
    const table = new pgp.helpers.TableName({
      table: "companies",
      schema: "public"
    });

    cs.insert = new pgp.helpers.ColumnSet(["name"], { table });
    cs.update = cs.insert.extend(["?id"]);
  }
  return cs;
}

module.exports = CompaniesRepository;
