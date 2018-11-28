/*
Create table companies
*/

CREATE TABLE ${schema~}.companies (
  ID SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  symbol VARCHAR NOT NULL,
  ceo VARCHAR NOT NULL,
  biography VARCHAR NOT NULL,
  location VARCHAR NOT NULL,
  founding_year INT NOT NULL,
  employees INT NOT NULL
);
