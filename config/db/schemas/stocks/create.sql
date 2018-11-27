/*
Create table stocks
*/



CREATE TABLE ${schema~}.stocks (
  ID SERIAL PRIMARY KEY,
  shares INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (company_id) REFERENCES companies(id)
);
