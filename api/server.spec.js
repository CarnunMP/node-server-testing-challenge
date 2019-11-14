const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
  describe('index route', () => {
    it('should return an OK status code from the index route', async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get('/');
      expect(response.status).toEqual(expectedStatusCode);
    });
    
    it('should return a JSON object from the index route', async () => {
      const response = await request(server).get('/');
      expect(response.type).toEqual('application/json');
    });

    it('should return a JSON object of the right form from the index route', async () => {
      const expectedBody = { api: 'running' };
      const response = await request(server).get('/');
      expect(response.body).toEqual(expectedBody);
    });
  });

  describe('[GET] /todos', () => {
    it('should return a list of todo objects', async () => {
      const todos = await request(server).get('/todos');
      expect(todos.body).toBe('array'); // Not sure how to write this one! Been scratching my head...
    })
  })
});