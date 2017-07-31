var express = require('express');
var mapRouter = express.Router();

var router = function (nav) {
    var mapController = require('../controllers/mapController')(nav);
    
    mapRouter.route('/')
        .get(mapController.getMap);
    
    mapRouter.route('/:planningCase')
        .get(mapController.getCaseFile);
        
    return mapRouter;
};
module.exports = router;