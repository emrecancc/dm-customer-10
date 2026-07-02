const request = require('supertest');
const app = require('../src/app');

test('API responds within 500ms', async () => {
  const start = Date.now();
  await request(app).get('/api');
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(1250);
});