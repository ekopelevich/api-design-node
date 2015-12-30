// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('public'));

var jsonData = {count: 12, message: 'hey'};

app.get('/', function(req, res){
  var index = fs.readFile('../index', function (err, data) {
    if (err) throw err;
  });
  res.send(index);

});

app.get('/data', function(req, res){
  res.json(jsonData);
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});
