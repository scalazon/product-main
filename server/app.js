const express = require('express');
const compression = require('compression');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
// const db = require(path.resolve(__dirname, '../database/index.js'));
const db = require(path.resolve(__dirname, '../database/pgindex.js'));


app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '../client/dist')));

app.get('/products', (req, res) => {
  console.log('Getting some items:')
  db.getSome()
    .then(products => res.json(products))
    .catch(console.error)
});

// *****************  For mongoDB return **************
// app.get('/products/random', (req, res) => {
//   let asin = Math.floor(Math.random() * 10000000) + 1;
//   // let asin = 1500000;
//   console.log('Getting a random item:', asin)
//   db.get(asin)
//     .then(products => res.json(products[0]))
//     .catch(console.error)
// });


// app.get('/products/:asin', (req, res) => {
//   console.log('getting a specific product')
//   db.get(req.params.asin)
//     .then(products => res.json(products[0]))
//     .catch(console.error)
// });   *************** End MongoDB fx *************

app.get('/products/random', (req, res) => {
  let asin = Math.floor(Math.random() * 10000000) + 1;
  // let asin = 1500000;
  console.log('Getting a random item:', asin)
  db.get(asin)
    .then(product => res.json(product))
    .catch(console.error)
});


app.get('/products/:asin', (req, res) => {
  console.log('getting a specific product')
  db.get(req.params.asin)
    .then(product => res.json(product))
    .catch(console.error)
});

app.post('/products/:asin', (req, res) => {
  db.add(req.body)
    .then((data) => {
      console.log('products/:asin', data)
      res.send('Product has been added');
    })
    .catch(() => res.end())
});


// Then is failing => Research
app.post('/products', (req, res) => {
  //  console.log(req.body)
  let promises = db.addBatch(req.body);
  // console.log(promises);
  Promise.all(promises)
    .then(result => res.send('Products added'))
    .catch((err) => {
      console.log('Error adding products:', err);
      res.end('Error');
    })

})

module.exports = app;