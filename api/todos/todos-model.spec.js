const db = require('../../database/db-config');

const Todos = require('./todos-model');

beforeEach(async () => {
  await db('todos').truncate();
});

describe('todos model', () => {
  describe('insert()', () => {
    it('should insert the provided todos into the db', async () => {
      let todos = await db('todos');
      const todosLength = todos.length;
      expect(todos).toHaveLength(todosLength);

      await Todos.insert({ text: 'meet grandma'});
      await Todos.insert({ text: 'vote'});

      todos = await db('todos');
      expect(todos).toHaveLength(todosLength + 2);
    });

    it('should insert the porvided todo into the db', async () => {
      let todo = await Todos.insert({ text: 'wash up' });
      expect(todo.text).toBe('wash up');

      todo = await Todos.insert({ text: 'buy groceries' });
      expect(todo.text).toBe('buy groceries');
    })
  });
});