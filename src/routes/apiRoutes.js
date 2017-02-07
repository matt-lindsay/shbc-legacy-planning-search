var express = require('express');
var apiRouter = express.Router();

var router = function () {
    var addressService = require('../services/addressService')();
    var apiController = require('../controllers/apiController')(addressService);
    
    apiRouter.route('/')
        .get(function (req, res) {
            var parsedJson = [{ "caption": "PHILPOT HOUSE" }, { "caption": "CHOBHAM HOUSE" }]; // Test url.
            res.json(parsedJson);
        });
    
    apiRouter.route('/AddressSearch')
        .get(apiController.getAddress);    
    
    return apiRouter;
};
module.exports = router;