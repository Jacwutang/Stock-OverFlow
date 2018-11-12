/*
Create table users
*/

-- DROP DATABASE IF EXISTS stock_overflow_dev;
-- CREATE DATABASE stock_overflow_dev;

-- \c stock_overflow_dev;

CREATE TABLE ${schema~}.users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL

);

-- INSERT INTO users (username)
--   VALUES ('Tyler');
