const express = require('express');

const server = express();
const Todos = require('./todos/todos-model');

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.get('/todos', (req, res) => {
  Todos.find()
    .then(todos => {
      res.status(200).json(todos);
    })
    .catch(err => {
      res.status(500).json({
        message: `Falied to GET /todos: ${err.message}`,
      });
    });
});

module.exports = server;