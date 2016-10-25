var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
function initMap() {
    
    var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);
 
   
    var mapOptions = {
        center: centerLatLng, 
        zoom: 8               
    };
 
    
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

 
