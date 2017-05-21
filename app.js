//requires
var express = require('express');
var path = require('path');
var app = express();

//makes the public folder public
app.use(express.static('public'));

//when at '/' it shows the index.html on the dom
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

//adding this fixed it so that I can refresh on the /code page without it saying "cannot get /code"
app.get('/code', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

//global port var so that it can be hosted on internet
var port = process.env.PORT || 3004;

//listening to port
app.listen(port, function() {
  console.log('up 3004');
});
