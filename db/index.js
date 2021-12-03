var { Pool } = require('pg');

const pool = new Pool({
  user: 'annna',
  host: 'localhost',
  database: 'mvp',
  password: null,
  port: 5432,
})

var addUser = (params) => {
  const text = 'INSERT INTO users (name, email, score) VALUES ($1, $2, $3)';
  const values = [
    params.name,
    params.email,
    params.score
  ];
  return pool.query(text, values);
}


module.exports = {
  addUser: addUser,
}