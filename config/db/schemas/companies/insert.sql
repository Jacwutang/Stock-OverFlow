/* Add companies record

*/

INSERT INTO ${schema~}.companies(name,symbol,ceo,biography,location,founding_year,employees)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *
