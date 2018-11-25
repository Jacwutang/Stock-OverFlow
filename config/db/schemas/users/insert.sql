/* Add user record

*/


INSERT INTO ${schema~}.users(username,password)
VALUES ($1, $2)
RETURNING *
