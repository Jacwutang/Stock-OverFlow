/*
Create table users
*/



CREATE TABLE ${schema~}.users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  portfolio_value FLOAT NOT NULL,
  cash_value FLOAT NOT NULL,
  stocks_value FLOAT NOT NULL
);
