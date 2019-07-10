const request = require('supertest');
const app = require('../server/app.js');

describe('Test the root path', () => {
  afterAll(async (done) => {
    setImmediate(done);
  });

  test('It should respond to the GET method', () => {
    return request(app).get("/")
      .expect(200)
      .expect('Content-Type', /html/)
  });
});

describe('Test the products list endpoint', () => {
  afterAll(async (done) => {
    setImmediate(done);
  });

  test('It should respond with json', () => {
    return request(app).get("/products")
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0)
      })
  });
});

describe('Test the products detail endpoint', () => {
  afterAll(async (done) => {
    setImmediate(done);
  });

  test('It should respond with json', () => {
    return request(app).get("/products/B075H7Z5L8")
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(typeof res.body).toBe('object');
        expect(res.body).toHaveProperty('bulletPoints')
        expect(res.body).toHaveProperty('imgURLs')
        expect(res.body).toHaveProperty('asin')
        expect(res.body).toHaveProperty('productTitle')
        expect(res.body).toHaveProperty('price')
        expect(res.body).toHaveProperty('category')
        expect(res.body).toHaveProperty('totalImages')
      })
  });
});