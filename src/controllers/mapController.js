var mapController = function (nav) {
    
    var getMap = function (req, res) {
        res.render('mapView', {
            title: 'Map',
            nav: nav
        });
    };
    
    var getCaseFile = function (req, res) {
        var data = req.query.planningCase;
        
        console.log('Route reached: ' + data);
        res.status(201).redirect('/Map');
    };
    
    return {
        getMap: getMap,
        getCaseFile: getCaseFile
    };
};
module.exports = mapController;