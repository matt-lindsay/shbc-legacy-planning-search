'use strict';

require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var moment = require('moment');
var app = express();
var port = process.env.PORT || 5000;

var nav = [
    { Link: '/Map', Text: 'Map' },
    { Link: '/Street', Text: 'Street' },
    { Link: '/Feedback', Text: 'Feedback'},
    { Link: '/About', Text: 'About' }
];
var indexRouter = require('./src/routes/indexRoutes')(nav);
var mapRouter = require('./src/routes/mapRoutes')(nav);
var streetRouter = require('./src/routes/streetRoutes')(nav);
var feedbackRouter = require('./src/routes/feedbackRoutes')(nav);
var aboutRouter = require('./src/routes/aboutRoutes')(nav);
var apiRouter = require('./src/routes/apiRoutes')();

var yearDateFormat = 'YYYY';

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/Map', mapRouter);
app.use('/Street', streetRouter);
app.use('/Feedback', feedbackRouter);
app.use('/About', aboutRouter);
app.use('/Api', apiRouter);

app.locals.moment = moment;
app.locals.yearDateFormat = yearDateFormat;

app.listen(port, function (err) {
    if (err) {
        //throw err;
        console.log('>>> Application Error: ' + err);
    }
    console.log('Running server on port ' + port);
});
