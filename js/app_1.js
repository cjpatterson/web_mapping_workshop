///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'cjpatterson.l8mm6b10'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiY2pwYXR0ZXJzb24iLCJhIjoiMVVzeFRoayJ9.GNnlp65nSMj4DJzkzPdXxQ'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([38, -95], 5);

//Add Data
var dataFileToAdd = 'data/restaurants.geojson';

var featureLayer = L.mapbox.featureLayer();

    featureLayer.loadURL(dataFileToAdd);
    featureLayer.addTo(map);

featureLayer.on('ready', function(){
  this.setStyle({
    "marker-color": "#a90a0a",
    "marker-size": "medium"
  });
  map.fitBounds(featureLayer.getBounds());
});
//Add Data 2
var dataFileToAdd2 = 'homeroute.geojson';

var featureLayer2 = L.mapbox.featureLayer();

    featureLayer2.loadURL(dataFileToAdd2);
    featureLayer2.addTo(map);

featureLayer2.on('ready', function(){
  this.setStyle({
    "color": "#a90a0a"
  });
  );
});
///////////////////
