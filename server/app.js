const express = require('express');
const compression = require('compression');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const prods = require(path.resolve(__dirname, '../database/index.js'));

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '../client/dist')));

app.get('/products/:asin', (req, res) => {
  prods.get(req.params.asin)
    .then(products => res.json(products[0]))
    .catch(console.error)
});

app.post('/products/:asin', (req, res) => {
  prods.add(req.body)
    .then((data) => {
      console.log('products/:asin', data)
      res.send('Product has been added');
    })
    .catch(() => res.end())
});

app.get('/products', (req, res) => {
  prods.getAll()
    .then(products => res.json(products))
    .catch(console.error)
});

// Then is failing => Research
app.post('/products', (req, res) => {
  //  console.log(req.body)
  let promises = prods.addBatch(req.body);
  // console.log(promises);
  Promise.all(promises)
    .then(result => res.send('Products added'))
    .catch((err) => {
      console.log('Error adding products:', err);
      res.end('Error');
    })

})

module.exports = app;