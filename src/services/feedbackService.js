'use strict';

var https = require('https');

var feedbackService = function () {
    var postFeedback = function (feedback) {
        
        var host = process.env.fmeApi;
        var path = process.env.fmePath;
        
        var options = {
            host: host,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(feedback)
            }
        };
        
        var post_req = https.request(options, function (res) {
            res.setEncoding('utf8');
            //res.on('data', function (chunk) {
            //    console.log('>>> Response: ' + chunk); 
            //});
        });
        
        post_req.write(feedback);
        post_req.end();
    };
    return {
        postFeedback: postFeedback
    };
};
module.exports = feedbackService;