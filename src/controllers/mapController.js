const box = require('../../box');

var mapController = function (nav) {
    
    var getMap = function (req, res) {
        res.render('mapView', {
            title: 'Map',
            nav: nav
        });
    };
    
    var getCaseFile = function (req, res) {
        var plaCase = req.query.planningCase;
        
        // Instantiate a new Box client.
        var client = new box();
        
        // Query Box for this Planning case.
        client.search.query(plaCase, {ancestor_folder_id: 8987026758, type: 'folder'}, function (err, response) {
            // Log error e.g. not authorised, doesn't exist or something else.
            if (err) { // TODO handle errors.
                console.log('>>> Error \n' + err);
            }
            
            // Obtain the number of folders found matching the search case number (records[0]).
            var recordCount = response.total_count;
            // If the recordCount is 0 then no match is present within Box.
            if (recordCount === 0) {
                console.log('>>> That Planning Case doe not exist: ' + plaCase);
            } else {
                var data = response.entries[0].name;
                console.log('>>> Response ' + data);
                // Search for a Redacted / Published sub folder.
                // If one exists get the link and serve back to the customer.
                // If one does not exist send a request to redaction agent.
                // If it does not exist inform the customer.
            }
        });
        
        res.status(201).redirect('/Map');
    };
    
    return {
        getMap: getMap,
        getCaseFile: getCaseFile
    };
};
module.exports = mapController;