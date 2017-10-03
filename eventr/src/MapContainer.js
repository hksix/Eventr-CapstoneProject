import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
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
        <Map 
          google={this.props.google} 
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          zoom={5}
          onClick={this._onMapClicked}
        >
          <Marker onClick={this._onMarkerClick} name={'Current location'}/>
          <InfoWindow 
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow} >
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
              <h1>Place Name</h1>
            </div>
          </InfoWindow>
        </Map>
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


 export default GoogleApiWrapper({
  apiKey: ('AIzaSyAAOcyB-GjFLa4ck2GfeIQksgtunFbxpow')
})(MapContainer)



