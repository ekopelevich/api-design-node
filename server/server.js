<<<<<<< HEAD
// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here
=======
// TODO: user app.params to find the lion using the id
// and then attach the lion to the req object and call next. Then in
// '/lion/:id' just send back req.lion

// create a middleware function to catch and handle errors, register it
// as the last middleware on app


// create a route middleware for POST /lions that will increment and
// add an id to the incoming new lion object on req.body

>>>>>>> 3dc75100b38bc6573a68dfc54e083dd0bcfb44b5
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
var morgan = require('morgan');

var lions = [];
var id = 0;

var updateId = function(req, res, next) {
  // fill this out. this is the route middleware for the ids
};

<<<<<<< HEAD
// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
=======
app.use(morgan('dev'))
>>>>>>> 3dc75100b38bc6573a68dfc54e083dd0bcfb44b5
app.use(express.static('client'));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


<<<<<<< HEAD
var lions = [];
var id = 0;
=======
app.param('id', function(req, res, next, id) {
  // fill this out to find the lion based off the id
  // and attach it to req.lion. Rember to call next()
});
>>>>>>> 3dc75100b38bc6573a68dfc54e083dd0bcfb44b5

// TODO: make the REST routes to perform CRUD on lions

app.get('/lions', function(req, res){
  res.json(lions);
});

app.get('/lions/:id', function(req, res){
<<<<<<< HEAD
  var lion = _.find(lions, {id: req.params.id});
  res.json(lion || 'There are no lions here.');
});

app.post('/lions', function(req, res){
  var lion = req.body;
  id++;
  lion.id = id + '';
=======
  // use req.lion
  res.json(lion || {});
});

app.post('/lions', updateId, function(req, res) {
  var lion = req.body;

>>>>>>> 3dc75100b38bc6573a68dfc54e083dd0bcfb44b5
  lions.push(lion);
  res.json(lion);
});

app.put('/lions/:id', function(req, res){
  var update = req.body;
  if (update.id) {
    delete update.id;
  }

  var lion = _.findIndex(lions, {id: req.params.id});
  if(!lions[lion]){
    req.send('That lion does no exist.');
  } else {
    var updatedLion = _.assign(lions[lion], update);
    res.json(updatedLion);
  }
});

app.delete('/lions/:id', function(req, res){
  var lion = _.findIndex(lions, {id: req.params.id});
  if(!lions[lion]){
    req.send('That lion does no exist.');
  } else {
    var deletedLion = lions[lion];
    lions.splice(deletedLion, 1);
    res.json(deletedLion);
  }
});

// {
//   "GET /lions": {
//     "desc": "returns all lions",
//     "response": "200 application/json",
//     "data": [{}, {}, {}]
//   },
//
//   "GET /lions/:id": {
//     "desc": "returns one lion respresented by its id",
//     "response": "200 application/json",
//     "data": {}
//   },
//
//   "POST /lions": {
//     "desc": "create and returns a new lion uisng the posted object as the lion",
//     "response": "201 application/json",
//     "data": {}
//   },
//
//   "PUT /lions/:id": {
//     "desc": "updates and returns the matching lion with the posted update object",
//     "response": "200 application/json",
//     "data": {}
//   },
//
//   "DELETE /lions/:id": {
//     "desc": "deletes and returns the matching lion",
//     "response": "200 application/json",
//     "data": {}
//   }
// }

app.listen(3000);
console.log('on port 3000');
