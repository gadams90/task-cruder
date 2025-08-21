CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL UNIQUE,
  details TEXT
);

INSERT INTO tasks (name, details) VALUES ('Task 1', 'Get a task');
