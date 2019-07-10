const express = require('express');
const app = express();
const path = require('path');
const prods = require(path.resolve(__dirname, '../database/index.js'));

app.use('/', express.static(path.resolve(__dirname, '../client/dist')));

app.get('/products/:asin', (req, res) => {
  prods.get(req.params.asin)
  .then(products => res.json(products[0]))
  .catch(console.error)
});

app.get('/products', (req, res) => {
  prods.getAll()
  .then(products => res.json(products))
  .catch(console.error)
});

module.exports = app;