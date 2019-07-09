const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const prods = require(path.resolve(__dirname, '../database/index.js'));

app.use('/', express.static(path.resolve(__dirname, '../client/dist')));

app.get('/products/:asin', (req, res) => {
  prods.get(req.params.asin)
  .then(product => res.send(product))
  .catch(console.error)
});

app.get('/products', (req, res) => {
  prods.getAll()
  .then(products => res.send(products))
  .catch(console.error)
});

app.listen(PORT, ()=>{
  console.log('baby, i\'m listening...', PORT);
})
