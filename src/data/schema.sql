DROP TABLE IF EXISTS users,
posts,
categories,
comments;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  body TEXT,
  user_id INTEGER REFERENCES users(id),
  category_id INTEGER REFERENCES categories(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  body TEXT,
  user_id INTEGER REFERENCES users(id),
  post_id INTEGER REFERENCES posts(id),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);