const request = require('supertest');
const app = require('../src/app');

test('GET /status should return API is working', async () => {
  const response = await request(app).get('/status');
  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveProperty('status', 'API is working!');
});
