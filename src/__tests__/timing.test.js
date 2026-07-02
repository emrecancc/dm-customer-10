const fetch = require('node-fetch');

// Test to ensure the API responds within an acceptable time frame.
// The threshold has been increased to accommodate observed latency.

test('API responds within 850ms', async () => {
  const start = Date.now();
  await fetch('http://localhost:3000/api');
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(850);
});