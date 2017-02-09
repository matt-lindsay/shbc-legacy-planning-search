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
var mapRouter = require('./src/routes/mapRoutes')(nav);
var streetRouter = require('./src/routes/streetRoutes')(nav);
var feedbackRouter = require('./src/routes/feedbackRoutes')(nav);
var apiRouter = require('./src/routes/apiRoutes')();

var yearDateFormat = 'YYYY';

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Map', mapRouter);
app.use('/Street', streetRouter);
app.use('/Feedback', feedbackRouter);
app.use('/Api', apiRouter);

app.locals.moment = moment;
app.locals.yearDateFormat = yearDateFormat;

app.get('/', function (req, res) {
    res.render('index', {
        title: 'SHBC - node app',
        nav: nav
    });
});

app.get('/About', function (req, res) {
    res.render('aboutView', {
        title: 'SHBC - node app',
        nav: nav
    });
});

app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log('Running server on port ' + port);
});