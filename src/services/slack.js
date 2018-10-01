'use strict';

const Slack = require('node-slackr');

var slack = function() {
    let slack = new Slack(process.env.slack);

    var notify = (title, color, message) => {
        let messages = {};

        messages = {
            channel: '#devops_notifications',
            text: "Enterprise Service Bus",
            username: 'shbc nodejs',
            icon_url: process.env.slackIcon,
            attachments: [{
                title: title,
                color: color,
                text: message
            }]
        };

        slack.notify(messages, (err, result) => {
            if (err) {
              console.log('>>> Slack errors: ' + err + '. ');
            } else {
              console.log('>>> Slack notification: ' + result + '.');
            }
        });
    }

    return {
        notify: notify
    };
};
module.exports = slack;
