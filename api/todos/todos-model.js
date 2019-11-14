const db = require('../../database/db-config');

module.exports = {
  find,
  findById,
  insert
}

function find() {
  return db('todos');
}

function findById(id) {
  return db('todos')
    .where({ id });
}

async function insert(todo) {
  const [id] = await db('todos').insert(todo, 'id');

  return db('todos')
    .where({ id })
    .first();
}