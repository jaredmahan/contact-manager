
var express = require('express');

module.exports = (function () {
    'use strict';

    let api = express.Router();
    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    api.get('/', function (req, res) {
        res.json({ message: 'Base API Call' });
    });

    // Add other api routes to the route file
    api = require('../api/users.api.js')(api);


    return api;
})();