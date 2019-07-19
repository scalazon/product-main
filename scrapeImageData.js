const sizeOf = require('image-size');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

const directoryPath = path.resolve(__dirname, '../Images/');
console.log(directoryPath);

export default getImgDimensions(){
  return fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    let result = {};
    ASINs = files.map(file => file.split('_')[0]);
    let currentASIN = ASINs[0]
    let currentBatch = [];
    files.forEach(function (file, idx) {
        // console.log('ASINs[idx]', ASINs[idx]);
        const dimensions = sizeOf(path.join(directoryPath, file));
        delete dimensions['type'];
        currentBatch.push(dimensions);
        if (!ASINs[idx + 1] || ASINs[idx + 1] !== currentASIN){
          let data = {
            imgDimensions: currentBatch.slice(),
            asin: currentASIN 
          }
          currentASIN = ASINs[idx + 1] ? ASINs[idx + 1] : null;
          currentBatch = [];
          
        }
   
        // console.log('dimensions', dimensions);
    });
  });

}

