const mongoose = require('mongoose');
const dbURI = process.env.DBURI || require('../config.js').dbURI

// module.exports = mongoose.connect(dbURI, {useNewUrlParser: true});
module.exports = mongoose.connect('mongodb://localhost:27017/productMain', {useNewUrlParser: true});