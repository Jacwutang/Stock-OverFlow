/*
Add stock record
*/

INSERT INTO ${schema~}.stocks(user_id, company_id, shares)
VALUES ($1, $2, $3)
RETURNING *
