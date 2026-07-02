const request = require('supertest');
const app = require('../src/app');
const server = app.listen(3119);

describe('Server', () => {
  it('responds to GET /', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
  });
});

afterAll(() => {
  server.close();
});