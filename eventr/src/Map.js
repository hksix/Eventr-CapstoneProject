// import React, {Component} from 'react';

// export default class Map extends Component {
//   render() {
//     return (
//       <div ref='map'>
//         Loading map...
//       </div>
//     )
//   }
// }


React.createClass({
  fetchPlaces: function(mapProps, map) {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    // ... 
  },
  render: function() {
    return (
      <Map google={this.props.google}
        onReady={this.fetchPlaces}
        visible={false}>
          <Listing places={this.state.places} />
      </Map>
    )
  }
});

React.createClass({
  mapClicked: function(mapProps, map, clickEvent) {
    // ... 
  },
  render: function() {
    return (
      <Map google={this.props.google}
        onClick={this.mapClicked} />
    )
  }
});

React.createClass({
  centerMoved: function(mapProps, map) {
    // ... 
  },
  render: function() {
    return (
      <Map google={this.props.google}
        onDragend={this.centerMoved} />
    )
  }
});