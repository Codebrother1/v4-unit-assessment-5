CREATE TABLE helo_users  (
  id SERIAL PRIMARY KEY,
  username VARCHAR() NOT NULL,
  password VARCHAR() NOT NULL,
  profile_pic TEXT
)


CREATE TABLE helo_posts (
  id SERIAL PROMARY KEY,
  title VARCHAR(45) NOT NULL,
  content TEXT,
  img TEXT,
  author_id INT REFERENCES helo_user(helo_user.id)
  date_created TIMESTAMP
)