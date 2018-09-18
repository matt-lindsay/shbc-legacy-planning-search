'use strict';

var streetController = function (historyCardService, nav) {
    
    var getStreet = function (req, res) {
        res.render('streetView', {
            title: 'Street',
            nav: nav,
            streetname: { streetname: 'waiting for input...' }
        });
    };

    var getStreetByName = function (req, res) {
        //console.log('>>> getStreetByName');
        var streetName = req.query.name;
        
        if (streetName === undefined) {
            //console.log('>>> No steet name.');
        } else {
            // History Record Card Service.
            historyCardService.getHistRecordCard(encodeURI(streetName), function (err, results) {
                if (err) {
                    res.status(500).send(err);
                }
                
                var parsedJSON = JSON.parse(results);
                
                var pageSize = 5;
                var totalRecords = parsedJSON.length;
                var pageCount = Math.round(totalRecords / pageSize);
                var currentPage = 1;
                var paginatedStreet = [];
                var JSONList = [];
                
                // Split parsedJSON into groups for pagination.
                while (parsedJSON.length > 0) {
                    paginatedStreet.push(parsedJSON.splice(0, pageSize));
                }
                
                // Set current page if specified as get variables e.g. /?page=2
                if (typeof req.query.page !== 'undefined') {
                    currentPage = +req.query.page;
                }
                
                // Show list of JSON from group.
                JSONList = paginatedStreet[+currentPage - 1];
                
                //JSONList.forEach(function (item) {
                //   console.log('>>> ' + item.address + ' ' + item.preview_url + ' ' + item.pageCount);
                //});
    
                //console.log('>>> Request for History Record Cards at: ' + streetName);
                //console.log('>>> Total # of records: ' + totalRecords);
                //console.log('>>> # of items on page: ' + JSONList.length);
                //console.log('>>> # of pages: ' + pageCount);
                
                res.render('streetResultsView', {
                    title: 'Street',
                    nav: nav,
                    streetname: JSONList,
                    pageSize: pageSize,
                    totalRecords: totalRecords,
                    pageCount: pageCount,
                    currentPage: currentPage,
                    name: streetName
                });
            });
        }
    };
    return {
        getStreet: getStreet,
        getStreetByName: getStreetByName
    }; 
};
module.exports = streetController;
