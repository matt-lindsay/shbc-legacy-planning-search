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
            
            response.on('error', function (err) {
                //console.log('>>> Error: ' + err);
                str += err;
            });

            response.on('end', function (err) {
                cb(err, str);
            });
        };

        var request = http.request(options, callback);
        
        request.on('error', function (err) {
            console.log('>>> Error: ' + err); 
        });
        
        request.end();
    };
    return { getHistRecordCard: getHistRecordCard };
};
module.exports = historyCardService;