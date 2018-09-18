'use strict';

var express = require('express');
var streetRouter = express.Router();

var router = function (nav) {
    var historyCardService = require('../services/historyCardService')();
    var streetController = require('../controllers/streetController')(historyCardService, nav);
    
    streetRouter.route('/')
        .get(streetController.getStreet);

    streetRouter.route('/:name')
        .get(streetController.getStreetByName);

    return streetRouter;
};
module.exports = router;