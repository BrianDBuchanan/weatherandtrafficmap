function initialize() {
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(32.792866, -79.878256)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var weatherLayer = new google.maps.weather.WeatherLayer({
    temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
  });
  weatherLayer.setMap(map);

  var cloudLayer = new google.maps.weather.CloudLayer();
  cloudLayer.setMap(map);

   var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);


// var geocoder;
// var map;
// function initialize() {
//   geocoder = new google.maps.Geocoder();
//   var latlng = new google.maps.LatLng(32.792866, -79.878256);
//   var mapOptions = {
//     zoom: 12,
//     center: latlng
//   }



//   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
// }

// function codeAddress() {
//   var address = document.getElementById('address').value;


//   geocoder.geocode( { 'address': address}, function(results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//       map.setCenter(results[0].geometry.location);
//       var marker = new google.maps.Marker({
//           map: map,
//           position: results[0].geometry.location
//       });
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }


//   });
// }

google.maps.event.addDomListener(window, 'load', initialize);
