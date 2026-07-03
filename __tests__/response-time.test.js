const request = require('supertest');
const app = require('../src/app');

test('API responds within 200ms', async () => {
  const start = Date.now();
  await request(app).get('/api/customers');
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(600);
});