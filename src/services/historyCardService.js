var http = require('http');

var historyCardService = function () {
    var getHistRecordCard = function (street, cb) {
        
        var host = process.env.shApi;
        var path = process.env.historyCardPath;
        
        var options = {
            host: host,
            path: path + street
        };

        var callback = function (response) {
            var str = '';

            response.on('data', function (chunk) {
                str += chunk;
            });

            response.on('end', function () {
                cb(null, str);
            });
        };

        http.request(options, callback).end();
    };
    return { getHistRecordCard: getHistRecordCard };
};
module.exports = historyCardService;