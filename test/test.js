const request = require('supertest');
const app = require('../server/app.js');
const path = require('path');
const db = require(path.resolve(__dirname, '../database/index.js'));
const axios = require('axios');


const testProduct =
{
  "bulletPoints": [
    "bullet1",
    "bullet2"
  ],
  "imgURLs": [
    "B075H7Z5L8_1.jpg",
    "B075H7Z5L8_2.jpg",
    "B075H7Z5L8_3.jpg",
    "B075H7Z5L8_4.jpg"
  ],
  "asin": "B075H7Z5L8",
  "productTitle": "Literally some thing",
  "price": 1200,
  "category": "TestCat",
  "attributes": "Attributes",
  "totalImages": 4,
  "imgDimensions": [
    {
      "_id": "5d38c52a8c1c804a6931a37c",
      "height": 1000,
      "width": 1000
    },
    {
      "_id": "5d38c52a8c1c804a6931a37b",
      "height": 1000,
      "width": 1000
    },
    {
      "_id": "5d38c52a8c1c804a6931a37a",
      "height": 1000,
      "width": 1000
    },
    {
      "_id": "5d38c52a8c1c804a6931a379",
      "height": 1000,
      "width": 1000
    }
  ],
  "__v": 0
}
beforeAll(() => {
  db.add(testProduct)
})

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

test('Test the post single product endpoint', () => {
  return axios.post('http://localhost:5000/products/B075H7Z5L8', testProduct)
  .then(res => {
    expect(res.data).toEqual('Product has been added');
  })
  expect.assertions(1);
})