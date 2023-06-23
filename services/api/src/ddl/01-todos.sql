CREATE TABLE IF NOT EXISTS todos (
  id serial PRIMARY KEY,
  name text NOT NULL DEFAULT ''
)
