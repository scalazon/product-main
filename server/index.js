const app = require('./app.js');
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log('baby, i\'m listening...', PORT);
})