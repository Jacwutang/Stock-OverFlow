/*
Add watchlist record
*/

INSERT INTO ${schema~}.watchlists(user_id, company_id)
VALUES ($1, $2)
RETURNING *
