import React, {Component} from 'react';



function loadJS(src) {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = false;
  ref.parentNode.insertBefore(script, ref);
}

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.lat = ''
    this.lng = ''
    this.initMap = this.initMap.bind(this);
  } 


  componentDidMount() {
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAaEp9QYcNt6cq0NUJOk0UI8hhrfWTUfDY&libraries=places&callback=initMap');
  }

  initMap() {
    const googleInterval = setInterval(function(){
      
      if (window.google && window.google.maps){
        const GMap = window.google.maps.Map;
        var markers = [];
        try {
          // had to use document.getElementById because the asynconous of google maps and refs were not allowing the map to render to the page 
          var map = new GMap(document.getElementById('map'), {
            center: {lat: 33.753746, lng: -84.386330},
            zoom: 13,
          });
          var input = document.getElementById('input')
          var searchBox = new window.google.maps.places.SearchBox(input);
          // map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);
          map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
          });

          searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();
        
            if (places.length === 0) {
              return;
            }
            // Clear out the old markers.
            markers.forEach(function(marker) {
              marker.setMap(null);
            });
            // sets markers to empty array after each search
            markers = [];

            // For each place, get the icon, name and location.
            var bounds = new window.google.maps.LatLngBounds();
            var infos = [];
            places.forEach(function(place) {
              if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
              }
              var icon = {
                url: place.icon,
                size: new window.google.maps.Size(71, 71),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(17, 34),
                scaledSize: new window.google.maps.Size(25, 25)
              };
        
              var marker = new window.google.maps.Marker({
                map: map,
                icon: icon,
                name: place.name,
                position: place.geometry.location,
                address: place.formatted_address,
              });
              console.log(place)

              var infowindow = new window.google.maps.InfoWindow({
                maxWidth: 200,
                overflow: 'wrap'
              });
              

              window.google.maps.event.addListener(marker, 'click', (function(marker, infowindow) {
                return function() {
                  if (infos.length > 0) {
                    infos[0].set("marker", null);
                    infos[0].close();
                    infos.length = 0;
                  }
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
          
          console.log("hi!")
          // console.log(window.map)  
          clearInterval(googleInterval)
        } catch (err) {
          console.log(err);
        }
      }
    }, 1000)
  }

    

  



  render() {
    return (
      <div style={{width: '100%'}}>
        <div 
         ref={ el => this.map = el }
         id="map"
         style={{
           height: 500,
           width: '100%',
         }}
         >Map should be here
        </div>
        <input id="input" style={{height: 30, width: 400, marginTop: 40}}></input>
        <input id="zipcode" style={{height: 30, width: 100, marginTop: 40}}></input>
      </div>
    )
  }

}


