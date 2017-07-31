var mapController = function (nav) {
    var getMap = function (req, res) {
        res.render('mapView', {
            title: 'Map',
            nav: nav
        });
    };
    
    var getCaseFile = function (req, res) {
        alert('Route reached.');
    };
    
    return {
        getMap: getMap,
        getCaseFile: getCaseFile
    };
};
module.exports = mapController;