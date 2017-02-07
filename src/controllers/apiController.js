var apiController = function (addressService) {
    var getAddress = function (req, res) {
        var  searchString = req.query.search;
        
        addressService.getAddress(encodeURI(searchString), function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else {
                var parsedJSON = JSON.parse(results);
                res.json(parsedJSON);   
            }
        });
    };

    return {
        getAddress: getAddress
    };
};
module.exports = apiController;