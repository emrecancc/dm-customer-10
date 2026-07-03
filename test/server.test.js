const request = require('supertest');
const server = require('../server');

describe('Server', () => {
  beforeAll(() => {
    server.listen(3139);
  });

  afterAll(() => {
    server.close();
  });

  it('responds to GET /health', async () => {
    const res = await request(server).get('/health');
    expect(res.status).toBe(200);
  });
});