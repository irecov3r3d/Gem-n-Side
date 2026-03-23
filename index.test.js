const request = require('supertest');
const app = require('./index');

describe('API Endpoints', () => {
  it('GET / should return Welcome to Gem-n-Side!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Welcome to Gem-n-Side!');
  });

  it('GET /health should return 200 OK', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'OK');
    expect(response.body).toHaveProperty('timestamp');
  });

  it('GET /non-existent-route should return 404', async () => {
    const response = await request(app).get('/non-existent-route');
    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty('error', 'Not Found');
  });
});

describe('Security & Optimization Headers', () => {
  it('GET / should return Helmet security headers', async () => {
    const response = await request(app).get('/');
    expect(response.headers).toHaveProperty('x-xss-protection');
    expect(response.headers).toHaveProperty('x-frame-options', 'SAMEORIGIN');
    expect(response.headers).toHaveProperty('strict-transport-security');
  });

  it('GET / should return RateLimit headers', async () => {
    const response = await request(app).get('/');
    expect(response.headers).toHaveProperty('x-ratelimit-limit');
    expect(response.headers).toHaveProperty('x-ratelimit-remaining');
  });

  it('GET / should return CORS headers', async () => {
      const response = await request(app).get('/');
      expect(response.headers).toHaveProperty('access-control-allow-origin', '*');
  });
});
