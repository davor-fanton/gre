var d = document;

var malp = function() {
	if(!d.getElementsByTagName('span')[0]) return;
    var sps = d.getElementsByTagName('span'), spn,
    	txt, mlt, anc,
    	i = sps.length;
    while (i--) {
        spn	= sps[i];
        if (spn.className.indexOf('malp') == -1 || !spn.childNodes[0]) continue;
        txt = spn.childNodes[0];
        mlt = txt.nodeValue.replace(RegExp('-at-','i'), '@');
        anc	= d.createElement('a');
        anc.setAttribute('href', 'mailto:' + mlt);
        anc.appendChild(d.createTextNode(mlt));
        spn.removeChild(txt);
        spn.appendChild(anc);
    };
};

function loadGoogleMap(lon,lat,z) {
    
    if (!document.getElementById('google-map-wrapper')) return;
    
    var customZoom = z || 10; 
    
    var myLatLng = new google.maps.LatLng(lon,lat);
    
    var googleMapOptions = {
        center: myLatLng,
        zoom: customZoom,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById('google-map-wrapper'), googleMapOptions);
    
    var icon_1 = new google.maps.MarkerImage(
        mapMarkerIcon_1,
        // This marker is 20 pixels wide by 32 pixels tall.
        new google.maps.Size(mapMarkerIconSize[0], mapMarkerIconSize[1]),
        // The origin for this image is 0,0.
        new google.maps.Point(0,0)
        // The anchor for this image is the base of the flagpole at 0,32.
        // new google.maps.Point(0, 32)
    );
    
    var icon_2 = new google.maps.MarkerImage(
        mapMarkerIcon_2,
        // This marker is 20 pixels wide by 32 pixels tall.
        new google.maps.Size(mapMarkerIconSize[0], mapMarkerIconSize[1]),
        // The origin for this image is 0,0.
        new google.maps.Point(0,0)
        // The anchor for this image is the base of the flagpole at 0,32.
        // new google.maps.Point(0, 32)
    );
    
    
    for (i = 0; i < markerLocations.length; i++) {
        
        var location = new google.maps.LatLng(markerLocations[i][0],markerLocations[i][1]);
        
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: i == 0 ? icon_1 : icon_2,
            url: markerLocations[i][2]
        });
        
        marker.setTitle(markerLocations[i][3]);
        
        /*
        google.maps.event.addListener(marker, 'click', function() {
            document.location = this.url;
        });
        */
        
        // attachSecretMessage(marker, i);
        
    }
    
    
    
    /*
    function attachSecretMessage(marker, number) {
        var message = ["This","is","the","secret","message"];
        var infowindow = new google.maps.InfoWindow({ 
            content: message[number],
            size: new google.maps.Size(50,50)
        });
        google.maps.event.addListener(marker, 'click', function() {
            // infowindow.open(map,marker);
            document.location='';
        });
    } 
    */   

}
