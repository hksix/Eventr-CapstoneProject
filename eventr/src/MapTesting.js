import React, {Component} from 'react';


export default class Map extends Component {
  constructor(props) {
    super(props);
    window.initialize = this.initialize;
    this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAAOcyB-GjFLa4ck2GfeIQksgtunFbxpow&libraries=places&callback=initialize')
  }


  loadJS = (src) => {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
  }

  initialize = () => {
    const googleInterval = setInterval(function(){
      console.log("workssssss")
      if (window.google && window.google.maps){
        console.log("inside stffssese?")
        debugger
        clearInterval(googleInterval);
        window.gmap = new window.google.maps.Map(this.mapElement);
        console.log("hi!")
        console.log(window.gmap)
        debugger
      }
    }, 100)
  }



  render() {
    return (
      <div>
        <h1>Map</h1>
        <div ref={(ele) => { this.mapElement = ele; }} style={{width: 500, height: 500, border: '1ps solid black'}}>
        </div>
      </div>
    )
  }
}



// function initialize() {
//   map = new google.maps.Map(this.refs.map.getDOMNode(), {
//     center: {
//       lat: 48.858608,
//       lng: 2.294471
//     },
//     zoom: 16
//   });
// }