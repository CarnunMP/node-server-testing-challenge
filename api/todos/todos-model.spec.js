const db = require('../../database/db-config');

const Todos = require('./todos-model');

describe('todos model', () => {
  describe('insert()', () => {
    it('should insert the provided todos into the db', async () => {
      let todos = await db('todos');
      const todosLength = todos.length;
      expect(todos).toHaveLength(todosLength);

      await Todos.insert({ name: 'gaffer' });
      await Todos.insert({ name: 'sam' });

      todos = await db('todos');
      expect(todos).toHaveLength(todosLength + 2);
    });
  });
});