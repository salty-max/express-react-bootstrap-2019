const request = require('supertest');
const app = require('./index');

describe('root path', () => {
  test('responds with status 200 the GET method', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});
