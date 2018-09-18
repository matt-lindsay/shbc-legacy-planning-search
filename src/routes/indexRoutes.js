'use strict';

var express = require('express');
var indexRouter = express.Router();

var router = function (nav) {
    indexRouter.route('/')
        .get(function (req, res) {
            res.render('index', {
                title: 'Home',
                nav: nav
            });
        });
    return indexRouter;
};
module.exports = router;