// -*- coding: utf-8 -*-
var MKK = MKK || {};

MKK.initializeMap = (function(){
    var map;
    var marker;
    var mikakuMarker;
    var centerLocation;
    mikakuMarker = new google.maps.LatLng(35.700288, 139.775805);
    centerLocation = new google.maps.LatLng(35.699266,139.774281);
    var options = {
        zoom: 16,
        zoomControl: true,
        center: centerLocation,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map($("div#map_canvas").get(0), options);
    marker = new google.maps.Marker({
        position: mikakuMarker,
        map: map,
        title: "Bar&Junk Mikaku",
    });
})();