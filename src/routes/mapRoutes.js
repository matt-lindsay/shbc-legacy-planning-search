var express = require('express');
var mapRouter = express.Router();

var router = function (nav) {
    mapRouter.route('/')
        .get(function (req, res) {
            res.render('mapView', {
                title: 'Map',
                nav: nav
            });
        });
    return mapRouter;
};
module.exports = router;