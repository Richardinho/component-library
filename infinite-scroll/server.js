const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = 4572;
const ejs = require('ejs');
const http = require('http');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/css', express.static('css'))

app.get('/', function (req, res) {
  const url = 'http://localhost:4000/api/emperors?' + 
    'dynasty=all&yearFrom=-30&yearTo=500&sortOrder=succession&offset=' + (req.query.offset || 0);
 
  http.get(url, (resp) => {
    let data = '';
   
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
   
    resp.on('end', () => {
      const parsedData = JSON.parse(data);
      const results = parsedData.results;
      const limit = parsedData.meta.limit;
      const totalResults = parsedData.meta.totalResults;
      const pages = Math.ceil(totalResults / limit)
      res.render('index', { pages, results, limit, offset: parseInt(req.query.offset, 10) });
    });
   
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

app.listen(port, () => {
  console.log('listening on port' + port);
});
