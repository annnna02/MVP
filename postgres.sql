DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id serial NOT NULL,
  "name" text NOT NULL,
  email text NOT NULL,
  score integer NOT NULL,
  PRIMARY KEY(id)
);