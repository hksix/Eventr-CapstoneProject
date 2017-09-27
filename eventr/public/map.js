
var map;
var markers = [];
function initialize() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });
  
  
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    
    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    var infos = [];
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      // markers.push(new google.maps.Marker({
      //   event: event,
      //   map: map,
      //   icon: icon,
      //   name: name,
      //   position: place.geometry.location,
      //   address: place.formatted_address,
      // }));

      var marker = new google.maps.Marker({
        map: map,
        icon: icon,
        name: place.name,
        position: place.geometry.location,
        address: place.formatted_address,
      });
      console.log(place)
      var infowindow = new google.maps.InfoWindow();
      google.maps.event.addListener(marker, 'click', (function(marker, infowindow) {
        return function() {
          closeInfos(infos)
          infowindow.setContent('<div><strong>' + marker.name + '</strong><br>' + marker.address + '</div>');
          infowindow.open(map, marker);
          infos[0] = infowindow;
        };
      })(marker, infowindow));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

}

//closes all open infoWindows
function closeInfos(infos) {
  if (infos.length > 0) {
      infos[0].set("marker", null);
      infos[0].close();
      infos.length = 0;
  }
}

// function createMarker(markers) {
//   google.maps.event.addListener(markers, 'click', function() {
//     infowindow.setContent('<div><strong>' + markers.title + '</strong><br>' +
//       markers.icon + '</div>');
//     infowindow.open(map, this);
//   });
// }
