///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'cjpatterson.l8mm6b10'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiY2pwYXR0ZXJzb24iLCJhIjoiMVVzeFRoayJ9.GNnlp65nSMj4DJzkzPdXxQ'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 5);

//Add Data
var dataFileToAdd = 'data/restaurants.geojson';
