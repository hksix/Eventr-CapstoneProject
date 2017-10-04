import React, {Component} from 'react';

import Map from './Map.js'

export default class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }
  // did mount means component has already rendered and have access to the dom
  render(){
    return(
      <div >
        <Map />
      </div>

    )
    
  }
  _onInfoWindowClose = (e) => {
    this.setState({
      showingInfoWindow: false
    })
  }
  _onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  
  _onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

}





