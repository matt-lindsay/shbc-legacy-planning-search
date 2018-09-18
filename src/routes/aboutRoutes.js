'use strict';

var express = require('express');
var aboutRouter = express.Router();

var router = function (nav) {
    aboutRouter.route('/')
        .get(function (req, res) {
            res.render('aboutView', {
                title: 'About',
                nav: nav
            });
        });
    return aboutRouter;
};
module.exports = router;