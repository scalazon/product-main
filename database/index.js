const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const dbURI = process.env.DBURI || require('../config.js').dbURI

const conn = mongoose.connect(dbURI, {useNewUrlParser: true});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  asin: String,
  productTitle: String,
  bulletPoints: Array,
  price: Number,
  category: String,
  attributes: String,
  totalImages: Number,
  imgURLs: Array
});

const Product = mongoose.model('Product', ProductSchema);
const essentialProps = ['asin', 'productTitle', 'bulletPoints', 'price', 'category', 'totalImages'];

module.exports.get = (asin) => (
  Product.find({asin}).limit(1)
  .then(product => JSON.stringify(product))
  .catch(console.error)
)

module.exports.getAll = () => (
  Product.find({})
  .then(products => JSON.stringify(products))
  .catch(console.error)
);

module.exports.add = (product) => {
  console.log(product);
  if (essentialProps.every((prop) => product.hasOwnProperty(prop))) {
   // if (essentialProps.every(product.hasOwnProperty)) { //why doesn't this work?
    if (!Array.isArray(product.bulletPoints)){
      product.bulletPoints = product.bulletPoints.split('\n');
    }
    if (product.price[0] === '$'){
      product.price = product.price.slice(1);
    }
    product.imgURLs = [];
    for (let i = 1; i <= product.totalImages; i++){
      product.imgURLs.push(`${product.asin}_${i}.jpg`);
    }
    return Product(product)
          .save()
          .then(prod => {
            console.log('added:', JSON.stringify(prod))
            return prod;
          })
          .catch(console.error)
  } 
}

module.exports.addBatch = (JSONarray) => {
  return Promise.all(JSONarray.map(prod => this.add(prod)))
}