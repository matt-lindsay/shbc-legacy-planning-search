'use strict';

const Slack = require('../services/slack');

var feedbackController = function (feedbackService, nav) {
    var getFeedback = function (req, res) {
        res.render('feedbackView', {
            title: 'Feedback',
            nav: nav
        });
    };
    
    var postFeedback = function (req, res) {
        var feedback = JSON.stringify(req.body);

        let slack = new Slack();
        slack.notify('Legacy Planning Search', 'green', `${(feedback)}`);

        feedbackService.postFeedback(feedback);
        res.status(201).redirect('/');
    };
    
    return {
        getFeedback: getFeedback,
        postFeedback: postFeedback
    };
};
module.exports = feedbackController;