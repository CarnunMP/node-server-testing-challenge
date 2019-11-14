const db = require('../../database/db-config');

module.exports = {
  find,
  findById,
  insert,
  remove
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

async function remove(id) {
  const todo = await findById(id);

  db('todos')
    .where({ id })
    .del();

  return todo[0];
}