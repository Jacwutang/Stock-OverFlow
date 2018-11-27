/*
Create table watchlists
*/



CREATE TABLE ${schema~}.watchlists (
  ID SERIAL PRIMARY KEY,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (company_id) REFERENCES companies(id)
);
