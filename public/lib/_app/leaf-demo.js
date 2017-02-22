// leaf-demo.js
(function () {
    // Initial map settings.
    var x = 51.345;
    var y = -0.659;
    var zoom = 13;
    var date = new Date();
    var copyrightYear = date.getFullYear();
    
    // Create the Open Street Map layer.
    var openStreetMap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: ['a', 'b', 'c']
    });
    
    // Plotting sheets layer.
    var wms = L.tileLayer.wms('https://maps.surreyheath.gov.uk/WMS/wms.exe?', {
        attribution: '&copy; Crown copyright. All rights reserved. Surrey Heath Borough Council 100018679 ' + copyrightYear,
        layers: 'planningplottingsheetsWGS84'
    });
    
    // 2013 Aerial Survey.
    var airSurvey = L.tileLayer.wms('https://maps.surreyheath.gov.uk/WMS/wms.exe?', {
        attribution: '&copy;Surrey Heath Borough Council ' + copyrightYear,
        layers: '_2013AirSurvey_WGS84',
        format: 'image/png',
        transparent: false
    });
    
    // Initialise the map with layer control.
    var map = L.map('map', {
        center: [x, y],
        zoom: zoom,
        layers: [openStreetMap]
    });
    
    // Base map layers for layer control.
    var baseMaps = {
        "Open Street Map": openStreetMap,
        "Plotting Sheets": wms,
        "2013 Air Survey": airSurvey
    };
    // Layer control object.
    L.control.layers(baseMaps).addTo(map);
    
    
    var myURL = jQuery('script[src$="leaf-demo.js"]').attr('src').replace('leaf-demo.js', '');
    
    var myIcon = L.icon({
        iconUrl: myURL + 'pin24.png',
        iconRetinaUrl: myURL + 'pin48.png',
        iconSize: [29, 24],
        iconAnchor: [9, 21],
        popupAnchor: [0, -14]
    });
    
    var markerClusters = L.markerClusterGroup();
    
    for (var i = 0; i < markers.length; ++i) {
        var popup = markers[i].address +
                    '<br/> ' + markers[i].preview_url;
    
        var m = L.marker([markers[i].lat, markers[i].lng], { icon: myIcon })
                        .bindPopup(popup);
    
        markerClusters.addLayer(m);
    }
    
    map.addLayer(markerClusters);
    
    
    // Typeahead select event.
    $('.typeahead').bind('typeahead:select', function (ev, suggestion) {
        y = suggestion.lon;
        x = suggestion.lat;
        zoom = 17;
        
        var markerText = 'Address';
        
        map.setView(new L.latLng(x, y), zoom);
        
        var marker = L.marker([x, y], { title: markerText })
            .addTo(map)
            .bindPopup(suggestion.caption)
            .openPopup();
    });
    
    // Typeahead idle event.
    $('.typeahead').bind('typeahead:idle', function (ev, suggestion) {
        $('.typeahead').val('');
    });
})();