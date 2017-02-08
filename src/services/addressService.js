var http = require('http');

var addressService = function () {
    var getAddress = function (search, cb) {
        
        var host = process.env.shApi;
        var path = process.env.addressPath;

        var options = {
            host: host,
            path: path + search
        };

        var callback = function (response) {
            var str = '';

            response.on('data', function (chunk) {
                str += chunk;
            });
            
            response.on('error', function (err) {
                 //console.log(err);
                 str += err;
            });

            response.on('end', function () {
                cb(null, str);
            });
        };

        var request = http.request(options, callback);
        
        request.on('error', function (err) {
            console.log('>>> Error: ' + err);
        });
        
        request.end();
    };
    return { getAddress: getAddress };
};
module.exports = addressService;