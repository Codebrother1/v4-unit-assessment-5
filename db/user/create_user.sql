INSERT INTO users (email, username, password, profile_pic)
VALUES ($1, $2, $3, $4)
RETURNING *;