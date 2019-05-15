'use strict';

var Box = require('../../box');

var mapController = function (nav) {
    
    var getMap = function (req, res) {
        var shareLinkUrl = null;
        var plaCase = null;
        
        res.render('mapView', {
            title: 'Map',
            nav: nav,
            planningCase: plaCase,
            linkUrl: shareLinkUrl
        });
    };
    
    var getCaseFile = function (req, res) {
        var plaCase = req.query.planningCase;
        
        res.status(200).redirect('/Map');
        // Instantiate a new Box client.
        // var client = new Box();
        
        // Query Box for this Planning case.
        /*client.search.query(plaCase, {ancestor_folder_ids: 8987026758, type: 'folder'}, function (err, response) {
            // Log error e.g. not authorised, doesn't exist or something else.
            if (err) { // TODO handle errors.
                console.log('>>> Error \n' + err);
            }
            
            // Obtain the number of folders found matching the search case number (records[0]).
            var recordCount = response.total_count;
            
            // If the recordCount is 0 then no match is present within Box.
            if (recordCount === 0) {
                console.log('>>> That Planning Case does not exist: ' + plaCase);
                
                // Serve back a message to the customer
                res.render('mapView', {
                    title: 'Map',
                    nav: nav,
                    planningCase: plaCase,
                    linkUrl: null
                });
            } else {
                var folderName = response.entries[0].name;
                var caseFolderId = response.entries[0].id;
                
                console.log('>>> That Planning Case does exist: ' + folderName + ', ID: ' + caseFolderId);
                
                // Get the contents of that folder.
                client.folders.getItems(caseFolderId, {fields: 'name'}, function (err, response) {
                    if (err) console.log('>>> Error \n' + err);
                    
                    var folderContents = response.entries;
                    var publishedFolderId;
                    
                    folderContents.forEach(function (item) {
                        if (item.name === 'PUBLISHED') {
                            console.log('>>> Published Folder ID: ' + item.id);
                            publishedFolderId = item.id;
                        }
                    });
                    
                    if (publishedFolderId) {
                        console.log('>>> Ready to serve folder ' + publishedFolderId);
                        
                        client.folders.getItems(publishedFolderId, {fields: 'name'}, function (err, response) {
                            if (err) console.log('>>> Error \n' + err);
                            
                            // Test for the number of documents in the folder.
                            var numOfDocs = response.total_count;
                            var documentId;
                            
                            if (numOfDocs > 1) {
                                // TODO fix this.
                                var multipleDocs;
                                response.entries.forEach(function (item) {
                                    documentId.push(item.id);
                                });
                                // Loop each item and get their IDs.
                                documentId.forEach(function (item) {
                                    client.files.get(item, null, function (err, reponse) {
                                        if (err) console.log('>>> Error \n' + err);
                                        var shared_link = response.shared_link;
                                        
                                        if (shared_link === null) {
                                            client.files.update(item, {shared_link: client.accessLevels.OPEN}, function (err, response) {
                                                if (err) console.log('>>> Error \n' + err);
                                                multipleDocs.push(response.shared_link);
                                            });
                                        }
                                    });
                                });
                                
                                // Serve the documents to the customer...
                                res.render('mapView', {
                                    title: 'Map',
                                    nav: nav,
                                    planningCase: plaCase,
                                    linkUrl: multipleDocs
                                });
                            } else if (numOfDocs === 1) {
                                documentId = response.entries[0].id;
                                console.log('>>> Document Id ' + documentId);
                                
                                client.files.get(documentId, null, function(err, response) {
                                    if (err) console.log('>>> Error \n' + err);
                                    var shared_link = response.shared_link;
                                    
                                    // Test for a share link.
                                    if (shared_link === null) {
                                        console.log('>>> No shared link.');
                                        // Create a shared link.
                                        client.files.update(documentId, {shared_link: client.accessLevels.OPEN}, function (err, response) {
                                            if (err) console.log('>>> Error \n' + err);
                                            
                                            console.log('>>> Create Shared Link Response:');
                                            console.log(response.shared_link);
                                            
                                            // Serve the document to the customer...
                                            res.render('mapView', {
                                                title: 'Map',
                                                nav: nav,
                                                planningCase: plaCase,
                                                linkUrl: response.shared_link.url
                                            });
                                            
                                        });
                                    } else {
                                        var shareLinkUrl = shared_link.url;
                                        
                                        console.log('>>> Shared Link Exists:');
                                        console.log(shareLinkUrl);
                                        
                                        // Serve the document to the customer...
                                        res.render('mapView', {
                                            title: 'Map',
                                            nav: nav,
                                            planningCase: plaCase,
                                            linkUrl: shareLinkUrl
                                        });
                                    }
                                });
                            } else if (numOfDocs === 0) {
                                console.log('>>> There is a problem');
                            }
                        });
                    } else {
                        console.log('>>> Redaction required.');
                        // Redirect customer to details submission page.
                            // record customer's details to database.
                        // Obtain shared link for original copy > 
                            // send to API >
                            // send to redaction agent.
                    }
                });
                //res.status(201).redirect('/Map');
            }
        });*/
    };
    
    return {
        getMap: getMap,
        getCaseFile: getCaseFile
    };
};
module.exports = mapController;
