var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Mongo connection string for Mongoose
mongoose.connect('mongodb://admin:heather1@ds048719.mlab.com:48719/user-manager');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

var api = require('./routes/api/api.js');

// Middleware to use for api calls. We can use token (claims) auth here
app.use(function (req, res, next) {
    //console.log('API Middleware responds here');
    next(); // make sure we go to the next routes and don't stop here
});

app.use('/api', api);

app.listen(port);
console.log('Magic happens on port ' + port);