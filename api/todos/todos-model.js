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

function insert(todo) {
  return db('todos')
    .insert(todo);
}