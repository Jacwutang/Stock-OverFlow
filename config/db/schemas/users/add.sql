/* Add user record

*/


INSERT INTO ${schema~}.users(username)
VALUES ($1)
RETURNING *
