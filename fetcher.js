const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const path = process.argv[3];


const getDoc = (url, path) =>
request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode);
    return;
  };
  // console.log(path.slice(0,1));
  // console.log(path.slice(-4));
  if (path.slice(0, 2) === './' && path.slice(-5) === '.html'){
    fs.writeFile(path, body, function (err) {
      if (err) throw err;
      console.log('Downloaded and saved 1235 bytes to ./index.html.');
    });
  }
  else {
    console.log('Please provide a valid path.');
    return;
  }
});

getDoc(url, path);