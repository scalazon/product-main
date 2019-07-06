const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use('/', express.static(path.resolve(__dirname, '../client/dist')));

app.listen(PORT, ()=>{
  console.log('baby, i\'m listening...');
})
