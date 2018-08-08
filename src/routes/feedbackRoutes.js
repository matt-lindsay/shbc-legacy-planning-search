var express = require('express');
var feedbackRouter = express.Router();

var router = function (nav) {
    var feedbackService = require('../services/feedbackService')();
    var feedbackController = require('../controllers/feedbackController')(feedbackService, nav);
    
    feedbackRouter.route('/')
        .get(feedbackController.getFeedback)
        .post(feedbackController.postFeedback);
    return feedbackRouter;
};
module.exports = router;
